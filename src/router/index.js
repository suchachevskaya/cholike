
import { createRouter, createWebHistory } from 'vue-router'
import loginPage from '../views/loginPage.vue'
import registrationPage from '../views/registrationPage.vue'
import homePage from '../views/homePage.vue'

const routes = [
  {
    path: '/',
    name: 'loginPage',
    component: loginPage
  },
  {
    path: '/about',
    name: 'registrationPage',
    component: registrationPage
  },
  {
    path: '/home',
    name: 'homePage',
    component: homePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router