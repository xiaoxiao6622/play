<template>
  <div id="box">
    <div class="great_box">
      <p>吃喝玩乐@玩转西安</p>
      <div class="box1">
        <div class="box_one">
          <div class="box_one_a" v-for="(type,index) in types" :key="index" @click="fn(type)">{{type}}</div>
        </div>
      </div>

      <!-- 吃喝玩乐详情页 -->
      <!-- <div class="box2">
        <div class="box_two">
          <div class="box_detail" v-for="(typeList,index) in typeLists" :key="index" :type="type">
            <div class="img_box">
              <img :src="'/static/'+typeList._img">
              <p class="box_detail_p">{{typeList.title}}</p>
              <div class="small_box">

                <em class="box_detail_em">{{typeList.price}}</em>
                <b class="box_detail_b">{{typeList.cancel}}</b>
                <span class="box_detail_span">{{typeList.discount}}</span>
              </div>
              <i class="box_detail_i">{{typeList.detail}}</i>
            </div>

          </div>
        </div>

      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: "Play",
    data() {
      return {
        types: ["优选大餐", "视频探店", "夏日新品尝鲜", "烘焙9.9走起","七月优选好店","口碑优选好味"]
        // typeLists: [
        //   {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // },
        // {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // },
        // {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // },
        // {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // },
        // {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // },
        // {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // },
        // {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // },
        // {
        //   _img: "img/sheep.png",
        //   title: "618人气……",
        //   price: "￥85",
        //   cancel: "￥79",
        //   discount: "4.5折",
        //   detail: "小肥羊火锅"

        // }
        // ]
      }
    },
    methods:{
        fn(type){
          // 触发自定义事件
            this.$emit("changetype",type);
        }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 2.76rem;
    margin-top: 0.25rem;
    padding: 0 0.25rem;
  }

  .great_box {
    width: 100%;
    height: 100%;
    border-radius: 0.15rem;
    background-color: white;
    padding: 0.4rem 0 0 0;
  }

  .great_box p {

    color: #000000;
    font-size: 20px;
    font-weight: bold;

  }

  .box1 {
    /* width: 100%;
    height: 100%; */
    overflow: auto;
  }

  .box_one {
    width: 15rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
  }

  .box_one_a {
    width: 2.2rem;
    height: 1rem;
    margin-left: 0.3rem;
    text-align: center;
    line-height: 1rem;
    background-color: #0379ff;
    border-radius: 0.5rem;
    flex-shrink: unset;
    color: white;
    font-size: 14px;
  }

  /* .box2 {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .box_two {
    width: 20rem;
    height: 4.8rem;
    display: flex;
    border-radius: 0 0.15rem 0 0.15rem;
  }

  .box_detail {
    width: 2.92rem;
    height: 4.4rem;
    border-radius: 0.15rem;
    border: 1px solid #cccc;
    margin: 0 0.2rem;
  }

  .img_box {
    width: 2.92rem;
    height: 2.2rem;

  }

  .img_box img {
    width: 100%;
    height: 100%;
  }

  .small_box {
    display: flex;
    margin: 0.2rem 0 ;
  }

  .box_detail_p {
    font-size: 20px;
    color: #000000;
  }

  .box_detail_em {
    color: red;
    font-size: 14px;
  }

  .box_detail_b {
    color: #CCCCCC;
    text-decoration: line-through;
    font-size: 14px;
  }

  .box_detail_span {
    display: block;
    width: 1.3rem;
    height: 0.5rem;
    border: 1px solid red;
    text-align: center;
    line-height: 0.5rem;
  }
  .box_detail_i{
   color: #CCCCCC;
   font-size: 16px;

  } */
</style>
