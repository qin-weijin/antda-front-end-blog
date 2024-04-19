import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/view/home/home')
  },
  {
    path: '/effects',
    name: '特效',
    component: () => import('@/view/about/effects')
  },
  {
    path: '/bookmark',
    name: '书签',
    component: () => import('@/view/bookmark/bookmark')
  },
  {
    path: '/essay',
    name: '随笔',
    component: () => import('@/view/essay/essay')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/view/project/project')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,  
})

export default router