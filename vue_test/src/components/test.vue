<template>
  <div>
    test组件内容。。。
    <input type="text" v-model="content">
    <router-link to="/detail">detail</router-link>
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
    }


  }
</script>
<style>

</style>