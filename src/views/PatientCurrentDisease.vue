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
export default {
  name: "PatientCurrentDisease",
  data() {
    return {
      Title: "",
    };
  },
};
</script>

<style></style>
