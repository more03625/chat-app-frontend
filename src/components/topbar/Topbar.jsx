import "./topbar.css";
import { Link } from "react-router-dom";
import { getUserInfo, logout } from "../../helpers/comman_helper";
import toast, { Toaster } from 'react-hot-toast';

export default function Topbar() {
    return (
        <div className="topbarContainer">
            <Toaster />
            <div className="topbarLeft">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Chat Now</span>
                </Link>
            </div>

            <div className="topbarCenter">

            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink"></span>
                    <span className="topbarLink"></span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <span className=""></span>
                    </div>
                    <div className="topbarIconItem">
                        <span className=""></span>
                    </div>
                    <div className="topbarIconItem">
                        <span className=""></span>
                    </div>
                </div>
                <Link to={`/profile/rahulmore`}>
                    <img
                        src="https://lh3.googleusercontent.com/ogw/ADea4I708VJFYx3XKTF8u0dK-w-WsiENrtFo3h5q5flbpbM=s32-c-mo"
                        alt="Rahul More"
                        className="topbarImg"
                    />
                </Link>
                <span className="topbarIconItem">{getUserInfo().data.name}</span>
                <span className="topbarIconItem" onClick={logout}>Logout</span>
            </div>
        </div >
    );
}