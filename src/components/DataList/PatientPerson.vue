<template>
  <tr>
    <th>{{ id }}</th>
    <th>{{ name }}</th>
    <th>{{ pdate }}</th>
    <th>{{ sdate }}</th>
    <th>{{ status }}</th>
    <th id="info">
      <button
        @click="
          store.sendPatient(['รายละเอียดผู้ป่วย', 'รายละเอียดผู้ป่วย', name],patient)
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
  name: "PatientPerson",
  props: {
    id: { type: Number },
    name: { type: String, required: true },
    pdate: { type: String },
    sdate: { type: String },
    status: { type: String },
    something: { type: String },
    patient: {},
  },
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid black;
  text-align: center;
  padding: 8px;
}

th#info {
  width: 150px;
}
th#info button {
  border: 1px solid black;
  background-color: #25957a;
  border-radius: 10px;
  width: 100%;
  color: white;
  font-weight: bold;
}

/* th#info button:hover{
    transform: scale(.95);
} */
</style>
