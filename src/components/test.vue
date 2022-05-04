<template>
  <main>
    <button @click="() => TogglePopup('buttonTrigger')" id="savebutton">บันทึก</button>
    <Popup
      v-if="popupTriggers.buttonTrigger"
      :TogglePopup="() => TogglePopup('buttonTrigger')"
    >
      <h2>คุณแน่ใจแล้วใช่ไหมที่จะทำการบันทึกข้อมูล</h2>
    </Popup>
  </main>
</template>

<script>
import { ref } from "vue";
import Popup from "./Popup/Popup.vue";

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
  components: { Popup },
  name: "test",
};
</script>

<style scoped>
.popup-inner h2{
  text-align: center;
  background: white;
  padding: 20px;
  border-radius:40px ;
  border: 3px solid black;
}
</style>
