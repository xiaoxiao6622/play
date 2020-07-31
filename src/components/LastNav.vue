<template>
  <div id="box">
    <div class="super_box">
      <div class="box1">
        <ul class="slide_box" v-for="(nav,index) in navs" :key="index">
          <li class="_one">{{nav.t1}}</li>
          <li class="_two">{{nav.t2}}</li>
        </ul>
      </div>
    </div>
    <div class="box2" v-for="(menue,index) in menues" :key="index">
      <div class="box2_top">
        <div class="img_box">
          <img :src="'/static/'+menue.pic">
        </div>
        <div class="box2_right">
          <div class="box_one">
            <p class="_title">{{menue.title}}</p>
          </div>
          <div class="box_two">
            <p :class="menue._class"></p>
            <span class="_time">{{menue.time}}</span>
          </div>
          <div class="box_three">
            <span class="_comment1">{{menue.comment1}}</span>
            <span class="_comment2">{{menue.comment2}}</span>
          </div>
          <div class="box_four">
            <span class="_price">{{menue.price}}</span>
            <span class="_active">{{menue.active}}</span>
          </div>
        </div>
      </div>
      <div class="box2_bottom">
        <div class="txt_box">
          <i class="iconfont icon-koubei5 "></i>
          <p class="_del">口碑美食</p>
          <span class="_cancel"> X</span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "LastNav",
    props: ['url'],
    data() {
      return {
        navs: [{
            t1: "推荐",
            t2: "为你定制"
          },
          {
            t1: "种草",
            t2: "精彩探店"
          },
          {
            t1: "优惠",
            t2: "30天低价"
          },
          {
            t1: "生活",
            t2: "潮玩享乐"
          },
          {
            t1: "美食",
            t2: "吃遍全城"
          },
          {
            t1: "外卖",
            t2: "安心到家"
          }
        ],
        menues: []
        // menues:[
        //   {
        //   pic:"img/c1.png",
        //   title:"竹园村酸菜鱼火锅",
        //   _class:"iconfont icon-wujiaoxingxingxingshoucangmoren",
        //   time:"营业至22:00",
        //   comment1:"灞桥区美食榜第二名",
        //   comment2:"品质好极了",
        //   price:"￥75 |",
        //   active:"150元代金券"
        //   },
        //   {
        //   pic:"img/c1.png",
        //   title:"竹园村酸菜鱼火锅",
        //   _class:"iconfont icon-wujiaoxingxingxingshoucangmoren",
        //   time:"营业至22:00",
        //   comment1:"灞桥区美食榜第二名",
        //   comment2:"品质好极了",
        //   price:"￥75 |",
        //   active:"150元代金券"
        //   },
        //   {
        //   pic:"img/c1.png",
        //   title:"竹园村酸菜鱼火锅",
        //   _class:"iconfont icon-wujiaoxingxingxingshoucangmoren",
        //   time:"营业至22:00",
        //   comment1:"灞桥区美食榜第二名",
        //   comment2:"品质好极了",
        //   price:"￥75 |",
        //   active:"150元代金券"
        //   },
        //   {
        //   pic:"img/c1.png",
        //   title:"竹园村酸菜鱼火锅",
        //   _class:"iconfont icon-wujiaoxingxingxingshoucangmoren",
        //   time:"营业至22:00",
        //   comment1:"灞桥区美食榜第二名",
        //   comment2:"品质好极了",
        //   price:"￥75 |",
        //   active:"150元代金券"
        //   },
        //   {
        //   pic:"img/c1.png",
        //   title:"竹园村酸菜鱼火锅",
        //   _class:"iconfont icon-wujiaoxingxingxingshoucangmoren",
        //   time:"营业至22:00",
        //   comment1:"灞桥区美食榜第二名",
        //   comment2:"品质好极了",
        //   price:"￥75 |",
        //   active:"150元代金券"
        //   },
        //   {
        //   pic:"img/c1.png",
        //   title:"竹园村酸菜鱼火锅",
        //   _class:"iconfont icon-wujiaoxingxingxingshoucangmoren",
        //   time:"营业至22:00",
        //   comment1:"灞桥区美食榜第二名",
        //   comment2:"品质好极了",
        //   price:"￥75 |",
        //   active:"150元代金券"
        //   },
        //   {
        //   pic:"img/c1.png",
        //   title:"竹园村酸菜鱼火锅",
        //   _class:"iconfont icon-wujiaoxingxingxingshoucangmoren",
        //   time:"营业至22:00",
        //   comment1:"灞桥区美食榜第二名",
        //   comment2:"品质好极了",
        //   price:"￥75 |",
        //   active:"150元代金券"
        //   }
        // ]
      }
    },
    created() {
      axios({
          url: 'menues'
        })
        .then((res) => {
          this.menues = res.data;
          console.log(this.menues)
        });

    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 4.31rem;
    background-color: #f7f7f7;
    padding: 0 0.25rem;

  }

  .super_box {
    width: 100%;
    height: 2.72rem;
    overflow: auto;
    border-radius: 0.15rem;
    background-color: white;

  }

  .box1 {
    width: 10rem;
    height: 2.72rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f7f7f7;
  }

  .slide_box li {
    width: 2.5rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
  }

  ._one {
    font-size: 20px;
    color: #000000;
    font-weight: bold;
  }

  ._two {
    font-size: 15px;
    color: #a5a5a5;

  }

  .box2 {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-radius: 0.15rem;
    padding: 0.5rem 0 0 0.5rem;
    margin-bottom: 0.2rem;
  }

  .box2_top {
    width: 100%;
    height: 3.06rem;
    display: flex;


  }

  .img_box {
    width: 2.85rem;
    height: 2.64rem;
  }

  .img_box img {
    width: 100%;
    height: 100%;
  }

  .txt_box {
    display: flex;
    margin-top: 0.5rem;
    justify-content: space-around;
    align-items: center;
  }

  .icon-koubei5 {
    font-size: 20px;
    color: orangered;
  }

  ._del {
    font-size: 16px;
    color: #999999;
  }

  .box_two {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
  }

  .box_three {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
  }

  .box_four {
    display: flex;
    margin: 0.2rem 0;
  }

  ._title {
    font-size: 20px;
    color: #000000;
  }

  ._time {
    width: 2rem;
    height: 0.5rem;
    background-color: #CCCCCC;
    border-radius: 0.15rem;
    border: 1px solid #CCCCCC;
    text-align: center;
    line-height: 0.5rem;
  }

  ._comment1 {
    width: 4rem;
    height: 0.5rem;
    font-size: 16px;
    border: 1px solid #CCCCCC;
    border-radius: 0.15rem;
  }

  ._comment2 {
    width: 2rem;
    height: 0.5rem;
    font-size: 16px;
    border: 1px solid #CCCCCC;
    border-radius: 0.15rem;
  }

  ._price {
    color: red;
    font-size: 16px;
  }

  ._active {
    color: red;
    font-size: 16px;
  }

  ._cancel {
    color: #CCCCCC;
    font-size: 20px;
  }
</style>
