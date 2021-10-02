export const Host = window.location.host === 'localhost:3000' ? 'http://localhost:5256' : ''
export const Endpoints = {
    conversations: "/api/conversations",
    messages: "/api/messages"
}
export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('chat-app-token'))
}
export const SocketURL = "ws://localhost:8900";