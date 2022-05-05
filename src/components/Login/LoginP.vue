<template>
  <main>
    <div class="containerLogin">
      <form @submit.prevent="sendLogin" class="LoginHomePage">
        <div class="login100-form-avatar">
          <img src="@/assets/logo_re.png" width="300" alt="LOGO" />
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
  name: "LoginP",
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  max-height: 100vh;
}

.containerLogin {
  /* /* height: 100%; */
  text-align: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  /* display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox; */
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
  background-image: url("@/assets/Login_BG.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.8;
  z-index: 1;
}

form.LoginHomePage {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
form.LoginHomePage input {
  width: 340px;
  height: 57px;
  border-radius: 50px;
  text-align: left;
  padding: 0 20px;
  margin: 5px 0;
  font-size: large;
}

form.LoginHomePage input.LoginSubmit {
  background: #1b5c4c;
  color: white;
  font-weight: bold;
  text-align: center;
  padding: 0;
}

form.LoginHomePage input.LoginSubmit:hover {
  background: #114d3e;
  cursor: pointer;
}

.login100-form-avatar {
  margin-top: 100px;
}
.LoginInput {
  margin-top: 100px;
}
</style>
