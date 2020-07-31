<template>
  <div id="box">
    <div class="box_one">
      <p>淘宝</p>
      <p>特价</p>
    </div>
    <div class="box_two">
      <div class="box_two_left">
        <i class="iconfont icon-fangdajing1"></i>
      </div>
      <div class="box_two_right">
        搜索商品
      </div>
    </div>
    <div class="box_three">
      <div class="box_three_left">
        <i class="iconfont icon-gerenshezhi1"></i>
      </div>
      <div class="box_three_right">
        <i class="iconfont icon-del"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialHeader",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 1.54rem;
    background-color: #fd4513;
    display: flex;
    padding-left: 0.4rem;
    justify-content: space-around;
    align-items: center;
    padding: 0.1rem 0 0 0;
    position: fixed;
    top: 0;
  }

  .box_one {
    width: 1.5rem;
    height: 100%;
    color: white;
    text-align: center;
  }

  .box_one p {
    color: white;
    font-size: 20px;
  }

  .box_two {
    width: 2.8rem;
    height: 0.7rem;
    background-color: white;
    border-radius: 0.35rem;
    display: flex;
    text-align: center;
    line-height: 0.7rem;
    padding-left: 0.2rem;
    color: #919191;
    font-size: 16px;
    /* margin-right: 2rem; */
  }

  .icon-fangdajing1 {
    font-size: #919191;
    font-size: 16px;
  }

  .box_three {
    width: 2.43rem;
    height: 0.88rem;
    background-color: #da4d1f;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .box_three_left {
    width: 1rem;
    height: 0.6rem;
    border-right: 1px solid #CCCCCC;
  }

  .icon-gerenshezhi1 {
    font-size: 20px;
    color: white;
  }

  .icon-del {
    font-size: 20px;
    color: white;
  }
</style>
