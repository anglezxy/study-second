<template>
  <div class="post">
    <div class="loading" v-if="loading"> loading.....</div>
    <div v-if="error" class="class"> {{ error }}</div>
    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
  //导航完成后获取数据
  export default {
    name: "Hello",
    data() {
      return {
        loading: false,
        post: null,
        error: null,
      }
    },
    created() {
      //组件创建完成后获取数据
      //此时，data已经被observed了
      this.fetchData();
    },
    watch: {
      //如果路由有变化，会再次执行该方法
      '$route': 'fetchData',
    },
    methods: {
      fetchData() {
        this.error = this.post = null;
        this.loading = true;
        getPost(this.$route.params.id, (err, post) => {
          this.loading = false;
          if (err) {
            this.error = err.toString();
          } else {
            this.post = post;
          }
        });

      },
    },
  };
  // 导航完成前获取数据
  export default {
    data(){
      return {
        post: null,
        error: null,
      }
    },

    beforeRouteEnter(to,from,next){
      getPost(to.params.id,(err,post)=>{
        next(vm=>vm.setData(err,post));
      });
    },
    //路由改变前，组件就已经渲染完了
    //逻辑稍有不同
    beforeRouteUpdate(to,from,next){
      this.post=null;
      getPost(to.params.id,(err,post)=>{
        this.setData(err,post);
        next();
      });
    },
    methods:{
      setData(err,post){
        if(err){
          this.error=err.toString();
        }else{
          this.post =post;
        }
      },
    },
  }

</script>

<style scoped>

</style>
