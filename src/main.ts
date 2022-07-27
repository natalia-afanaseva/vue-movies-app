import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseLoader from "./components/shared/BaseLoader.vue";

import "./main.css";

const app = createApp(App);

app.component("base-loader", BaseLoader);

app.use(router);

app.mount("#app");
