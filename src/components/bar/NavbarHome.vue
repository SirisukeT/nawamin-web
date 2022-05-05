<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link :to="'/Overall'">
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
        <router-link to="/">เกี่ยวกับเรา</router-link>
        <img class="invertimg" src="@/assets/angle-right-solid.svg" alt="" >
        <img src="@/assets/Antu_dialog-icon-preview.png" alt="" >
        <img class="invertimg" src="@/assets/user-regular.svg" alt="" />
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
  background-color: #446A46;
  /* width: 100%; */
  min-width: 200px;
  height: 71px;
  max-height: 71px;
  padding: 0;
}

.container-fluid {
  height: 100%;
  width: 1248px;
  padding: 0;
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
