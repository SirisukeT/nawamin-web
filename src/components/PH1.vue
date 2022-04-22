<template>
<div class="bigbox">
  <div class="leftbox">
      <div class="ppcolor">
        <div class="pp">
          <img src="../assets/user-regular.svg" alt="" />
        </div>
      </div>
      <div class="phptext">
        <h3>นายชอบ ไร้โรค</h3>
      </div>
  </div>
  <div class="rightbox">
      <h1 class="rb">ประวัติผู้ป่วย</h1>
      <div class="line"></div>
      <div class="historybox">
          <div class="boxin">
            <div class="info">
              <div class="infoleft">
                <p>เลขบัตรประจำตัวประชาชน</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>วันเกิด</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>อายุ</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>เพศ</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>ศาสนา</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>เบอร์โทรศัพท์</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>เบอร์โทรญาติ</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>ที่อยู่</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p></p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p></p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>ตำบล/แขวง</p>
              </div>
              <div class="inforight"></div>
            </div><div class="info">
              <div class="infoleft">
                <p>อำเภอ/เขต</p>
              </div>
              <div class="inforight"></div>
            </div><div class="info">
              <div class="infoleft">
                <p>จังหวัด</p>
              </div>
              <div class="inforight"></div>
            </div>
            <div class="info">
              <div class="infoleft">
                <p>รหัสไปรษณีย์</p>
              </div>
              <div class="inforight"></div>
            </div>
          </div>
      </div>
      <div class="buttonbox">
        <button class="return">ย้อนกลับ</button>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PH_1",
};
</script>

<style scoped>
.buttonbox{
  width: 100%;
  height: 50px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.return {
  margin-top: 40px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: #F4D013;
  border-radius: 15px;
  border: 1.75px solid black;
}
.pp img{
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 100%;
}
.ppcolor{
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}
.phptext{
  margin-top: 20px;
  width: 100%;
  height: 100px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  text-align: center;
}
rb{
    margin: 0px;
    padding: 0px;
}
.bigbox{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  /* background-color: black; */
}
.leftbox{
    margin-left: 20px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 600px;
    /* background-color: blue; */
}
.rightbox{
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 100%;
    /* background-color: red; */
    justify-content: top;
    align-items: center;
}
.historybox{
    display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 525px;
  background-color: #c4c4c4;
  border-radius: 50px;
  border: 1.75px solid white;
}
.line {
  margin-top: 10px;
  width: 90%;
  height: 2px;
  background-color: black;
}
.boxin{
  margin: 20px;
  width: 100%;
  height: 95%;
  background-color: #e7e7e7;
  border-radius: 50px;
  border: 1.75px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info{
  margin-top: 10px;
  width: 90%;
  height: 24px;
  display: flex;
  /* background-color: red; */
}
.infoleft{
  width: 50%;
  height: 100%;
  align-items: flex-start;
  /* background-color: skyblue; */
}
.inforight{
  width: 50%;
  height: 100%;
  align-items: flex-end;
  /* background-color: greenyellow; */
}
</style>