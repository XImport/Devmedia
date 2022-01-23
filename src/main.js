import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "animate.css";
import Aos from "aos";
import "aos/dist/aos.css";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;
Vue.use(VueRouter);

import "./assets/css/style.css";
Vue.use(VueMeta);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),

  mounted() {
    Aos.init();
  },
}).$mount("#app");
