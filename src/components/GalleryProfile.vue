58 lines (57 sloc)  1.28 KB

<template>

<section class="grid grid-flow-row-dense grid-cols-3 grid-rows-3" v-if="image_list">
<div class="flex  mx-8 mb-3" v-for="image_name in image_list" :key="image_name.key">
  <div class="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!">
      <img class="rounded-t-lg" v-bind:src="image_name[0]" alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-900 text-xl font-medium mb-2">{{ image_name[1]}}</h5>
      <p class="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" @click="deleteImage(image_name[1])" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
    </div>
  </div>
</div>
</section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'GalleryProfile',
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
        //this.fetchData()
        this.fetchCloudImages()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
     deleteImage(key) {
      this.error = this.image_list = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      var url = process.env.VUE_APP_MICROSERVICES_ENDPOINT+'/api/images/delete/'+key //+this.$route.params.id
      console.log(url)
       axios
      .get(url)
      .then((response) =>  {
  //.Contents.map(function(item) { return item["Key"]; });
 console.log(response.data)

})
    },
  fetchCloudImages() {
      this.error = this.image_list = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
      var url = process.env.VUE_APP_MICROSERVICES_ENDPOINT+'/api/images/all/' //+this.$route.params.id
      console.log(url)
       axios
      .get(url)
      .then((response) =>  {
 this.image_list = response.data //.Contents.map(function(item) { return item["Key"]; });
 console.log(this.image_list)
 this.loading = false
})
    }
  },
}
</script>