<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <Tranfer1 />
    </div>
    <Footer />
  </div>
</template>

<script>
import Tranfer1 from "../../components/ForPatient/Tranfer1.vue";
export default {
  name: "TranferPage",
  components: { Tranfer1 },
};
</script>

<style scoped>
</style>