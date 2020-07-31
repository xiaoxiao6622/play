<template>
  <div class="box">
    <ul>
    	<li>
        <i class="iconfont icon-zhifubao"></i>
        <router-link to="/"><span>{{footerBtn[0].txt}}</span></router-link>
      </li>
      <li>
        <i class="iconfont icon-zhuanzhang"></i>
        <span>{{footerBtn[1].txt}}</span>
      </li>
      <li>
        <i class="iconfont icon-koubei"></i>
        <span>{{footerBtn[2].txt}}</span>
      </li>
      <li>
        <i class="iconfont icon-koubei"></i>
        <span>{{footerBtn[3].txt}}</span>
      </li>
      <li>
        <i class="iconfont icon-sself"></i>
        <router-link to="/My"><span>{{footerBtn[4].txt}}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:"MyFooter",
    data:function(){
      return{
        footerBtn:[
          {
            txt:"首页",
            _class:"iconfont icon-zhifubao"
          },
          {
            txt:"理财",
            _class:"iconfont icon-zhuanzhang"
          },
          {
            txt:"口碑",
            _class:"iconfont icon-koubei"
          },
          {
            txt:"朋友",
            _class:"iconfont icon-zhifubao"
          },
          {
            txt:"我的",
            _class:"iconfont icon-sself"
          }
        ]
      }
    }

  }
</script>

<style scoped="scoped">
  .box{
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index:666
  }
  .box > ul{
    list-style: none;
    display: flex;
    width: 100%;
    height: 1.63rem;
    border: 0.01rem solid #ccc;
    /* background-color: #fafbff; */
    /* background-color: pink; */
  }
  .box > ul > li{
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
  .box > ul > li .iconfont{
    font-size: 0.6rem;
    margin-bottom: 0.05rem;
  }
  .box > ul > li span{
    font-size: 14px;
  }
</style>
