<template>
  <div class="topbox dp-flex-r" style="margin-top: 50px">
    <div class="doctorbox">
      <h1>โรงพยาบาล</h1>
      <div class="subdocb">
        <input v-model="hospital" type="text" />
      </div>
    </div>
  </div>
  <div class="buttonbox" style="justify-content: center">
    <button @click="save" class="save">บันทึก</button>
    <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
  </div>
</template>

<script>
import test2 from "@/json/test2";
export default {
  name: "SU_12",
  data() {
    return {
      test2,
      hospital: "",
    };
  },
  methods: {
    save() {
      if (this.hospital != "") {
        var date = new Date();
        var string =
          date.getFullYear() +
          "-" +
          ("0" + (date.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + date.getDate()).slice(-2);
        console.log(string);
        this.test2.push({ hospname: "โรงพยาบาล"+this.hospital, cdate: string });
        console.log(test2);
      }
      else{
        alert("กรุณาใส่ชื่อโรงพยาบาลค่ะ");
      }
    },
  },
};
</script>

<style></style>
