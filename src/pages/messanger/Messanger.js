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

    const [loader, setLoader] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessages, setNewMessages] = useState('');
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [error, setError] = useState([]);
    const scrollRef = useRef();
    const socket = useRef();

    useEffect(() => {
        socket.current = io(SocketURL);
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now()
            });
        })
    }, []);
    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);


    const getConversations = async () => { // get all conversation of current User LEFT SIDE
        setLoader(true);
        try {
            var url = Host + Endpoints.conversations + "/" + getUserInfo().data._id
            const result = await axios.get(url);
            setConversations(result.data.data);
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
            setMessages(result.data.data);
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

            const receiverId = currentChat.members !== undefined ? currentChat.members.find(member => member !== getUserInfo().data._id) : currentChat._id

            socket.current.emit("sendMessage", {
                senderId: getUserInfo().data._id,
                receiverId,
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
        socket.current.emit("addUser", getUserInfo().data._id);
        socket.current.on("getUsers", (users) => {
            // console.log("users ===> ", users);
        });
    }, [getUserInfo().data]);

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);
    useEffect(() => {
        currentChat?._id && getMessages()
    }, [currentChat]);

    useEffect(() => {
        getConversations();
    }, [getUserInfo().data._id]);
    return (
        <>
            <Topbar />
            <div className="messanger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for freinds..." className="chatMenuInput" />
                        {/*Conversation of current user!*/}
                        {
                            conversations.map((c, i) => (
                                <div key={i} onClick={() => setCurrentChat(c)}>
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
                                            messages?.length > 0 ? (
                                                messages.map((m, i) => (
                                                    <div key={i} ref={scrollRef}>
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
                    {/*
                        <div className="chatOnlineWrapper">
                        <ChatOnline setCurrentChat={setCurrentChat} currentChat={currentChat} />
                    </div>
                    */}
                </div>
            </div>
        </>
    )
}
