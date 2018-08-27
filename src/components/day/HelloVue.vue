<template>
    <div id="vue"> Hello Vue.js {{ message }}</div>
</template>

<script>
    export default {
      name: "HelloVue",
      data(){
          return {
            message:'第二个vue组件'
          }
      },
    };
</script>

<style type="text/css">
#vue{
  color: green;
  font-size:28px;
}
</style>
