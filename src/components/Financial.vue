<template>
  <div class="box">
    <div class="list_box">
      <div class="tit_box">
        <h3 tit_h3>财富生活</h3>
        <p>
          <span>理财大咖手把手教你理财</span>
        </p>
      </div>
     <div class="dl_box">
      <dl v-for="data in money" :key="data.img">
      	<dt>
          <img :src="'/static/'+data.img">
        </dt>
        <dd>{{data.tit}}</dd>
      </dl>
     </div>
    </div>
    <!-- 底线 -->
    <div class="bottom">
      <div>
        <p>我是有底线的</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"Financial",
    data:function(){
      return{
        money:[
          {
            img:"img/m1.jpg",
            tit:"今日好货"
          },
          {
            img:"img/m2.jpg",
            tit:"玩转理财"
          },
          {
            img:"img/m3.jpg",
            tit:"天天领福利"
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
  .list_box{
    width: 100;
    padding: 0.3rem 0.35rem;
    background-color: #fff;
  }
  .tit_box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c2c2c;
  }
  .tit_box span{
    margin-right: 0.1rem;
    color: #757575;
  }
  .list_box dl{
    width: 30%;
  }
  .list_box dl  > dt,
  .list_box dl  > dd
  {
    width: 100%;
  }
  .dl_box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0.2rem;
  }
  .list_box dl  > dt > img{
    width: 100%;
  }

  .bottom{
    width: 100%;
    height: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
  }
  .bottom > div{
    height: 0;
    border-top: 1px solid #757575;
    width: 50%;
    position: relative;
  }
  .bottom > div > p{
    position: absolute;
    bottom: -5px;
    left: 50%;
    margin-left: -1rem;
    width: 2rem;
    background-color: #f5f5f5;
    text-align: center;
  }
</style>
