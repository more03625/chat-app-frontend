import './chatonline.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Endpoints, getUserInfo, Host } from '../../helpers/comman_helper';
export default function ChatOnline({ currentChat, setCurrentChat }) {
    const [newUsers, setNewUsers] = useState(null);

    const getUser = async () => {
        var url = Host + Endpoints.getUser
        const result = await axios.post(url);
        setNewUsers(result.data.data)
    }
    useEffect(() => {
        getUser();
    }, [getUserInfo().data._id])
    return (
        <>
            {
                newUsers?.map((user, index) => (
                    <div className="chatOnline" onClick={() => setCurrentChat(user)}>
                        <div className="chatOnlineFriend">
                            <div className="chatOnlineImageContainer">
                                <div className="chatOnlineImageContainer">
                                    <img src="https://avatars.githubusercontent.com/u/25549118?v=4" alt={user.name} className="chatOnlineImage" />

                                    <div className="chatOnlineBadge"></div>
                                </div>
                            </div>
                            <span className="chatOnlineName">{user.name}</span>
                        </div>
                    </div>
                ))
            }

        </>
    )
}
