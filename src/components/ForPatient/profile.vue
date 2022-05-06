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
              <p class="datalist">
                หากท่านต้องการเปลี่ยนแปลงข้อมูล
                กรุณาติดต่อโรงพยาบาลค่ายนวมินทราชินี โทร. 038-273034
              </p>
            </div>
            <div class="suggestbox">
              <h3>ข้อมูลผู้ป่วย</h3>
              <div class="gridbox4fr">
                <div class="box11"></div>
                <div class="box21"></div>
                <div class="box31"></div>
                <div class="box41"></div>
                <div class="box51"></div>
                <div class="box61"></div>
                <div class="box71"></div>
              </div>
              <h3>ที่อยู่</h3>
              <div class="gridbox">
                <div class="gridbox4fr2">
                  <div class="box12"></div>
                  <div class="box22"></div>
                  <div class="box32"></div>
                  <div class="box42"></div>
                </div>
                <div class="gridbox3fr">
                  <div class="box52"></div>
                  <div class="box62"></div>
                  <div class="box72"></div>
                  <div class="box82"></div>
                </div>
              </div>
              <h3>ผู้ติดต่อฉุกเฉิน</h3>
              <div class="gridbox4fr">
                <div class="box13"></div>
                <div class="box23"></div>
                <div class="box33"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "profile",
};
</script>

<style scoped>
.gridbox {
  /* display: flex; */
  /* flex-direction: column; */
}
.gridbox4fr {
  display: grid;
  grid-template-columns: repeat (4, 1fr);
  gap: 10px;
}
.gridbox4fr2 {
  display: grid;
  grid-template-columns: repeat (4, 1fr);
  gap: 10px;
}
.gridbox3fr {
  display: grid;
  grid-template-columns: repeat (3, 1fr);
  gap: 10px;
}
.gridbox4fr .box11 {
  height: 20px;
  background: wheat;
}
.gridbox4fr .box21 {
  grid-column-start: 2;
  grid-column-end: 5;
  height: 20px;
  background: wheat;
}
.gridbox4fr .box31 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 20px;
  background: wheat;
}
.gridbox4fr .box41 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 20px;
  background: wheat;
}
.gridbox4fr .box51 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 4;
  height: 20px;
  background: wheat;
}
.gridbox4fr .box61 {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 4;
  height: 20px;
  background: wheat;
}
.gridbox4fr .box71 {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
  height: 20px;
  background: wheat;
}
.box12,.box22,.box32,.box42 {
  height: 20px;
  background: wheat;
}
.suggestbox {
  padding: 0 20px 40px 20px;
}
.datalist {
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
.table {
  padding: 5% 0;
  width: 100%;
  background: #e7eeff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pfptext {
  display: none;
}
</style>
