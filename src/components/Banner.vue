<template>
  <div class="box">
    <div class="notice">
      <div>
        <img src="../../static/img/n1.jpg" alt="">
      </div>
      <ul>
        <li>
          <span>你有一张券即将到期</span>
          <span><i>17</i>分钟前</span>
        </li>
        <li>
          <span>又有好友收取了你的能量</span>
          <span><i>17</i>分钟前</span>
        </li>
      </ul>
      <i class="iconfont icon-xiangyou"></i>
    </div>
    <div class="banner">
       <div class="block">
          <el-carousel height="2.42rem" :interval="4000">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="small">
                <img src="../../static/img/b1.jpg" alt="">
              </h3>
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"Banner"
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    padding: 0 0.35rem;
  }
  .notice{
    width: 100%;
    height: 1.93rem;
    background-color: #fff;
    border-radius: 0.1rem;
    display: flex;
    padding: 0 0.45rem;
    justify-content: space-between;
    align-items: center;
  }
  .notice img{
    width: 1.59rem;
    height: 100%;
  }
  .notice ul > li{
    list-style-type: disc;
    font-size: 12px;
  }
  .notice ul > li span:last-of-type{
    color: #959595;
  }
  /* banner部分 */
  .banner{
    width: 100%;
    height: 2.42rem;
    background-color: pink;
    margin-top: 0.23rem;
    border-radius: 0.1rem;
  }
  .small > img{
    width: 100%;
    height: 2.42rem;
    border-radius: 0.1rem;
  }
</style>
