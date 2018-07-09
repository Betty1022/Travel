import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      //component: () => import('@/pages/home/Home')
      component:Home
    },
    {
    	path:'/city',
    	name:'City',
    	//component: () => import('@/pages/city/City')
      component:City
    },
    {
      path:'/detail/:id',
      name:'Detail',
      //component: () => import('@/pages/detail/Detail')
      component:Detail
    }
  ],//每次路由切换都进入x，y为0的页面
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
