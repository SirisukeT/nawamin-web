<template>
  <div class="bigbox">
    <PatientCard />
    <refer/>
    <div class="buttonbox">
        <button class="save">บันทึก</button>
        <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
      </div>
  </div>
</template>

<script>
import departs from "../json/departs.json";
import { useTitleStore } from "@/stores/TitleStore";
import refer from './form/refer.vue';
export default {
  components: { refer },
  name: "VPR_11",
  data() {
    return {
      departs,
      status:[
        "สถานะ","ปกติ","ผิดปกติ"
      ],
      sex:["เพศ","ชาย","หญิง","ไม่ระบุ"]
    };
  },
  mounted() {
    const store = useTitleStore();
    document.getElementById("name").defaultValue = store.patient.data["pname"]+''+store.patient.data["fname"]+' '+store.patient.data["lname"];
    document.getElementById("cid").defaultValue = store.patient.data["cid"];
    // const Thai = () => {
    //     var thaiYear = function (ct) {
    //       var leap = 3;
    //       var dayWeek = ["พฤ.", "ศ.", "ส.", "อา.", "จ.", "อ.", "พ."];
    //       if (ct) {
    //         var yearL = new Date(ct).getFullYear() - 543;
    //         leap =
    //           (yearL % 4 == 0 && yearL % 100 != 0) || yearL % 400 == 0 ? 2 : 3;
    //         if (leap == 2) {
    //           dayWeek = ["ศ.", "ส.", "อา.", "จ.", "อ.", "พ.", "พฤ."];
    //         }
    //       }
    //       this.setOptions({
    //         i18n: { th: { dayOfWeek: dayWeek } },
    //         dayOfWeekStart: leap,
    //       });
    //     };
    //     $("#testdate5").datetimepicker({
    //       timepicker: false,
    //       format: "d-m-Y", // กำหนดรูปแบบวันที่ ที่ใช้ เป็น 00-00-0000
    //       lang: "th", // แสดงภาษาไทย
    //       onChangeMonth: thaiYear,
    //       onShow: thaiYear,
    //       yearOffset: 543, // ใช้ปี พ.ศ. บวก 543 เพิ่มเข้าไปในปี ค.ศ
    //       closeOnDateSelect: true,
    //     });
    //   }
    //   Thai();
  },

};
</script>

<style scoped>
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
