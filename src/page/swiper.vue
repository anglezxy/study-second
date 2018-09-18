<template>
<div class="swiper-container vue-swiper" ref="swiper">
  <div class="swiper-wrapper swiper-wrapper-width">
    <div class="swiper-slide" v-for="x in list">
      <div>
      <span ><img :src="imgBaseUrl + x.image_url"/></span>
        <br>
      <span><a>{{ x.title }}</a></span>
      </div>
    </div>
  </div>
  <div class="swiper-pagination " ref="pagination"></div>
</div>
</template>

<script>
  import Swiper from '../assets/swiper/swiper-3.4.2.min';
  import { imgBaseUrl } from '../base-axios.js';
  var myswiper = null;
  export default {
   props: {
     list:{
       type: Array,
     },
     keyName: { type: String ,},
     config:{
       type: Object,
       default: function(){

       }
     },
   },
    data(){
     return {
       imgBaseUrl,
     }
    },
    mounted(){
      myswiper = new Swiper(this.$refs.swiper,{
        slidesPerView : 4,
        spaceBetween : 20,
        slidesPerColumn : 2,
        pagination :this.$refs.pagination,

      })
    },
    watch:{
     list(newval,oldval){
       setTimeout(function(){
         myswiper.update();
       },10)
     }
    }

  }
</script>

<style type="text/css">
  @import "../assets/swiper/swiper-3.4.2.min.css";
  .swiper-wrapper-width{
    width: 850px;

  }
  .swiper-wrapper-bottom{
    bottom: -5px;

  }
  img{
    width: 1.8rem;
    height: 1.8rem;
  }
</style>
