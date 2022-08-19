import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DbClient from "@/views/DbClient.vue";
import FormTest from "@/views/FormTest.vue";
const routes = [
  {
    path: "/home",
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;