<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <menulist />
          <div class="detailbox">
            <PatientCardUser />
            <div class="table"><PatientRefUser/></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import refer from "../form/refer.vue"
export default {
  name:"Tranfer1",
  components:{refer,
    
  }
};
</script>

<style scoped>
.mainbox {
  display: flex;
}
.detailbox {
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
