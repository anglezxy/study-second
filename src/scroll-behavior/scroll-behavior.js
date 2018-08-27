import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const  Home = { template: '<div>home</div>'};
const Foo ={ template: '<div>foo</div>'};
const Bar ={ template: `
        
        <div>
        bar
        <div style="height:500px"></div>
        <p id="anchor">Anchor</p> 
        </div>

`};

const scrollBehavior =(to,from,savePosition)=> {
  if(savePosition){
    return savePosition;
  }else{
    const position = {};
    if(to.hash){
      position.selector = to.hash;
    }
    if(to.matched.some(m=>m.meta.scrollToTop)){
      position.x=0;
      position.y=0;
    }
    return position;
  }
};

const router =new VueRouter({
  mode: 'history',
  base: _dirname,
  scrollBehavior,
  routes:[
    {path:'/',component: Home,meta: { scrollToTop: true}},
    {path:'/foo',component: Foo},
    {path: '/bar',component: Bar,meta: {scrollToTop: true}},
  ],
});

new Vue({
  router,
  template: `
    <div id="app"> 
      <h1>scroll Behavior</h1>
      <ul>
      <li><router-link to="/">/</router-link></li>
      <li><router-link to="/foo">/foo</router-link></li>
      <li><router-link to="/bar">/bar</router-link></li>
       <li><router-link to="/bar#anchor">/bar#anchor</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');
