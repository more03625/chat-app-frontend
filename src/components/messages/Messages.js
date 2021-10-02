import './messages.css'
export default function Messages({ own }) {
    return (
        <>
            <div className={own ? 'messages own' : 'messages'}>
                <div className="messageTop">
                    <img className="messageImage" src="https://avatars.githubusercontent.com/u/25549118?v=4" alt="Message Images" />
                    <p className="messageText">Hello, Rahul more you have a new Job offer from @Coinbase!</p>
                </div>
                <div className="messageBottom">
                    1 hour ago.
                </div>
            </div>
        </>
    )
}
