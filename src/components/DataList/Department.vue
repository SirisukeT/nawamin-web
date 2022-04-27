<template>
  <tr>
    <th>{{ id }}</th>
    <th>{{ depart.shortname }}</th>
  </tr>
</template>

<script>

export default {
  name: "Department",
  props: {
    id: {type: String},
    depart:[],
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