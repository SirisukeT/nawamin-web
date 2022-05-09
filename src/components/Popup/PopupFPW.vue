<template>
  <div class="popup">
      <div class="popup-inner">
          <slot />
          <div class="popupbox">
          <router-link to="/" class="text">กลับสู่หน้าหลัก</router-link>
          <router-link to="/login" class="text">เข้าสู่ระบบอีกครั้ง</router-link>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['TogglePopup']
}
</script>

<style scoped>
.text{
    display: flex;
    color: white;
    font-size: 20px;
}
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-inner{
    background: #446A46;
    padding: 32px;
    border-radius: 20px;
    border: 2px solid white;
    }
button.popup-save {
  font-weight: bold;
  margin-top: 60px;
  margin-right: 20px;
  width: 150px;
  height: 60px;
  background-color: #333399;
  border-radius: 15px;
  border: 1.75px solid black;
  color: white;
}
button.popup-cancel {
  font-weight: bold;
  margin-top: 60px;
  margin-right: 20px;
  width: 150px;
  height: 60px;
  background-color: #CC0000;
  border-radius: 15px;
  border: 1.75px solid black;
  color: white;
}
.popupbox{
    display: flex;
    justify-content: space-between;
    padding: 0 30px;
}
</style>