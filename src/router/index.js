import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // alias: '/index.html', // 如果是history模式
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    component: () => import(/* webpackChunkName: "chart" */ '../views/ChartView.vue')
  }
]

const router = new VueRouter({
  mode: 'hash', // 必须是hash模式
  base: process.env.BASE_URL,
  routes
})

export default router
