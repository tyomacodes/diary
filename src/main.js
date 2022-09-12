import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import SubmitButton from "@/components/ButtonComponent";
import ExerciseList from "@/components/ExerciseList";
import { createApiClient } from "@/api/client";

// createApp(App).use(store).use(router).mount("#app");
const app = createApp(App);
app.config.globalProperties.$clientApi = createApiClient();
app.use(store);
app.use(router);
app.component("SubmitButton", SubmitButton);
app.component("ExerciseList", ExerciseList);
app.mount("#app");
