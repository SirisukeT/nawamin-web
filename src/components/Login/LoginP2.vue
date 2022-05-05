<template>
  <main>
    <div class="containerLogin">
      <h1 class="Header">E - service บริการผู้ป่วย</h1>
      <form @submit.prevent="sendLogin" class="LoginHomePage">
        <div class="login100-form-avatar">
          <img src="@/assets/logo_re.png" alt="LOGO" />
        </div>
        <div class="LoginInput">
          <p>
            <input
              type="text"
              v-model="username"
              placeholder="Username"
              required
            />
          </p>
          <p>
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </p>
          <p><input class="LoginSubmit" type="submit" value="เข้าสู่ระบบ" /></p>
          <p class="ForgotPW"><router-link to="/">ลืมรหัสผ่าน</router-link></p>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useTitleStore } from "@/stores/TitleStore";
const store = useTitleStore();
const username = ref("");
const password = ref("");

const sendLogin = () => {
  console.log("Test");
  store.sendLogin(username.value, password.value);
  username.value = "";
  password.value = "";
};
</script>

<script>
export default {
  name: "LoginP2",
};
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
  min-height: 700px;
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
  margin-top: 10vh;
  color: #114D3E;
}
form.LoginHomePage {
  margin-top: 5vh;
  min-height: 550px;
  width: 500px;
  display: flex;
  flex-direction: column;
  background-color: #446a46;
  border-radius: 20px;
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

.login100-form-avatar img{
    margin-top: 50px;
    width: 200px;
}
form.LoginHomePage input.LoginSubmit {
  background: #82a284;
  font-weight: bold;
  text-align: center;
  padding: 0;
}

form.LoginHomePage input.LoginSubmit:hover {
  background: #59a793;
  cursor: pointer;
}

.LoginInput {
  margin-top: 20px;
}

.ForgotPW {
  margin-top: 10px;
}

.ForgotPW a {
  color: white;
  font-size: 20px;
}
</style>
