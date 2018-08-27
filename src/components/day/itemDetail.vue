<template>
  <div>
    {{imageDetail.title}}
    {{imageDetail.copyright}}
  </div>
</template>

<script>
  import instance from '../../util/baseAxios.js'
    export default {
        name: "itemDetail",
        data(){
          return {
            imageDetail:''
          }
        },
      created(){

      },
      methods:{
          getData(){
            const id=this.$route.params.id;
            if(!id)
            {
              //出错
            }
           instance.get('/bing/detail',{id})
              .then(({data})=>{

              }).catch(error=>{

            });
          }
      }
    }
</script>

<style scoped>

</style>
