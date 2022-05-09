import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomePageLogin.vue"),
    },
    {
      path: "/adminlogin",
      name: "adminlogin",
      component: () => import("../views/AdminLogin.vue"),
    },
    {
      path: "/about-us",
      name: "about-us",
      component: () => import("../views/Patient/AboutUsPage.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../views/Patient/ProfilePage.vue"),
    },
    {
      path: "/health",
      name: "health",
      component: () => import("../views/Patient/HealthStatusPage.vue"),
    },
    {
      path: "/transfer",
      name: "transfer",
      component: () => import("../views/Patient/TranferPage.vue"),
    },
    {
      path: "/transfer/details",
      name: "TranferDetailsPage",
      component: () => import("../views/Patient/TranferDetailsPage.vue"),
    },
    {
      path: "/appointment",
      name: "appointment",
      component: () => import("../views/Patient/AppointmentPage.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Patient/ContactPage.vue"),
    },
    {
      path: "/overall",
      name: "ภาพรวมระบบ",
      
      component: () => import("../views/AdminView.vue"),
    },
    {
      path: "/PatientList",
      name: "รายชื่อผู้ป่วย",
      
      component: () => import("../views/PatientListView.vue"),
    },
    {
      path: "/PatientListViewAdd",
      name: "เพิ่มรายชื่อผู้ป่วย",
      
      component: () => import("../views/PatientListViewAdd.vue"),
    },
    
    {
      path: "/:main/:name",
      name: "รายละเอียดผู้ป่วย",
      
      component: () => import("../views/PatientDetailsView.vue"),
    },

    {
      path: "/:main/:name/1:sub",
      name: "ประวัติผู้ป่วย",
      
      component: () => import("../views/PatientInfoView.vue"),
    },
    {
      path: "/:main/:name/2:sub",
      name: "โรคปัจจุบัน",
      
      component: () => import("../views/PatientCurrentDisease.vue"),
    },
    {
      path: "/:main/:name/2:sub/detail", 
      name: "รายละเอียดโรค",
      
      component: () => import("../views/PatientCurrentDisease2.vue"),
    },
    {
      path: "/:main/:name/3:sub",
      name: "ผลแลป",
      
      component: () => import("../views/PatientLabReportView.vue"),
    },
    {
      path: "/:main/:name/4:sub",
      name: "ยาที่ใช้ในปัจจุบัน",
      
      component: () => import("../views/PatientCurrentdrugsView.vue"),
    },
    {
      path: "/:main/:name/5:sub",
      name: "ใบส่งตัว",
      
      component: () => import("../views/PatientRefListView.vue"),
    },
    {
      path: "/:main/:name/5:sub/view",
      name: "รายละเอียดใบส่งตัว",
      
      component: () => import("../views/ViewPatientRef.vue"),
    },
    {
      path: "/:main/:name/5:sub/respond",
      name: "แจ้งผลการรักษา",
      
      component: () => import("../views/ViewPatientReferResult.vue"),
    },
    {
      path: "/:main/:name/6:sub",
      name: "ใบแจ้งผล",
      
      component: () => import("../views/ListPatientTransferResultView.vue"),
    },
    {
      path: "/:main/:name/6:sub/1",
      name: "เพิ่มใบแจ้งผล",
      
      component: () => import("../views/AddPatientTransferResultView.vue"),
    },
    {
      path: "/:main/:name/5:sub/1",
      name: "เพิ่มใบส่งตัว",
      
      component: () => import("../views/PatientAddRefView.vue"),
    },
    {
      path: "/SetupHospital", 
      name: "ตั้งค่าโรงพยาบาล",
      
      component: () => import("../views/Setup1_1View.vue"),
    },
    {
      path: "/AddHospital",
      name: "เพิ่มโรงพยาบาล",
      
      component: () => import("../views/Setup1_2View.vue"),
    },
    {
      path: "/SetupUserGroup",
      name: "ตั้งค่ากลุ่มผู้ใช้งาน",
      
      component: () => import("../views/Setup2_1View.vue"),
    },
    {
      path: "/AddUserGroup",
      name: "เพิ่มกลุ่มผู้ใช้งาน",
      
      component: () => import("../views/Setup2_2View.vue"),
    },
    {
      path: "/SetupUser",
      name: "ตั้งค่าผู้ใช้งาน",
      
      component: () => import("../views/Setup3_1View.vue"),
    },
    {
      path: "/AddUser",
      name: "เพิ่มผู้ใช้งาน",
      
      component: () => import("../views/Setup3_2View.vue"),
    },
    {
      path: "/SetupDepartment",
      name: "ตั้งค่าแผนก",
      
      component: () => import("../views/Setup4_1View.vue"),
    },
    {
      path: "/AddDepartment",
      name: "เพิ่มแผนก",
      
      component: () => import("../views/Setup4_2View.vue"),
    },
  ],
});

export default router;
