<template>
  <div class="main-admin">
    <header v-if="store.user.isLogin"><NavbarLogin /></header>
    <header v-else><NavbarHome /></header>
    <div class="mt-71">
      <about_us />
    </div>
    <Footer />
  </div>
</template>


<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
import about_us from "../../components/ForPatient/about_us.vue";
export default {
  name: "AboutUsPage",
  components: { about_us },
};
</script>

<style scoped>
</style>