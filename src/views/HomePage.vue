<template>
  <div class="main-admin">
    <header><NavbarHome /></header>
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
  name: "HomePage",
  components: { Home, Menulist },
};
</script>

<style scoped>
</style>