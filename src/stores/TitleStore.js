import { ref, watch } from "vue";
import { defineStore } from "pinia";
import router from "../router";
import religion from "../json/religion.json"

export const useTitleStore = defineStore("TitleStore", () => {
  const user = ref({
    username: "",
    password: "",
    isLogin: false,
    // text: ["Text"],
  });

  const admin = ref({
    username: "",
    password: "",
    isLogin: false,
    // text: ["Text"],
  });

  if (localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user"));
  }

  watch(
    user,
    (userVal) => {
      localStorage.setItem("user", JSON.stringify(userVal));
    },
    { deep: true },
  );

  if (user.value.isLogin == true) {
    // router.push({name: "admin"})
    console.log("ท่านเข้าสู่ระบบด้วยบัญชี "+user.value.username);
  }

  const sendLogin = (username, password) => {
    user.value.username = username;
    user.value.password = password;
    user.value.isLogin = true;
    router.push("/overall");
    window.scrollTo(0, 0);
  };

  const sendLoginAdmin = (username, password) => {
    user.value.username = username;
    user.value.password = password;
    user.value.isLogin = true;
    router.push("/home");
    window.scrollTo(0, 0);
  };

  const changePage = (component) => {
    // router.push({ name: 'user'      , params:     { username: 'erina' } });
    router.push({
      name: component[0],
      params: { main: component[1], name: component[2], sub: component[3] },
    });
    // user.value.text = component[2];
    window.scrollTo(0, 0);
  };


  const patient = ref({
    data: [],
    name: "",
    text: "",
    vn: "",
  });

  const callRef = (component, vn) => {
    router.push({
      name: component[0],
      params: { main: component[1], name: component[2], sub: component[3] },
    });
    patient.value.vn = vn;
    window.scrollTo(0, 0);
  };

  const getSomething = (key, info) => {
    if (key == "sex") {
      if (info[key] == "1") {
        patient.value.text = "ชาย"
      }
      else {
        patient.value.text = "หญิง"
      }
      return true;
    }
    // console.log(key);
    if (key == "religion") {
      for (let i in religion) {
        if (parseInt(info[key]) == parseInt(religion[i]["religion"])) {
          console.log(religion[i]["religion"] + religion[i]["name"]);
          patient.value.text = religion[i]["name"];
          return true;
        }
      }
    }
    if (key == "age") {
      var dob = new Date(info["birthday"]);
      //calculate month difference from current date in time
      var month_diff = Date.now() - dob.getTime();

      //convert the calculated difference in date format
      var age_dt = new Date(month_diff);

      //extract year from date    
      var year = age_dt.getUTCFullYear();

      //now calculate the age of the user
      var age = Math.abs(year - 1970);

      //display the calculated age
      patient.value.text = age+" ปี";
      return true;
    }
    return false;
  }

  if (localStorage.getItem("patient")) {
    patient.value = JSON.parse(localStorage.getItem("patient"));
  }

  watch(
    patient,
    (patientVal) => {
      localStorage.setItem("patient", JSON.stringify(patientVal));
    },
    { deep: true }
  )

  const sendPatient = (component, data) => {
    patient.value.data = [];
    router.push({
      name: component[0],
      params: { main: component[1], name: component[2], sub: component[3] },
    });
    patient.value.name = component[2];
    localStorage.setItem("patient", data);
    patient.value.data = data;
    window.scrollTo(0, 0);
  }

  return {
    user,
    patient,
    admin,
    sendLogin,
    sendLoginAdmin,
    changePage,
    sendPatient,
    getSomething,
    callRef,

  };
});
