<template>
  <div id="box">
    <div class="box_one">
      <div class="box_one_top">
        <div class="box_one_top_left">
          <p class="box_one_top_left_p">连续签到3/7天得惊喜红包</p>
          <em class="box_one_top_left_em">签到得红包，购物更便宜</em>
        </div>
        <div class="box_one_top_right">
          已赚3.9元 >
        </div>
      </div>
      <div class="box_one_bottom">
         <div class="box_one_bottom_a" v-for="(con,index) in cons" :key="index">
           <div class="img_box">
            <img :src="'/static/'+con._img">
           </div>
            <p class="box_one_bottom_p">{{con.date}}</p>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialWrite",
    data() {
      return {
  cons:[
    {
      _img:"img/two_03.png",
      date:"第一天"
    },
    {
      _img:"img/two_03.png",
      date:"第二天"
    },
    {
      _img:"img/two_03.png",
      date:"第三天"
    },
    {
      _img:"img/two_03.png",
      date:"第四天"
    },
    {
      _img:"img/two_03.png",
      date:"第五天"
    },
    {
      _img:"img/two_03.png",
      date:"第六天"
    },
    {
      _img:"img/two_03.png",
      date:"第七天"
    }
  ]
      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 3.73rem;
    padding: 0 0.25rem;
    background-color: #f2f2f2;
  }

  .box_one {
    width: 100%;
    height: 100%;
    background-color: #fff8ee;
    border-radius: 0.3rem;
  }

  .box_one_top {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .box_one_top_left_p {
    font-size: 18px;
    color: #963508;
    font-weight: bold;
  }

  .box_one_top_left_em {
    font-size: 16px;
    color: #963508;
  }

  .box_one_top_right {
    width: 3.18rem;
    height: 1.12rem;
    background-color: #fc4c23;
    border-radius: 1rem;
    color: white;
    text-align: center;
    line-height: 1.12rem;
    font-size: 20px;
  }
  .box_one_bottom{
width: 100%;
height: 50%
background-color#fff3e7;
display: flex;
justify-content: space-around;
  }
  .img_box{
width: 1.03rem;
height: 1.03rem;
  }
  .img_box img{
  width: 100%;
  height: 100%;
    }
    .box_one_bottom_p{
   color: #ca977c;
   font-size: 14px;
   margin-top: 0.15rem;
    }
</style>
