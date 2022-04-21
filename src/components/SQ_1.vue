<template>
  <div class="box">
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
  <div class="grapgbox"></div>
  <!-- <Sidebar /> -->
</template>

<script>
export default {
  name: "SO1_View",
};
</script>

<style scoped>
h1{
  margin-top:10px ;
  text-align: center;
  font-size: 20px;
}
.box {
  margin: 0px;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
}
.doctorbox {
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius:15px ;
}
.patientbox {
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius:15px ;
}
.forwardbox {
  width: 350px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius:15px ;
}
.subdocb{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 300px;
  height: 120px;
  background-color: #E7E7E7;
  border-radius:15px ;
}
.subpatb{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 300px;
  height: 120px;
  background-color: #E7E7E7;
  border-radius:15px ;
}
.subforb{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 300px;
  height: 120px;
  background-color: #E7E7E7;
  border-radius:15px ;
}
.line{
  margin-top: 5px;
  width: 70%;
  height: 1.5px;
  background-color: black;
}
.graphbox
{
  margin: 0px;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
}

</style>
