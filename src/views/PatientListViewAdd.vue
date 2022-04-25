<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <PL_12 />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientListViewAdd",
  data() {
    return {
      Title: ["รายชื่อผู้ป่วย", "เพิ่มผู้ป่วย"],
    };
  },
};
</script>
