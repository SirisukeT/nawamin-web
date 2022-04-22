<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar @select="selectmenu" />
      <div class="content-naw">
        <TitleBar :Title="Title" />
        <!-- <h1>{{side.title}}</h1> -->
        <SO_1
          @select="selectmenu"
          @selectSub="selectmenuSubmenu"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "AdminView",
    data() {
        return {
            previousTab: "",
            activeTab: "SO_1",
            Title: ["ภาพรวมระบบ"],
        };
    },
    methods: {
        selectmenu(component) {
            this.previousTab = [this.activeTab, this.Title];
            this.$router.push(component[0]);
            this.activeTab = component[0];
            this.Title = component.slice(1);
            window.scrollTo(0, 0);
        },
        selectmenuSubmenu(component) {
            this.previousTab = [this.activeTab, this.Title];
            this.$router.push(component[0]);
            this.activeTab = component[0];
            this.Title.push(component.slice(1)[0]);
        },
    }
};
</script>

