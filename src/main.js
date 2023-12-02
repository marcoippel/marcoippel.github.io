import "swiper/css/swiper.css";
import Vue from "vue";
import { Plugin } from "vue-fragment";
import App from "./App.vue";
import router from "./router.js";
import "/public/css/main.css";

Vue.config.productionTip = false;
Vue.use(Plugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
