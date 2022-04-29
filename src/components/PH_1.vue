<template>
  <div class="bigbox">
    <PatientCard />
    <div class="rightbox">
      <h1 class="rb">ประวัติผู้ป่วย</h1>
      <div class="line"></div>
      <div class="historybox">
        <div class="boxin">
          <PatientInfo :info="store.patient.data" />
        </div>
      </div>
      <div class="buttonbox">
        <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
export default {
  name: "PH_1",
};
</script>

<style scoped>
.pp img {
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 100%;
}
.ppcolor {
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

rb {
  margin: 0px;
  padding: 0px;
}

.bigbox {
  width: 100%;
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  /* background-color: black; */
}
.leftbox {
  margin-left: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 600px;
  /* background-color: blue; */
}
.rightbox {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 100%;
  justify-content: top;
  align-items: center;
}
.historybox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  /* height: 650px; */
  background-color: #c4c4c4;
  border-radius: 50px;
  border: 1.75px solid white;
}
.line {
  margin-top: 10px;
  width: 90%;
  border-bottom: 2px solid black;
}
.boxin {
  margin: 20px;
  width: 100%;
  height: 95%;
  background-color: #e7e7e7;
  border-radius: 50px;
  border: 1.75px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
}
@media (max-width: 1400px) {
  .bigbox{
    flex-direction: column;
    align-items: center;
  }
  .leftbox{
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 50%;
  }  
}
@media (max-width: 1200px) {
  
}
@media (max-width: 992px) {
  
}

@media (max-width: 768px) {
  
}
@media (max-width: 670px) {
  
}
</style>
