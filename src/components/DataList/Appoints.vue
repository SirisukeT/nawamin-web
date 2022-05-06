<template>
  <table>
    <tr style="font-size: 25px" class="bold" id="first">
      <th>ลำดับ</th>
      <th>วันที่นัด</th>
      <th>เวลาที่นัด</th>
      <th>ห้องตรวจที่</th>
      <th>แพทย์ผู้ตรวจ</th>
      <th>แผนก</th>
      <th>เหตุการนัด</th>

    </tr>
    <tr v-for="(appoint, index) of appoints" :key="index">
      <th>{{ index+1 }}</th>
      <th>{{ appoint.adate }}</th>
      <th>{{ appoint.time }}</th>
      <th>{{ appoint.room }}</th>
      <th>{{ appoint.whos }}</th>
      <th>{{ appoint.depart }}</th>
      <th>{{ appoint.details }}</th>
    </tr>
  </table>
</template>

<script>
import appoints from "@/json/appoints";
export default {
  name: "Appoints",
  data(){
    return{
      appoints
    }
  }
};
</script>

<style scoped>
.bold th{
  font-weight: bold;
}

#first{
  border-bottom: 1px solid black;
}

th {
  font-size: 20px;
  font-weight: lighter;
  color: rgb(32, 32, 32);
  border: 0;
}
</style>