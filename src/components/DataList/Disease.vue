<template>
  <template v-for="(item,index) in diseases" :key="index">
    <div class="info2">
      <div class="infoleft">
        <label>{{item["diseaseN"]}}</label>
      </div>
      <button class="inforight">{{item["date"]}}</button>
    </div>
  </template>
</template>

<script>
export default {
  name: "Disease",
  props: ["diseases"],
};
</script>

<style>
.inforight {
  display: flex;
  width: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-color: greenyellow; */
}
.info2 {
  margin-top: 15px;
  width: 90%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>