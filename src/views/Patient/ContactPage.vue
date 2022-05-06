<template>
  <div class="main-admin">
    <header><NavbarLogin /></header>
    <div class="mt-71">
      <contact />
    </div>
    <Footer />
  </div>
</template>

<script>
import contact from "../../components/ForPatient/contact.vue";
export default {
  name: "ContactPage",
  components: { contact },
};
</script>

<style scoped>
</style>