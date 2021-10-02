import React, { useState } from 'react'
import './conversations.css'
export default function Conversations({ conversations }) {
    const [user, setUser] = useState(null);

    // const getUser = async () => {
    //     var url = 
    // }
    // useEffect(() => {
    //     getUser

    // }, [])
    return (
        <>
            <div className="conversation">
                <img src="https://avatars.githubusercontent.com/u/25549118?v=4" alt="Rahul More" className="conversationImage" />
                <span className="conversationName">Rahul More</span>
            </div>
        </>
    )
}
