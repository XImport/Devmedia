import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Services from "@/views/ServiceView.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },

]
const router = new VueRouter({
  mode: 'history',

  routes
})

export default router