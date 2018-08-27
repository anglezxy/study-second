<template>
  <div class="hello">
    <ul>
      <li v-for="item in imageList" >
        <div @click="$router.openPage(`/item/${item.id}`)">
        <img :src="item.imageName "/>
        </div>

      </li>

    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
  import instance from '../util/baseAxios.js'
export default {
  data () {
    return {
     imageList:[],
    }
  },

 created(){
    this.getData();
 },
  methods:{
     getData(){
      instance.get('/bing/list')
        .then(({data:{ code,message,data }}) =>{
          console.log(data)
          this.imageList=data.content;

        }).catch((error)=>{
          console.log(error);
          setTimeout(()=>{
            //超时错误
          },20000);

      });
    }
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
