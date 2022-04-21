<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar />
      <div class="content">
        <div class="title">
          <fa :icon="['fas', 'arrow-left']" />
          <h1>Hi</h1>
        </div>
        <SO1_View />
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

.title {
  height: 65px;
  background-color: green;
  border-radius: 20px;
}

.content {
  /* width: 90%; */
  margin-left: 12vw;
  padding: 1rem 5rem;
}

.content p {
  font-size: xx-large;
}

.title {
  background-color: green;
  display: flex;
  align-content: center;
  justify-content: center;
  
}
/* .sidebar ul{
  margin: 0;
  width: 100%;

} */
</style>
