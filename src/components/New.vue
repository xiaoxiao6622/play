<template>
  <div id="box">
    <div class="box1">
      <span class="new_span">新人福利</span>
      <div class="big_box">
          <div class="box1_one">
            <img :src="'/static/'+this.msg">
          </div>
          <div class="box1_two" v-for="(imgOne,index) in imgOnes" :key="index">
            <img :src="'/static/'+imgOne._img">
            <P class="t1">{{imgOne._t1}}</P>
            <em class="t2">{{imgOne._t2}}</em>
            <span class="t3">{{imgOne._t3}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "New",
    data() {
      return {
        msg: "img/gift.png",
        imgOnes: [{
            _img: "img/c1.png",
            _t1: "香辣鸡翅",
            _t2: "￥10.99",
            _t3: "￥11"
          },
          {
            _img: "img/c1.png",
            _t1: "超级鸡腿堡",
            _t2: "￥17.99",
            _t3: "￥18"
          }
        ]


      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 5.33rem;
    background-color: #f7f7f7;
    margin-top: 0.36rem;
    padding: 0 0.25rem;
  }

  .box1 {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 0.15rem;
    padding:0.5rem  0.2rem 0;
  }
  .big_box{
 width: 100%;
    height: 100%;
    border-radius: 0.15rem;
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 0 0 0;
  }

  .new_span {
    color: #000000;
    font-size: 20px;

  }

  .box1_one {
    width: 2.95rem;
    height: 3.5rem;
    border-radius: 0.15rem;

  }

  .box1_one img {
    width: 100%;
    height: 100%;
  }

  .box1_two {
    width: 2.97rem;
    height: 3.53rem;
    border: 1px solid #ccc;
    border-radius: 0.15rem;
  }

  .box1_two img {
    width: 2.96rem;
    height: 2.08rem;
  }

  .t1 {
    color: #000000;
    font-size: 18px;
  }

  .t2 {
    color: red;
    font-size: 18px;
  }

  .t3 {
    color: #CACACA;
    font-size: 18px;
    text-decoration: line-through;
  }
</style>
