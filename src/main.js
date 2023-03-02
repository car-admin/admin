import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "view-ui-plus/dist/styles/viewuiplus.css";
import ViewUIPlus from "view-ui-plus";
const app = createApp(App);
app.use(ViewUIPlus);
app.use(router);
app.use(store);

app.mount("#app");
