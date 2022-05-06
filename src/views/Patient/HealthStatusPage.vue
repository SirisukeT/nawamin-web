<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <HealthStatus />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import HealthStatus from "../../components/ForPatient/HealthStatus.vue";
export default {
  name: "HealthStatusPage",
  components: { HealthStatus },
};
</script>

<style scoped>
</style>