import {
    createRouter,
    createWebHistory
} from "vue-router";

const routes = [
  {
    path: "/scriptecho/HelloWorld",
    name: "HelloWorld",
    component: () =>
        import ("/@/views/scriptecho/HelloWorld.vue"),
  },
];

export default createRouter({
    history: createWebHistory("/"),
    routes,
});