<template>
  <tr>
    <th>{{ id }}</th>
    <th>{{ name }}</th>
    <th>{{ pdate }}</th>
    <th>{{ sdate }}</th>
    <th>{{ status }}</th>
    <th id="info">
      <button
        @click="patientInfo(['/PatientDetailsView', 'รายชื่อผู้ป่วย', name])"
      >
        รายละเอียด
      </button>
    </th>
  </tr>
</template>

<script>
export default {
  name: "PatientPerson",
  props: {
    id: { type: String },
    name: { type: String, required: true },
    pdate: { type: String },
    sdate: { type: String },
    status: { type: String },
    something: { type: String },
  },
  methods: {
    patientInfo(component) {
      this.$emit("select", component);
    },
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
