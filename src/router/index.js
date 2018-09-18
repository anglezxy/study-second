import Vue from 'vue';
import Router from 'vue-router';
//import HelloWorld from '@/components/HelloWorld';
// import HelloVue from '@/components/day/HelloVue';
// import itemDetail from '@/components/day/itemDetail';
import _ from 'lodash';


Router.prototype.openPage = function(link, query){
  this.push({
    path:link,
    query: _.assignIn({
      time: new Date().getTime()
    }, query || {} )
  });
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
    //这个特殊的 `require` 语法将会告诉 webpack
    // 自动将你的构建代码切割成多个包，这些包
    // 会通过 Ajax 请求加载
      component(resolve){
        require(['@/page/Goods.vue'],resolve);
      },
    },
    {
      path: '/city',
      name: 'City',
      component(resolve){
        require(['@/page/City.vue'],resolve);
      },
    },
    {
      path: '/item/:id',
      name: 'itemDetail',
      component(resolve){
        require(['@/components/day/itemDetail'],resolve);
      },
    },
  ],
});
