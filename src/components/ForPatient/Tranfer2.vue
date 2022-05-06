<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <div class="detailbox">
            <patient-card />
            <refer />
            <section class="right marginB-25"><button @click="$router.go(-1)" class="previous">ย้อนกลับ</button></section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import refer from "../form/refer.vue";
export default {
  name: "Tranfer2",
  components: { refer },
};
</script>

<style scoped>
.mainbox {
  display: flex;
  justify-content: center;
}
.detailbox {
  width: 62rem;
  /* background: wheat; */
  display: flex;
  flex-direction: column;
}
.table {
  width: 100%;
  background: #82a284;
  border-radius: 20px;
  margin-top: 30px;
}
</style>
