import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import LottieAnimation from "lottie-web-vue"
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue3 from 'bootstrap-vue-3'
import { plugin, defaultConfig } from '@formkit/vue'
 import { generateClasses } from '@formkit/themes'
import router from './router'
import 'tw-elements';
import './styles/app.css'; // Here
import './assets/tailwind.css'
import '@/assets/tailwind.css';
 import theme from '../theme'
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DbClient from "@/views/DbClient.vue";
import OnlineMembers from "@/views/OnlineMembers.vue";
import MemberPage from "@/views/Member.vue";
import FormTest from "@/views/FormTest.vue";
import axios from 'axios'
const views = {
  'Home': Home,
  'About': About,
  'DbClient': DbClient,
  'OnlineMembers': OnlineMembers,
  'MemberPage': MemberPage,
  'FormTest': FormTest,
};
 var url = process.env.VUE_APP_STRAPI_ENDPOINT+'/api/routes?populate=*'
 function getTemplate (name) {
   return views[name];
 }
 //var a = [];
 axios.get(url).then(response => {
 // response contains your data as json, you have to fetch them to get vuejs route-like object
 response.data.data.map(o => {
     // here you have to transform your data in vuejs route item for example
     router.addRoute({
         'path': o.attributes.path,
         'name': o.attributes.name,
         'component': getTemplate ('Home')
     })
 })
 
 //router.options.routes.push(...a)
 router.replace(router.currentRoute.value.fullPath)
 //console.log(router)
 //console.log(...a)
})


createApp(App).use(LottieAnimation).use(ElementPlus).use(BootstrapVue3).use(router).use(plugin, defaultConfig({
    config: {
      classes: generateClasses(theme),
     },
 })).mount('#app')
