<template>
  <DatepickerLite
    :id-attr="datepickerSetting.id"
    :name-attr="datepickerSetting.name"
    :class-attr="datepickerSetting.class"
    :value-attr="datepickerSetting.value"
    :placeholder-attr="datepickerSetting.placeholder"
    :is-button-type="datepickerSetting.isButtonType"
    :year-minus="datepickerSetting.yearMinus"
    :years-range="100"
    :from="datepickerSetting.fromDate"
    :to="datepickerSetting.toDate"
    :disabled-date="datepickerSetting.disabledDate"
    :locale="datepickerSetting.locale"
    @value-changed="datepickerSetting.changeEvent"
    :disable-input="datepickerSetting.disableInput"
    :show-bottom-button="true"
  />
</template>

<script>
import Datepicker from "vue3-datepicker";
import DatepickerLite from "vue3-datepicker-lite";

export default {
  components: { Datepicker, DatepickerLite },
  data() {
    return {
      datepickerSetting: {
        class: "myDateInput",
        placeholder: "โปรดเลือก",
        yearMinus: -543,
        toDate: "",
        disabledDate: [],
        locale: {
          format: "DD/MM/YYYY",
          weekday: ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"],
          months: [
            "มกราคม",
            "กุมภาพันธ์",
            "มีนาคม",
            "เมษายน",
            "พฤษภาคม",
            "มิถุนายน",
            "กรกฎาคม",
            "สิงหาคม",
            "กันยายน",
            "ตุลาคม",
            "พฤศจิกายน",
            "ธันวาคม",
          ],
          startsWeeks: 0,
          todayBtn: "วันนี้",
          clearBtn: "เคลียร์",
          closeBtn: "ปิด",
        },
        changeEvent: (value) => {
          return value;
        },
        disableInput: false,
      },
    };
  },
};
</script>

<style>
.myDateInput {
  width: 97%;
  height: 40px;
  border-radius: 20px;
  padding-left: 15px;
}
</style>
