<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link :to="'/home'">
          <img
            id="logo"
            src="@/assets/logo_re.png"
            alt=""
            width="55"
            height="55"
            class="d-inline-block align-text-top"
        /></router-link>
        <p>โรงพยาบาลค่ายนวมินทราชินี</p>
      </div>
      <div class="navbar-r">
        <router-link to="/home">หน้าหลัก</router-link>
        <router-link to="/profile">ข้อมูลของฉัน</router-link>
        <router-link to="/health">สถานะสุขภาพ</router-link>
        <router-link to="/transfer">ใบส่งตัว</router-link>
        <router-link to="/appointment">นัดหมาย</router-link>
        <div class="btn-group" id="test">
          <button
            type="button"
            class="btn"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            เกี่ยวกับเรา
            <img src="@/assets/Antu_dialog-icon-preview.png" alt="" />
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><router-link to="/about-us">ข้อมูลโรงพยาบาล</router-link></li>
            <li><router-link to="/contact">ติดต่อเรา</router-link></li>
          </ul>
        </div>
        <div class="btn-group">
          <button
            type="button"
            class="btn"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <img class="invertimg" src="@/assets/user-regular.svg" alt="" />
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><router-link to="/profile">ข้อมูลของฉัน</router-link></li>
            <li><router-link to="/health">สถานะสุขภาพ</router-link></li>
            <li><router-link to="/transfer">ใบส่งตัว</router-link></li>
            <li><router-link to="/appointment">นัดหมาย</router-link></li>
            <li><router-link @click="store.logout" to="/">ออกจากระบบ</router-link></li>
            
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
  name: "NavBarLogin",
};
</script>

<style scoped>
#test{
  margin-top: 5px;
}
.navbar {
  background-color: #446a46;
  /* width: 100%; */
  min-width: 200px;
  height: 71px;
  max-height: 71px;
  padding: 0;
}

.btn{
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.container-fluid {
  height: 100%;
  /* width: 1248px; */
  padding: 0 2rem;
}

div.navbar-brand {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

div.navbar-brand p {
  margin-left: 1rem;
  color: white;
}

.navbar-r {
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-r > * {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.navbar-r img {
  /* background: white; */
  /* border-radius: 50%; */
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

.navbar-brand p {
  margin: 0;
  font-size: 30px;
}

/* .btn-group:hover .dropdown-menu {
    display: block;
 } */
</style>
