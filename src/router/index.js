import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiredAuth: true,
    },
  },
  {
    path: "/signin",
    name: "Signin",
    component: () => import("../views/signin.vue"),
  },
  {
    path: "/emit",
    name: "Emit",
    component: () => import("../views/Emit.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    if (!store.getters.isAuthenticated) {
      next({
        path: "/signin",
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
export default router;
