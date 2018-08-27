import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from '@/components/Hello.vue';

Vue.use(VueRouter);

function dynamicPropsFn(route){
  const now = new Date();
  return {
    name:(now.getFullYear() + parseInt(route.params.years) )+ '!'
  }
};
const router = new VueRouter({
  mode: 'history',
  base: _dirname,
  routes:[
    {
      path: '/',
      component: Hello,

    },
    {
      path: '/hello/:name',
      component: Hello,
      props: true,
    },
    {
      path: '/static',
      component: Hello,
      props: { name : 'world'},
    },
    {
      path: '/dynamic/:years',
      component: Hello,
      props: dynamicPropsFn,
    },
    {
      path: '/attrs',
      component: Hello,
      props: { name : 'attrs'},
    },
  ],
});


router.beforeEach((to,from,next)=>{
  //to Route 即将要进入的目标路由对象
  //from Route 当前导航正要离开的路由
  //next function
});


new Vue({
  router,
  template: `
  <div id="app">
    <h1>Router</h1>
    <ul>
    <li> <router-link to="/"></router-link></li>
    <li> <router-link to="/hello/you">hello you </router-link></li>
    <li> <router-link to="/static"> static </router-link></li>
    <li> <router-link to="/dynamic/1"> /dynamic/1 </router-link></li>
    <li> <router-link to="/attrs">attrs </router-link></li>
    </ul>
  </div>
  `
}).$mount('#app');
