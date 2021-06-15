import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LessonList from '../components/main/LessonList';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: LessonList
      },
      {
        path: 'setting',
        component: () => import('../components/main/AppSettings.vue')
      },
      {
        path: 'schedule',
        component: () => import('../components/main/ClassesSchedule.vue')
      }
    ]
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../views/Table.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
