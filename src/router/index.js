import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'


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

]
const router = new VueRouter({
  mode: 'history',

  routes
})

export default router