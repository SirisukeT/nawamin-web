<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link :to="'/home'">
          <img
            id="logo"
            src="@/assets/logo_re.png"
            alt=""
            width="55"
            height="55"
            class="d-inline-block align-text-top"
        /></router-link>
        <p>โรงพยาบาลค่ายนวมินทราชินี</p>
      </div>
      <div class="navbar-r">
        <router-link id="home" to="/home">หน้าหลัก</router-link>
        <router-link id="profile" to="/profile">ข้อมูลของฉัน</router-link>
        <router-link id="health" to="/health">สถานะสุขภาพ</router-link>
        <router-link id="transfer" to="/transfer">ใบส่งตัว</router-link>
        <router-link id="appointment" to="/appointment">นัดหมาย</router-link>
        <div class="btn-group" id="test">
          <button
            type="button"
            class="btn"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            เกี่ยวกับเรา
            <img src="@/assets/Antu_dialog-icon-preview.png" alt="" />
          </button>
          <ul class="dropdown-menu dropdown-menu-end sizedropdown2">
            <li>
              <router-link to="/about-us" class="text"
                ><div class="image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="person"
                    class="invertimg"
                    viewBox="0 0 640 512"
                  >
                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M192 48C192 21.49 213.5 0 240 0H400C426.5 0 448 21.49 448 48V512H368V432C368 405.5 346.5 384 320 384C293.5 384 272 405.5 272 432V512H192V48zM312 64C303.2 64 296 71.16 296 80V104H272C263.2 104 256 111.2 256 120V136C256 144.8 263.2 152 272 152H296V176C296 184.8 303.2 192 312 192H328C336.8 192 344 184.8 344 176V152H368C376.8 152 384 144.8 384 136V120C384 111.2 376.8 104 368 104H344V80C344 71.16 336.8 64 328 64H312zM160 96V512H48C21.49 512 0 490.5 0 464V320H80C88.84 320 96 312.8 96 304C96 295.2 88.84 288 80 288H0V224H80C88.84 224 96 216.8 96 208C96 199.2 88.84 192 80 192H0V144C0 117.5 21.49 96 48 96H160zM592 96C618.5 96 640 117.5 640 144V192H560C551.2 192 544 199.2 544 208C544 216.8 551.2 224 560 224H640V288H560C551.2 288 544 295.2 544 304C544 312.8 551.2 320 560 320H640V464C640 490.5 618.5 512 592 512H480V96H592z"
                    />
                  </svg>
                </div>
                ข้อมูลโรงพยาบาล</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="text"
                ><div class="image">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    id="person"
                    class="invertimg"
                  >
                    <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                    <path
                      d="M256 31.1c-141.4 0-255.1 93.09-255.1 208c0 49.59 21.38 94.1 56.97 130.7c-12.5 50.39-54.31 95.3-54.81 95.8C0 468.8-.5938 472.2 .6875 475.2c1.312 3 4.125 4.797 7.312 4.797c66.31 0 116-31.8 140.6-51.41c32.72 12.31 69.01 19.41 107.4 19.41C397.4 447.1 512 354.9 512 239.1S397.4 31.1 256 31.1zM368 266c0 8.836-7.164 16-16 16h-54V336c0 8.836-7.164 16-16 16h-52c-8.836 0-16-7.164-16-16V282H160c-8.836 0-16-7.164-16-16V214c0-8.838 7.164-16 16-16h53.1V144c0-8.838 7.164-16 16-16h52c8.836 0 16 7.162 16 16v54H352c8.836 0 16 7.162 16 16V266z"
                    />
                  </svg>
                </div>
                ติดต่อเรา</router-link
              >
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <button
            type="button"
            class="btn"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <img class="invertimg" src="@/assets/user-regular.svg" alt="" />
          </button>
          <ul class="dropdown-menu dropdown-menu-end sizedropdown">
            <li>
              <router-link to="/profile" class="text">
                <div class="image">
                  <img
                    src="@/assets/user-regular.svg"
                    alt=""
                    class="invertimg"
                    id="person"
                  />
                </div>

                ข้อมูลของฉัน</router-link
              >
            </li>
            <li>
              <router-link to="/health" class="text"
                ><div class="image">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 39 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.5004 0C8.7307 0 0.000704442 8.72999 0.000704442 19.4996C-0.00348613 22.8729 0.870118 26.1893 2.53566 29.1227L0.100153 36.4331C-0.0144263 36.7767 -0.0310547 37.1454 0.0521321 37.4979C0.135319 37.8504 0.315033 38.1728 0.571132 38.4289C0.82723 38.685 1.14959 38.8647 1.50209 38.9479C1.85458 39.0311 2.22328 39.0144 2.56686 38.8998L9.87728 36.4624C12.8102 38.1294 16.1268 39.0038 19.5004 38.9993C30.27 38.9993 39 30.2693 39 19.4996C39 8.72999 30.27 0 19.5004 0ZM19.5004 11.6998C17.7415 11.6998 16.125 12.2789 14.8204 13.2598C14.6156 13.4134 14.3825 13.5252 14.1344 13.5887C13.8863 13.6523 13.6282 13.6664 13.3747 13.6302C13.1212 13.5939 12.8773 13.5082 12.657 13.3777C12.4366 13.2472 12.2441 13.0746 12.0905 12.8698C11.9368 12.6649 11.8251 12.4318 11.7615 12.1837C11.6979 11.9357 11.6839 11.6775 11.7201 11.424C11.7563 11.1705 11.8421 10.9266 11.9726 10.7063C12.103 10.4859 12.2756 10.2935 12.4805 10.1398C14.7335 8.45003 17.5205 7.62965 20.3297 7.82929C23.139 8.02894 25.7819 9.23521 27.7734 11.2266C29.7648 13.2181 30.9711 15.861 31.1707 18.6703C31.3704 21.4795 30.55 24.2665 28.8602 26.5195C28.5419 26.9099 28.0849 27.1619 27.5849 27.2228C27.085 27.2838 26.5808 27.1489 26.1781 26.8465C25.7753 26.544 25.5052 26.0975 25.4243 25.6003C25.3434 25.1032 25.458 24.5941 25.7441 24.1796C26.6135 23.0205 27.1427 21.6422 27.2727 20.1991C27.4026 18.7561 27.1281 17.3054 26.4798 16.0097C25.8315 14.714 24.8352 13.6244 23.6024 12.8632C22.3696 12.1019 20.9492 11.6991 19.5004 11.6998ZM9.75053 17.5497C10.2677 17.5497 10.7637 17.7551 11.1294 18.1208C11.4951 18.4865 11.7005 18.9825 11.7005 19.4996C11.7005 21.5683 12.5223 23.5522 13.985 25.015C15.4478 26.4777 17.4317 27.2995 19.5004 27.2995C20.0175 27.2995 20.5135 27.5049 20.8792 27.8706C21.2449 28.2363 21.4503 28.7323 21.4503 29.2495C21.4503 29.7666 21.2449 30.2626 20.8792 30.6283C20.5135 30.994 20.0175 31.1994 19.5004 31.1994C16.3974 31.1994 13.4215 29.9668 11.2274 27.7726C9.03322 25.5785 7.80056 22.6026 7.80056 19.4996C7.80056 18.9825 8.00601 18.4865 8.3717 18.1208C8.73739 17.7551 9.23337 17.5497 9.75053 17.5497ZM19.5004 15.5997C18.466 15.5997 17.4741 16.0106 16.7427 16.742C16.0113 17.4734 15.6004 18.4653 15.6004 19.4996C15.6004 20.534 16.0113 21.5259 16.7427 22.2573C17.4741 22.9887 18.466 23.3996 19.5004 23.3996C20.5347 23.3996 21.5266 22.9887 22.258 22.2573C22.9894 21.5259 23.4003 20.534 23.4003 19.4996C23.4003 18.4653 22.9894 17.4734 22.258 16.742C21.5266 16.0106 20.5347 15.5997 19.5004 15.5997Z"
                      fill="white"
                    />
                  </svg>
                </div>
                สถานะสุขภาพ</router-link
              >
            </li>
            <li>
              <router-link to="/transfer" class="text"
                ><div class="image">
                  <img
                    class="invertimg"
                    src="@/assets/docs.png"
                    alt=""
                    id="person"
                  />
                </div>
                ใบส่งตัว</router-link
              >
            </li>
            <li>
              <router-link to="/appointment" class="text"
                ><div class="image">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 31 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.5556 40H3.44444C2.53092 40 1.65481 39.5786 1.00885 38.8284C0.362896 38.0783 0 37.0609 0 36V8C0 6.93913 0.362896 5.92172 1.00885 5.17157C1.65481 4.42143 2.53092 4 3.44444 4H6.88889V0H10.3333V4H20.6667V0H24.1111V4H27.5556C28.4691 4 29.3452 4.42143 29.9911 5.17157C30.6371 5.92172 31 6.93913 31 8V36C31 37.0609 30.6371 38.0783 29.9911 38.8284C29.3452 39.5786 28.4691 40 27.5556 40ZM3.44444 16V36H27.5556V16H3.44444ZM3.44444 8V12H27.5556V8H3.44444ZM24.1111 32H20.6667V28H24.1111V32ZM17.2222 32H13.7778V28H17.2222V32ZM10.3333 32H6.88889V28H10.3333V32ZM24.1111 24H20.6667V20H24.1111V24ZM17.2222 24H13.7778V20H17.2222V24ZM10.3333 24H6.88889V20H10.3333V24Z"
                      fill="white"
                    />
                  </svg>
                </div>
                นัดหมาย</router-link
              >
            </li>
            <li>
              <router-link @click="store.logout" to="/" class="text"
                ><div class="image">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45 24.2308C45 27.0433 44.4043 29.7296 43.2129 32.2897C42.0215 34.8498 40.4199 37.0583 38.4082 38.9153C36.3965 40.7722 34.0039 42.2506 31.2305 43.3504C28.457 44.4501 25.5469 45 22.5 45C19.4531 45 16.543 44.4501 13.7695 43.3504C10.9961 42.2506 8.60352 40.7722 6.5918 38.9153C4.58008 37.0583 2.97852 34.8498 1.78711 32.2897C0.595703 29.7296 0 27.0433 0 24.2308C0 20.9495 0.786133 17.8576 2.3584 14.9549C3.93066 12.0523 6.14258 9.61839 8.99414 7.65325C9.83398 7.07632 10.7666 6.85096 11.792 6.97716C12.8174 7.10337 13.6328 7.55409 14.2383 8.32933C14.8633 9.08654 15.1025 9.9384 14.9561 10.8849C14.8096 11.8314 14.3262 12.5931 13.5059 13.1701C11.5918 14.5042 10.1123 16.1358 9.06738 18.0649C8.02246 19.994 7.5 22.0493 7.5 24.2308C7.5 26.1058 7.89551 27.8951 8.68652 29.5989C9.47754 31.3026 10.5469 32.7764 11.8945 34.0204C13.2422 35.2644 14.8389 36.2515 16.6846 36.9817C18.5303 37.7118 20.4688 38.0769 22.5 38.0769C24.5312 38.0769 26.4697 37.7118 28.3154 36.9817C30.1611 36.2515 31.7578 35.2644 33.1055 34.0204C34.4531 32.7764 35.5225 31.3026 36.3135 29.5989C37.1045 27.8951 37.5 26.1058 37.5 24.2308C37.5 22.0493 36.9775 19.994 35.9326 18.0649C34.8877 16.1358 33.4082 14.5042 31.4941 13.1701C30.6738 12.5931 30.1904 11.8314 30.0439 10.8849C29.8975 9.9384 30.1367 9.08654 30.7617 8.32933C31.3672 7.55409 32.1875 7.10337 33.2227 6.97716C34.2578 6.85096 35.1855 7.07632 36.0059 7.65325C38.8574 9.61839 41.0693 12.0523 42.6416 14.9549C44.2139 17.8576 45 20.9495 45 24.2308ZM26.25 3.46154V20.7692C26.25 21.7067 25.8789 22.518 25.1367 23.2031C24.3945 23.8882 23.5156 24.2308 22.5 24.2308C21.4844 24.2308 20.6055 23.8882 19.8633 23.2031C19.1211 22.518 18.75 21.7067 18.75 20.7692V3.46154C18.75 2.52404 19.1211 1.71274 19.8633 1.02764C20.6055 0.342548 21.4844 0 22.5 0C23.5156 0 24.3945 0.342548 25.1367 1.02764C25.8789 1.71274 26.25 2.52404 26.25 3.46154Z"
                      fill="white"
                    />
                  </svg>
                </div>
                ออกจากระบบ</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
