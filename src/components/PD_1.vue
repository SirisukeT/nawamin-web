<template>
  <div class="bigbox">

    <div class="topbox">

      <div class="box">
        <div class="subbox">
          <button>ประวัติผู้ป่วย</button>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <button>โรคปัจจุบัน</button>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <button>ผลแลป</button>
        </div>
      </div>
    </div>

    <div class="botbox">

      <div class="box">
        <div class="subbox">
          <button>ยาที่ใ่ช้ในปัจจุบัน</button>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <button>ใบส่งตัว</button>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <button>แบบแจ้งผลการตรวจการรักษา</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "PD_1",
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
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbox {
  margin-bottom: 25px;
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
  width: 30%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
}
.subbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 95%;
  height: 100%;
  background-color: #e7e7e7;
  border-radius: 15px;
}
</style>
