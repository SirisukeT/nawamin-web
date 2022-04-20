<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/TheLogin.vue";
</script>

<template>
  <!-- <header> -->
    <!-- <Login/> -->
    <!-- <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    /> -->

    <!-- <div class="wrapper"> -->
      <!-- <HelloWorld msg="You did it!" /> -->

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
      </nav> -->
    <!-- </div> -->
  <!-- </header> -->

  <RouterView />
</template>

<style>

#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
