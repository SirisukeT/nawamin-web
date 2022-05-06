<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <Tranfer />
    </div>
    <Footer />
  </div>
</template>

<script>
import Tranfer from "../../components/ForPatient/Tranfer.vue";
export default {
  name: "TranferPage",
  components: { Tranfer },
};
</script>

<style scoped>
</style>