<template>
  <div class="topbox dp-flex-r" style="margin-top:50px">
      <grayBox class="marginLR-25">โรงพยาบาล</grayBox>
      <grayBox class="marginLR-25">ชื่อ - สกุลผู้ป่วย</grayBox>
  </div>
  <div class="buttonbox" style="justify-content:center">
        <button @click="$router.go(-1)" class="previous" >ย้อนกลับ</button>
      </div>
</template>

<script>

export default {
    name:"PL_12"
}
</script>

<style>

</style>