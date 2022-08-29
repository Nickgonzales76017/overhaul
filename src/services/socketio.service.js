import { io } from 'socket.io-client';

class SocketioService {
  socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
  user_list;
  constructor() {}

  setupSocketConnection(username) {
    //this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    console.log(username)
    if(this.socket){
      this.socket.emit('clientLog', 'flightCheck');
      this.socket.emit('send-nickname', username);
      this.socket.on('serverLog', (data) => {
        
        console.log(data);
      });
    }
  }
  updateGroupdb(data) {
    //this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    this.socket.emit('clientLog', 'initUpdatingGroupDb');
    this.socket.emit('updateGroupdb', data);
    this.socket.on('updateGroupdb', (recievedDbUpdate) => {
        console.log(recievedDbUpdate);
    });
  }

  listAllOnline() {
    this.user_list = []
    //this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    this.socket.emit('listAllOnline', 'id');
    this.socket.on('send-nickname', (userList) => {
      //console.log(userList)
      userList.map(x => this.user_list.push({userID: x.userID, username: x.username}));
      //this.user_list[userList.userID] = userList.username;
      
    });
  console.log(this.user_list);
  return this.user_list;
  }

  
  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }
}

export default new SocketioService();