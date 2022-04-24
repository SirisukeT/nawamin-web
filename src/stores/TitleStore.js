import {ref, computed, watch} from "vue";
import { defineStore } from "pinia";
import router from "../router";

export const useTitleStore = defineStore("TitleStore", () => {
  const user = ref({
    username: "",
    password: "",
    isLogin: false,
    text: ["Text"],
  });

  if (localStorage.getItem("user")){
    user.value = JSON.parse(localStorage.getItem("user"));
  }
  watch(
    user,
    (userVal) => {
      localStorage.setItem("user",JSON.stringify(userVal));
    },
    {deep: true}
  );
  
  if (user.value.isLogin == true){
    // router.push({name: "admin"})
    console.log("Hi");
  }

  const sendLogin = (username,password) => {
    user.value.username = username;
    user.value.password = password;
    user.value.isLogin = true;
    router.push({name: "ภาพรวมระบบ"});
    window.scrollTo(0, 0);
  };

  const changePage = (component) =>{
    // router.push({ name: 'user'      , params:     { username: 'erina' } });
    router.push({ name: component[0], params:     { main: component[1],name:component[2],sub: component[3]} });
    user.value.text = component;
    window.scrollTo(0, 0);
  }

  return{
    user,
    sendLogin,
    changePage,
  }
});
