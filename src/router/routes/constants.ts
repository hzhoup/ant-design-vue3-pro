import { RouteRecordRaw } from 'vue-router'

export const BasicLayout = () => import('/@/layouts/BasicLayout/index.vue')

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout
  },
  {
    path: '/404',
    name: '404',
    component: () => import('/@/views/system/404/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    redirect: '/404'
  }
]
