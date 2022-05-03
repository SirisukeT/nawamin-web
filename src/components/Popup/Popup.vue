<template>
  <div class="popup">
      <div class="popup-inner">
          <slot />
          <div class="popupbox">
          <button class="popup-save" @click="TogglePopup()">
              ตกลง
          </button>
          <button class="popup-cancel" @click="TogglePopup()">
              ยกเลิก
          </button>
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
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: center;
}
.popup-inner{
    background-image: linear-gradient(
    to bottom,
    rgb(37, 149, 122),
    rgb(205, 218, 215)
  );
    padding: 32px;
    border-radius: 20px;
    border: 4px solid black;
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
    justify-content: center;
}
</style>