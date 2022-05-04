<template>
  <tr v-for="(groupN , keyword ,index) in hospital.group" :key="index">
    <th>{{id}}</th>
    <th>{{ hospital.hospname }}</th>
    <th>{{ keyword }}</th>
    <th>{{ hospital.cdate }}</th>
  </tr>
</template>

<script>
export default {
  name: "GrpupUser",
  props: {
    id: { type: String },
    hospital: [],
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
