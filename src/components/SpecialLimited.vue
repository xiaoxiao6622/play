<template>
  <div id="box">
    <div class="box_one">
      <div class="box_one_a" v-for="(con,index) in cons" :key="index">
        <div class="box_top">
          <div class="left">
            <img :src="'/static/'+con._img">
          </div>
          <div class="middle">
            <ul class="_ul">
              <li class="_li1">01</li>
              <li>:</li>
              <li class="_li1">28</li>
              <li>:</li>
              <li class="_li1">22</li>
            </ul>
            <div class="middle_box">
              {{con.t1}}
            </div>
          </div>
          <div class="right">
            <div class="right_top">
              10:00
            </div>
            <div class="right_bottom">
              即将开始
            </div>
          </div>
        </div>
        <div class="big_bottom_box">
          <div class="box_bottom" v-for="(detail,index) in details" :key="index">
            <div class="img_box">
              <img :src="'/static/'+detail._pic">
            </div>
            <p class="box_bottom_p1">{{detail.t1}}</p>
            <p class="box_bottom_p2">{{detail.t2}}</p>
            <b class="box_bottom_b">{{detail.t3}}</b>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialLimited",
    data() {
      return {
        cons: [
          {
          _img: "img/logo_03.png",
          t1:"疯抢中"
        },
        {
          _img: "img/logo2_03.png",
          t1:"淘工厂"
        }
        ],
        details: [
          {
          _pic: "img/juice_07.png",
          t1: "工厂直销",
          t2: "前490件7折",
          t3: "抢购价￥20.3"
        },
        {
          _pic: "img/juice_07.png",
          t1: "工厂直销",
          t2: "前490件7折",
          t3: "抢购价￥20.3"
        }
        ]

      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 5.46rem;
    padding: 0.12rem;
    margin-top: 0.25rem;
    background-color: #f2f2f2;
  }

  .box_one {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem;
    display: flex;
    background-color: #FFFDEF;
    justify-content: space-around;
  }

  .box_one_a {
    width: 5rem;
    height: 100%;
    background-color:#fff1f1;
    margin: 0 0.05rem;
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box_top {
    width: 100%;
    height: 1.25rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffeded;
  }

  .left {
    width: 1rem;
    height: 1rem;
  }

  .left img {
    width: 100%;
    height: 100%;
  }

  ._ul {
    display: flex;
  }

  ._ul li {
    color: #fe463c;
    margin: 0 0.02rem;
  }

  .right {
    display: flex;
    flex-direction: column;
  }

  ._li1 {
    width: 0.5rem;
    height: 0.5rem;
    background-color: #ffded9;
    color: #fe463c;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.15rem;
  }

  .middle_box {
    width: 2rem;
    height: 0.5rem;
    background-color: #fe463c;
    color: white;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 2rem;
    font-size: 14px;
  }

  .right {
    color: #fe9b95;
    font-size: 16px;
  }

  .img_box {
    width: 2.15rem;
    height: 2.4rem;
  }

  .img_box img {
    width: 2.15rem;
    height: 2.4rem;
  }

  .big_bottom_box {
    width: 100%;
    height: 4.5rem;
    display: flex;
    justify-content: space-around;
  }

  .box_bottom {
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: white; */
  }
  .box_bottom_p1{
    font-size: 16px;
    color: #666666;
  }
  .box_bottom_p2{
   display: block;
   width: 1.7rem;
   height: 0.33rem;
   background-color: #fff1f0;
   color: #df544f;
   margin: 0.1rem 0 ;
  }
.box_bottom_b{
width: 2.1rem;
height: 0.46rem;
border-radius: 0.15rem;
background-color: #fe3f37;
color: white;
text-align: center;
line-height: 0.46rem;
}
</style>
