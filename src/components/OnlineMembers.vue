<script>

import SocketioService from '../services/socketio.service.js'
export default {
    name: 'ProfilePage',
    components: {

    },
  data() {
    return {
      loading: false,
      count: SocketioService.listAllOnline(),
      image_list: null,
      error: null,
    }
  },
 created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.test()
        
        
        //this.fetchCloudImages()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    test(){
      this.count.push(SocketioService.listAllOnline())
    },

    log(msg){
      console.log(msg)
    }
  },
}
</script>
<template>
  <div >
{{log(count)}}
<div class="text-center" v-for="(user,index) in count"  :key="index">

  <img
    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
    class="rounded-full w-32 mb-4 mx-auto"
    alt="Avatar"
  />
  <h5 class="text-xl font-medium leading-tight mb-2">{{ user.username}}</h5>
  <p class="text-gray-500">Web designer</p>
</div>
</div>
</template>