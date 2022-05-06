<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <Home />
    </div>
    <Footer />
  </div>
</template>

<script>
import Menulist from '../components/bar/menulist.vue';
import Home from "../components/ForPatient/Home.vue";
export default {
  name: "HomePageLogin",
  components: { Home, Menulist },
};
</script>

<style scoped>
</style>