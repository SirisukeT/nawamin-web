<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useSiteStore } from "./stores/useSiteStore";
const store = useSiteStore();
</script>

<template>
  <RouterView />
</template>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}

.main-admin {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

div .main-content {
  margin-top: 100px;
  /* display: grid;
  grid-template-columns: 12% 88%; */
  height: 100%;
  /* padding: 1rem 2rem; */
}
.content-naw {
  max-width: 100%;
  /* height: 100%; */
  margin-left: 250px;
  padding: 1rem 5rem;
}

.content-naw p {
  font-size: xx-large;
}

.buttonbox {
  
  width: 100%;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

button.previous {
  margin-top: 60px;
  width: 150px;
  height: 60px;
  background-color: #f4d013;
  border-radius: 15px;
  border: 1.75px solid black;
}
</style>
