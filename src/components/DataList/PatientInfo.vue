<template>
  <div v-for="(list, index) in info" class="info" :key="index">
    <div class="infoleft">
      <p>{{ list[0] }}</p>
    </div>
    <div class="inforight">
      <p>{{ list[1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientInfo",
  props: ["info"],
  methods: {
    patientInfo(component) {
      this.$emit("select", component);
    },
  },
};
</script>

<style scoped>
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

.info {
  margin-top: 10px;
  width: 90%;
  height: 30px;
  display: flex;
  /* background-color: red; */
}
.infoleft {
  width: 50%;
  /* height: 100%; */
  text-align: left;
  /* background-color: skyblue; */
}
.inforight {
  width: 50%;
  /* height: 100%; */
  text-align: right;
  /* background-color: greenyellow; */
}
</style>
