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
import test from '../components/test.vue';
export default {
  components: { test },
  name: "PatientAddRefView",
};
</script>
