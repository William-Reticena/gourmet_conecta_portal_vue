import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

const routes: RouteRecordRaw[] = [
  {
    component: Login,
    name: 'login',
    path: '/login',
  },
  {
    component: Home,
    name: 'home',
    path: '/',
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'login',
    },
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
