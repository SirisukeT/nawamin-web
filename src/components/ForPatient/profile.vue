<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <menulist />
          <div class="detailbox">
            <PatientCardUser />
            <h3 id="suggest">ข้อมูลของฉัน</h3>
            <div class="table">
              <p class="datalist">หากท่านต้องการเปลี่ยนแปลงข้อมูล กรุณาติดต่อโรงพยาบาลค่ายนวมินทราชินี โทร. 038-273034</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name:"profile",
};
</script>

<style scoped>
.datalist{
  margin: 0;
  font-size: 20px;
}
#suggest {
  text-align: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid;
}
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
  padding: 5% 0;
    width: 100%;
    background: #E7EEFF;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pfptext{
display: none;
}
</style>