</script>

<script>
export default {
  name: "NavBarLogin",
  mounted() {
    try {
      document.getElementById(this.$route.path.slice(1)).style.color =
        "#82A284";
    } catch (err) {}
    try {
      document.getElementById(
        this.$route.path.substring(
          this.$route.path.indexOf("/") + 1,
          this.$route.path.lastIndexOf("/")
        )
      ).style.color = "#82A284";
    } catch (err) {}
  },
};
</script>

<style scoped>
.sizedropdown {
  width: 200px;
  padding: 5px 0;
}
.sizedropdown2 {
  width: 220px;
  padding: 5px 0;
}
#person {
  width: 25px;
  height: 25px;
}
.menulist img {
  width: 25px;
  height: 25px;
}
.text {
  text-decoration: none;
  font-size: 18px;
  color: #82a284;
  font-weight: 200;
}
.image {
  margin: 0 8px 0 0;
  border: 3px solid black;
  border-radius: 100%;
  background-color: #82a284;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#test {
  margin-top: 5px;
}
.navbar {
  background-color: #446a46;
  /* width: 100%; */
  min-width: 200px;
  height: 71px;
  max-height: 71px;
  padding: 0;
}

.btn {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.container-fluid {
  height: 100%;
  /* width: 1248px; */
  padding: 0 2rem;
}

div.navbar-brand {
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

div.navbar-brand p {
  margin-left: 1rem;
  color: white;
}

.navbar-r {
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-r > * {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
}
li {
  margin-bottom: 7.5px;
  margin-top: 7.5px;
}
a {
  display: flex;
  align-items: center;
}
.btn-group > * {
  font-size: 20px;
}

.navbar-r img {
  height: 30px;
  width: 30px;
}

.navbar-r a {
  margin: 0 15px 0 20px;
}

.navbar-r img#exit {
  background: none;
  border-radius: 0;
  height: 30px;
  width: 30px;
}

.navbar-brand p {
  margin: 0;
  font-size: 30px;
}

/* .btn-group:hover .dropdown-menu {
    display: block;
 } */
</style>
