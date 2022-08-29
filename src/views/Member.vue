<script>
import axios from 'axios'
import FileUpload from '../components/FileUpload.vue'
import GalleryProfile from '../components/GalleryProfile.vue'
//import SocketioService from '../services/socketio.service.js'
export default {
    name: 'MemberPage',
    components: {
      FileUpload,
      GalleryProfile
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
      var url = process.env.VUE_APP_MICROSERVICES_ENDPOINT+'/users/'+this.$route.params.id
      //console.log(url)

      axios
      .get(url)
      .then((response) =>  {
        this.post = response.data[0];
        this.loading = false
      })
    }

  },
}
</script>
<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="post" class="content">
      <h2>{{ post.fname }}</h2>
      <p>{{ post.body }}</p>
      <FileUpload />
    </div>
     <GalleryProfile />
  </div>
</template>