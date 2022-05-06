<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <Appointment />
    </div>
    <Footer />
  </div>
</template>

<script>
import Appointment from "../../components/ForPatient/Appointment.vue";
export default {
  name: "AppointmentPage",
  components: { Appointment },
};
</script>

<style scoped>
</style>