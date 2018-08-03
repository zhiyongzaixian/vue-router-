## vue路由守卫
  1.为路由的安全跳转保驾护航
  2. 在路由跳转之前做一些准备工作(验证)
  3. 在路由守卫中决定路由是否正常跳转
  

## 全局路由守卫(router)
### 1. 路由前置卫士(beforeEach)
  1. 前置路由卫士是在导航激活(点击导航的时候）的时候触发
  2. 该路由卫士是异步解析的
  3. 在该卫士未resolve之前导航处于等待状态
  4. 通常在该守卫中进行全局拦截, 比如判断用户是否登陆等。
  5. next方法调用
    1. next(): resolve守卫状态为(confirmed)
    2. next(false): 终端导航，如url发生变化(包含人为), 则会通过from中参数跳转回之前的地址
    3. next('路径'): 中断当前的导航，跳转到新的导航
  
  ![](https://i.imgur.com/2QFqLJu.png)


### 2. router.beforeResolve(v2.5+)
  1. 导航解析完毕，路由resolve之前
  2. 在 beforeEach 和 组件内beforeRouteEnter(后边会将) 之后
  3. 参数同beforeEach一样，next需要调用才能resolve当前导航状态

### 3. router.afterEach()
  1. 全局后置守卫, 像来收拾战场的士兵
  2. 不需要next, 也改变不了路由
  

#  未完待续。。。

