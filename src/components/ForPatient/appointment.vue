<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <menulist />
          <div class="detailbox">
            <PatientCardUser />
            <div class="table"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mainbox {
  display: flex;
}
.detailbox {
  width: 62rem;
  /* background: wheat; */
  display: flex;
  flex-direction: column;
}
.table{
    width: 100%;
    height: 40rem;
    background: #82A284;
    border-radius: 20px;
    margin-top: 30px;
}
</style>
