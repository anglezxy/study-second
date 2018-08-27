<template>
  <div class="hello">
    <ul>
      <li v-for="item in imageList" >
        <div @click="$router.openPage(`/item/${item.id}`)">
        <img :src="item.smallImageName "/>
        </div>

      </li>
      <br>
      <button @click="getData(0)">first</button>
      <button @click="getData(`${currentPage - 1}`)">shang yi ye</button>
      <button @click="getData(`${currentPage + 1}`)">xia yi ye</button>
    </ul>
  </div>

</template>

<script type="text/ecmascript-6">
  import instanceAxios from '../util/baseAxios.js'
export default {
  data () {
    return {
     imageList:[],
      totalPage:0,
      currentPage:0,
      number:0
    }
  },

 created(){
    this.getData(this.number);
 },
  methods:{
     getData(number){
       if(number<0){
         number=0;
       }
       if(this.totalPage<number){
         number=this.totalPage;
       }
       instanceAxios.get(`/bing/list?page=${number}`)
        .then(({data:{ code,message,data }}) =>{
          console.log(data);
          // console.log(data.content);
          this.imageList=data.content;
          this.totalPage=data.totalPage;
          this.currentPage=data.number;

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
