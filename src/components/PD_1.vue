<template>
  <div class="bigbox">
    <div class="topbox">
      <div class="box">
        <div class="subbox">
          <button
            class="subbox"
            @click="
              store.changePage([
                'ประวัติผู้ป่วย',
                'รายละเอียดผู้ป่วย',
                $route.params.name,
                'ประวัติผู้ป่วย',
              ])
            "
          >
            ประวัติผู้ป่วย
          </button>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <button
            class="subbox"
            @click="
              store.changePage([
                'โรคปัจจุบัน',
                'รายละเอียดผู้ป่วย',
                $route.params.name,
                'โรคปัจจุบัน',
              ])
            "
          >
            โรคปัจจุบัน
          </button>
        </div>
      </div>

      <div class="box">
        <div class="subbox">
          <button
            class="subbox"
            @click="
              store.changePage([
                'ผลแลป',
                'รายละเอียดผู้ป่วย',
                $route.params.name,
                'ผลแลป',
              ])
            "
          >
            ผลแลป
          </button>
        </div>
      </div>

    <div class="box">
      <div class="subbox">
        <button
          class="subbox"
          @click="
            store.changePage([
              'ยาที่ใช้ในปัจจุบัน',
              'รายละเอียดผู้ป่วย',
              $route.params.name,
              'ยาที่ใช้ในปัจจุบัน',
            ])
          "
        >
          ยาที่ใช้ในปัจจุบัน
        </button>
      </div>
    </div>

    <div class="box">
      <div class="subbox">
        <button
          class="subbox"
          @click="
            store.changePage([
              'ใบส่งตัว',
              'รายละเอียดผู้ป่วย',
              $route.params.name,
              'ใบส่งตัว',
            ])
          "
        >
          ใบส่งตัว
        </button>
      </div>
    </div>

    <div class="box">
      <div class="subbox">
        <button
          class="subbox"
          @click="
            store.changePage([
              'ใบแจ้งผล',
              'รายละเอียดผู้ป่วย',
              $route.params.name,
              'ใบแจ้งผล',
            ])
          "
        >
          แบบแจ้งผล<br />การตรวจการรักษา
        </button>
      </div>
    </div>
  </div>
  </div>
  <div class="buttonbox">
    <button @click="$router.go(-1)" class="previous">ย้อนกลับ</button>
  </div>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
export default {
  name: "PD_1",
};
</script>

<style scoped>
h1 {
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
}
.bigbox {
  width: 100%;
  height: 100%;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
}
.topbox {
  margin-bottom: 25px;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(3,1fr);
  gap:40px;
}

.box {
  width: 100%;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c4c4c4;
  border-radius: 15px;
}
.subbox {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 90%;
  height: 100%;
  background-color: #e7e7e7;
  border-radius: 15px;
}

.subbox button {
  background-color: transparent;
  border: 0;
  font-size: 30px;
  font-weight: bold;
}
@media (max-width: 1400px) {

}
/* @media (max-width: 1200px) {
  
}
@media (max-width: 1024px) {
  .subbox button{
    font-size: 20px;
  }
  .box{
    width: 80%;
    height: 120px;
    margin-bottom: 20px;
  }
  .bigbox{
    display: flex;
    flex-direction: row;
    justify-content: center;

  }
  .topbox{
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 0px;
  }
  .botbox{
    width: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 0px;
  }
}
@media (max-width: 960px) {
  .subbox button{
    font-size: 16px;
  }
}
@media (max-width: 768px) {
  .subbox button{
    font-size: 20px;
  }
  .box{
    width: 90%;
    height: 120px;
    margin-bottom: 20px;
  }
  .bigbox{
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .topbox{
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 10%;
  }
  .botbox{
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 0px;
  }
} */
/* @media (max-width: 480px) {
  .subbox button{
    font-size: 20px;
  }
  .box{
    width: 90%;
    height: 120px;
    margin-bottom: 20px;
  }
  .bigbox{
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .topbox{
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 10%;
  }
  .botbox{
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 0px;
  }
} */
</style>
