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
                <option v-for="(item, index) in depart" :key="index" value="">
                  {{ item.name }}
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
                <option v-for="(item, index) in depart" :key="index" value="">
                  {{ item.name }}
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
                <option v-for="(item, index) in depart" :key="index" value="">
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
                  {{ item.name }}
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
        <div class="box235">
          <div class="inputbox"></div>
        </div>
      </div>
      <div class="buttonbox">
        <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useTitleStore } from "@/stores/TitleStore";
export default {
  name: "APR_1",
  data() {
    return {
      depart: [
        { name: "" },
        {
          spclty: "01",
          name: "อายุรกรรม",
          depcode: "",
          ovstostlink: "01",
          spname: "OPD",
          shortname: "MED",
          ill_visit: null,
          spclty_guid: "004147f4-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "01",
          operation: null,
          provis_code: "00100",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "02",
          name: "ศัลยกรรม",
          depcode: "",
          ovstostlink: "02",
          spname: "OPD",
          shortname: "MED*",
          ill_visit: null,
          spclty_guid: "00414f71-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "02",
          operation: null,
          provis_code: "00200",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "03",
          name: "สูติกรรม",
          depcode: "",
          ovstostlink: "03",
          spname: "OPD",
          shortname: "OBS",
          ill_visit: null,
          spclty_guid: "00415211-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "03",
          operation: null,
          provis_code: "00300",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "04",
          name: "นรีเวชกรรม",
          depcode: "",
          ovstostlink: "04",
          spname: "OPD",
          shortname: "OBS*",
          ill_visit: null,
          spclty_guid: "00415303-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "04",
          operation: null,
          provis_code: "00400",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "05",
          name: "กุมารเวชกรรม",
          depcode: "",
          ovstostlink: "05",
          spname: "OPD",
          shortname: "ORT",
          ill_visit: null,
          spclty_guid: "004153e0-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "05",
          operation: null,
          provis_code: "00500",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "06",
          name: "โสต ศอ นาสิก",
          depcode: "",
          ovstostlink: "06",
          spname: "OPD",
          shortname: "ORT*",
          ill_visit: null,
          spclty_guid: "004154d7-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "06",
          operation: null,
          provis_code: "00600",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "07",
          name: "จักษุ",
          depcode: "",
          ovstostlink: "07",
          spname: "OPD",
          shortname: "SUR",
          ill_visit: null,
          spclty_guid: "004155f2-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "07",
          operation: null,
          provis_code: "00700",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "08",
          name: "ศัลยกรรมกระดูก",
          depcode: "",
          ovstostlink: "08",
          spname: "OPD",
          shortname: "SUR*",
          ill_visit: null,
          spclty_guid: "0041571a-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "08",
          operation: null,
          provis_code: "00800",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "09",
          name: "จิตเวช",
          depcode: "",
          ovstostlink: "09",
          spname: "OPD",
          shortname: "GYA",
          ill_visit: null,
          spclty_guid: "004157f7-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "10",
          operation: null,
          provis_code: "00900",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "10",
          name: "รังสีวิทยา",
          depcode: "",
          ovstostlink: "10",
          spname: "X-Ray",
          shortname: "GYA*",
          ill_visit: null,
          spclty_guid: "004158d5-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "10",
          operation: null,
          provis_code: "01000",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "11",
          name: "ทันตกรรม",
          depcode: "",
          ovstostlink: "11",
          spname: "Dental",
          shortname: "BAB",
          ill_visit: "N",
          spclty_guid: "004159b3-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "11",
          operation: null,
          provis_code: "01100",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "12",
          name: "อุบัติเหตุฉุกเฉิน",
          depcode: null,
          ovstostlink: "12",
          spname: "OPD",
          shortname: null,
          ill_visit: "N",
          spclty_guid: "00415ad7-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "02",
          operation: null,
          provis_code: "00200",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "13",
          name: "กายภาพบำบัด",
          depcode: null,
          ovstostlink: "12",
          spname: "ส่งเสริม",
          shortname: "PCU",
          ill_visit: null,
          spclty_guid: "00415bf2-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "12",
          operation: null,
          provis_code: "01300",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "14",
          name: "แพทย์แผนไทย",
          depcode: null,
          ovstostlink: "12",
          spname: "OPD",
          shortname: null,
          ill_visit: null,
          spclty_guid: "00415ce6-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "12",
          operation: null,
          provis_code: "01400",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "15",
          name: "PCU ในเขต",
          depcode: null,
          ovstostlink: "12",
          spname: "OPD",
          shortname: null,
          ill_visit: null,
          spclty_guid: "00415dce-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "12",
          operation: null,
          provis_code: "01500",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "16",
          name: "เวชปฏิบัติทั่วไป",
          depcode: null,
          ovstostlink: null,
          spname: "OPD",
          shortname: "GP",
          ill_visit: null,
          spclty_guid: "00415ead-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "12",
          operation: null,
          provis_code: "01600",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
        {
          spclty: "99",
          name: "อื่น ๆ",
          depcode: "",
          ovstostlink: "12",
          spname: "ไม่ทราบ",
          shortname: "",
          ill_visit: null,
          spclty_guid: "00415fce-6b97-11e2-9173-e41f13ede66a",
          no_service_charge: null,
          no_service_charge_doctor: null,
          oldcode: null,
          nhso_code: "12",
          operation: null,
          provis_code: "09900",
          hos_guid: null,
          no_export_43: null,
          display_order: null,
          allow_online_appointment: null,
          active_status: null,
        },
      ],
    };
  },
  mounted() {
    const store = useTitleStore();
    document.getElementById("name").defaultValue = store.patient.data["pname"]+''+store.patient.data["fname"]+' '+store.patient.data["lname"];
    document.getElementById("cid").defaultValue = store.patient.data["cid"];
  },
};
</script>

<style scoped>
.lb {
  width: 20%;
  background: red;
  height: 50%;
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
select {
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
.box235 {
  margin-top: 10px;
  padding-left: 10px;
  width: 100%;
  height: 65px;
  display: grid;
  grid-template-columns: 2fr 3fr 5fr;
  /* background: greenyellow; */
}
.bigbox {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
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
  height: 300vh;
  background-color: #c4c4c4;
  border-radius: 30px;
  border: 1.75px solid black;
}
.historybox3 {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
  height: 1000px;
  background-color: #c4c4c4;
  border-radius: 30px;
  border: 1.75px solid black;
}
</style>
