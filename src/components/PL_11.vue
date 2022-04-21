<template>
  <div class="bigbox">
    <div class="topbox">
      <div class="doctorbox">
        <h1>ชื่อ-สกุล</h1>
        <div class="subdocb"></div>
      </div>

      <div class="patientbox">
        <h1>วันที่</h1>
        <div class="subpatb"></div>
      </div>

      <div class="forwardbox">
        <h1>ถึงวันที่</h1>
        <div class="subforb"></div>
      </div>
    </div>

    <div class="midbox">
      <div class="addbox">
        <button class="subadd">เพิ่มผู้ป่วย</button>
      </div>
      <div class="searchbox">
        <button class="subsearch">ค้นหา</button>
      </div>
    </div>

    <div class="botbox">
      <div class="graphbox"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PL11_View",
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  text-align: start;
  font-size: 20px;
}
.bigbox {
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  /* background-color: black; */
}
.topbox {
  margin: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
}
.botbox {
  margin-top: 50px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
/* .doctorbox {
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
} */
.subdocb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3px;
  width: 375px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.subpatb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3px;
  width: 375px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.subforb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -3px;
  width: 375px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.line {
  margin-top: 5px;
  width: 70%;
  height: 1.5px;
  background-color: black;
}
.graphbox {
  margin: 10px;
  width: 100%;
  height: 580px;
  display: flex;
  justify-content: space-between;
  background-color: #e7e7e7;
  border: 1.75px solid black;
}
.midbox{
  padding-top: 10px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  /* background-color: greenyellow; */
}
.subadd {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.subsearch {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
</style>
