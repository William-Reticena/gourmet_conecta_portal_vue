import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login/Login.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: Login,
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
