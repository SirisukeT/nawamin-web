<template>
  <div class="main-admin">
    <header v-if="store.user.isLogin"><NavbarLogin /></header>
    <header v-else><NavbarHome /></header>
    <div class="mt-71">
      <contact />
    </div>
    <Footer />
  </div>
</template>


<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
import contact from "../../components/ForPatient/contact.vue";
export default {
  name: "ContactPage",
  components: { contact },
};
</script>

<style scoped>
</style>