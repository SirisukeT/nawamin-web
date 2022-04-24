<template>
  <div class="titleBar">
    <!-- <div class="listTitle" v-for="(t, index) in Title" :key="index"> -->
    <div class="listTitle">
      <div class="icon">
        <img src="@/assets/play-solid.svg" alt="" height="40" />
      </div>
      <b v-if="!$route.params.main">{{$route.name}}</b>
      <b>{{ $route.params.main }}</b>
      <div class="subtitle dp-flex-r" v-for="(text,index) in $route.params" :key="index" >
        <div v-if="index !='main'&& text !=''" class="icon">
          <img src="@/assets/angle-right-solid.svg" alt="" height="40" />
        </div>
        <b v-if="index !='main'&& text !=''">{{ text }}</b>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<style scoped>
.titleBar {
  background-image: linear-gradient(
    to right,
    rgb(37, 149, 122),
    rgb(129, 187, 173)
  );
  border-radius: 20px;
  height: 60px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}

.listTitle {
  display: flex;
}
.listTitle b {
  margin-left: 20px;
  font-size: 30px;
  text-align: center;
  padding-top: 6px;
}

.icon {
  display: flex;
  margin-left: 20px;
  padding-top: 10px;
}
</style>
