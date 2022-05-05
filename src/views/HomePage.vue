<template>
  <div class="main-admin">
    <header><NavbarHome /></header>
    <div class="mt-100">
      <Home />
    </div>
    <footer style="display:flex; justify-content:center;margin-top: auto;"><h1>Footer</h1></footer>
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
.main-admin {
  background-color: white;
}

.mt-100 {
  margin-top: 100px;
}
</style>