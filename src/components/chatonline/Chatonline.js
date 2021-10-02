import './chatonline.css'
export default function ChatOnline() {
    return (
        <>
            <div className="chatOnline">
                <div className="chatOnlineFriend">
                    <div className="chatOnlineImageContainer">
                        <div className="chatOnlineImageContainer">
                            <img src="https://avatars.githubusercontent.com/u/25549118?v=4" alt="Rahul More" className="chatOnlineImage" />

                            <div className="chatOnlineBadge"></div>
                        </div>
                    </div>
                    <span className="chatOnlineName">Rahul More</span>
                </div>
            </div>
        </>
    )
}
