import toast from 'react-hot-toast';

export const Host = window.location.host === 'localhost:3000' ? 'http://localhost:5256' : 'https://chat-now-backend.herokuapp.com'
export const Endpoints = {
    conversations: "/api/conversations",
    messages: "/api/messages",
    signup: "/api/auth/register",
    login: "/api/auth/login",
    getUser: "/api/auth/getUser"
}
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN_NAME))
}
export const SocketURL = window.location.host === "localhost:3000" ? "ws://localhost:8900" : "wss://chat-now-socket.herokuapp.com"

export const logout = () => {
    toast.success("Logged out successfully!");
    localStorage.removeItem(process.env.REACT_APP_AUTH_TOKEN_NAME);
    setTimeout(function () {
        window.location.href = '/login';
    }, 2000);
}