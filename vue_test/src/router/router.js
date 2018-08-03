import Vue from 'vue'
import VueRouter from 'vue-router'

import Test from '../components/test.vue'
import Detail from '../components/detail.vue'


Vue.use(VueRouter)

let routes = [
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  {
    path: '/home',
    component:Test,
    meta: {
      isLogin: false
    }
  },
  {
    path: '/detail',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 1.全局路由前置卫士, 在路由导航触发之后执行，异步解析，在守卫resolve之前，导航一直处于等待的过程
router.beforeEach(function (to, from, next) {
  // console.log(to, from);
  // to将要去的路由对象：{name: undefined, meta: {…}, path: "/home", hash: "", query: {…}, …}
  // from去之前的路由对象: {name: null, meta: {…}, path: "/", hash: "", query: {…}, …}
  if(to.path === '/home'){
    next() // resolve状态为confirmed，进行路由跳转，如果不调用则不跳转
  }else if(from.meta.isLogin){
    next()
  }else {
    next(false)
  }
})


// 2. 全局解析守卫router.beforeResolve(v 2.5+)

router.beforeResolve(function (to, from, next) {
  console.log('router.beforeResolve', to, from, next)
  next()
})

// 3. 全局后置守卫 router.afterEach(), 个人感觉更像马后炮，意义不太大
router.afterEach(function (to, from ) {
  console.log(to, from );
})


export default router
