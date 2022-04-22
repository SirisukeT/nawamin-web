import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
import SO_1 from "./components/SO_1.vue";
import PD_1 from "./components/PD_1.vue";
import PL_11 from "./components/PL_11.vue";
import PH_1 from "./components/PH_1.vue";
import TitleBar from "./components/TitleBar.vue";
import Login from "./components/Login/Login.vue";
import Patient from "./components/DataList/Patient.vue";
import PatientInfo from "./components/DataList/PatientInfo.vue";
import PCD_11 from "./components/PCD_11.vue";
import PCD_12 from "./components/PCD_12.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);
library.add(far);


const app = createApp(App);
app.use(router);
app.mount("#app");
app.component('fa', FontAwesomeIcon);
app.component('Sidebar', Sidebar);
app.component('Navbar', Navbar);
app.component('TitleBar', TitleBar);
app.component('SO_1', SO_1);
app.component('Login',Login);
app.component('PD_1', PD_1);
app.component('PL_11', PL_11);
app.component('PH_1', PH_1);
app.component('Patient',Patient);
app.component('PatientInfo',PatientInfo);
app.component('PCD_11',PCD_11);
app.component('PCD_12',PCD_12);

