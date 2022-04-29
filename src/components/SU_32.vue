<template>
  <div class="topbox dp-flex-r" style="margin-top: 50px">
    <GrayBox class="marginLR-25">โรงพยาบาล</GrayBox>
    <GrayBox class="marginLR-25">ชื่อกลุ่ม</GrayBox>
  </div>
  <div class="topbox dp-flex-r" >
    <GrayBox class="marginLR-25">ชื่อผู้ใช้งาน</GrayBox>
    <GrayBox class="marginLR-25">นามสกุลผู้ใช้งาน</GrayBox>
  </div>
  <div class="topbox dp-flex-r" >
    <GrayBox class="marginLR-25">ตำแหน่งงาน</GrayBox>
  </div>
  <div class="topbox dp-flex-r" >
    <GrayBox class="marginLR-25">User</GrayBox>
    <GrayBox class="marginLR-25">Password</GrayBox>
  </div>
  <div class="buttonbox" style="justify-content: center">
    <button class="save">บันทึก</button>
    <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
  </div>
</template>

<script>
export default {
  name: "SU_32",
};
</script>
<style scoped>
.topbox{
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 40% 40%;
}
.doctorbox {
  width: 85%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
}

.doctorbox h1 {
  margin: 10px 0 8px 0;
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  width: 100%;
}

.subdocb {
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 375px; */
  height: 60px;
  width: 100%;
  background-color: #c4c4c4;
  border-radius: 10px;
  border: 1.75px solid black;
}

.subdocb input{
  border: 2px solid black;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 20px;
}
</style>
