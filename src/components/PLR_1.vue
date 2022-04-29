<template>
  <div class="bigbox">
    <PatientCard />
    <div class="rightbox">
      <div class="historybox">
        <h1 class="CurrentDiseases">ผลแลป</h1>
        <div class="line"></div>
        <div class="boxin">
          <div class="info">
            <div class="subinfo">
              <h5>รายการ</h5>
            </div>
            <div class="subinfo">
              <h5>ผลแลป</h5>
            </div>
            <div class="subinfo">
              <h5>วันที่ตรวจ</h5>
            </div>
          </div>
          <div class="info2">
            <div class="subinfo">
              <h5>น้ำตาลในเลือด</h5>
            </div>
            <div class="subinfo">
              <h5>77 mg/dL</h5>
            </div>
            <div class="subinfo">
              <h5>13 กันยายน 2564</h5>
            </div>
          </div>
          <div class="info2">
            <div class="subinfo">
              <h5>ไขมันในเลือด</h5>
            </div>
            <div class="subinfo">
              <h5>120 mg/dL</h5>
            </div>
            <div class="subinfo">
              <h5>13 กันยายน 2564</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="buttonbox">
        <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PLR_1",
};
</script>

<style scoped>
* h5 {
  margin: 0;
}
.buttonbox {
  margin-top: 30px;
  padding-bottom: 60px;
  width: 100%;
  height: 500px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.bigbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* background-color: black; */
}

.rightbox {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 700px;
  /* background-color: red; */
  justify-content: top;
  align-items: center;
}
.historybox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 525px;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid white;
}
.line {
  margin-top: 10px;
  width: 90%;
  height: 2px;
  background-color: black;
}
.boxin {
  margin: 20px;
  padding-bottom: 15px;
  width: 90%;
  height: 95%;
  background-color: #e7e7e7;
  border-radius: 50px;
  border: 1.75px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info {
  margin-top: 30px;
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: whitesmoke;
}
.subinfo {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: skyblue; */
}
.info2 {
  margin-top: 15px;
  width: 90%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

* p {
  margin: 0;
  padding: 0;
  text-align: center;
}
h1.CurrentDiseases {
  padding-top: 10px;
  margin-bottom: 0px;
}

@media (max-width: 1400px) {
  .bigbox{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .leftbox{
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 50%;
  }  
}
@media (max-width: 1200px) {
  
}
@media (max-width: 992px) {
  
}

@media (max-width: 768px) {
  
}
@media (max-width: 670px) {
  
}
</style>
