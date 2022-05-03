<template>
  <tr v-for="(item,index) of test2" :key="index">
    <th>{{ index+1 }}</th>
    <th>{{ item.hospname }}</th>
    <th>{{ item.cdate }}</th>
  </tr>
</template>

<script>
import test2 from "@/json/test2"
export default {
  name: "Hospital",
  data(){
    return{
      test2
    }
  },
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