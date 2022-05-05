<template>
  <div class="menubox">
    <div class="menulist">
      <img src="@/assets/user-regular.svg" alt="" />
      <p id="logotext">โรงพยาบาลค่ายนวมินทราชินี</p>
    </div>
    <div class="menulist">
      <img src="@/assets/user-regular.svg" alt="" />
      <p id="logotext">โรงพยาบาลค่ายนวมินทราชินี</p>
    </div>
    <div class="menulist">
      <img src="@/assets/user-regular.svg" alt="" />
      <p id="logotext">โรงพยาบาลค่ายนวมินทราชินี</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.menulist img {
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 100%;
}
.menubox {
  background: wheat;
  display: flex;
  flex-direction: column;
}
.menulist {
  display: flex;
}
</style>
