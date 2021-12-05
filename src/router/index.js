import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import State from '../views/State.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/destination', 
      name: 'Destination',
      component: Destination
  },
  {
    path: '/state', 
    name: 'state',
    component: State
}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
