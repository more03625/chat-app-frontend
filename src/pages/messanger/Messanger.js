import React, { useState, useEffect, useRef } from 'react'
import Topbar from '../../components/topbar/Topbar';
import './messanger.css';
import Conversations from '../../components/conversations/Conversations';
import Messages from '../../components/messages/Messages';
import ChatOnline from '../../components/chatonline/Chatonline';
import { Endpoints, getUserInfo, Host } from '../../helpers/comman_helper';
import axios from 'axios';
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
    // localStorage.setItem('chat-app-token', JSON.stringify(userData)); // convert JSON to string
    const [loader, setLoader] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessages, setNewMessages] = useState('');
    const [error, setError] = useState([]);
    const scrollRef = useRef();

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
            try {
                var url = Host + Endpoints.messages
                const result = await axios.post(url, message);
                setMessages([...messages, result.data.data]);
                setNewMessages('');
                console.log("addMessage ===> ", result)
            } catch (err) {
                console.log('There is an error!');
            }
        }

    }
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages]);
    useEffect(() => {
        getMessages();
    }, [currentChat]);
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
