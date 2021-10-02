import './messages.css'
export default function Messages({ message, own }) {

    return (
        <>
            <div className={own ? 'messages own' : 'messages'}>
                <div className="messageTop">
                    <img className="messageImage" src="https://avatars.githubusercontent.com/u/25549118?v=4" alt="Message Images" />
                    <p className="messageText">{message.text}</p>
                </div>
                <div className="messageBottom">
                    {new Date(message.createdAt).toDateString()}
                </div>
            </div>
        </>
    )
}
