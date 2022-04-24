<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar @select="selectmenu" />
      <div class="content-naw">
        <TitleBar :Title="Title" />
        <PH_1 @select="selectmenu" @selectSub="selectmenuSubmenu" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientInfoView",
  data() {
    return {
      Title: ["รายชื่อผู้ป่วย"],
    };
  },
  emits: ["selectmenu(component)","selectmenuSubmenu(component)"],
  methods: {
    selectmenu(component) {
      this.$router.push(component[0]);
      this.Title = component.slice(1);
      window.scrollTo(0, 0);
    },
    selectmenuSubmenu(component) {
      this.$router.push(component[0]);
      this.Title.push(component.slice(1)[0]);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style></style>
