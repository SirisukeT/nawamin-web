<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <PCD_11 />
      </div>
    </div>
  </div>
</template>

<script>
import PLR_1 from "../components/PLR_1.vue";
export default {
    name: "PatientLabReportView",
    data() {
        return {
            Title: ["รายชื่อผู้ป่วย"],
        };
    },
    components: { PLR_1 }
};
</script>

<style></style>
