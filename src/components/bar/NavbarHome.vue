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
        <div class="btn-group">
          <button
            type="button"
            class="btn"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            เกี่ยวกับเรา
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li><router-link to="/about-us">ข้อมูลโรงพยาบาล</router-link></li>
            <li><router-link to="/contact">ติดต่อเรา</router-link></li>
            
          </ul>
        </div>
        
        <!-- <img class="invertimg" src="@/assets/angle-right-solid.svg" alt="" /> -->
        <img src="@/assets/Antu_dialog-icon-preview.png" alt="" />
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
          <ul class="dropdown-menu dropdown-menu-end">
            <li><router-link to="/login">เข้าสู่ระบบ</router-link></li>
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
.navbar {
  background-color: #446a46;
  /* width: 100%; */
  min-width: 200px;
  height: 71px;
  max-height: 71px;
  padding: 0;
}

.btn{
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
}

.navbar-r img {
  /* background: white; */
  /* border-radius: 50%; */
  height: 55px;
  width: 55px;
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
