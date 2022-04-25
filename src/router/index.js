import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/Overall",
      name: "ภาพรวมระบบ",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/PatientList",
      name: "รายชื่อผู้ป่วย",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientListView.vue"),
    },
    {
      path: "/PatientListViewAdd",
      name: "เพิ่มรายชื่อผู้ป่วย",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientListViewAdd.vue"),
    },

    {
      path: "/:main/:name",
      name: "รายละเอียดผู้ป่วย",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientDetailsView.vue"),
    },

    {
      path: "/:main/:name/:sub",
      name: "ประวัติผู้ป่วย",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientInfoView.vue"),
    },
    {
      path: "/:main/:name/:sub",
      name: "โรคปัจจุบัน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientCurrentDisease.vue"),
    },
    {
      path: "/:main/:name/:sub",
      name: "ผลแลป",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientLabReportView.vue"),
    },
    {
      path: "/:main/:name/:sub",
      name: "ยาที่ใช้ในปัจจุบัน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientCurrentdrugsView.vue"),
    },
    {
      path: "/:main/:name/:sub",
      name: "ใบส่งตัว",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientRefListView.vue"),
    },
    
  ],
});

export default router;
