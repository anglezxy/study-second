<template>
  <div class="w3-light-grey">
  <!-- Sidebar/menu -->
  <nav class="w3-sidebar w3-bar-block w3-teal w3-animate-right w3-top w3-text-light-grey w3-large" style="z-index: 3; width: 250px; font-weight: bold; display: none; right: 0px;" id="mySidebar">
    <a href="javascript:void()" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-32">关闭</a>
    <a href="https://www.w3schools.com/w3css/tryw3css_templates_portfolio3.htm#" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">首页</a>
    <a href="https://www.w3schools.com/w3css/tryw3css_templates_portfolio3.htm#about" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">下载榜</a>
    <a href="https://www.w3schools.com/w3css/tryw3css_templates_portfolio3.htm#about" onclick="w3_close()" class="w3-bar-item w3-button w3-center w3-padding-16">关于</a>
  </nav>


  <header class="w3-container w3-top w3-white w3-xlarge w3-padding-16">
    <span class="w3-left w3-padding">Bing Wallpaper</span>
    <a href="javascript:void(0)" class="w3-right w3-button w3-white" onclick="w3_open()">☰</a>
  </header>

  <!-- Overlay effect when opening sidebar on small screens -->
  <div class="w3-overlay w3-animate-opacity" onclick="w3_close()" style="cursor: pointer; display: none;" title="close side menu" id="myOverlay"></div>
  <!-- !PAGE CONTENT! -->
  <div class="w3-main w3-content" style="max-width:1600px;margin-top:83px">
    <!-- Photo grid -->
    <div class="w3-row" >
      <div class="w3-third" v-for="item in imageList">
        <img :src="item.imageName" style="width:100%" @click="$router.openPage(`/item/${item.id}`)" alt="Canoeing again">
      </div>
      <!--<div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/BadlandsCycle_ZH-CN11688990875_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="Quiet day at the beach. Cold, but beautiful">
      </div>
      <div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/SwissSuspension_ZH-CN9196527618_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="The Beach. Me. Alone. Beautiful">
      </div>
      <div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/ChildrenPlaying_ZH-CN9664693753_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="A girl, and a train passing">
      </div>
      <div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/T19Krishna_ZH-CN12651112147_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="Nature again.. At its finest!">
      </div>
      <div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/ParkRangerIsmael_ZH-CN8783805449_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="Waiting for the bus in the desert">
      </div>
      <div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/FairSeason_ZH-CN8821036782_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="Waiting for the bus in the desert">
      </div>
      <div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/SuperBlueBloodMoon_ZH-CN11881086623_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="What a beautiful scenery this sunset">
      </div>
      <div class="w3-third">
        <img src="http://osknozmcz.bkt.clouddn.com/MoriBuilding_ZH-CN5143587469_1920x1080.jpg" style="width:100%" onclick="onClick(this)" alt="The Beach. Me. Alone. Beautiful">
      </div>-->
      <!--
      <div class="w3-quarter">
          <img src="./images/natureboy.jpg" style="width:100%" onclick="onClick(this)" alt="A boy surrounded by beautiful nature">
          <img src="./images/girl_train.jpg" style="width:100%" onclick="onClick(this)" alt="A girl, and a train passing">
          <img src="./images/boy.jpg" style="width:100%" onclick="onClick(this)" alt="Quiet day at the beach. Cold, but beautiful">
      </div>
       -->
    </div>
    <!-- Pagination -->
    <div class="w3-center w3-padding-32">
      <div class="w3-bar">
        <a @click="getData(`${currentPage -1}`)" class="w3-bar-item w3-button w3-hover-black">«</a>
        <a @click="getData(1)" class="w3-bar-item w3-button w3-black"  >1</a>
        <a @click="getData(2)" class="w3-bar-item w3-button w3-hover-black">2</a>
        <a @click="getData(3)" class="w3-bar-item w3-button w3-hover-black">3</a>
        <a @click="getData(4)" class="w3-bar-item w3-button w3-hover-black">4</a>
        <a @click="getData(`${currentPage -1}`)" class="w3-bar-item w3-button w3-hover-black">»</a>
      </div>
    </div>
    <!-- Modal for full size images on click-->
    <div id="modal01" class="w3-modal w3-black" style="padding-top: 0px; display: none;" onclick="this.style.display=&#39;none&#39;">
      <span class="w3-button w3-black w3-xlarge w3-display-topright">×</span>
      <div class="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
        <img id="img01" class="w3-image" :src="`/images/girl.jpg`">
        <p id="caption">
          Canoeing again
        </p>
      </div>
    </div>

    <!-- End page content -->
  </div>
  <div class="w3-black w3-center w3-padding-24">
    Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">codingme.net</a>
  </div>
  </div>
  <!-- </body>

 <div class="hello">
    &lt;!&ndash;<ul>&ndash;&gt;
      &lt;!&ndash;<li v-for="item in imageList">&ndash;&gt;
        &lt;!&ndash;<div @click="$router.openPage(`/item/${item.id}`)">&ndash;&gt;
          &lt;!&ndash;&lt;!&ndash;&lt;!&ndash;<img :src="`${baseUrl}${item.imageName}`">&ndash;&gt;&ndash;&gt;&ndash;&gt;
          &lt;!&ndash;<img :src="item.imageName"/>&ndash;&gt;
        &lt;!&ndash;</div>&ndash;&gt;

      &lt;!&ndash;</li>&ndash;&gt;

    &lt;!&ndash;</ul>&ndash;&gt;




  </div>
-->

</template>

<script type="text/ecmascript-6">
  import instanceAxios from '../util/baseAxios.js'

  export default {
    data() {
      return {
        imageList: [],
        number:0,
        totalPage:0,
        currentPage:0,
        isBlack: true,
      }
    },

    created() {
      this.getData(this.number);
    },
    methods: {
      getData(number) {
        if(number<0){
          number=0;
        }
        if(this.totalPage<number){
          number=this.totalPage;
        }
        instanceAxios.get(`/bing/list?page=${number}`)
          .then(({data: {code, message, data}}) => {
            console.log(data);
            if (code !== 0) {
              alert(message);
            } else {
              this.imageList = data.content;
              this.currentPage=data.number;
              this.totalPage=data.totalPage;

            }
          }).catch((error) => {
          console.log(error);
          setTimeout(() => {
            //超时错误
          }, 20000);

        });
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css";
  @import "../assets/st.css";


</style>
