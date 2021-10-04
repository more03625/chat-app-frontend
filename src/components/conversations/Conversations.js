import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Endpoints, getUserInfo, Host } from '../../helpers/comman_helper';
import './conversations.css'

export default function Conversations({ conversations }) {

    const [user, setUser] = useState(null);
    var friendID = conversations.members.find((m) => m !== getUserInfo().data._id);
    const getUser = async () => {
        var url = Host + Endpoints.getUser
        var data = {
            userId: friendID
        }
        const result = await axios.post(url, data);
        setUser(result.data.data)
    }
    useEffect(() => {
        getUser();
    }, [getUserInfo().data._id, conversations])


    return (
        <>
            <div className="conversation">
                <img src={user?.profile} alt={user?.name} className="conversationImage" />
                <span className="conversationName">{user?.name}</span>
            </div>
        </>
    )
}
