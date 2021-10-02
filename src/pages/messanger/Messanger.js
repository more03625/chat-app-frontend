import React, { useState, useEffect } from 'react'
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
    //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5ld3NkYi1hZG1pbkBnbWFpbC5jb20iLCJ1c2VyX2lkIjoiNjE0YzE1ZGUwMzEwOTYzMjgwMGQ5ZjIzIiwicm9sZSI6MCwiZXhwIjoxODQ5MTA5OTMzLCJpYXQiOjE2MzMxMDk5MzN9.Qylcl5qmkoo7TqxLkcYAqQnQPivSvYBvAuXFQbgR6UA",
    //     "data": {
    //         "role": 0,
    //         "history": [],
    //         "_id": "614c15de03109632800d9f23",
    //         "name": "rahul",
    //         "email": "newsdb-admin@gmail.com",
    //         "username": "newsdb-admin",
    //         "status": "active",
    //         "createdAt": "2021-09-23T05:51:26.782Z",
    //         "updatedAt": "2021-09-23T05:51:26.782Z",
    //         "__v": 0
    //     },
    // }
    // localStorage.setItem('chat-app-token', JSON.stringify(userData)); // convert JSON to string
    const [conversations, setConversations] = useState([]);
    const getConversations = async () => {
        try {
            var url = Host + Endpoints.conversations + "/" + getUserInfo().data._id
            const result = await axios.get(url);
            setConversations(result.data.data)
        } catch (err) {
            console.log("err ===> " + err)
        }

    }
    useEffect(() => {
        getConversations();
    }, [])
    return (
        <>
            <Topbar />
            <div className="messanger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for freinds..." className="chatMenuInput" />
                        {
                            conversations.map((c) => (
                                <Conversations conversations={c} />
                            ))
                        }
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Messages />
                            <Messages />
                            <Messages own={true} />
                            <Messages />
                            <Messages />
                            <Messages />
                            <Messages />
                            <Messages own={true} />
                            <Messages />
                            <Messages own={true} />
                            <Messages />
                        </div>
                        <div className="chatBoxBottom">
                            <textarea placeholder="Write what's on your mind?" className="chatMessageInput"></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
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
