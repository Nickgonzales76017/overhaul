import { io } from 'socket.io-client';

class SocketioService {
  socket;
  constructor() {}

  setupSocketConnection() {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    this.socket.emit('clientLog', 'flightCheck');
    this.socket.on('serverLog', (data) => {
        console.log(data);
    });
  }
  updateGroupdb(data) {
    this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    this.socket.emit('clientLog', 'initUpdatingGroupDb');
    this.socket.emit('updateGroupdb', data);
    this.socket.on('updateGroupdb', (recievedDbUpdate) => {
        console.log(recievedDbUpdate);
    });
  }

  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }
}

export default new SocketioService();