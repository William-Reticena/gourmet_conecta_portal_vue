import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { RouteName, RoutePath } from '@utils/enums'

import Application from '@layouts/ApplicationLayout.vue'
import Home from '@views/home/Home.vue'
import Login from '@views/login/Login.vue'
import Restaurant from '@views/restaurant/Restaurant.vue'

const routes: RouteRecordRaw[] = [
  {
    component: Login,
    name: RouteName.LOGIN,
    path: RoutePath.LOGIN,
  },
  {
    component: Application,
    name: RouteName.APPLICATION,
    path: RoutePath.APPLICATION,
    children: [
      {
        component: Home,
        name: RouteName.HOME,
        path: RoutePath.HOME,
      },
      {
        component: Restaurant,
        name: RouteName.RESTAURANT,
        path: RoutePath.RESTAURANT,
      },
    ],
  },
  {
    name: RouteName.NOT_FOUND,
    path: RoutePath.NOT_FOUND,
    redirect: {
      name: RouteName.LOGIN,
    },
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  routes,
})
