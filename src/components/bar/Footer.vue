<template>
  <footer class="module__footer">
    <div class="content__footer">
      <div class="row">
        <div class="logobox">
          <router-link :to="'/Overall'">
            <img
              id="logo"
              src="@/assets/logo_re.png"
              alt=""
              width="70"
              height="70"
              class="d-inline-block align-text-top"
            />
          </router-link>
          <p id="logotext">โรงพยาบาลค่ายนวมินทราชินี</p>
        </div>
        <div class="contentbox">
          <h5 class="headtext">Contacts</h5>
          <div class="footerlogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              id="person"
              class="invertimg"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"
              />
            </svg>
            <p class="text">
              หมู่ที่ 9 301 ตำบล บ้านสวน อำเภอเมืองชลบุรี ชลบุรี 20000
            </p>
          </div>
          <div class="footerlogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="person"
              class="invertimg"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
              />
            </svg>
            <p class="text">038-273034</p>
          </div>
          <div class="footerlogo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="person"
              class="invertimg"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M192 64h197.5L416 90.51V160h64V77.25c0-8.484-3.375-16.62-9.375-22.62l-45.25-45.25C419.4 3.375 411.2 0 402.8 0H160C142.3 0 128 14.33 128 32v128h64V64zM64 128H32C14.38 128 0 142.4 0 160v320c0 17.62 14.38 32 32 32h32c17.62 0 32-14.38 32-32V160C96 142.4 81.63 128 64 128zM480 192H128v288c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V224C512 206.4 497.6 192 480 192zM288 432c0 8.875-7.125 16-16 16h-32C231.1 448 224 440.9 224 432v-32C224 391.1 231.1 384 240 384h32c8.875 0 16 7.125 16 16V432zM288 304c0 8.875-7.125 16-16 16h-32C231.1 320 224 312.9 224 304v-32C224 263.1 231.1 256 240 256h32C280.9 256 288 263.1 288 272V304zM416 432c0 8.875-7.125 16-16 16h-32c-8.875 0-16-7.125-16-16v-32c0-8.875 7.125-16 16-16h32c8.875 0 16 7.125 16 16V432zM416 304c0 8.875-7.125 16-16 16h-32C359.1 320 352 312.9 352 304v-32C352 263.1 359.1 256 368 256h32C408.9 256 416 263.1 416 272V304z"
              />
            </svg>
            <p class="text">033-039621</p>
          </div>
          <div class="footerlogo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" id="person" class="invertimg">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"
              /></svg
            >

            <a class="text" id="click" href="https://goo.gl/maps/6YxrAVKbLvd7SLXT6" target="_blank">Google map</a>
          </div>
        </div>
        <div class="contentbox">
          <h5 class="headtext">เกี่ยวกับเรา</h5>
          <router-link to="/about-us" class="text">ข้อมูลโรงพยาบาล</router-link>
          <router-link to="/contact" class="text">ติดต่อเรา</router-link>
        </div>
        <div class="contentbox">
          <h5 class="headtext">สำหรับเจ้าหน้าที่</h5>
          <router-link to="/adminlogin" class="text"
            >สำหรับแพทย์ผู้รักษา</router-link
          >
          <router-link to="/adminlogin" class="text"
            >สำหรับผู้ดูแลระบบ</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods:{
    map(){
      window.location.href = 'https://goo.gl/maps/6YxrAVKbLvd7SLXT6';
    }
}
};
</script>

<style scoped>
#click:hover{
  cursor: pointer;
}
.footerlogo {
  width: 100%;
  display: flex;
  flex-direction: row;
}
#person {
  height: 25px;
  width: 25px;
  margin-right: 8px;
}
#logotext {
  color: white;
  text-decoration: none;
  font-weight: 1000;
  font-size: 16px;
  margin: 0;
}

.headtext {
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
}

.text {
  color: white;
  text-decoration: none;
  font-weight: lighter;
  font-size: 18px;
  margin-bottom: 8px;
}

.content__footer {
  width: 80rem;
  padding-left: 5rem;
}

.module__footer {
  padding: 48px 12px 108px 12px;
  background: #446a46;
  width: 100vw;
  height: 20%;
  display: flex;
  justify-content: center;
}
.contentbox {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}
.logobox {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0;
}
</style>
