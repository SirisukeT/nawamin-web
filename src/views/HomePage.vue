<template>
  <div class="main-admin">
    <NavbarHome />
    <div class="mt-100">
      <Home />
    </div>
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

.mt-100{
    margin-top: 100px;
}
</style>