<template>
  <div class="shoplist_container" >
    <section class="section-li" v-for="(item,index) in list" >
      <img style="width: 5.1rem;height: 5.1rem;margin-right: 20px" :src="imgUrl+item.image_path">
      <div style="flex: 1;">
        <div>
          <div class="dis-flex">
            <h4 class="section-title">
              <span>{{ item.name }}</span>
            </h4>
            <ul class="support-list">
              <li>票</li>
            </ul>
          </div>
          <div class="dis-flex evaluate">
            <div style="display: flex;flex: 1;">
              <img class="stars" src="../../assets/img14.svg">
              <span style="margin-top: 8px;">{{ item.rating }}</span>
              <span style="margin-top: 7px; padding-left: 2px">月销售{{ item.rating_count }}单</span>
            </div>
            <span class="special" v-if="item.delivery_mode">{{ item.delivery_mode.text }}</span>
          </div>
          <div class="evaluate dis-flex">
            <div>
              <span class="border-style">￥{{ item.float_minimum_order_amount }}起送</span>
              <span>配送费￥{{ item.float_delivery_fee }}</span>
            </div>
            <div class="color999">
              <span class="border-style">{{ item.distance }}m</span>
              <span>{{ item.order_lead_time }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { imgUrl } from "../../base-axios";

  export default {
    name: "ShopList",
    data() {
      return {
        imgUrl,
      }
    },
    props:['list'],
    created() {

    },
    methods: {

    },

  }
</script>

<style scoped lang="css">
  @import "../../assets/jquery-weui.min.css";
  @import "../../assets/base.css";
  @import "../../assets/home.css";
  @import "../../assets/weui_1.1.2_style_weui.min.css";

  .shoplist_container {
    background-color: #fff;
    margin-bottom: 2rem;
  }
</style>
