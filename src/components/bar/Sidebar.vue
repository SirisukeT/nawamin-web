<template>
  <div class="sidenav">
    <button id="b1" @click="store.changePage(['ภาพรวมระบบ', 'ภาพรวมระบบ'])">
      ภาพรวมระบบ
    </button>
    <!-- <router-link to="/admin">ภาพรวมระบบ 2</router-link> -->
    <button
      To="/PatientListView"
      id="b2"
      @click="store.changePage(['รายชื่อผู้ป่วย', 'รายชื่อผู้ป่วย'])"
    >
      รายชื่อผู้ป่วย
    </button>
    <!-- <router-link to="/admin/PatientListView">รายชื่อผู้ป่วย 2</router-link> -->
    <button id="b3" @click="toggleSetting">
      ตั้งค่าระบบ
      <div>
        <fa_c v-if="!isSetting" :icon="['fas', 'angle-right']" />
        <fa_c
          v-else
          :style="{
            transform: 'rotate(90deg)',
            animation: 'rotation 2s infinite linear',
          }"
          :icon="['fas', 'angle-right']"
        />
      </div>
    </button>
    <div class="setting" v-show="isSetting">
      <button id="b4" @click="store.changePage(['ตั้งค่าโรงพยาบาล','ตั้งค่าโรงพยาบาล'])">
        โรงพยาบาล
      </button>
      <button id="b5" @click="store.changePage(['กลุ่มผู้ใช้งาน'])">
        กลุ่มผู้ใช้งาน
      </button>
      <button id="b6" @click="store.changePage(['ผู้ใช้งาน'])">
        ผู้ใช้งาน
      </button>
      <button id="b7" @click="store.changePage(['แผนก'])">แผนก</button>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      isSetting: false,
    };
  },
  methods: {
    toggleSetting() {
      this.isSetting = !this.isSetting;
    },
  },
};
</script>

<style scoped>
div.sidenav {
  margin-top: 100px;
  text-align: center;
  background-image: linear-gradient(rgb(37, 149, 122), rgb(129, 187, 173));
  overflow: hidden;
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  box-sizing: border-box;
}

div.sidenav * {
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
  text-align: center;
  background-color: rgb(37, 149, 122);
}

div.sidenav button,
div.sidenav a {
  padding: 0;
  border: 0;
  width: 100%;
  height: 50px;
}

div.sidenav button:hover,
div.sidenav a:hover {
  padding: 0;
  background-color: rgb(240, 240, 240);
  transform: scale(1);
}

div.setting button {
  font-weight: bold;
}

button#b3 {
  display: flex;
  align-items: center;
  padding-left: 70px;
}

button#b3 div {
  background: none;
  padding-left: 35px;
}
</style>
