import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import Navbar from "./components/bar/Navbar.vue";
import Sidebar from "./components/bar/Sidebar.vue";
import TitleBar from "./components/bar/TitleBar.vue";
import SO_1 from "./components/SO_1.vue";
import PD_1 from "./components/PD_1.vue";
import PL_11 from "./components/PL_11.vue";
import PL_12 from "./components/PL_12.vue";
import PH_1 from "./components/PH_1.vue";
import PLR_1 from "./components/PLR_1.vue";
import Login from "./components/Login/Login.vue";
import Patient from "./components/DataList/Patient.vue";
import PatientInfo from "./components/DataList/PatientInfo.vue";
import PCD_11 from "./components/PCD_11.vue";
import PCD_12 from "./components/PCD_12.vue";
import PatientListView from './views/PatientListView.vue'
import PatientDetailsView from './views/PatientDetailsView.vue'
import PatientInfoView from './views/PatientInfoView.vue'
import PatientCard from './components/DataList/PatientCard.vue'
import PatientLabReportView from './views/PatientLabReportView.vue'
import grayBox from './components/Boxes/grayBox.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
app.component('fa', FontAwesomeIcon);
app.component('Sidebar', Sidebar);
app.component('Navbar', Navbar);
app.component('TitleBar', TitleBar);
app.component('SO_1', SO_1);
app.component('Login', Login);
app.component('PD_1', PD_1);
app.component('PL_11', PL_11);
app.component('PL_12', PL_12);
app.component('PH_1', PH_1);
app.component('Patient', Patient);
app.component('PatientInfo', PatientInfo);
app.component('PCD_11', PCD_11);
app.component('PCD_12', PCD_12);
app.component('PLR_1', PLR_1);
app.component('PM_1', PM_1);
app.component('PatientCard',PatientCard);
app.component('grayBox',grayBox);

app.component('PatientListView', PatientListView);
app.component('PatientDetailsView', PatientDetailsView);
app.component('PatientInfoView', PatientInfoView);
app.component("PatientLabReportView",PatientLabReportView);
app.component("PatientCurrentdrugsViewapp",PatientCurrentdrugsViewapp);

