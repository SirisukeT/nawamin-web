<template>
  <div class="bigbox">
    <div class="topbox">

      <div class="doctorbox">
        <h1>จำนวนผู้ป่วย</h1>
        <div class="line"></div>
        <div class="subdocb">
          <b>1000คน</b>
        </div>
      </div>

      <div class="patientbox">
        <h1>จำนวนแพทย์</h1>
        <div class="line"></div>
        <div class="subpatb">
          <b>20คน</b>
        </div>
      </div>

      <div class="forwardbox">
        <h1>จำนวนการส่งต่อ</h1>
        <div class="line"></div>
        <div class="subforb">
          <b>200คน</b>
        </div>
      </div>
    </div>

      <div class="botbox">
        <div class="graphbox"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "SO1_View",
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
  margin-top: 50px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
}
.doctorbox {
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
}
.patientbox {
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
}
.forwardbox {
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
}
.subdocb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 300px;
  height: 120px;
  background-color: #e7e7e7;
  border-radius: 15px;
}
.subpatb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 300px;
  height: 120px;
  background-color: #e7e7e7;
  border-radius: 15px;
}
.subforb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
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
}
</style>
