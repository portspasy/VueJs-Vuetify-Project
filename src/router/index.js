import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/projects',
    name: 'Projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projects" */ '../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'Team',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "team" */ '../views/Team.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
