## vue路由守卫
  1. 为路由的安全跳转保驾护航
  2. 在路由跳转之前做一些准备工作(验证)
  3. 在路由守卫中决定路由是否正常跳转
  

## 全局路由守卫(router)
### 1. 路由前置卫士(beforeEach)
  <font color=red>前置路由卫士是在导航激活之前(点击导航之前）的时候触发，但点击导航的时候会再次触发(这一次相对重要些)</font>

  1. 该路由卫士是异步解析的(点击的时候调用对应的回调函数)
  2. 在该卫士未resolve之前导航处于等待状态
  3. 使用场景: 通常在该守卫中进行全局拦截, 比如判断用户是否登陆等。
  4. next方法调用
    1. next(): resolve守卫状态为(confirmed)
    2. next(false): 终端导航，如url发生变化(包含人为), 则会通过from中参数跳转回之前的地址
    3. next('路径'): 中断当前的导航，跳转到新的导航
  
  ![](https://i.imgur.com/2QFqLJu.png)


### 2. router.beforeResolve(v2.5+)
  <font color=red>导航解析完毕，路由resolve之前</font>

  1. 在 beforeEach 和 组件内beforeRouteEnter(后边会将) 之后
  2. 参数同beforeEach一样，next需要调用才能resolve当前导航状态
  3. 使用场景: 可以做一些准备工作，比如分担router.beforeEach的部分工作

### 3. router.afterEach()
  1. 全局后置守卫, 像来收拾战场的士兵
  2. 不需要next, 也改变不了路由
  

## 路由组件守卫(路由组件内部独享)
### 1. beforeRouteEnter()
  <font color=red>当前路由组件在渲染之前, 路由被confirmed（router.beforeResolve）之前调用</font>

  1. next()需要主动调用，否则无法跳转到当前的路由组件
  2. <font color=red>注意：在组件的beforeCreate之前调用, 所以在该钩子函数中无法获取组件的实例</font>
### 2. beforeRouteUpdate()
 <font color=red>当前路由发生改变,且当前路由组件被复用的时候该函数被调用</font>

 1. 比如像路由组件传递数据的方式， /news/:id || /news/1 || /news/2
 2. 路由query参数发生变化的时候
 3. 此时可以获取vue的实例
 4. 使用场景，当路由url发生变化的时候可获取最新的数据，当数据获取成功的数据可再次操作数据，然后再调用next()方法进行路由跳转
### 3. beforeRouteLeave（）
  <font color=red>当前路由即将离开的时候调用该函数</font>

  1. 可以访问组件实例
  2. 不需要next() 方法调用
  3. 使用场景： 可以再次做一些收尾工作, 比如关闭定时器, 释放内存等

## 测试用例在对应的项目中，可以在src中查看