import { RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('/@/views/system/404/index.vue')
  }
]
