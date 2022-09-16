import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DbClient from "@/views/DbClient.vue";
import ProfilePage from "@/views/Profile.vue";
import OnlineMembers from "@/views/OnlineMembers.vue";
import MemberPage from "@/views/Member.vue";
import FormTest from "@/views/FormTest.vue";
//import axios from 'axios'
// const views = {
//   'Home': Home,
//   About: About,
//   DbClient: DbClient,
//   OnlineMembers: OnlineMembers,
//   MemberPage: MemberPage,
//   FormTest: FormTest,
// };
//var url = process.env.VUE_APP_STRAPI_ENDPOINT+'/api/routes?populate=*'


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/db_client",
    name: "DbClient",
    component: DbClient,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/formtest",
    name: "FormTest",
    component: FormTest,
  },
  {
    path: "/login",
    name: "Login",
    component: FormTest,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/member/:id",
    name: "Member",
    component: MemberPage,
  },
  {
    path: "/online/members",
    name: "OnlineMembers",
    component: OnlineMembers,
  },
];

      //console.log(url)



const router = createRouter({
  history: createWebHistory(),
  routes,
});
console.log(router)


console.log('race')
export default router;