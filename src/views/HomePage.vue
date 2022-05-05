<template>
  <div class="main-admin">
    <header><NavbarHome /></header>
    <div class="mt-100">
      <Home />
    </div>
    <Footer />
    <menulist />
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
.main-admin {
  background-color: white;
}

.mt-100 {
  margin-top: 100px;
}
</style>