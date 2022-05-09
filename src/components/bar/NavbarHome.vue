<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link :to="'/'">
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
        <router-link to="/">หน้าหลัก</router-link>
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

        <!-- <img class="invertimg" src="@/assets/angle-right-solid.svg" alt="" /> -->

        <div class="btn-group">
          <button
            type="button"
            class="btn"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            <img width="20px" height="20px" class="invertimg" src="@/assets/user-regular.svg" alt="" />
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              <router-link to="/login" class="text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  id="person"
                  class="login"
                  style="color:blue"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"
                  />
                </svg>

                เข้าสู่ระบบ</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarHome",
};
</script>

<style scoped>
.login{
  margin-right: 8px;
}
#person {
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
.sizedropdown2 {
  width: 220px;
  padding: 5px 0;
}
#test {
  margin-top: 5px;
}
li {
  margin-bottom: 7.5px;
  margin-top: 7.5px;
}
a {
  display: flex;
  align-items: center;
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
</style>
