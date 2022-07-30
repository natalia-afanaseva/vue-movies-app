import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import BaseLoader from "./components/shared/BaseLoader.vue";

import "./main.css";

const app = createApp(App);
const pinia = createPinia();

app.component("base-loader", BaseLoader);

app.use(router);
app.use(pinia);

app.mount("#app");
