import type { RouteRecordRaw } from 'vue-router'

import { RouteNameEnum } from '@/router/types'
import LoginPage from '@/views/page/system/login/index.vue'

/**
 * 登录路由
 */
export const LOGIN_ROUTE: RouteRecordRaw = {
  path: '/login',
  name: RouteNameEnum.LOGIN,
  component: LoginPage,
  meta: {
    title: '登录',
  },
}

/**
 * 404路由
 */
export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'pathMatch',
  redirect: '/exception',
  meta: {
    title: '404',
  },
}
