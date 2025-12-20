import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/base.css";

/* Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTelegram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faGithub, faTelegram, faLinkedinIn);

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);
app.use(router);

app.mount("#app");
