<template>
  <div class="bigbox">
    <div class="topbox">
      <div class="doctorbox">
        <h1 class="ta-c">จำนวนผู้ป่วย (คน)</h1>
        <div class="line"></div>
        <div class="subdocb">
          <b>1000</b>
        </div>
      </div>

      <div class="doctorbox ta-c">
        <h1>จำนวนแพทย์ (คน)</h1>
        <div class="line"></div>
        <div class="subdocb">
          <b>20</b>
        </div>
      </div>

      <div class="doctorbox ta-c">
        <h1>จำนวนการส่งต่อ (คน)</h1>
        <div class="line"></div>
        <div class="subdocb">
          <b>200</b>
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
  name: "SO_1",
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
}
.bigbox {
  width: 100%;
  /* height: 200vh; */
  display: flex;
  flex-direction: column;
  /* background-color: black; */
}
.topbox {
  margin: 0px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.botbox {
  margin-top: 20px;
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

.doctorbox h1 {
  font-size: 25px;
  text-align: center;
}
.subdocb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 80%;
  height: 120px;
  background-color: #e7e7e7;
  border-radius: 15px;
  font-size: 50px;
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
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
}
@media (max-width: 992px){
  .topbox {
  margin: 0px;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
  .doctorbox{
    margin-bottom:10px ;
    width: 100%;
  }
}
</style>
