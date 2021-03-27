import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import SingIn from '../views/SingIn.vue'
import SingUp from '../views/SingUp.vue'
import TaskDetail from '../views/TaskDetail.vue'
import TaskCreate from '../views/TaskCreate.vue'
import SessionUser from '../views/SessionUser.vue'
import Contact from '../views/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SingIn',
    name: 'SingIn',
    component: SingIn
  },
  {
    path: '/SingUp',
    name: 'SingUp',
    component: SingUp
  },
  {
    path: '/TaskDetail',
    name: 'TaskDetail',
    component: TaskDetail
  },
  {
    path: '/TaskCreate',
    name: 'TaskCreate',
    component: TaskCreate
  },
  {
    path: '/SessionUser',
    name: 'SessionUser',
    component: SessionUser
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
