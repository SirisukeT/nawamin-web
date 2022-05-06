<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <about_us />
    </div>
    <Footer />
  </div>
</template>

<script>
import about_us from "../../components/ForPatient/about_us.vue";
export default {
  name: "AboutUsPage",
  components: { about_us },
};
</script>

<style scoped>
</style>