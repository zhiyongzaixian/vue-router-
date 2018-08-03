<template>
  <div>
    app组件。。。
    <router-link to="/home">按钮</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import axios from 'axios'
  import Test from './test.vue'
  export default {
    component: {Test},
    data (){
      return {
        msg: '111',
      }
    }
  }
</script>

<style>

</style>