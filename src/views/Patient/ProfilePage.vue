<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <profile />
    </div>
    <Footer />
  </div>
</template>

<script>
import profile from "../../components/ForPatient/profile.vue";
export default {
  name: "ProfilePage",
  components: { profile },
};
</script>

<style scoped>
</style>