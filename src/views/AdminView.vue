<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar @select="selectmenu" />
      <div class="content-naw">
        <TitleBar :Title="Title" />
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
            Title: ["ภาพรวมระบบ"],
        };
    },
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
    }
};
</script>

