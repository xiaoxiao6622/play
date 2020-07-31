<template>
  <div id="box">
    <div class="box_one" v-for="(nav,index) in navs" :key="index">
      <i :class="nav._class"></i>
      <p>{{nav.tit}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialFooter",
    data() {
      return {
        navs: [{
            tit: "首頁",
            _class: "iconfont icon-jingdianmenpiao1"
          },
          {
            tit: "購物車",
            _class: "iconfont icon-chaoshi1"
          },
          {
            tit: "我的",
            _class: "iconfont icon-sself"
          },

        ]
      }
    }
  }
</script>


<style scoped>
  #box {
    width: 100%;
    height: 1.6rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #CCCCCC;
    background-color: white;
    z-index: 2000;
  }

  .box_one {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .box_one p {
    font-size: 16px;
    color: #000000;
  }

  .icon-jingdianmenpiao1 {
    font-size: 30px;
    color: #000000;
  }

  .icon-chaoshi1 {
    font-size: 30px;
    color: #000000;
  }

  .icon-sself {
    font-size: 30px;
    color: #000000;
  }
</style>
