<template>
  <div class="bigbox">
    <PatientCard />
    <div class="rightbox">
      <div class="historybox">
        <h1 class="CurrentDiseases">โรคปัจจุบัน</h1>
        <div class="line"></div>
        <div class="boxin">
          <div class="info">
            <p>โรค</p>
          </div>
          <div class="info2">
            <div class="infoleft">
              <h5>วันที่พบแพทย์ล่าสุด</h5>
            </div>
            <div class="inforight">
              <h5>13 กันยายน 2564</h5>
            </div>
          </div>
          <div class="info2">
            <div class="infoleft">
              <h5>อาการ/ข้อบ่งชี้โรค</h5>
            </div>
            <div class="inforight">
              <h5>อาการ/ข้อบ่งชี้โรค</h5>
            </div>
          </div>
          <div class="info2">
            <div class="infoleft">
              <h5>ตรวจตาล่าสุด</h5>
            </div>
            <div class="inforight">
              <h5>13 กันยายน 2564</h5>
            </div>
          </div>
          <div class="info2">
            <div class="infoleft">
              <h5>ตรวจเท้าล่าสุด</h5>
            </div>
            <div class="inforight">
              <h5>13 กันยายน 2564</h5>
            </div>
            <button class="inforight">13 กันยายน 2564</button>
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
  name: "PCD_12",
};
</script>

<style scoped>
.buttonbox {
  margin-top: 30px;
  padding-bottom: 60px;
  width: 100%;
  height: 500px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.pp img {
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 100%;
}
.ppcolor {
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bigbox {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* background-color: black; */
}
.leftbox {
  margin-left: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 600px;
  /* background-color: blue; */
}
.rightbox {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  justify-content: center;
  background-color: whitesmoke;
}
.infoleft {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: skyblue; */
}
.inforight {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: greenyellow; */
}
.info2 {
  margin-top: 15px;
  width: 90%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.box {
  width: 48%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 2px solid white;
}

.box h1 {
  margin-top: 10px;
  font-size: 25px;
}
.subbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 0px 10px 0px;
  width: 90%;
  height: 90%;
  background-color: #e7e7e7;
  border-radius: 15px;
  font-size: 50px;
  border: 2px solid white;
}
.subbox img {
  width: 20%;
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
</style>
