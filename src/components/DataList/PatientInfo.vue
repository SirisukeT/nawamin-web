<template>
  <div v-for="(key, index) in keyword" class="info" :key="index">
    <div class="infoleft">
      <!-- <p>{{ keyword[index] }}</p> -->
      <p>{{ key[1] }}</p>
    </div>
    <div class="inforight">
      <p v-if="store.getSomething(key[0],info)" >{{ store.patient.text }}</p>
      <p v-else>{{ info[key[0]] }}</p>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
// import religion from '@/json/religion.json'
export default {
  name: "PatientInfo",
  props: ["info"],
  methods: {
    patientInfo(component) {
      this.$emit("select", component);
    },
  },
  data() {
    return {
      keyword: [
        ["cid", "เลขบัตรประจำตัวประชาชน"],
        ["birthday", "วันเกิด"],
        ["age", "อายุ"],
        ["sex", "เพศ"],
        ["religion", "ศาสนา"],
        ["hometel", "เบอร์โทรศัพท์"],
        ["informtel", "เบอร์โทรญาติ"],
        ["addrpart", "ที่อยู่"],
        ["tmbpart", "ตำบล/แขวง"],
        ["amppart", "อำเภอ/เขต"],
        ["chwpart", "จังหวัด"],
        ["po_code", "รหัสไปรษณีย์"]
      ],
      data: "",
    };
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
  height: 40px;
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
