<template>
  <template v-for="(groupN,keywordG) in hospital.group" >
    <tr v-for="(User, index) in groupN" :key="index">
      <th>{{ incrementIndex(indexx) }}</th>
      <th>{{ hospital.hospname }}</th>
      <th>{{ keywordG }}</th>
      <th>{{ User }}</th>
      <th>{{ hospital.cdate }}</th>
    </tr>
  </template>
</template>

<script>
export default {
  name: "User",
  data(){
    return{
      indexx: 1,
    }
  },
  props: {
    id: { type: String },
    hospital: [],
  },
  methods:{
    incrementIndex(indexx){
      console.log(indexx);
      indexx++;
      this.indexx = indexx;
      return indexx;
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
