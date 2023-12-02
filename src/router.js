import Vue from "vue";
import VueRouter from "vue-router";
import Index from "./views/Index.vue";
import IndexDark from "./views/IndexDark.vue";
import Intro from "./views/Intro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/index-dark",
    name: "IndexDark",
    component: IndexDark,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
