<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar @select="selectmenu" />
      <div class="content-naw">
        <TitleBar :Title="Title"/>
        <component :is="activeTab" />
        <!-- <PL11_View /> -->
        <!-- <Sidebar /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import SO_1 from "../components/SO_1.vue";
import PD_1 from "../components/PD_1.vue";
import PL_11 from "../components/PL_11.vue";
import TitleBar from "../components/TitleBar.vue";
export default {
  name: "AdminView",
  components: {
    Sidebar,
    Navbar,
    SO_1,
    PD_1,
    PL_11,
    TitleBar
  },
  data() {
    return {
      activeTab: "SO_1",
      Title: ""
    };
  },
  methods:{
    selectmenu(component){
      this.activeTab = component[0];
      this.Title  = component[1];
    }
  }
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
  /* height: 100%; */
  margin-left: 250px;
  padding: 1rem 2rem;
}

.content-naw p {
  font-size: xx-large;
}
</style>
