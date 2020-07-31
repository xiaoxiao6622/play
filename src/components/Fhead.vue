<template>
  <div class="box">
    <div class="head_box">
     <div class="icon_box">
      <span>理财</span>
      <span>
        <i class="iconfont icon-mayi"></i>
        <i class="iconfont icon-libao"></i>
        <i class="iconfont icon-sousuo"></i>
      </span>
     </div>
     <div class="money">
      <p>
        <span>
          <i>总资产（元）</i>
          <i class="iconfont icon-yey2"></i>
          <i>
            <u class="iconfont icon-baozhang"></u>
            <u>免费延续保障</u>
          </i>
        </span>
        <span>昨日收益</span>
      </p>
      <p>
        <span>****</span>
        <span>****</span>
      </p>
     </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"Fhead"
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    height: 100%;
    background-color: #1678ff;
    padding: 0 0.35rem;
  }
  .icon_box{
    height: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .head_box{
    background-color: #1678ff;
  }
  .icon_box > span {
    font-size: 20px;
    color: #fff;
  }
  .icon_box > span > i{
    padding: 0 0.15rem;
  }

  .money{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 0 ;
  }
  .money p{
    width: 100%;
    /* background-color: pink; */
    padding: 0.15rem 0;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #fff;
  }
  .money p:last-of-type > span{
    width: 2rem;
    /* background-color: red; */
  }
  .money p:last-of-type > span:last-of-type{
    text-align: right;
  }
  .money p:first-of-type {
    color: #ddd;
  }
   .money p:first-of-type > span {
     display: flex;
    justify-content: space-between;
    align-items: center;

   }
   .money p:first-of-type > span > i{
     padding:0 0.15rem;
   }
   .money p:first-of-type > span > i:first-of-type{
     padding: 0;
   }
   .money p:first-of-type > span .iconfont{
     font-size: 14px;
   }

   .icon_box1{
     width: 100%;
     padding: 0.5rem 0;
     background-color:red;
   }
</style>
