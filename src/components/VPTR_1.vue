<template>
  <div class="bigbox">
    <PatientCard />
    <div class="rightbox">
      <div class="historybox">
        <div class="box111">
          <div class="inputbox">
            <h5>เลขที่ใบส่งตัว</h5>
            <input type="text" />
          </div>
          <div class="inputbox">
            <h5>วันที่</h5>
            <input type="date" id="dmy" />
          </div>
          <div class="inputbox">
            <h5>แผนก</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in hospital" :key="index" value="">
                  {{ item.hospname }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="box21">
          <div class="inputbox">
            <h5>จากโรงพยาบาล</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in hospital" :key="index" value="">
                  {{ item.hospname }}
                </option>
              </select>
            </div>
          </div>
          <div class="inputbox">
            <h5>เบอร์โทรศัพท์</h5>
            <input type="text" />
          </div>
        </div>
        <div class="box21">
          <div class="inputbox">
            <h5>ถึงโรงพยาบาล</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in departs" :key="index" value="">
                  {{ item.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="box111">
          <div class="inputbox">
            <h5>ชื่อ - สกุลผู้ป่วย</h5>
            <input type="text" id="name"/>
          </div>
          <div class="inputbox">
            <h5>เลขบัตรประชาชน</h5>
            <input type="text" id="cid" />
          </div>
          <div class="inputbox">
            <h5>เพศ</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in sex" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
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
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox">
            <h5>2. ประวัติการป่วยปัจจุบัน</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>3. ผลการตรวจชันสูตรทางห้องทดลองที่สำคัญ</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>4. ผลการวินิจฉัยโรคชั้นต้น</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox3">
            <h5>5. การรักษาหรือยาที่ได้ให้ไว้แล้ว</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox4">
            <h5>6. สาเหตุที่ส่ง</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox2">
            <h5>7. รายละเอียดอื่น ๆ</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox4">
            <h5>8. สิทธิการรักษา</h5>
            <textarea type="text" />
          </div>
        </div>
      </div>
      <div class="historybox2">
        <h4 style="margin: 10px 0px 0px 10px">การตรวจร่างกาย</h4>
        <div class="inputboxrow">
          <div class="item1">
            <h5>HEENT</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>

        <div class="inputboxrow">
          <div class="item1">
            <h5>HEART</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>LUNG</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>Ab</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>Exr</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
        <div class="inputboxrow">
          <div class="item1">
            <h5>PE text</h5>
            <div class="custom-select">
              <select>
                <option v-for="(item, index) in status" :key="index" value="">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="item2">
            <textarea type="text" />
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="historybox2">
        <div class="box3">
          <div class="inputbox3">
            <h5>1. ผลการชันสูตรที่สำคัญ</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox3">
            <h5>2. การวินิจฉัยโรคขั้นสุดท้าย</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox3">
            <h5>3. การรักษาที่ให้</h5>
            <textarea type="text" />
          </div>
        </div>
        <div class="box3">
          <div class="inputbox3">
            <h5>4. ขอให้ดำเนินการต่อ ดังนี้</h5>
            <textarea type="text" />
          </div>
        </div>
      </div>

      <div class="buttonbox">
        <button class="save">บันทึก</button>
        <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
      </div>
    </div>
  </div>
</template>

<script>
import hospital from "../json/test2.json"
import departs from "../json/departs.json";
import { useTitleStore } from "@/stores/TitleStore";
export default {
  name: "VPTR_1",
  data() {
    return {
      departs,
      hospital,
    };
  },
  mounted() {
    const store = useTitleStore();
    document.getElementById("name").defaultValue =
      store.patient.data["pname"] +
      "" +
      store.patient.data["fname"] +
      " " +
      store.patient.data["lname"];
    document.getElementById("cid").defaultValue = store.patient.data["cid"];
  },
};
</script>

<style scoped>
.line {
  margin-top: 30px;
  margin-bottom: 20px;
  width: 90%;
  border-bottom: 6px solid black;
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
  width: 250px;
  border-radius: 20px;
  padding-left: 10px;
  height: 28px;
  border: 2px solid;
}
.inputbox select {
  width: 97%;
  border-radius: 20px;
  padding-left: 10px;
  height: 28px;
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
  padding-left: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr;
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
  height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* background-color: black; */
}

.rightbox {
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100%;
  /* background-color: red; */
  justify-content: top;
  align-items: center;
  /* overflow: hidden; */
}
.historybox {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  height: 650px;
  background-color: #c4c4c4;
  border-radius: 30px;
  border: 1.75px solid black;
}
.historybox2 {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  /* height: 300vh; */
  background-color: #c4c4c4;
  border-radius: 30px;
  border: 1.75px solid black;
}
.historybox3 {
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  height: 1000px;
  background-color: #c4c4c4;
  border-radius: 30px;
  border: 1.75px solid black;
}
</style>
