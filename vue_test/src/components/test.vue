<template>
  <div>
    test组件内容。。。
    <input type="text" v-model="content">
    <router-link to="/detail/1">detail1</router-link>

    <router-view></router-view>
  </div>
</template>
<script>
  import {routes} from '../router/router'
  export default {
    data() {
      return {
        content: ''
      }
    },
    watch: {
      content: function (newValue) {
        console.log(newValue);
        if(newValue === 'zhiyong'){
          // 动态修改meta中的meta数据
          this.$route.meta.isLogin = true
        }
      }
    },
    beforeRouteEnter(to, from, next){
      console.log('beforeRouteEnter() 马上跳转路由', this) // this ==>  undefined
      next(vm => {
        console.log(vm); // 当前组件的实例
      })
    },
    beforeCreate(){
      console.log('beforeCreate 组件创建之前');
    },
    beforeMount(){
      console.log('beforeMount 组件将要被挂载');
    },
    mounted(){
      console.log('mounted 组件已经挂载');
    }

  }
</script>
<style>

</style>