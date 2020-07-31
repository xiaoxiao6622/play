<template>

  <div id="box">
    <div class="box_one">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(img,index) in imgs" :key="index">
          <img :src="'/static/'+img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  import {
    Swiper,
    SwiperSlide,
    directive
  }
  from 'vue-awesome-swiper'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css' //这里注意具体看使用的版本是否需要引入样式，以及具体位置。
  export default {
    name: "BottomBanner",
    data() {
      return {
        imgs: ["img/hb.png", "img/sheep.png", "img/c1.png","img/bea.png","img/ret.png"],
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },
    computed: {
      swiper() {
        return this.refs.mySwiper.$swiper
      }
    },
    components: {
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 2.35rem;
    margin-top: 0.25rem;
    padding: 0 0.25rem;

  }

  .box_one{
    width: 100%;
    height:100%;
  }

  .box_one img {
    width: 100%;
    height: 2.35rem;
    border-radius: 0.15rem;
  }
</style>
