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
          @click="store.changePage(['เพิ่มโรงพยาบาล'])"
          class="subadd"
        >
          เพิ่มโรงพยาบาล
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
            <th >ลำดับ</th>
            <th>โรงพยาบาล</th>
            <th>วันที่สร้าง</th>
          </tr>
          <Hospital
            v-for="(item, index) in hospital"
            :key="index"
            :id="item.index"
            :hospname="item.hospname"
            :cdate="item.cdate"
          />
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
import hospital from "@/json/hospital"
export default {
  name: "SU_11",
  data() {
    return {
      hospital,
    };
  },
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
