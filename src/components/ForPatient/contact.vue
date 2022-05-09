<template>
  <div class="content">
    <section class="module">
      <div class="module__content">
        <!-- <patient-card /> -->
        <div class="mainbox">
          <div class="detailbox" id="headbox">
            <h2 class="detail" id="head">ติดต่อ</h2>
          </div>
          <div class="detailbox">
            <h2 class="detail" id="head2">ข้อมูลการติดต่อ</h2>
            <h2 class="detail">
              หมู่ที่ 9 301 ตำบล บ้านสวน อำเภอเมืองชลบุรี ชลบุรี 20000
            </h2>
            <div class="row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
                />
              </svg>
              <h2 class="detail" id="wlogo">038-273034</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </svg>
              <h2 class="detail" id="wlogo2" @click="fbPage">
                โรงพยาบาลค่ายนวมินทราชินี <br />
                Fort Nawamintharachini Hospital
              </h2>
            </div>
            <div class="row">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M192 64h197.5L416 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C419.4 3.375 411.2 0 402.8 0H160C142.3 0 128 14.33 128 32v128h64V64zM64 128H32C14.38 128 0 142.4 0 160v320c0 17.62 14.38 32 32 32h32c17.62 0 32-14.38 32-32V160C96 142.4 81.63 128 64 128zM480 192H128v288c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V224C512 206.4 497.6 192 480 192zM288 432c0 8.875-7.125 16-16 16h-32C231.1 448 224 440.9 224 432v-32C224 391.1 231.1 384 240 384h32c8.875 0 16 7.125 16 16V432zM288 304c0 8.875-7.125 16-16 16h-32C231.1 320 224 312.9 224 304v-32C224 263.1 231.1 256 240 256h32C280.9 256 288 263.1 288 272V304zM416 432c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32c0-8.875 7.125-16 16-16h32c8.875 0 16 7.125 16 16V432zM416 304c0 8.875-7.125 16-16 16h-32C359.1 320 352 312.9 352 304v-32C352 263.1 359.1 256 368 256h32C408.9 256 416 263.1 416 272V304z"
                />
              </svg>
              <h2 class="detail" id="wlogo">033-039621</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PatientCard from "../DataList/PatientCardUser.vue";
export default {
  components: { PatientCard },
  methods:{
    fbPage(){
      window.location.href = 'https://www.facebook.com/fnh14';
    }
  }
};
</script>

<style scoped>
svg {
  width: 3rem;
  height: 3rem;
}
#wlogo {
  width: 25%;
  margin: 0;
  padding-left: 0px;
  color: #446a46;
}

#wlogo2 {
  width: 50%;
  margin: 0;
  padding-left: 0px;
  color: #446a46;
}

#wlogo2:hover{
  cursor: pointer;
  color: green;
  font-weight: 600;
}
.text {
  width: 30%;
}
.image {
  width: 4rem;
  height: 2rem;
}
.row {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}
.detail {
  font-size: 16px;
  font-weight: 300;
  color: #446a46;
}
#head2 {
  color: #82a284;
  font-weight: 700;
}
#head {
  padding-bottom: 6px;
  border-bottom: 3px solid black;
  font-size: 24px;
  font-weight: 700;
  color: #446a46;
}
.mainbox {
  width: 80rem;
  padding-top: 10px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: wheat; */
}
#headbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: 0px;
  margin: 0px;
}
.detailbox {
  width: 50%;
  display: flex;
  flex-direction: column;
  background: #e7eeff;
  border: 3px solid #446a46;
  border-radius: 5px;
  padding: 40px 60px;
}
p {
  width: 50%;
  margin: 0;
  padding: 0;
}
</style>
