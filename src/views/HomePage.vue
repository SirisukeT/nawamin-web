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
import Home from "../components/ForPatient/Home.vue";
export default {
  name: "HomePage",
  components: { Home },
};
</script>

<style scoped>
</style>