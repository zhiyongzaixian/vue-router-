<template>
  <div>
    detail组件内容。。。{{$route.params.id}}
    <router-link to="/detail/2">detail2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    beforeRouteUpdate(to, from, next){
      console.log('beforeRouteUpdate 路由组件更新')
      console.log(this)  // 可以获取组件实例
      next() // 需要手动调用next方法才能进行下一次路由跳转
    }
  }
</script>

<style>

</style>