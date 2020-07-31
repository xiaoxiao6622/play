<template>
  <div class="Bfooter">
    <ul>
      <li v-for="(calalog,index ) in calalogs" :key="index">
         <i>{{calalog.icon}}</i>
         <span>{{calalog.name}}</span>
      </li>
      <!-- <li>
          <i class="iconfont icon-icon-"></i>
          <span>订单</span>
      </li>
      <li>
         <i class="iconfont icon-yqfwodekong"></i>
         <span>我的</span>
      </li> -->
    </ul>
  
  </div>
</template>

<script>
  export default{
    name:"Bfooter",
      data(){
      return {
      catalogs:[{name:"首页",icon:"iconfont icon-jiasuqi"},
      {name:"订单",icon:"iconfont iconfont icon-icon-"},
      {name:"我的",icon:"iconfont icon-yqfwodekong"}]

      }
    }
  }
</script>

<style scoped="scoped">
  .Bfooter{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index:666;
   
  }
  .Bfooter > ul{
    list-style: none;
    display: flex;
    width: 100%;
    height: 1.63rem;
    border: 0.01rem solid #ccc;
    /* background-color: #fafbff; */
    /* background-color: pink; */
  }
  .Bfooter > ul > li{
    list-style: none;
    width: 20%;
    height: 100%;
    /* background-color: red; */
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #606163;
  }
  .Bfooter > ul > li .iconfont{
    font-size: 0.6rem;
    margin-bottom: 0.05rem;
  }
  .Bfooter > ul > li span{
    font-size: 14px;
  }
</style>
