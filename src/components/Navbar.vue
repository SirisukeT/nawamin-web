<template>
  <nav class="navbar fixed-top">
    <div class="container-fluid">
      <div class="navbar-brand">
        <router-link :to="'/admin'">
          <img
            src="@/assets/logo_re.png"
            alt=""
            width="64"
            height="64"
            class="d-inline-block align-text-top"
        /></router-link>
        <p>โรงพยาบาลค่ายนวมินทราชินี</p>
      </div>
      <div class="navbar-r">
        <img src="../assets/user-regular.svg" alt="" />
        <div class="navbar-account">
          <h4>นายสมหมาย มิตรรัก</h4>
          <h4>ตำแหน่ง</h4>
          <h4>โรงพยาบาลค่ายนวมินทราชินี</h4>
        </div>
        <a href="/">ออกจากระบบ</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  background-image: linear-gradient(
    to right,
    rgba(37, 149, 122, 1),
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
  color: white;
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
  /* padding-right: 1rem; */
}

.navbar-r > * {
  margin: 0 1rem;
}

.navbar-r img {
  background: white;
  border-radius: 50%;
  height: 70px;
  width: 70px;
}
.navbar-brand p {
  margin: 0;
}

.navbar-account {
  text-align: center;
}

.navbar-account > * {
  margin: 0;
}
</style>