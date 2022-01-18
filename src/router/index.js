import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Services from "@/views/ServiceView.vue"
import Contact from "@/views/ContactView.vue"
import WebDev from "@/views/WebDevView.vue"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Services/webdevlopment',
    name: 'Web',
    component: WebDev
  },
  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

]
const router = new VueRouter({
  mode: 'history',

  routes
})

export default router