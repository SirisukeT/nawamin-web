<template>
  <div class="sidenav">
    <router-link :to="'/admin'">ภาพรวมระบบ</router-link>
    <router-link :to="'/admin'">รายชื่อผู้ป่วย</router-link>
    <label @click="toggleSetting" for="">ตั้งค่าระบบ</label>
    <div class="setting" v-show="isSetting">
      <router-link :to="'/admin'">โรงพยาบาล</router-link>
      <router-link :to="'/admin'">กลุ่มผู้ใช้งาน</router-link>
      <router-link :to="'/admin'">ผู้ใช้งาน</router-link>
      <router-link :to="'/admin'">แผนก</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  name: "Sidebar",
  data() {
    return {
      isSetting: false,
    };
  },
  methods: {
    toggleSetting() {
      console.log("Click");
      this.isSetting = !this.isSetting;
      console.log(this.isSetting);
    },
  },
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

.sidenav label:hover {
  cursor: pointer;
}

div.setting{
  padding: 0;
  font-weight: bold;
}
/* button.setting{
  margin: 0;
  border: none;
} */
</style>