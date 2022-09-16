<template>
  <div class="post bg-baby_blue">
  <umbrellaNav />
  <router-view />
  </div>
</template>

<script>

import umbrellaNav from './components/umbrellaNav.vue'
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
// import DbClient from "@/views/DbClient.vue";
// import OnlineMembers from "@/views/OnlineMembers.vue";
// import MemberPage from "@/views/Member.vue";
// import FormTest from "@/views/FormTest.vue";
// import axios from 'axios'
// const views = {
//   'Home': Home,
//   About: About,
//   DbClient: DbClient,
//   OnlineMembers: OnlineMembers,
//   MemberPage: MemberPage,
//   FormTest: FormTest,
// };
export default {
  name: 'App',
  components: {

    umbrellaNav,

},


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container-lottie{
  position: fixed;
  width: 100px;
  height: 100px;
}
</style>
