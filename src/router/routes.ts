import type { RouteRecordRaw } from 'vue-router'
import Hello from '../views/Hello.vue'
import NoAuth from '../views/NoAuth.vue'
import PERMISSON from '@/permission/permissonEnum'
// import World from '../views/World.vue'
export const routes:Array<RouteRecordRaw>=[
  {
    path: '/',
    name: 'home',
    component: Hello,
   
  },
  {
    path: '/noAuth',
    name: 'noAuth',
    component: NoAuth,
    meta:{
      visible: true
    }
   
  },
  {
    path: '/about',
    name: 'about',

    component: () => import('../views/World.vue'),
    meta:{
      access: PERMISSON.ADMIN
    }
  }
]