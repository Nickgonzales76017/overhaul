<template>
  <h1>about Page</h1>
<HelloWorld msg="Welcome to Your Vue.js App"/>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'
import SocketioService from '../services/socketio.service.js'
import RXR from '../RXRX/index.js'
export default {
  name: 'AboutPage',
  components: {
    HelloWorld,
 },
   created() {
    SocketioService.setupSocketConnection();
    SocketioService.updateGroupdb('data');
    var dbObject = RXR.setupDb().then(function(){
      console.log(dbObject)
      var b = RXR.updatedb();
      console.log(b)
    })
    
    
  },
  beforeUnmount() {
    SocketioService.disconnect();
  }
  // ...
}
</script>