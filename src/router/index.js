import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Services from "@/views/ServiceView.vue"
import Contact from "@/views/ContactView.vue"
import WebDev from "@/views/WebDevView.vue"
import Logo from "@/views/LogoView.vue"
import AutoMation from "@/views/AutoView.vue"
import Social from "@/views/SocialView.vue"
import Shooting from "@/views/ShootingView.vue"
import MotionGraphic from "@/views/MotionView.vue"
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
    path: '/Services/LogoDesign',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/Services/AutoMations',
    name: 'Auto',
    component: AutoMation
  },
  {
    path: '/Services/SocialMedia',
    name: 'Social',
    component: Social
  },
  {
    path: '/Services/Shooting',
    name: 'Shooting',
    component: Shooting
  },
  {
    path: '/Services/Motiongraphic',
    name: 'MotionGraphic',
    component: MotionGraphic
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