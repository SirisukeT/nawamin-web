<template>
  <div class="bigbox">
    <div class="topbox">
      <GrayBox>ชื่อ-สกุล</GrayBox>

      <GrayBox>วันที่</GrayBox>

      <GrayBox>ถึงวันที่</GrayBox>
    </div>

    <div class="midbox">
      <div class="addbox">
        <button
          @click="store.changePage(['เพิ่มใบแจ้งผล','รายละเอียดผู้ป่วย',store.patient.name,'เพิ่มใบแจ้งผล'])"
          class="subadd"
        >
          เพิ่มใบแจ้งผล
        </button>
      </div>
      <div class="addbox">
        <button class="subsearch">ค้นหา</button>
      </div>
    </div>

    <div class="botbox">
      <div class="graphbox">
        <ReportResult/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
import ReportResult from "./DataList/ReportResult.vue";
const store = useTitleStore();
</script>

<script>
import depart from "../json/departs.json";
import { useTitleStore } from "@/stores/TitleStore";
export default {
  name: "LPTR_1",
  data() {
    return {
      depart,
    };
  },
//   mounted() {
//     const store = useTitleStore();
//     document.getElementById("name").defaultValue =
//       store.patient.data["pname"] +
//       "" +
//       store.patient.data["fname"] +
//       " " +
//       store.patient.data["lname"];
//     document.getElementById("cid").defaultValue = store.patient.data["cid"];
//   },
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