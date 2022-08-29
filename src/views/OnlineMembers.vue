<script>
//import axios from 'axios'
import OnlineMembers from '../components/OnlineMembers.vue'
export default {
    name: 'ProfilePage',
    components: {
      OnlineMembers,

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

      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {


  },
}
</script>
<template>
     <OnlineMembers />

</template>