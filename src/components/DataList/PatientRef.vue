<template>
  <table>
    <tr>
      <th>ลำดับ</th>
      <th>วันที่ส่งต่อ</th>
      <th>โรงพยาบาลต้นทาง</th>
      <th>โรงพยาบาลปลายทาง</th>
      <th>ผู้ส่งต่อ</th>
      <th>แผนก</th>
      <th></th>
    </tr>
    <tr v-for="(item, index) in refer" :key="index">
      <th>{{ index+1 }}</th>
      <th>{{ item.sdate }}</th>
      <th>{{ item.ohosp }}</th>
      <th>{{ item.dhosp }}</th>
      <th>{{ item.whos }}</th>
      <th>{{ item.depart }}</th>
      <th id="info">
        <button
          @click="
            store.callRef([
              'รายละเอียดใบส่งตัว',
              'รายละเอียดผู้ป่วย',
              $route.params.name,
              'รายละเอียดใบส่งตัว',
            ],item.vn)
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
import refer from "@/json/refer";
export default {
  name: "PatientRef",
  props: {
    id: { type: Number },
    sdate: { type: String },
    ohosp: { type: String },
    dhosp: { type: String },
    whos: { type: String },
    department: { type: String },
    patient: {},
  },
  data() {
    return {
      refer,
    };
  },
};
</script>

<style scoped>
th {
  font-size: 20px;
  font-weight: lighter;
  color: rgb(32, 32, 32);
}
</style>