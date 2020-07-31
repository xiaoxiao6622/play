<template>
  <div class="box">
    <ul>
    	<li v-for="(data,index) in footerBtn" @click="routerFn(index)">
        <i :class="data._class"></i>
        <span>{{data.txt}}</span>
      </li>
     <!-- <li>
        <i :class="this.footerBtn[1]._class"></i>
        <router-link to="/Fina" class="link"><span>{{footerBtn[1].txt}}</span></router-link>
      </li>
      <li>
        <i :class="this.footerBtn[2]._class"></i>
        <router-link to="/Praise" class="link"><span>{{footerBtn[2].txt}}</span></router-link>
      </li>
      <li>
        <i :class="this.footerBtn[3]._class"></i>
        <span>{{footerBtn[3].txt}}</span>
      </li>
      <li>
        <i :class="this.footerBtn[4]._class"></i>
        <router-link to="/My" class="link"><span>{{footerBtn[4].txt}}</span></router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
  export default{
    name:"MyFooter",
    data:function(){
      return{
        _color:"#757575",
        footerBtn:[
          {
            txt:"首页",
            _class:"iconfont icon-zhifubao",
            _router:"/"
          },
          {
            txt:"理财",
            _class:"iconfont icon-zhuanzhang",
            _router:"/Fina"
          },
          {
            txt:"口碑",
            _class:"iconfont icon-koubei",
            _router:"/Praise"
          },
          {
            txt:"朋友",
            _class:"iconfont icon-zhifubao",
            _router:"/Friend"
          },
          {
            txt:"我的",
            _class:"iconfont icon-sself",
            _router:"/My"
          }
        ]
      }
    },
    methods:{
      routerFn(i){
        
        this.$router.push(this.footerBtn[i]._router);
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
    z-index: 999;
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
  li{
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
