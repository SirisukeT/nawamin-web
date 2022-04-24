<template>
  <div class="main-admin">
    <NavBar />
    <div class="main-content">
      <SideBar />
      <div class="content-naw">
        <TitleBar />
        <PL_11 />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientListView",
  data() {
    return {
      Title: ["รายชื่อผู้ป่วย"],
    };
  },
};
</script>
