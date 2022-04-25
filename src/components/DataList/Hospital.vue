<template>
  <tr>
    <th>{{ id }}</th>
    <th>{{ hospname }}</th>
    <th>{{ cdate }}</th>
    <!-- <th id="info">
      <button
        @click="
          store.sendPatient(['รายละเอียดผู้ป่วย', 'รายละเอียดผู้ป่วย', name],patient)
        "
      >
        รายละเอียด
      </button>
    </th> -->
  </tr>
</template>

<script>

export default {
  name: "Hospital",
  props: {
    id: { type: String },
    hospname: { type: String, },
    cdate: { type: String },
  },
};
</script>

<style scoped>
th{
    font-size: 20px;
    font-weight: lighter;
    color: rgb(32, 32, 32);
}
</style>