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
createApp(App).use(LottieAnimation).use(ElementPlus).use(BootstrapVue3).use(router).use(plugin, defaultConfig({
    config: {
      classes: generateClasses(theme),
     },
 })).mount('#app')
