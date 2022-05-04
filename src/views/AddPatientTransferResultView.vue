<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <APTR_1/>
      </div>
    </div>
  </div>
</template>

<script>
import APTR_1 from "../components/APTR_1.vue";
export default {
    name: "AddPatientTransferResultView",
    components: { APTR_1 }
};
</script>