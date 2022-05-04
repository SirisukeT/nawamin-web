<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <PCD_12 />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientCurrentDrugsView",
  data() {
    return {
      Title: ["รายชื่อผู้ป่วย"],
    };
  },
};
</script>

<style></style>
