<template>
  <div class="bigbox">
    <PatientCard />
    <div class="rightbox">
      <div class="historybox">
        <h1 class="CurrentDiseases">โรคปัจจุบัน</h1>
        <div class="line"></div>
        <div class="boxin">
          <div class="info">
            <div class="infoleft">
              <label>โรค</label>
            </div>
            <div class="inforight">
              <label>วันที่พบแพทย์ล่าสุด</label>
            </div>
          </div>
          <div class="info2">
            <div class="infoleft">
              <label>สภาวะหัวใจล้มเหลวเฉียบพลัน</label>
            </div>
            <button class="inforight">13 กันยายน 2564</button>
          </div>
          <div class="info2">
            <div class="infoleft">
              <label>โรคเบาหวาน</label>
            </div>
            <button class="inforight">13 กันยายน 2564</button>
          </div>
          <div class="info2">
            <div class="infoleft">
              <label>ความดันโลหิตสูง</label>
            </div>
            <button class="inforight">13 กันยายน 2564</button>
          </div>
        </div>
      </div>
      <div class="botbox">
        <div class="box">
          <h1>ความดัน</h1>
          <div class="line"></div>
          <div class="subbox">
            <img src="/public/pulse.png" alt="" />
            <div class="line2"></div>
            <p>
              <label>140</label>SYS<br />
              <label>90</label>DIA
            </p>
            <div class="line2"></div>
            <p>
              ตรวจเมื่อ<br />
              13 ก.ย. 2564
            </p>
          </div>
        </div>
        <div class="box">
          <h1>ชีพจร</h1>
          <div class="line"></div>
          <div class="subbox">
            <img src="/public/pulse2.png" alt="" />
            <div class="line2"></div>
            <p><label>100</label>BPM</p>
            <div class="line2"></div>
            <p>
              ตรวจเมื่อ<br />
              13 ก.ย. 2564
            </p>
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
  name: "PCD_11",
  props: ["previous"],
  methods: {},
};
</script>

<style scoped>
.subbox p {
  font-size: 20px;
  text-align: center;
}
.subbox label {
  font-size: 40px;
  font-weight: 1000;
}
.CurrentDiseases {
  margin-top: 10px;
}
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

.rightbox {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  /* background-color: red; */
  justify-content: top;
  align-items: center;
}
.botbox {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  /* background: pink; */
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
.line2 {
  width: 2px;
  height: 90%;
  background-color: black;
}
.boxin {
  padding-bottom: 20px;
  margin: 20px;
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
.infoleft {
  display: flex;
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: skyblue; */
}

div.info label {
  font-weight: bold;
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
</style>
