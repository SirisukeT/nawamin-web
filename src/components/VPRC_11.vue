<template>
  <div class="bigbox">
    <PatientCard />
    <div class="rightbox">
      <div class="historybox">
        <div class="box111">
          <div class="inputbox">
            <h5>เลขที่ใบส่งตัว</h5>
            <input type="text" id="vn" />
          </div>
          <div class="inputbox">
            <h5>วันที่</h5>
            <input type="text" id="date"/>
          </div>
          <div class="inputbox">
            <h5>แผนก</h5>
            <div class="custom-select">
              <select id="select2">
                <option v-for="(item, index) in departs" :key="index" value="">
                  {{ item.shortname }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="box21">
          <div class="inputbox">
            <h5>จากโรงพยาบาล</h5>
            <div class="custom-select">
              <select id="select2">
                <option v-for="(item, index) in hospital" :key="index" value="">
                  {{ item.hospname }}
                </option>
              </select>
            </div>
          </div>
          <div class="inputbox">
            <h5>เบอร์โทรศัพท์</h5>
            <input type="text" id="tel"/>
          </div>
        </div>
        <div class="box21">
          <div class="inputbox">
            <h5>ถึงโรงพยาบาล</h5>
            <div class="custom-select">
              <select id="select2">
                <option v-for="(item, index) in hospital" :key="index" value="">
                  {{ item.hospname }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>ชื่อ - สกุลผู้ป่วย</h5>
            <input type="text" id="name" />
          </div>
          <div class="inputbox">
            <h5>เลขบัตรประชาชน</h5>
            <input type="text" id="cid" />
          </div>
          <div class="inputbox">
            <h5>เพศ</h5>
            <input type="text" id="sex" />
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>อายุ (ปี)</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>บ้านเลขที่</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>หมู่บ้าน</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>หมู่ที่</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>ตำบล</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>อำเภอ</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>จังหวัด</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox">
            <h5>เหตุผลการส่งตัว</h5>
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="historybox2">
        <div class="box3">
          <div class="inputbox">
            <h5>1. ประวัติการป่วยในอดีตและประวัติครอบครัว</h5>
            <textarea type="text" id="1"/>
          </div>
        </div>
        <div class="box3">
          <div class="inputbox">
            <h5>2. ประวัติการป่วยปัจจุบัน</h5>
            <textarea type="text" id="2"/>
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>3. ผลการตรวจชันสูตรทางห้องทดลองที่สำคัญ</h5>
            <textarea type="text" id="3"/>
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>4. ผลการวินิจฉัยโรคชั้นต้น</h5>
            <textarea type="text" id="4"/>
          </div>
        </div>
        <div class="box3">
          <div class="inputbox3">
            <h5>5. การรักษาหรือยาที่ได้ให้ไว้แล้ว</h5>
            <textarea type="text" id="5"/>
          </div>
        </div>
        <div class="box3">
          <div class="inputbox4">
            <h5>6. สาเหตุที่ส่ง</h5>
            <textarea type="text" id="6"/>
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>7. รายละเอียดอื่น ๆ</h5>
            <textarea type="text" id="7"/>
          </div>
        </div>
        <div class="box3">
          <div class="inputbox4">
            <h5>8. สิทธิการรักษา</h5>
            <textarea type="text" id="8"/>
          </div>
        </div>
      </div>
      <div class="historybox2">
        <h4 style="margin: 10px 0px 0px 10px">การตรวจร่างกาย</h4>
        <div class="inputboxrow">
          <div class="item1">
            <h5>HEENT</h5>
            <div class="custom-select">
              <select id="select2">
                <option value="">
                  {{ vn[0][store.patient.vn].physical.HEENT[0] }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" id="HEENT"/>
          </div>
        </div>

        <div class="inputboxrow">
          <div class="item1">
            <h5>HEART</h5>
            <div class="custom-select">
              <select id="select2">
                <option value="">
                  {{ vn[0][store.patient.vn].physical.HEART[0] }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" id="HEART"/>
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>LUNG</h5>
            <div class="custom-select">
              <select id="select2">
                <option value="">
                  {{ vn[0][store.patient.vn].physical.LUNG[0] }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" id="LUNG"/>
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>Ab</h5>
            <div class="custom-select">
              <select id="select2">
                <option value="">
                  {{ vn[0][store.patient.vn].physical.Ab[0] }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" id="Ab"/>
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>Exr</h5>
            <div class="custom-select">
              <select id="select2">
                <option value="">
                  {{ vn[0][store.patient.vn].physical.Exr[0] }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" id="Exr"/>
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>PE text</h5>
            <div class="custom-select">
              <select id="select2">
                <option value="">
                  {{ vn[0][store.patient.vn].physical.PE_text[0] }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" id="PE"/>
          </div>
        </div>
      </div>
    </div>
    <div class="buttonbox">
      <button @click="
              store.changePage([
                'แจ้งผลการรักษา',
                'รายละเอียดผู้ป่วย',
                $route.params.name,
                'แจ้งผลการรักษา',
              ])
            " id="reportbutton">แจ้งผลการรักษา</button>
      <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
    </div>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
import hospital from "../json/test2.json";
import departs from "../json/departs.json";
import vn from "../json/vn.json";
import { useTitleStore } from "@/stores/TitleStore";
import test from "./test.vue";
import Datepickerthai from './calendar/Datepickerthai.vue';
export default {
  name: "VPRC_11",
  data() {
    return {
      departs,
      status: ["สถานะ", "ปกติ", "ผิดปกติ"],
      sex: ["เพศ", "ชาย", "หญิง", "ไม่ระบุ"],
      hospital,
      vn,
    };
  },
  components: { test,Datepickerthai },
  mounted() {
    const store = useTitleStore();
    document.getElementById("name").defaultValue =
      store.patient.data["pname"] +
      "" +
      store.patient.data["fname"] +
      " " +
      store.patient.data["lname"];
    document.getElementById("cid").defaultValue = store.patient.data["cid"];
    document.getElementById("vn").defaultValue = store.patient.vn;
    console.log(this.vn[0][store.patient.vn]);
    document.getElementById("date").defaultValue = this.vn[0][store.patient.vn].date;
    document.getElementById("tel").defaultValue = this.vn[0][store.patient.vn].tel;
    document.getElementById("sex").defaultValue = this.vn[0][store.patient.vn].sex;
    document.getElementById("1").defaultValue = this.vn[0][store.patient.vn].history.past;
    document.getElementById("2").defaultValue = this.vn[0][store.patient.vn].history.present;
    document.getElementById("3").defaultValue = this.vn[0][store.patient.vn].history.lab;
    document.getElementById("4").defaultValue = this.vn[0][store.patient.vn].history.initial;
    document.getElementById("5").defaultValue = this.vn[0][store.patient.vn].history.drug;
    document.getElementById("6").defaultValue = this.vn[0][store.patient.vn].history.cause;
    document.getElementById("7").defaultValue = this.vn[0][store.patient.vn].history.other;
    document.getElementById("8").defaultValue = this.vn[0][store.patient.vn].history.right;
    document.getElementById("HEENT").defaultValue = this.vn[0][store.patient.vn].physical.HEENT[1];
    document.getElementById("HEART").defaultValue = this.vn[0][store.patient.vn].physical.HEART[1];
    document.getElementById("LUNG").defaultValue =  this.vn[0][store.patient.vn].physical.LUNG[1];
    document.getElementById("Ab").defaultValue =    this.vn[0][store.patient.vn].physical.Ab[1];
    document.getElementById("Exr").defaultValue =   this.vn[0][store.patient.vn].physical.Exr[1];
    document.getElementById("PE").defaultValue =    this.vn[0][store.patient.vn].physical.PE_text[1];


  },
};
</script>

<style scoped>
#select2 {
  width: 98%;
  border-radius: 20px;
  padding-left: 10px;
  height: 40px;
  border: 2px solid;
}
.item1 h5 {
  margin-right: 10px;
  margin-bottom: 0px;
}
.item1 {
  margin-top: 20px;
  padding: 0px 10px;
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: top;
  /* background: red; */
  height: 100px;
  flex-direction: row;
}
.item2 {
  margin-top: 20px;
  width: 60%;
  /* background: skyblue; */
  justify-content: start;
  align-items: top;
  height: 100px;
  display: flex;
}
.inputbox textarea:focus {
  outline: none;
}
.inputbox2 textarea:focus {
  outline: none;
}
.inputbox3 textarea:focus {
  outline: none;
}
.inputbox4 textarea:focus {
  outline: none;
}
.inputbox textarea {
  border-radius: 20px;
  padding: 8px 8px 8px 15px;
  width: 99%;
  height: 150px;
}
.inputbox2 textarea {
  border-radius: 20px;
  padding: 8px 8px 8px 15px;
  width: 99%;
  height: 100px;
}
.inputbox3 textarea {
  border-radius: 20px;
  padding: 8px 8px 8px 15px;
  width: 99%;
  height: 300px;
}
.inputbox4 textarea {
  border-radius: 20px;
  padding: 8px 8px 8px 15px;
  width: 99%;
  height: 50px;
}
.item2 textarea {
  border-radius: 20px;
  padding: 8px 8px 8px 15px;
  width: 98%;
  height: 70px;
}
.item1 .custom-select select {
  width: 100%;
  min-width: 220px;
  border-radius: 20px;
  padding-left: 10px;
  height: 40px;
  border: 2px solid;
}

.item1 .custom-select{
  width: 80%;
}

.inputbox select {
  width: 100%;
  border-radius: 20px;
  padding: 0 0px 0 5px;
  height: 40px;
  border: 2px solid;
}

#dmy {
  padding: 0px 10px 0px;
}
.box3 .inputbox input {
  width: 98.8%;
}
.inputbox input {
  width: 97%;
  height: 40px;
  border-radius: 20px;
  padding-left: 15px;
}


.inputboxrow {
  display: flex;
  flex-direction: row;
  /* background: aquamarine;    */
  height: 100%;
}
.inputbox {
  flex-direction: column;
  /* background: aquamarine;    */
  height: 100%;
}
.box3 {
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr;
  padding: 0 10px;
  /* background: greenyellow; */
}
.box21 {
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  height: 65px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* background: greenyellow; */
}
.box111 {
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  height: 65px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* background: greenyellow; */
}
.bigbox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: black; */
}

.rightbox {
  display: flex;
  flex-direction: column;
  padding: 0 0px;
  /* width: 1000px; */
  /* height: 100%; */
  /* background-color: red; */
  justify-content: top;
  align-items: center;
  /* overflow: hidden; */
}
.historybox {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 20px;
  width: 100%;
  background-color: #c4c4c4;
  border-radius: 30px;
  border: 1.75px solid black;
}
.historybox2 {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  padding: 20px;
  background-color: #c4c4c4;
  border-radius: 30px;
  border: 1.75px solid black;
  padding: 20px;
}
</style>
