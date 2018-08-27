<template>
  <div>
    {{imageDetail.title}}
    <img :src="imageDetail.imageName"/>
  </div>
</template>

<script>
  import instance from '../../util/baseAxios.js'
    export default {
        name: "itemDetail",
        data(){
          return {
            imageDetail:{}
          }
        },
      created(){
        this.getData();
      },
      methods:{
          getData(){
            const id=this.$route.params.id;
            console.log(id);
           instance.get(`/bing/${id}`)
              .then(({data:{code,message,data}}) => {
                if(code !== 0){
                  alert(message);
                }else {
                  this.imageDetail = data;
                }
              }).catch((error)=>{

            });
          }
      }
    }
</script>

<style scoped>

</style>
