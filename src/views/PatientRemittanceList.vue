<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <PRL_1 />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientRemittanceList",
  data() {
    return {
      Title: ["รายชื่อผู้ป่วย"],
    };
  },
};
</script>

<style></style>
