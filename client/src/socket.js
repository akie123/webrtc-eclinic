import io from 'socket.io-client';
const sockets = io('https://eclinic-connect.onrender.com', { autoConnect: true, forceNew: true });

export default sockets;
