<template>
  <main>
    <button @click="() => TogglePopup('buttonTrigger')" class="LoginSubmit">ยืนยันข้อมูล</button>
    <PopupFPW
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>สถานะเปลี่ยนแปลงรหัสผ่านเสร็จสมบูรณ์</h2>
    </PopupFPW>
  </main>
</template>

<script>
import { ref } from "vue";
import PopupFPW from "./Popup/PopupFPW.vue";

export default {
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
    });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };

    return {
      popupTriggers,
      TogglePopup,
    };
  },
  components: { PopupFPW },
  name: "test",
};
</script>

<style scoped>
.LoginSubmit {
  background: #82a284;
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin-top: 20px;
  width: 340px;
  height: 57px;
  border-radius: 50px;
  text-align: center;
  padding: 0 20px;
  margin: 5px 0;
  font-size: large;
  border: 0px;
}
h2{
  margin: 20% 0;
}
.popup-inner h2{
  text-align: center;
  padding: 20px;
  color: white;
}
</style>
