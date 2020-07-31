<template>
  <div id="box">
    <div class="box1">
      <div class="box1_one" v-for="(option1,index) in options1" :key='index'>
        <i :class="option1._class"></i>
        <p>{{option1.txt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBanner",
    data() {
      return {
        options1: [{
            _class: " iconfont icon-meishi",
            txt: "美食"
          },
          {
            _class: " iconfont icon-elema ",
            txt: "外卖"
          },
          {
            _class: " iconfont icon-chaoshi4",
            txt: "商超到家"
          },
          {
            _class: " iconfont icon-jiaoyinzujifangke",
            txt: "休闲娱乐"
          },
          {
            _class: " iconfont icon-40",
            txt: "美食"
          },
          {
            _class: " iconfont icon-xinpin-copy",
            txt: "新品新店"
          },
          {
            _class: " iconfont icon-taopiaopiao1",
            txt: "淘票票"
          },
          {
            _class: " iconfont icon-gengduo_feizhujiudianyuding",
            txt: "酒店预订"
          },
          {
            _class: " iconfont icon-youzi1",
            txt: "水果外卖"
          },
          {
            _class: " iconfont icon-paotuidaigou",
            txt: "跑腿代购"
          },
          {
            _class: " iconfont icon-gouwudai3",
            txt: "热门商圈"
          },
          {
            _class: " iconfont icon-che",
            txt: "高德打车"
          },
          {
            _class: " iconfont icon-jiaoyupeixun2",
            txt: "教育培训"
          },
          {
            _class: " iconfont icon-jiudianyuding1",
            txt: "景点门票"
          },
          {
            _class: " iconfont icon-zhoubianyou11",
            txt: "周边游"
          },
          {
            _class: " iconfont icon-cai",
            txt: "买菜"
          },
          {
            _class: " iconfont icon--",
            txt: "送药上门"
          },
          {
            _class: " iconfont icon-pengyou2",
            txt: "超值拼团"
          },
          {
            _class: " iconfont icon-yimei",
            txt: "医美医疗"
          },
          {
            _class: " iconfont icon-qinzi-",
            txt: "亲子游玩"
          },
          {
            _class: " iconfont icon-role-lv12",
            txt: "结婚/旅拍"
          },
          {
            _class: " iconfont icon-ziyuan",
            txt: "KTV"
          },
          {
            _class: " iconfont icon-jiudianyuding1 ",
            txt: "城市服务"
          },
          {
            _class: " iconfont icon-chaoshi6",
            txt: "超市"
          },
          {
            _class: " iconfont icon-jipiao1",
            txt: "火车票机票"
          },
          {
            _class: " iconfont icon-yumaoqiu",
            txt: "运动健身"
          },
          {
            _class: " iconfont icon-yanchu2",
            txt: "大麦演出"
          },
          {
            _class: " iconfont icon-yinpin",
            txt: "甜品饮品"
          },
          {
            _class: " iconfont icon-hanbao",
            txt: "汉堡披萨"
          },
          {
            _class: " iconfont icon-quanbu4",
            txt: "全部"
          }
        ]

      }
    }

  }
</script>

<style scoped>
  #box {
    width: 100%;
    height:5.8rem;
    background-color: yellow;
    padding: 0.25rem;
  }

  .box1 {
    width: 100%;
    height: 5.44rem;
    background-color: white;
    border-radius: 0.15rem;
    display: flex;
    overflow: auto;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .box1 .box1_one {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0.5rem 0.4rem;
    align-items: center;
  }

  .icon-meishi {
    color: orange;
    font-size: 50px;

  }

  .icon-elema {
    color: royalblue;
    font-size: 45px;
  }

  .icon-jiaoyinzujifangke {
    color: orange;
    font-size: 45px;
  }

  .icon-chaoshi4 {
    color: orange;
    font-size: 45px;
  }

  .icon-40 {
    color: orange;
    font-size: 45px;
  }

  .icon-xinpin-copy {
    color: orange;
    font-size: 45px;
  }

  .icon-taopiaopiao1 {
    color: orange;
    font-size: 45px;
  }

  //
  .icon-taopiaopiao1 {
    color: royalblue;
    font-size: 45px;
  }

  .icon-gengduo_feizhujiudianyuding {
    color: purple;
    font-size: 45px;
  }

  .icon-youzi1 {
    color: orange;
    font-size: 45px;
  }

  .icon-paotuidaigou {
    color: orange;
    font-size: 45px;
  }

  .icon-gouwudai3 {
    color: royalblue;
    font-size: 45px;
  }

  .icon-che {
    color: royalblue;
    font-size: 45px;
  }

  .icon-jiaoyupeixun2 {
    color: royalblue;
    font-size: 45px;
  }

  .icon-jiudianyuding1 {
    color: purple;
    font-size: 45px;
  }

  .icon-zhoubianyou11 {
    color: green;
    font-size: 45px;
  }

  .icon-cai {
    color: green;
    font-size: 45px;
  }

  .icon-- {
    color: royalblue;
    font-size: 45px;
  }

  .icon-pengyou2 {
    color: orange;
    font-size: 45px;
  }

  .icon-yimei {
    color: orangered;
    font-size: 45px;
  }

  .icon-qinzi- {
    color: green;
    font-size: 45px;
  }

  .icon-role-lv12 {
    color: orange;
    font-size: 45px;
  }

  .icon-ziyuan {
    color: orange;
    font-size: 45px;
  }

  .icon-jiudianyuding1 {
    color: purple;
    font-size: 45px;
  }

  .icon-jiudianyuding1 {
    color: royalblue;
    font-size: 45px;
  }

  .icon-chaoshi6 {
    color: royalblue;
    font-size: 45px;
  }

  .icon-jipiao1 {
    color: orange;
    font-size: 45px;
  }

  .icon-yumaoqiu {
    color: green;
    font-size: 45px;
  }

  .icon-yanchu2 {
    color: orange;
    font-size: 45px;
  }

  .icon-yinpin {
    color: orange;
    font-size: 45px;
  }

  .icon-hanbao {
    color: orange;
    font-size: 45px;
  }

  .icon-quanbu4 {
    color: green;
    font-size: 45px;
  }
</style>
