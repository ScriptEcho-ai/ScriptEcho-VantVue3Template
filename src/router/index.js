import {
    createRouter,
    createWebHistory
} from "vue-router";
import { scriptechoRoutes } from './scriptecho'

const routes = [
  {
    path: "/scriptecho/HelloWorld",
    name: "HelloWorld",
    component: () =>
        import ("/@/views/scriptecho/HelloWorld.vue"),
  },
  ...scriptechoRoutes
];

export default createRouter({
    history: createWebHistory("/"),
    routes,
});