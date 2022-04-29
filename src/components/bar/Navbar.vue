<template>
  <nav
    class="navbar navbar-box navbar-expand-lg navbar-dark static-top fixed-top"
  >
    <div class="container-fluid">
      <router-link :to="'/Overall'">
        <img
          id="logo"
          src="@/assets/logo_re.png"
          alt=""
          width="55"
          height="55"
          class="d-inline-block align-text-top"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" aria-current="page" to="/Overall"
              >หน้าหลัก</router-link
            >
          </li>
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" to="/profile">ข้อมูล</router-link>
          </li>
          <li class="nav-item1 mx-4">
            <router-link class="nav-link" to="/history">ประวัติ</router-link>
          </li>
          <li class="nav-item1 ms-4">
            <router-link class="nav-link" to="/contact">ติดต่อ</router-link>
          </li>
          <li class="nav-item ms-4 logout-bg">
            <button @click="logout" class="logout-btn">ออกจากระบบ</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar2",
  methods: {
    logout() {
      return this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-image: linear-gradient(
    to right,
    rgb(37, 149, 122),
    rgb(205, 218, 215)
  );
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  height: auto;
  /* min-height: 71px; */
}
.container-fluid {
  width: 1570px;
  /* margin: 0; */
}
.navbar-brand {
  font-size: 30px;
  display: flex;
  align-items: center;
}
.nav-link {
  font-size: 20px;
}
.logout-bg {
  /* height: 50px; */
  margin: 4px 0;
}

/* .collapse ul{
  background-color: #18d083;
} */

button.logout-btn {
  width: 140px;
  height: 35px;
  padding-bottom: 5px;
  color: #fff;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  background: #18d083;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.3s;
}
button.logout-btn:hover {
  transform: scale(1.05);
}
button.logout-btn:active {
  transform: scale(0.95);
}

@media (max-width: 1600px) {
  .container-fluid {
    max-width: 1320px;
  }
}
@media (max-width: 1400px) {
  .container-fluid {
    max-width: 1140px;
  }
}
@media (max-width: 1200px) {
  .container-fluid {
    max-width: 960px;
  }
}
@media (max-width: 992px) {
  .container-fluid {
    max-width: 720px;
  }
}

@media (max-width: 768px) {
  .container-fluid {
    width: 670px;
  }
}
@media (max-width: 670px) {
  .container-fluid {
    width: 100%;
  }
}
</style>
