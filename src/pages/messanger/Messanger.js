import React, { useState, useEffect, useRef } from 'react'
import Topbar from '../../components/topbar/Topbar';
import './messanger.css';
import Conversations from '../../components/conversations/Conversations';
import Messages from '../../components/messages/Messages';
import ChatOnline from '../../components/chatonline/Chatonline';
import { Endpoints, getUserInfo, Host, SocketURL } from '../../helpers/comman_helper';
import axios from 'axios';
import { io } from 'socket.io-client'
export default function Messanger() {


    // var userData = {
    //     "title": "Logged in successfully",
    //     "error": false,
    //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaHVsQGdtYWlsLmNvbSIsInVzZXJfaWQiOiI2MTU3ZDQ0YTQ0ZWE3ZTNiYThhMGExMTIiLCJyb2xlIjowLCJleHAiOjE4NDkxNDcyMzEsImlhdCI6MTYzMzE0NzIzMX0.QWl6JaxbhrSW_2eQNg4HXvS6J5AUbcBvQRxuexjgVyI",
    //     "data": {
    //         "role": 0,
    //         "history": [],
    //         "_id": "6157d44a44ea7e3ba8a0a112",
    //         "name": "rahul",
    //         "email": "rahul@gmail.com",
    //         "username": "rahulmore",
    //         "status": "active",
    //         "createdAt": "2021-10-02T03:38:50.655Z",
    //         "updatedAt": "2021-10-02T03:38:50.655Z",
    //         "__v": 0
    //     }
    // }

    // var userData = {

    //     "title": "Logged in successfully",
    //     "error": false,
    //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlvZ2VzaEBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiNjE1N2Q0Njk0NGVhN2UzYmE4YTBhMTE2Iiwicm9sZSI6MCwiZXhwIjoxODQ5MTc3OTUwLCJpYXQiOjE2MzMxNzc5NTB9.W3eB1wIYBP5n4C06fHFG7IrN7u0FnwxOe-lPzbnuhn8",
    //     "data": {
    //         "role": 0,
    //         "history": [],
    //         "_id": "6157d46944ea7e3ba8a0a116",
    //         "name": "yogesh",
    //         "email": "yogesh@gmail.com",
    //         "username": "yogeshmore",
    //         "status": "active",
    //         "createdAt": "2021-10-02T03:39:21.644Z",
    //         "updatedAt": "2021-10-02T03:39:21.644Z",
    //         "__v": 0
    //     }
    // }
    // localStorage.setItem('chat-app-token', JSON.stringify(userData)); // convert JSON to string
    const [loader, setLoader] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessages, setNewMessages] = useState('');
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [error, setError] = useState([]);
    const scrollRef = useRef();
    const socket = useRef();


    const getConversations = async () => {
        setLoader(true);
        try {
            var url = Host + Endpoints.conversations + "/" + getUserInfo().data._id
            const result = await axios.get(url);
            setConversations(result.data.data)
        } catch (err) {
            console.log("err ===> " + err)
        }
        setLoader(false);
    }
    const getMessages = async () => {
        setLoader(true);
        try {
            var url = Host + Endpoints.messages + "/" + currentChat?._id
            const result = await axios.get(url);
            if (result.data.error === true) {
                console.log(result.data.title)
            } else {
                setMessages(result.data.data);
            }
        } catch (err) {
            console.log(err);
        }
        setLoader(false);
    }
    const isValid = () => {
        if (newMessages === null || newMessages === '') {
            setError({ message: 'Please enter a message' });
            return false;
        } else {
            return true;
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid()) {
            setError({});
            var message = {
                sender: getUserInfo().data._id,
                text: newMessages,
                conversationId: currentChat._id
            }
            const recevierId = currentChat.members.find(member => member !== getUserInfo().data._id);

            socket.current.emit("sendMessage", {
                senderId: getUserInfo().data._id,
                recevierId,
                text: newMessages
            });

            try {
                var url = Host + Endpoints.messages
                const result = await axios.post(url, message);
                setMessages([...messages, result.data.data]);
                setNewMessages('');
            } catch (err) {
                console.log('There is an error!');
            }
        }

    }
    useEffect(() => {
        socket.current?.emit("addUser", getUserInfo().data);
        socket.current?.on("getUsers", users => {
            console.log("users ===> ", users);
        });
    }, [getUserInfo().data]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);
    useEffect(() => {
        getMessages();
    }, [currentChat]);
    useEffect(() => {
        socket.current = io(SocketURL);
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: data.createdAt
            });
        })
    }, []);
    useEffect(() => {
        arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) && setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat])
    useEffect(() => {
        getConversations();
    }, []);
    return (
        <>
            <Topbar />
            <div className="messanger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for freinds..." className="chatMenuInput" />
                        {
                            conversations.map((c) => (
                                <div onClick={() => setCurrentChat(c)}>
                                    <Conversations conversations={c} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        {
                            currentChat ? (
                                <>
                                    <div className="chatBoxTop">
                                        {
                                            messages.length > 0 ? (
                                                messages.map(m => (
                                                    <div ref={scrollRef}>
                                                        <Messages message={m} own={m.sender === getUserInfo().data._id} />
                                                    </div>
                                                ))
                                            ) : (
                                                <span className="initConversation">Start Chatting!</span>
                                            )
                                        }
                                    </div>
                                    <div className="chatBoxBottom">
                                        <input type="text" name="chat" placeholder="Write what's on your mind?" className="chatMessageInput" defaultValue={newMessages} onChange={(e) => setNewMessages(e.target.value)} />
                                        <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
                                    </div>
                                    <span className="text-danger">{error.message}</span>
                                </>
                            ) : (
                                <span className="noConversationText">Choose conversation to start messaging!</span>
                            )}
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                        <ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}
