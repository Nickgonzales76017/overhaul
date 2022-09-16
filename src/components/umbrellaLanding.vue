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
<div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
  <div class="col-span-2">01</div>
  <div class="col-span-2">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
</div>

</template>