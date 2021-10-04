import React from 'react';
import './messages.css'
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
