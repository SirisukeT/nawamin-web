<template>
  <main>
    <div class="containerLogin">
      <h1 class="Header">ลืมรหัสผ่าน</h1>
      <form @submit.prevent="sendLoginAdmin" class="LoginHomePage">
        <div class="LoginInput">
            <p class="inputTitle">รหัสผ่านใหม่</p>
          <p>
            <input
              type="text"
              v-model="username"
              placeholder=""
              required
            />
          </p>
          <p class="inputTitle">ยืนยันรหัสผ่านใหม่</p>
          <p>
            <input
              type="password"
              v-model="password"
              placeholder="" 
              required
            />
          </p>
          <testforgetpw />
          <!-- <p><input class="LoginSubmit" type="submit" value="ยืนยันข้อมูล" /></p> -->
          <p class="botm">
            <router-link to="/">กลับสู่หน้าหลัก</router-link>
          </p>
        </div>
      </form>
      <form action="" class="recaptcha">
        recaptcha แบบรูปภาพ
      </form>
    </div>
  </main>
</template>

<script>
import testforgetpw from "../testforgetpw.vue";
export default {
name: "ForgotPW",
components: { testforgetpw },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  max-height: 100vh;
}

.containerLogin {
  text-align: center;
  width: 100%;
  height: 100vh;
  min-height: 750px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  background-image: url("@/assets/Login_BG.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 1;
  z-index: 1;
}

.Header {
  margin-top: 5vh;
  color: #114d3e;
}
form.LoginHomePage {
  margin-top: 10vh;
  min-height: 400px;
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #446a46;
  border-radius: 20px;
  align-items: center;
}
form.LoginHomePage input {
  width: 340px;
  height: 57px;
  border-radius: 50px;
  text-align: left;
  padding: 0 20px;
  margin: 5px 0;
  font-size: large;
  border: 0px;
}

.recaptcha{
  padding: 50px 0 50px 0;
  margin-top: 5vh;
  width: 500px;
  background: gray;
  text-align: center;
  font-size: 30px;
  color:white;
}

.inputTitle{
    margin-top: 20px;
    text-align: start;
    font-weight: bolder;
    font-size: 20px;
}

.login100-form-avatar img {
  margin-top: 50px;
  width: 200px;
}
form.LoginHomePage input.LoginSubmit {
  background: #82a284;
  font-weight: bold;
  text-align: center;
  padding: 0;
  margin-top: 20px;
}

form.LoginHomePage input.LoginSubmit:hover {
  background: #59a793;
  cursor: pointer;
}

.LoginInput {
  margin-top: 20px;
}

.botm {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 340px;
}

.botm a {
  color: white;
  font-size: 20px;
}
</style>
