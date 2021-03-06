import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/components/the/TheProfile"),
      alias: "/profile"
    },
    {
      path: "/auth",
      component: () => import("@/components/the/TheAuth")
    }
  ]
});

export default router;
