<template>
  <div class="sidenav">
    <router-link :to="'/admin'">ภาพรวมระบบ</router-link>
    <router-link :to="'/admin'">รายชื่อผู้ป่วย</router-link>
    <router-link :to="'/admin'">ตั้งค่าระบบ</router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style focused>
div.sidenav {
  margin-top: 100px;
  text-align: center;
  background-image: linear-gradient(rgb(37, 149, 122), rgb(129, 187, 173));
  overflow: hidden;
  height: 100%;
  width: 12vw;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
}

div.sidenav * {
  padding: 6px 8px 6px 6px;
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
  text-align: center;
  background-color: rgb(37, 149, 122);
}
</style>