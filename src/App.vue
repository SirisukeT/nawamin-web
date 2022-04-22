<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>

html, body, #app{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

button:hover{
  transform: scale(1.05);
}

button:active{
  transform: scale(0.95);
}

</style>
