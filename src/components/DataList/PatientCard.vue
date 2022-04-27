<template>
  <div class="leftbox">
    <div class="ppcolor">
      <div class="pp">
        <img src="@/assets/user-regular.svg" alt="" />
      </div>
    </div>
    <div class="phptext">
      <h3>{{store.patient.name}}</h3>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
export default {
  name: "PatientCard",
};
</script>

<style>
.leftbox {
  margin-right: 30px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 600px;
  /* background-color: blue; */
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

.pp img {
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 100%;
}

.phptext {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
