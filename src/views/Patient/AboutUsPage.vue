<template>
  <div class="main-admin">
    <header><NavbarHome /></header>
    <div class="mt-71">
      <HealtStatus />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import HealtStatus from "../../components/ForPatient/HealtStatus.vue";
export default {
  name: "AboutUsPage",
  components: { HealtStatus },
};
</script>

<style scoped>
</style>