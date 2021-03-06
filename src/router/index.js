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
      path: "/:main/:name/1:sub",
      name: "ประวัติผู้ป่วย",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientInfoView.vue"),
    },
    {
      path: "/:main/:name/2:sub",
      name: "โรคปัจจุบัน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientCurrentDisease.vue"),
    },
    {
      path: "/:main/:name/2:sub/detail", 
      name: "รายละเอียดโรค",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientCurrentDisease2.vue"),
    },
    {
      path: "/:main/:name/3:sub",
      name: "ผลแลป",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientLabReportView.vue"),
    },
    {
      path: "/:main/:name/4:sub",
      name: "ยาที่ใช้ในปัจจุบัน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientCurrentdrugsView.vue"),
    },
    {
      path: "/:main/:name/5:sub",
      name: "ใบส่งตัว",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientRefListView.vue"),
    },
    {
      path: "/:main/:name/5:sub/view",
      name: "รายละเอียดใบส่งตัว",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ViewPatientRef.vue"),
    },
    {
      path: "/:main/:name/6:sub",
      name: "ใบแจ้งผล",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ListPatientTransferResultView.vue"),
    },
    {
      path: "/:main/:name/6:sub/1",
      name: "เพิ่มใบแจ้งผล",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AddPatientTransferResultView.vue"),
    },
    {
      path: "/:main/:name/5:sub/1",
      name: "เพิ่มใบส่งตัว",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PatientAddRefView.vue"),
    },
    {
      path: "/SetupHospital", 
      name: "ตั้งค่าโรงพยาบาล",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup1_1View.vue"),
    },
    {
      path: "/AddHospital",
      name: "เพิ่มโรงพยาบาล",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup1_2View.vue"),
    },
    {
      path: "/SetupUserGroup",
      name: "ตั้งค่ากลุ่มผู้ใช้งาน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup2_1View.vue"),
    },
    {
      path: "/AddUserGroup",
      name: "เพิ่มกลุ่มผู้ใช้งาน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup2_2View.vue"),
    },
    {
      path: "/SetupUser",
      name: "ตั้งค่าผู้ใช้งาน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup3_1View.vue"),
    },
    {
      path: "/AddUser",
      name: "เพิ่มผู้ใช้งาน",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup3_2View.vue"),
    },
    {
      path: "/SetupDepartment",
      name: "ตั้งค่าแผนก",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup4_1View.vue"),
    },
    {
      path: "/AddDepartment",
      name: "เพิ่มแผนก",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/Setup4_2View.vue"),
    },
  ],
});

export default router;
