<template>
  <div class="bigbox">
    <PatientCard />
    <div class="rightbox">
      <h1 class="rb">ประวัติผู้ป่วย</h1>
      <div class="line"></div>
      <div class="historybox">
        <div class="boxin">
          <PatientInfo :info="patientInfo" />
        </div>
      </div>
      <div class="buttonbox">
        <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PH_1",
  props: ["previous"],
  data() {
    return {
      patientInfo: [
        ["เลขบัตรประจำตัวประชาชน", "1234567891234"],
        ["วันเกิด", "1 มกราคม 2000"],
        ["อายุ", 22],
        ["เพศ", "ชาย"],
        ["ศาสนา", "พุทธ"],
        ["เบอร์โทรศัพท์", "1234567891"],
        ["เบอร์โทรญาติ", "9876543219"],
        ["ที่อยู่", "xx/xxx"],
        ["ตำบล/แขวง", "ตำบล"],
        ["อำเภอ/เขต", "อำเภอ"],
        ["จังหวัด", "จังหวัด"],
        ["รหัสไปรษณีย์", "1150"],
      ],
    };
  },
  methods: {
    previousPage() {
      this.$emit("selectSub", [this.previous]);
    },
  },
};
</script>

<style scoped>
.pp img {
  width: 170px;
  height: 170px;
  background-color: white;
  border-radius: 100%;
}
.ppcolor {
  width: 200px;
  height: 200px;
  background-color: red;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.phptext {
  margin-top: 20px;
  width: 100%;
  height: 100px;
  /* background-color: greenyellow; */
  display: flex;
  justify-content: center;
  text-align: center;
}
rb {
  margin: 0px;
  padding: 0px;
}

.bigbox {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  /* background-color: black; */
}
.leftbox {
  margin-left: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 600px;
  /* background-color: blue; */
}
.rightbox {
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100%;
  /* background-color: red; */
  justify-content: top;
  align-items: center;
}
.historybox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 525px;
  background-color: #c4c4c4;
  border-radius: 50px;
  border: 1.75px solid white;
}
.line {
  margin-top: 10px;
  width: 90%;
  border-bottom: 2px solid black;
}
.boxin {
  margin: 20px;
  width: 100%;
  height: 95%;
  background-color: #e7e7e7;
  border-radius: 50px;
  border: 1.75px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
}
</style>
