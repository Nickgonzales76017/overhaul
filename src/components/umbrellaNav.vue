<template>
<div class="py-8">
  <div>
    <div class="columns-2">
      <div class="w-2/3">
        <div class="grid grid-cols-3">
          <div v-for="item in tabs" :key="item.id" >
            <button class="peer hover:text-[#437842] drop-shadow-lg">{{item.attributes.Name}}</button>
            <!-- the menu here -->
            <div class="hidden peer-hover:flex hover:flex flex-col drop-shadow-lg hover:underline">
              <a class="hover:text-[#437842]" v-for="items in item.attributes.nav_items.data" :key="items.id" :href="items.attributes.route?items.attributes.route.data?items.attributes.route.data.attributes.path:null:null">{{items.attributes.Nav_Item_Name}}</a>
            </div>
          </div>
        </div>  
      </div>
      <button class="hover:bg-white text-black font-bold py-2 px-2 rounded-full shadow bg-[#ACD1AF] w-1/3 float-right mr-4" @click="$router.push('login')" >
        Login/Sign Up
      </button>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: "umbrellaNav",
  data() {
    return {
      loading: false,
      post: [],
      image_list: null,
      error: null,
      tabs: []
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
      var url = process.env.VUE_APP_STRAPI_ENDPOINT
      //console.log(url)

      axios
      .get(url+'/api/nav-groups?populate=*')
      .then((response) =>  {
        console.log(response.data.data.map(y => y.id))
        console.log(this.tabs)
        this.post = response.data.data
        const index = this.tabs.findIndex(object => response.data.data.map(y => object.id === y.id));

        if (index === -1) {
          this.tabs.push(...response.data.data);
        }
        //this.tabs.push(...response.data.data)
        //console.log(response)
        this.loading = false
      })
      axios
      .get(url+'/api/nav-items?populate=*')
      .then((response) =>  {
        //console.log('===============')
        //console.log(response.data.data)

        this.post?this.post.map(x => {
          let obj = response.data.data.findIndex(o => o.id === x.attributes.nav_items.data.map(y => y.id)[0])
          let obj2 = x.attributes.nav_items.data.findIndex(o => o.id === response.data.data[obj].id)
          
          x.attributes.nav_items.data[obj2].attributes.route = response.data.data[obj].attributes.route
          //console.log(response.data.data[obj].attributes)
          //console.log(x.attributes.nav_items.data[obj2].attributes)
          return true;
        }):null
        
        console.log('===============')
        })
     
    },
    log(msg){
      console.log(msg)
    }
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-link {

  font-size: large;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
#container-lottie{
  padding: 1vw 0 0 0;
  margin-left: 5vw;
  position: relative;
  width: 5vw;
  float: left;
  
}
#container-nav-items{
  position: relative;

  float: right;
}
</style>
