<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <menulist />
          <div class="detailbox">
            <PatientCardUser />
            <refer />
            <section class="right marginB-25 center">
              <button @click="$router.go(-1)" class="LoginSubmit">ย้อนกลับ</button>
            </section>
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
.right{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.LoginSubmit {
  background: #82a284;
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin-top: 20px;
  width: 150px;
  height: 57px;
  border-radius: 50px;
  text-align: center;
  padding: 0 20px;
  margin: 5px 0;
  font-size: large;
  border: 0px;
}
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
