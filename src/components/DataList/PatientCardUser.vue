<template>
  <div class="pfpbox">
    <div class="ppcolor">
      <div class="pp">
        <img src="@/assets/user-regular.svg" alt="" />
      </div>
    </div>
    <div class="pfptext">
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
  name: "PatientCardUser",
};
</script>

<style>
h3{
  font-size: 24px;
  font-weight: 700;
}
.pfpbox {
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ppcolor {
  width: 8.5rem;
  height: 8.5rem;
  background-color: red;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pp img {
  width: 7rem;
  height: 7rem;
  background-color: white;
  border-radius: 100%;
}

.pfptext {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
