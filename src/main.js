import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import LoginP from "./components/Login/LoginP.vue";
import NavBar from "./components/bar/NavBar.vue";
import SideBar from "./components/bar/SideBar.vue";
import TitleBar from "./components/bar/TitleBar.vue";
import SO_1 from "./components/SO_1.vue";
import PD_1 from "./components/PD_1.vue";
import PL_11 from "./components/PL_11.vue";
import PL_12 from "./components/PL_12.vue";
import PH_1 from "./components/PH_1.vue";
import PM_1 from "./components/PM_1.vue";
import SU_11 from "./components/SU_11.vue";
import SU_12 from "./components/SU_12.vue";

import Drugallergy from "./components/DataList/Drugallergy.vue";
import Disease from "./components/DataList/Disease.vue";
import Medicine from "./components/DataList/Medicine.vue";
import Hospital from "./components/DataList/Hospital.vue";
import PatientPerson from "./components/DataList/PatientPerson.vue";
import PatientInfo from "./components/DataList/PatientInfo.vue";
import PatientCard from "./components/DataList/PatientCard.vue";
import PatientRef from "./components/DataList/PatientRef.vue";

import PCD_11 from "./components/PCD_11.vue";
import PCD_12 from "./components/PCD_12.vue";
import PLR_1 from "./components/PLR_1.vue";
import PRL_1 from "./components/PRL_1.vue";
import APR_11 from "./components/APR_11.vue";

// import AdminView from "./views/AdminView.vue";
// import LoginView from "./views/LoginView.vue";
// import PatientCurrentDisease from "./views/PatientCurrentDisease.vue";
// import PatientCurrentDrugsView from "./views/PatientCurrentDrugsView.vue";
// import PatientDetailsView from "./views/PatientDetailsView.vue";
// import PatientInfoView from "./views/PatientInfoView.vue";
// import PatientLabReportView from "./views/PatientLabReportView.vue";
// import PatientListView from "./views/PatientListView.vue";
// import PatientListViewAdd from "./views/PatientListViewAdd.vue";
// import PatientRefListView from "./views/PatientRefListView.vue";

import GrayBox from "./components/Boxes/GrayBox.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(far);

const pinia = createPinia();
pinia.use(({ store }) => {
  store.$router = markRaw(router);
});
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
app.component("fa_c", FontAwesomeIcon);
app.component("SideBar", SideBar);
app.component("NavBar", NavBar);
app.component("TitleBar", TitleBar);
app.component("SO_1", SO_1);
app.component("LoginP", LoginP);
app.component("PD_1", PD_1);
app.component("PL_11", PL_11);
app.component("PL_12", PL_12);
app.component("PH_1", PH_1);
app.component("PM_1", PM_1);

app.component("Drugallergy",Drugallergy);
app.component("Disease",Disease);
app.component("Medicine",Medicine)
app.component("Hospital", Hospital);
app.component("PatientPerson", PatientPerson);
app.component("PatientInfo", PatientInfo);
app.component("PatientRef", PatientRef);

app.component("PCD_11", PCD_11);
app.component("PCD_12", PCD_12);
app.component("PLR_1", PLR_1);
app.component("PRL_1", PRL_1);
app.component("APR_11", APR_11);
app.component("SU_11",SU_11);
app.component("SU_12",SU_12);
app.component("PatientCard", PatientCard);
app.component("GrayBox", GrayBox);
// app.component("AdminView", AdminView);
// app.component("LoginView", LoginView);
// app.component("PatientCurrentDisease", PatientCurrentDisease);
// app.component("PatientCurrentDrugsView", PatientCurrentDrugsView);
// app.component("PatientDetailsView", PatientDetailsView);
// app.component("PatientInfoView", PatientInfoView);
// app.component("PatientLabReportView", PatientLabReportView);
// app.component("PatientListView", PatientListView);
// app.component("PatientListViewAdd", PatientListViewAdd);
// app.component("PatientRefListView.vue",PatientRefListView);
