<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <Tranfer2 />
    </div>
    <Footer />
  </div>
</template>

<script>
import Tranfer2 from "../../components/ForPatient/Tranfer2.vue";
export default {
  name: "TranferDetailsPage",
  components: { Tranfer2 },
};
</script>

<style scoped>
</style>