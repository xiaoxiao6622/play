<template>
   <div class="box">
      <div class="list_box">
        <div class="tit_box">
          <h3 tit_h3>超值团购</h3>
          <p>
            <span>到店使用</span>
            <span>过期自动退款</span>
          </p>
        </div>

       <div class="dl_box">
         <dl>
           <router-link to="/Bargining">        
         	<dt > 
             
    <img src="../../static/img/gb_03.jpg" alt="">
   
           </dt>
           <dd>
             <h4 class="text_ellipsis">新店开业雪花啤酒喝多少送多少</h4>
           </dd>
           <dd>花仙月茶</dd>
           <dd>￥<i>1</i>&nbsp;<span><i>￥</i>16</span></dd>
            </router-link>
         </dl>
         <dl>
         	<dt>
             <img src="../../static/img/gb_03.jpg" alt="">
           </dt>
           <dd>
             <h4 class="text_ellipsis">新店开业雪花啤酒喝多少送多少</h4>
           </dd>
           <dd>花仙月茶</dd>
           <dd>￥<i>1</i>&nbsp;<span><i>￥</i>16</span></dd>
         </dl>
         <dl>
         	<dt>
             <img src="../../static/img/gb_03.jpg" alt="">
           </dt>
           <dd>
             <h4 class="text_ellipsis">新店开业雪花啤酒喝多少送多少</h4>
           </dd>
           <dd>花仙月茶</dd>
           <dd>￥<i>1</i>&nbsp;<span><i>￥</i>16</span></dd>
         </dl>
       </div>
      </div>
   </div>
</template>

<script>
  export default{
    name:"",
    data:function(){
      return{}
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    /* background-color: pink; */
    margin-top: 0.23rem;
    padding:0 0.35rem;
  }
  .list_box{
    width: 100%;
    height: 100%;
    padding:0.3rem 0.35rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0.1rem;
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
/* 公共标题 */
  .tit_h3{
    font-size: 20px;
  }
  .dl_box{
    display: flex;
    justify-content: space-between;
  }
  .list_box  dl {
    width: 30%;
    /* background-color: red; */
    margin-top: 0.25rem;

  }
  .list_box  dl  dt > img{
    width: 100%;
    height: 65%;
  }
  .list_box  dl dd {
    color: #757575;
    margin: 0.1rem 0;
  }
  .list_box  dl dd > h4{
    width: 90%;
    margin: 0  auto ;
    color: #000;
  }
  .list_box  dl dd:last-of-type{
    font-size: 12px;
    color: #ff6700;
  }
  .list_box  dl dd:last-of-type > span{
    text-decoration: line-through;
    color: #757575;
  }
</style>
