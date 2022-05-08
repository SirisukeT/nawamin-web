<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <div class="mainbox">
          <menulist />
          <div class="detailbox">
            <PatientCardNoName />
            <h3 id="suggest">ข้อมูลของฉัน</h3>
            <div class="table">
              <p class="datalist">
                หากท่านต้องการเปลี่ยนแปลงข้อมูล
                กรุณาติดต่อโรงพยาบาลค่ายนวมินทราชินี โทร. 038-273034
              </p>
            </div>
            <div class="suggestbox">
              <h3>ข้อมูลผู้ป่วย</h3>
              <div class="gridbox13">
                <div class="ingrid">
                  <p class="datalist">คำนำหน้าชื่อ</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">ชื่อ-นามสกุล</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <div class="gridbox11">
                <div class="ingrid">
                  <p class="datalist">เพศ</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">วันเกิด</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <div class="gridbox11">
                <div class="ingrid">
                  <p class="datalist">เลขบัตรประชาชน</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">สัญชาติ</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <div class="gridbox11">
                <div class="ingrid">
                  <p class="datalist">เบอร์โทรศัพท์</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <h3>ที่อยู่</h3>
              <div class="gridbox1111">
                <div class="ingrid">
                  <p class="datalist">อาคาร/ตึก</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">เลขที่</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">หมู่ที่</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">ตรอก/ซอย</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <div class="gridbox111">
                <div class="ingrid">
                  <p class="datalist">ตำบล/แขวง</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">อำเภอ/เขต</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">จังหวัด</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <div class="gridbox111">
                <div class="ingrid">
                  <p class="datalist">รหัสไปรษณีย์</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <h3>ผู้ติดต่อฉุกเฉิน</h3>
              <div class="gridbox1">
                <div class="ingrid">
                  <p class="datalist">ชื่อ - นามสกุล ผู้ติดต่อฉุกเฉิน</p>
                  <div class="showbox"></div>
                </div>
              </div>
              <div class="gridbox11">
                <div class="ingrid">
                  <p class="datalist">เบอร์โทรศัพท์</p>
                  <div class="showbox"></div>
                </div>
                <div class="ingrid">
                  <p class="datalist">ความสัมพันธ์</p>
                  <div class="showbox"></div>
                </div>
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
.showbox{
  height: 100%;
  width: 100%;
  border-radius:6px ;
  padding: 5px 10px;
  background: rgb(232, 230, 230);
}
.gridbox1 {
  display: grid;
  margin-bottom: 5%;
  gap: 10px;
}
.gridbox13 {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;
  margin-bottom: 5%;
  flex-direction: column;
}
.gridbox11 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 5%;
}
.gridbox1111 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin-bottom: 5%;
}
.gridbox111 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 5%;
}
.ingrid {
  height: auto;
  /* background: wheat; */
}
.suggestbox {
  padding: 0 0px 40px 0px;
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
  padding: 0px 80px;
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
