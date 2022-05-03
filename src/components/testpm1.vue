<template>
  <main>
    <button @click="() => TogglePopup('buttonTrigger')" id="savebutton">บันทึก</button>
    <PopupPM1
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>รายละเอียดอาการ</h2>
    </PopupPM1>
  </main>
</template>

<script>
import { ref } from "vue";
import PopupPM1 from "./Popup/PopupPM1.vue";

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
  components: { PopupPM1 },
  name: "test",
};
</script>

<style scoped>
.popup-inner h2{
  text-align: center;
  padding: 20px;
  border-bottom: 3px solid black;
}
</style>
