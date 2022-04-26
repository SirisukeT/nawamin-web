<template>
  <tr>
    <th>{{ id }}</th>
    <th>{{ sdate }}</th>
    <th>{{ ohosp }}</th>
    <th>{{ dhosp }}</th>
    <th>{{ whos }}</th>
    <th>{{ department }}</th>
    <th id="info">
      <button
        @click="
          store.sendPatient(['รายละเอียดใบส่งตัว', 'รายละเอียดใบส่งตัว', name],patient)
        "
      >
        รายละเอียด
      </button>
    </th>
  </tr>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
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
};
</script>