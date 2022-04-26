<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <LPTR_1/>
      </div>
    </div>
  </div>
</template>

<script>
import LPTR_1 from "../components/LPTR_1.vue";
export default {
    name: "ListPatientTransferResultView",
    components: { LPTR_1 }
};
</script>