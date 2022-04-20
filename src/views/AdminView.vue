<template>
  <header>
    <Navbar />
    <Sidebar />
  </header>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Sidebar from "../components/Sidebar.vue";
export default {
  name :"AdminView",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style scoped></style>
