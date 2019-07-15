import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Detail from './views/Detail.vue'
import Purchase from './views/Purchase.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      params: {
        id: 0,
      }
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: Purchase,
    }
  ]
})
