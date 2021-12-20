import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import LoginPage from "../views/LoginPage.vue";
import News from "../views/News.vue";
import Registred from "../components/registred.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/registred",
    name: "Registred",
    component: Registred,
  },
  {
    path: "/News",
    name: "News",
    component: News,
    // meta: {
    //   LOG: 1,
    // },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.LOG)) {
    if (store.getters.isLoggedIn) {
      // getters en VUEX
      next();
    } else {
      next({ name: "LoginPage" });
    }
  } else {
    next();
  }
});

export default router;
