import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import SubmitButton from "@/components/ButtonComponent";
import ExerciseList from "@/components/ExerciseList";

// createApp(App).use(store).use(router).mount("#app");
const app = createApp(App);
app.use(store);
app.use(router);
app.component("SubmitButton", SubmitButton);
app.component("ExerciseList", ExerciseList);
app.mount("#app");
