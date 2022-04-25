<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <APR_11 />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientLabReportView",
  data() {
    return {
      Title: ["รายชื่อผู้ป่วย"],
    };
  },
};
</script>

<style></style>
