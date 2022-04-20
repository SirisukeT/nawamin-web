<template>
    <nav class="navbar fixed-top bg-success bg-gradient">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img
          src="@/assets/logo_re.png"
          alt=""
          width="48"
          height="64"
          class="d-inline-block align-text-top"
        />
        <p>โรงพยาบาลค่ายนวมินทราชินี</p>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
    name : "Navbar",
};
</script>

<style>
/*
    DEMO STYLE
*/
h1 {
  /* height: 200vh; */
  padding: 7rem 0 0 0;
  text-align: center;
}

a.navbar-brand {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

}

.navbar-brand p{
  margin: 0;
}

</style>