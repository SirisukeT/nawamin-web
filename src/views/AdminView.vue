<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar />
      <div class="content-naw">
        <TitleBar/>
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
import TitleBar from "../components/TitleBar.vue";
export default {
  name: "AdminView",
  components: {
    Sidebar,
    Navbar,
    SO1_View,
    TitleBar
  },
};
</script>

<style scoped>
.main-admin {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}

div .main-content {
  margin-top: 100px;
  /* display: grid;
  grid-template-columns: 12% 88%; */
  height: 100%;
  /* padding: 1rem 2rem; */
}
.content-naw {
  max-width: 100%;
  margin-left: 250px;
  padding: 1rem 2rem;
}

.content-naw p {
  font-size: xx-large;
}

</style>
