<template>

  <div class="goods">
    <!--menu区域-->
    <div class="menu-wrapper" ref="menuWrapper">
      <swiper :list="goods"></swiper>
    </div>
    <!--第二个区域商品-->
    <div >
    <shop-list :list="shoplist"></shop-list>
    </div>
  </div>
</template>

<script>
  import axios from '../base-axios.js';
  import swiper from './swiper.vue';
  import ShopList from "../components/common/ShopList";

  export default {
    name: "Goods",
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {},
        shoplist:[],
      }
    },
    components: {
      ShopList,
      swiper,
    },
    created() {
      this.getGoods();
      this.getShopList();

    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
    },
    methods: {
      getGoods() {
        axios.get('/v2/index_entry').then((response) => {
          console.log(response);
          this.goods = response.data;
        });
      },
      getShopList(){
        axios.get(`/shopping/restaurants?latitude=${31.22967}&longitude=${121.4762}`).then(res => {
          console.log(res.data);
          this.shoplist=res.data;
        });
      }
    }

  }
</script>

<style scoped>

</style>
