<template>
  <nav
    class="navbar navbar-box navbar-expand-lg navbar-dark static-top fixed-top"
  >
    <div class="container-fluid">
      <div class="d-flex" id="#hospitalname">
      <router-link :to="'/Overall'">
        <img
          id="logo"
          src="@/assets/logo_re.png"
          alt=""
          width="55"
          height="55"
          class="d-inline-block align-text-top"
      /></router-link>
      <div id="hospitalname">
      <h2>โรงพยาบาลค่ายนวมินทราชินี</h2>
      </div>
      </div>
      <div class="navbar-r">
        <img src="@/assets/user-regular.svg" alt="" />
        <div class="navbar-account">
          <h5>นายสมหมาย มิตรรัก</h5>
          <h5>ตำแหน่ง</h5>
          <!-- <h5>โรงพยาบาลค่ายนวมินทราชินี</h5> -->
        </div>
        <a @click="store.logout"
          ><img
            id="exit"
            src="@/assets/arrow-right-from-bracket-solid.svg"
            alt=""
        /></a>
      </div>
      <div class="hidenav">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" aria-current="page" to="/Overall"
              >ภาพรวมระบบ</router-link
            >
          </li>
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" to="/PatientList">รายชื่อผู้ป่วย</router-link>
          </li>
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" to="/SetupHospital">โรงพยาบาล</router-link>
          </li>
          <li class="nav-item1 ms-4">
            <router-link class="nav-link" to="/SetupUserGroup">กลุ่มผู้ใช้งาน</router-link>
          </li>
          <li class="nav-item1 ms-4">
            <router-link class="nav-link" to="/SetupUser">ผู้ใช่งาน</router-link>
          </li>
          <li class="nav-item1 ms-4">
            <router-link class="nav-link" to="/SetupDepartment">แผนก</router-link>
          </li>
          <li class="nav-item ms-4 logout-bg">
            <button @click="store.logout" class="logout-btn">ออกจากระบบ</button>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar-r {
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-r > * {
  margin-left: 2.5rem;
}

.navbar-r img {
  background: white;
  border-radius: 50%;
  height: 55px;
  width: 55px;
}

.navbar-r a {
  margin: 0 15px 0 20px;
}

.navbar-r img#exit {
  background: none;
  border-radius: 0;
  height: 30px;
  width: 30px;
}
.navbar-account {
  text-align: center;
}

.navbar-account > * {
  margin: 0;
}
h2{
  margin: 0;
}
#hospitalname{
  margin: 0;
  padding-left: 15px;
  display: flex;
  align-items: center;
}
.hidenav{
  display: none;
}
.navbar {
  background-image: linear-gradient(
    to right,
    rgb(37, 149, 122),
    rgb(205, 218, 215)
  );
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  height: auto;
  max-width: 100vw;
  /* min-height: 71px; */
}
.container-fluid {
  width: 100%;
  margin: 0;
  justify-content: space-between;
  padding-left: 50px;
}
.navbar-brand {
  font-size: 30px;
  display: flex;
  align-items: center;
}
.nav-link {
  font-size: 20px;
}
.logout-bg {
  /* height: 50px; */
  margin: 4px 0;
}

/* .collapse ul{
  background-color: #18d083;
} */

button.logout-btn {
  width: 140px;
  height: 35px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #18d083;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s;
}
button.logout-btn:hover {
  transform: scale(1.05);
}
button.logout-btn:active {
  transform: scale(0.95);
}

@media (max-width: 1600px) {
  .container-fluid {
    /* max-width: 1320px; */
  }
}
@media (max-width: 1400px) {
  .container-fluid {
    /* max-width: 1140px; */
  }
}
@media (max-width: 1200px) {
  .container-fluid {
    /* max-width: 960px; */
  }
}
@media (max-width: 992px) {
  .container-fluid {
    /* max-width: 720px; */
    justify-content: space-between;
  }
  .hidenav{
    display: contents;
  }
  #hospitalname{
    display: none;
  }

  .navbar-r{
    display: none;
  }
}

@media (max-width: 768px) {
  .container-fluid {
    /* width: 670px; */
  }
}
@media (max-width: 670px) {
  .container-fluid {
    width: 100%;
  }
}
</style>
