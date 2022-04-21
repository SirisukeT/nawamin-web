<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar/>
      <div class="content">
        <SO1_View/>
        <!-- <Sidebar /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import SO1_View from "../components/SQ_1.vue";
export default {
  name: "AdminView",
  components: {
    Sidebar,
    Navbar,
    SO1_View,
  },
};
</script>

<style scoped>
.main-admin {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main-content {
  margin-top: 100px;
  /* display: grid;
  grid-template-columns: 12% 88%; */
  height: 100%;
  /* padding: 1rem 2rem; */
}

.main-content * {
  /* flex: 1; */
}

.content {
  /* width: 90%; */
  margin-left: 12vw;
  padding: 1rem 5rem;
}

.content p {
  font-size: xx-large;
}
/* .sidebar ul{
  margin: 0;
  width: 100%;

} */
</style>
