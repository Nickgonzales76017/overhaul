<script>
import axios from 'axios'
export default {
    name: 'ProfilePage',
    components: {

    },
  data() {
    return {
      loading: false,
      post: null,
      image_list: null,
      error: null,
    }
  },
 created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
        
        //this.fetchCloudImages()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      var url = process.env.VUE_APP_SOCKET_ENDPOINT+'/api/listAllUsers'
      //console.log(url)

      axios
      .get(url)
      .then((response) =>  {
        this.post = response.data
        //console.log(response)
        this.loading = false
      })
    },
    log(msg){
      console.log(msg)
    }
  },
}
</script>
<template>
  <div >
<div class="text-center" v-for="user in post"  v-bind:key="user.id">
  <img
    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
    class="rounded-full w-32 mb-4 mx-auto"
    alt="Avatar"
  />
  <h5 class="text-xl font-medium leading-tight mb-2">{{ user.id + ': ' + user.fname}}</h5>
  <p class="text-gray-500">{{user.email}}</p>
  <p class="text-gray-500">{{user.userID}}</p>
</div>
</div>
</template>