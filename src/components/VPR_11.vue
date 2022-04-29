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

