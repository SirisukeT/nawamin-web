<template>
  <table>
    <tr>
      <th>ลำดับ</th>
      <th>วันที่ส่งต่อ</th>
      <th>โรงพยาบาลต้นทาง</th>
      <th>โรงพยาบาลปลายทาง</th>
      <th>ผู้ส่งผลต่อ</th>
      <th></th>
    </tr>
    <tr v-for="(item, index) in transfer" :key="index">
      <th>{{ index+1 }}</th>
      <th>{{ item.sdate }}</th>
      <th>{{ item.ohosp }}</th>
      <th>{{ item.dhosp }}</th>
      <th>{{ item.whos }}</th>
      <th id="info">
        <button
          @click="
            store.sendPatient(
              ['รายละเอียดใบส่งตัว', 'รายละเอียดใบส่งตัว', name],
              patient
            )
          "
        >
          รายละเอียด
        </button>
      </th>
    </tr>
  </table>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
import transfer from "@/json/transfer";
export default {
  name: "PatientRef",
  props: {
    id: { type: Number },
    sdate: { type: String },
    ohos: { type: String },
    dhos: { type: String },
    whos: { type: String },
    department: { type: String },
    patient: {},
  },
  data(){
    return{
      transfer,
    }
  }
};
</script>