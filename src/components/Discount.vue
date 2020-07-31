<template>
  <div class="box">
    <div class="list_box">
      <div class="tit_box">
        <h3 tit_h3>超值团购</h3>
        <p>
          <span>超值秒杀</span>
          <span>很划算 | 淘宝提供服务</span>
        </p>
      </div>
      <div class="list">
        <dl v-for="data in goods">
        	<dt>
            <img :src="'/static/' + data.img" alt="">
          </dt>
          <dd>{{data.title}}</dd>
          <dd>￥<span>{{data.price}}</span></dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:"Discount",
    data:function(){
      return{
        goods:[
          {
            title:"连衣裙",
            price:"39.00",
            img:"img/gb_03.jpg"
          },
          {
            title:"女士衬衫",
            price:"49.98",
            img:"img/gb_03.jpg"
          },
          {
            title:"连衣裙",
            price:"48.00",
            img:"img/gb_03.jpg"
          },
          {
            title:"精品中年女装",
            price:"69.00",
            img:"img/gb_03.jpg"
          },
          {
            title:"女士衬衫",
            price:"65.00",
            img:"img/gb_03.jpg"
          },
          {
            title:"精品男装",
            price:"188.99",
            img:"img/gb_03.jpg"
          }
        ]
      }
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    padding: 0 ;
    margin-top: 0.23rem;
    padding: 0 0.35rem;
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
  .list{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

  }
  .list dl{
    width: 30%;
    height:4.1rem;
    /* background-color: red; */
  }
  .list dl > dt{
    width: 100%;
    height: 2.7rem;
    /* background-color: #0074D9; */
    margin-top: 0.18rem;
  }
  .list dl > dt > img{
    width: 100%;
    height: 100%;
  }
  .list dl > dd{
    margin-top: 0.18rem;
  }
  .list dl > dd:last-of-type{
    color: #ff6700;
  }

</style>
