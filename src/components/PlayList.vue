<template>
  <div id="box">
    <div class="big_box">

      <div class="box2">
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
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "PlayList",
    props:["type"],
    data() {
      return {
        typeLists:[]
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
    created(){
     this.gettypeLists();
    },
    watch:{
     //当书的类型发生变化时，重新获取书籍
     type:function(){
        this.gettypeLists();
     }
    },
    methods:{
      gettypeLists(){

     axios({
      url:"typeLists",
      params:{
       "type":this.type
      }
     })
     .then(res=>{
       this.typeLists=res.data;
       console.log(this.typeLists)
     })
      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 5.2rem;
    /* background-color: #007AFF; */
  }

  .big_box {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  .box2 {
    width: 100%;
    height: 100%;
    /* background-color: #008000; */
    /* overflow: auto; */
  }

  .box_two {
    width: 13rem;
    height: 8rem;
    display: flex;
    flex-wrap: wrap;
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
    margin: 0.2rem 0;
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

  .box_detail_i {
    color: #CCCCCC;
    font-size: 16px;
  }
</style>
