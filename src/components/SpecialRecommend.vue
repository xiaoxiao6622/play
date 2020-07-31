<template>
  <div id="box">
    <div class="box_one">
      <div class="box_one_top">
        <div class="box_one_top_left">
          好货推荐
        </div>
        <div class="box_one_top_right">
          10s后换一批
        </div>
      </div>
      <div class="box_one_bottom">
        <div class="box_con" v-for="(con,index) in cons" :key="index">
          <div class="box_con_one">
            <img :src="'/static/'+con._img">
          </div>
          <div class="box_con_two">
            <p class="box_con_two_p">红包价</p>
            <em class="box_con_two_em">{{con.price}}</em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialRecommend",
    data() {
      return {
        cons: [{
            _img: "img/r1_03.png",
            price: "￥14.3"
          },
          {
            _img: "img/r2_03.png",
            price: "￥1.2"
          },
          {
            _img: "img/r3_03.png",
            price: "￥15.2"
          },
          {
            _img: "img/r4_03.png",
            price: "￥68.4"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 5.1rem;
    padding: 0 0.25rem;
    background-color: #f2f2f2;
    margin-top: 0.3rem;
  }

  .box_one {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 0.15rem;
  }

  .box_one_top {
    width: 100%;
    height: 1.43rem;
    display: flex;
    justify-content: space-between;
    padding: 0.23rem 0 0 0.4rem;
  }

  .box_one_top_left {
    font-size: 20px;
    font-weight: bold;
  }

  .box_one_top_right {
    font-size: 16px;

  }

  .box_one_bottom {
    width: 100%;
    height: 3.44rem;
    display: flex;
    justify-content: space-around;
  }

  .box_con_one {
    width: 2.1rem;
    height: 1.8rem;
  }

  .box_con_one img {
    width: 100%;
    height: 100%;
  }

  .box_con_two {
    width: 2.1rem;
    height: 0.6rem;
    border-radius: 2rem;
    background-color: #ff5645;
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    margin-top: 0.4rem;

  }

  .box_con_two_p {
    font-size: 12px;
    color: white;
  }

  .box_con_two_em {
    font-size: 16px;
    color: white;
    font-weight: bold;
  }
</style>
