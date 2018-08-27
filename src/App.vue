<template>
  <div id="app">
    <!--使用动态的 transition name -->
    <!--<transition :name ="transition">
        <router-view></router-view>
    </transition>-->

    <!-- 路由匹配到的组件将渲染在这里-->
    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
