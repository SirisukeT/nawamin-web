<template>
  <div class="bigbox">
    <div class="topbox">
      <GrayBox>โรงพยาบาล</GrayBox>

      <GrayBox>ชื่อกลุ่ม</GrayBox>

      <GrayBox>วันที่</GrayBox>
    </div>

    <div class="midbox">
      <div class="addbox">
        <button
          @click="store.changePage(['เพิ่มผู้ใช้งาน', 'เพิ่มผู้ใช้งาน'])"
          class="subadd"
        >
          เพิ่มผู้ใช้งาน
        </button>
      </div>
      <div class="addbox">
        <button class="subsearch">ค้นหา</button>
      </div>
    </div>

    <div class="botbox">
      <div class="graphbox">
        <table>
          <tr style="font-size: 25px">
            <th>ลำดับ</th>
            <th>โรงพยาบาล</th>
            <th>ชื่อกลุ่ม</th>
            <th>ผู้ใช้งาน</th>
            <th>วันที่สร้าง</th>
          </tr>
          <template
            v-for="item in hospital"
            :key="item.index"
            ><template v-for="(groupN, keywordG,indexg) in item.group">
              <tr v-for="(User, index) in groupN" :key="index">
                <th>{{ ((indexg)*groupN.length)+(index+1) }}</th>
                <th>{{ item.hospname }}</th>
                <th>{{ keywordG }}</th>
                <th>{{ User }}</th>
                <th>{{ item.cdate }}</th>
              </tr>
            </template>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
import User from "./DataList/User.vue";
import hospital from "@/json/hospital";
export default {
  name: "SU_31",
  data() {
    return {
      hospital,
      indexx:0
    };
  },
  // methods:{
  //   incrementIndex(){
  //     console.log(this.indexx);
  //     this.indexx++;
  //     return this.indexx;
  //   }
  // },
  components: { User },
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  text-align: start;
  font-size: 20px;
}
.bigbox {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.topbox {
  margin: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.botbox {
  margin-top: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.subdocb {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 375px; */
  height: 60px;
  width: 100%;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.graphbox {
  margin: 10px;
  width: 100%;
  height: 100%;
  /* display: flex;
  justify-content: space-between; */
  background-color: #e7e7e7;
  /* border: 1px solid black; */
}
.midbox {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: greenyellow; */
}
.subadd {
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: #31996e;
  border-radius: 15px;
  border: 1.75px solid black;
}
.subsearch {
  font-weight: bold;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: white;
  border-radius: 15px;
  border: 1.75px solid black;
}
</style>
