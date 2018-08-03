import Vue from 'vue'
import router from './router/router'

import App from './components/app.vue'




let vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
})

// Vue全局捕获错误的

function errorHandler(error, vm, info) {
  console.error(error)
  console.log(info)
  
  console.log('抛出异常')
  console.log(vm)
}

Vue.config.errorHandler  = errorHandler

// 用于ajax请求错误的时候手动抛出错误
Vue.prototype.$throw = (error) => errorHandler(error, this)
