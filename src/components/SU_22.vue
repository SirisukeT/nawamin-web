<template>
  <div class="topbox dp-flex-r" style="margin-top: 50px">
    <GrayBox class="marginLR-25">โรงพยาบาล</GrayBox>
    <GrayBox class="marginLR-25">ชื่อกลุ่ม</GrayBox>
  </div>
  <div class="buttonbox" style="justify-content: center">
    <button class="save">บันทึก</button>
    <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
  </div>
</template>

<script>
export default {
  name: "SU_22",
};
</script>

<style scoped>
.topbox{
    display: flex;
    flex-direction: column;
}
</style>
