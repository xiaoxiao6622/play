<template>
  <div class="box">
    <div class="list">
      <div class="tit_box">
        <h3 tit_h3>惠支付</h3>
      </div>
      <div class="pay_box">
        <div v-for="data in paylist">
          <div class="span_box">
            <span>{{data.tit1}}</span>
            <span>{{data.tit2}}</span>
          </div>
          <img :src="'/static/'+data.img" alt="">
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default{
    name:"Pay",
    data:function(){
      return {
        paylist:[
          {
            tit1:"签到领积分",
            tit2:"积分可兑换海量权益",
            img:"img/p1.jpg"
          },
          {
            tit1:"赚钱红包升级",
            tit2:"通知好友来领取",
            img:"img/p2.jpg"
          }
        ]
      }
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    padding: 0 0.35rem;
    margin-top: 0.23rem;
  }
  .list{
    width: 100%;
    padding:0.3rem 0.35rem;
    background-color: #fff;
    border-radius: 0.1rem;
  }
  .tit_box{
    width: 100%;
    padding-bottom: 0.15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c2c2c;
    border-bottom: 1px solid #CCCCCC;
  }
  .tit_box span{
    margin-right: 0.1rem;
    color: #757575;
  }

  .pay_box{
    display: flex;
    padding: 0.35rem 0;
  }
  .pay_box > div{
    display: flex;
    justify-content: space-between;
    height: 1.4rem;
    width: 50%;
    padding: 0  0.15rem;
  }
  .pay_box > div img{
    width: 1.20rem;
    height: 1.2rem;
  }
  .pay_box > div:first-of-type{
    border-right: 1px solid #ccc;
  }
  .span_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .span_box span{
    margin: 0.1rem 0 ;
  }
</style>
