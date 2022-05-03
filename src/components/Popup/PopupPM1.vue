<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <div class="popupbox">
        <button class="popup-cancel" @click="TogglePopup()">กลับ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["TogglePopup"],
};
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
  margin: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  background: white;
  width: 60vw;
  height: 60vh;
  padding: 32px;
  border-radius: 20px;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
button.popup-cancel {
  font-weight: bold;
  margin-top: 60px;
  margin-right: 20px;
  width: 150px;
  height: 60px;
  background-color: #f4d013;
  border-radius: 15px;
  border: 1.75px solid black;
}
.popupbox {
  display: flex;
  justify-content: center;
}
</style>
