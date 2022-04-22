<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar @select="selectmenu" />
      <div class="content-naw">
        <TitleBar :Title="Title"/>
        <component  :previous="previousTab" :is="activeTab" @select="selectmenu" @selectSub="selectmenuSubmenu"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data(){
    return{
      previousTab: "",
      activeTab: "SO_1",
      Title: ["ภาพรวมระบบ"]
    }
  },
  methods:{
    selectmenu(component){
      this.previousTab = [this.activeTab,this.Title];
      this.activeTab = component[0];
      this.Title = component.slice(1);
      window.scrollTo(0,0);
    },
    selectmenuSubmenu(component){
      this.previousTab = [this.activeTab,this.Title];
      this.activeTab = component[0];
      this.Title.push(component.slice(1)[0]);
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
  padding: 1rem 5rem;
}

.content-naw p {
  font-size: xx-large;
}
</style>
