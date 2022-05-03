<template>
  <table>
    <tr style="font-size: 25px">
      <th>ลำดับ</th>
      <th>แผนก</th>
      <th>แก้ไข</th>
      <th>ลบ</th>
    </tr>
    <tr v-for="(depart, index) of departs.slice(1)" :key="index">
      <th>{{ index+1 }}</th>
      <th>{{ depart.name }}</th>
      <th><button>แก้ไข</button></th>
      <th><button>ลบ</button></th>
    </tr>
  </table>
</template>

<script>
import departs from "@/json/departs";
export default {
  name: "Department",
  data(){
    return{
      departs
    }
  }
};
</script>

<style scoped>
th {
  font-size: 20px;
  font-weight: lighter;
  color: rgb(32, 32, 32);
}
</style>