import { io } from 'socket.io-client';

class SocketioService {
  socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
  user_list;
  constructor() {
    console.log('test')
  }

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
  // Handle message receive event
subscribeToMessages(cb) {
  if (!this.socket) return(true);
  this.socket.on('send-nickname', userList => {
    console.log('userlist event received!');
    return cb(null, userList);
  });
}
  
sendMessage( cb) {
  if (this.socket) this.socket.emit('listAllOnline', 'id', cb);
}

  listAllOnline() {
    this.user_list = []
    //this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    this.socket.emit('listAllOnline', 'id');
    this.socket.on('send-nickname', (userList) => {
      //console.log(userList)
      
      this.user_list.push(userList);
      console.log(userList)
      console.log(this.user_list)
      
    });
    return this.user_list;

  }

  
  disconnect() {
    if (this.socket) {
        this.socket.disconnect();
    }
  }
}

export default new SocketioService();