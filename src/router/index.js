import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home"
  },
  {
    path: "/red",
    name: "Red",
    component: () => import("../views/Red")
  },
  {
    path: "/yellow",
    name: "Yellow",
    component: () => import("../views/Yellow")
  },
  {
    path: "/green",
    name: "Green",
    component: () => import("../views/Green")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
