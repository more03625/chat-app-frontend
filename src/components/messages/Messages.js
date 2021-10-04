import React, { useState, useEffect } from 'react';
import { Host, Endpoints } from '../../helpers/comman_helper';
import './messages.css'
import { getUserInfo } from '../../helpers/comman_helper';
import axios from 'axios';
export default function Messages({ message, own }) {

    return (
        <>
            <div className={own ? 'messages own' : 'messages'}>
                <div className="messageTop">
                    <p className="messageText">{message.text}</p>
                </div>
                <div className="messageBottom">
                    {new Date(message.createdAt).toDateString()}
                </div>
            </div>
        </>
    )
}
