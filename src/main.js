import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import 'animate.css';
import Aos from "aos"
import 'aos/dist/aos.css'


Vue.config.productionTip = false

import "./assets/css/style.css"
new Vue({
  vuetify,
  
  render: h => h(App),
   mounted() {
    Aos.init()
  },
}).$mount('#app')
