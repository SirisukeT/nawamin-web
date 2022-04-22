<template>
  <div class="main-admin">
    <Navbar />
    <div class="main-content">
      <Sidebar @select="selectmenu" />
      <div class="content-naw">
        <TitleBar :Title="Title" />
        <PD_1
          :previous="previousTab"
          :is="activeTab"
          @select="selectmenu"
          @selectSub="selectmenuSubmenu"
        />
      </div>
    </div>
  </div>
</template>


<script setup>
import { useSiteStore } from "../stores/useSiteStore";
const store = useSiteStore();
// export default {
//   name: "PatientDetails",
//   data() {
//         return {
//             previousTab: "",
//             activeTab: "SO_1",
//             Title: ["ภาพรวมระบบ"],
//         };
//     },
//     methods: {
//         selectmenu(component) {
//             this.previousTab = [this.activeTab, this.Title];
//             this.$router.push(component[0]);
//             this.activeTab = component[0];
//             this.Title = component.slice(1);
//             window.scrollTo(0, 0);
//         },
//         selectmenuSubmenu(component) {
//             this.previousTab = [this.activeTab, this.Title];
//             this.$router.push(component[0]);
//             this.activeTab = component[0];
//             this.Title.push(component.slice(1)[0]);
//         },
//     }
// };
</script>
