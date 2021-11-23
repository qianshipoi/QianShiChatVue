import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

import Main from "../views/Main.vue";
import Login from "../views/login/index.vue";
import Home from "../views/home/index.vue";

const routes = [
  {
    path: "/",
    component: Main,
    redirect: "/",
    children: [
      { path: "/login", component: Login },
      { path: "/", component: Home, meta: { auth: true } },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.state.isLogin) next("/login");
  else next();
});

export default router;
