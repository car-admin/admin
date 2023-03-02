import { createRouter, createWebHashHistory } from "vue-router";

export const commonRoutes = [
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/404",
    name: "404",
    meta: { title: "404" },
    component: () => import("../components/404.vue"),
  },
  {
    path: "/",
    component: () => import("../components/Index.vue"),
    redirect: "/home",
    children: [
      {
        path: "/home",
        redirect: "/home/page1",
        title: "家",
        children: [
          {
            path: "/home/page1",
            component: () => import("../views/Home/Page1.vue"),
            title: "家1",
            name: "1-1",
          },
          {
            path: "/home/page2",
            component: () => import("../views/Home/Page2.vue"),
            title: "家2",
            name: "1-2",
          },
        ],
        name: "1",
      },
      {
        path: "/message",
        redirect: "/message/page1",
        children: [
          {
            path: "/message/page1",
            component: () => import("../views/Msg.vue"),
            title: "家1",
            name: "2-1",
          },
        ],
        name: "2",
        title: "消息",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: commonRoutes,
});

export default router;
