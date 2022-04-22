<template>
  <div class="bigbox">
    <div class="topbox">
      <div class="doctorbox">
        <h1>ชื่อ-สกุล</h1>
        <div class="subdocb"></div>
      </div>

      <div class="doctorbox">
        <h1>วันที่</h1>
        <div class="subdocb"></div>
      </div>

      <div class="doctorbox">
        <h1>ถึงวันที่</h1>
        <div class="subdocb"></div>
      </div>
    </div>

    <div class="midbox">
      <div class="addbox">
        <button class="subadd">เพิ่มผู้ป่วย</button>
      </div>
      <div class="addbox">
        <button class="subsearch">ค้นหา</button>
      </div>
    </div>

    <div class="botbox">
      <div class="graphbox">
        <table>
          <tr>
            <th>ลำดับ</th>
            <th>ชื่อ - ชื่อ-สกุล</th>
            <th>วันที่รับตัว</th>
            <th>วันที่ส่งต่อ</th>
            <th>สถานะ</th>
            <th></th>
          </tr>
          <Patient
            @Select="patientInfo"
            v-for="(item, index) in patientList"
            :key="index"
            :name="item.name"
            :pdate="item.pdate"
            :sdate="item.sdate"
            :status="item.status"
          />
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Patient from "./Patient.vue";
export default {
  name: "PL_11",
  data() {
    return {
      patientList: [
        {
          name: "นายชอบ ไร้โรค",
          pdate: "-",
          sdate: "25 / 06 / 64",
          status: "ส่งต่อแล้ว",
        },
      ],
    };
  },
  components: { Patient },
  methods: {
    patientInfo(component) {
      this.$emit("Select", component);
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  text-align: start;
  font-size: 20px;
}
.bigbox {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.topbox {
  margin: 0px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
}
.botbox {
  margin-top: 0px;
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: space-between;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.doctorbox {
  width: 32%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
}

.doctorbox h1 {
  text-align: left;
  font-weight: 800;
  width: 100%;
}
.subdocb {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 375px; */
  height: 60px;
  width: 100%;
  background-color: #c4c4c4;
  border-radius: 15px;
  border: 1.75px solid black;
}
.graphbox {
  margin: 10px;
  width: 100%;
  height: 580px;
  /* display: flex;
  justify-content: space-between; */
  background-color: #e7e7e7;
  /* border: 1px solid black; */
}
.midbox {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* background-color: greenyellow; */
}
.subadd {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: #31996e;
  border-radius: 15px;
  border: 1.75px solid black;
}
.subsearch {
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  background-color: white;
  border-radius: 15px;
  border: 1.75px solid black;
}
</style>
