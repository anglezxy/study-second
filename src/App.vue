<template>
  <div id="app">
    <!--使用动态的 transition name -->
    <!--<transition :name ="transition">
        <router-view></router-view>
    </transition>-->

    <!-- 路由匹配到的组件将渲染在这里-->
    <router-view/>
  <foot-guide></foot-guide>
  </div>
</template>

<script>
import FootGuide from "./components/footer/footGuide";
export default {
  name: 'App',
  components: { FootGuide }
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
