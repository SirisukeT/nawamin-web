<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <menulist />
          <div class="detailbox">
            <PatientCardUser />
            <div class="table"><Appoints /></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Appoints from "../DataList/Appoints.vue";
export default {
  name: "appointment",
  components: { Appoints },
};
</script>

<style scoped>
.mainbox {
  display: flex;
}
.detailbox {
  min-width: 70rem;
  display: flex;
  flex-direction: column;
}
.table{
  padding: 10px;
    width: 100%;
    min-height: 20rem;
    background: #82A284;
    margin-top: 30px;
    border-radius: 20px;
}
</style>
