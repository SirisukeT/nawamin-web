<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link :to="'/Overall'">
          <img
            id="logo"
            src="@/assets/logo_re.png"
            alt=""
            width="90"
            height="90"
            class="d-inline-block align-text-top"
        /></router-link>
        <p>โรงพยาบาลค่ายนวมินทราชินี</p>
      </div>
      <div class="navbar-r">
        <img src="@/assets/user-regular.svg" alt="" />
        <div class="navbar-account">
          <h5>นายสมหมาย มิตรรัก</h5>
          <h5>ตำแหน่ง</h5>
          <!-- <h5>โรงพยาบาลค่ายนวมินทราชินี</h5> -->
        </div>
        <a @click="logout"
          ><img
            id="exit"
            src="@/assets/arrow-right-from-bracket-solid.svg"
            alt=""
        /></a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    logout() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.navbar {
  background-image: linear-gradient(
    to right,
    rgb(37, 149, 122),
    rgb(129, 187, 173)
  );
  width: 100%;
  height: 100px;
  max-height: 100px;
  padding: 0;
}

.container-fluid {
  height: 100%;
  padding: 0 1rem;
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
}

.navbar-r {
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-r > * {
  margin-left: 2.5rem;
}

.navbar-r img {
  background: white;
  border-radius: 50%;
  height: 70px;
  width: 70px;
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

.navbar-account {
  text-align: center;
}

.navbar-account > * {
  margin: 0;
}
</style>
