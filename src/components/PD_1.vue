<template>
  <div class="bigbox">

    <div class="topbox">

      <div class="box">
        <div class="subbox">
          <b>ประวัติผู้ป่วย</b>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <b>โรคปัจจุบัน</b>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <b>ผลแลป</b>
        </div>
      </div>
    </div>

    <div class="botbox">

      <div class="box">
        <div class="subbox">
          <b>ยาที่ใ่ช้ในปัจจุบัน</b>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <b>ใบส่งตัว</b>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <b>แบบแจ้งผลการตรวจการรักษา</b>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PD1_View",
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
}
.bigbox{
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  /* background-color: black; */
}
.topbox {
  margin: 0px;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
}
.botbox {
  margin-top: -10px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
}
.box {
  width: 320px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
}
/* .patientbox {
  width: 320px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
}
.forwardbox {
  width: 320px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
} */
.subbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 300px;
  height: 120px;
  background-color: #e7e7e7;
  border-radius: 15px;
}
/* .subpatb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 300px;
  height: 120px;
  background-color: #e7e7e7;
  border-radius: 15px;
}
.subforb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 300px;
  height: 120px;
  background-color: #e7e7e7;
  border-radius: 15px;
}
.line {
  margin-top: 5px;
  width: 70%;
  height: 1.5px;
  background-color: black;
}
.graphbox {
  margin-top: 0px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
} */
</style>
