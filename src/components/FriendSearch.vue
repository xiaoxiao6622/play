<template>
  <div id="box">
    <div class="box_one">
      <div class="box_top">
        <div class="box_top_search">
          <i class="iconfont icon-fangdajing4"></i>
          <p class="box_top_search_p">亲情圈</p>
        </div>
      </div>
      <div class="box_bottom">
           <div class="_one" v-for="(txt,index) in txts" :key="index">
                <i :class="txt._class"></i>
                <p class="txt_p">{{txt.t1}}</p>
                <em class="txt_em">{{txt.t2}}</em>
           </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FriendSearch",
    data() {
      return {
      txts:[
        {
          _class:"iconfont icon-zhifubaoshenghuohao",
          t1:"生活号",
          t2:"你有新通知"
        },
        {
          _class:"iconfont icon-xiaochengxu2",
          t1:"小程序",
          t2:"发现更多服务"
        },
        {
          _class:"iconfont icon-shenghuoquanxuanzhong",
          t1:"生活圈",
          t2:"和朋友分享生活"
        }

      ]
      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 4.7rem;
    padding: 0 0.5rem;
  }
  .box_one {
    width: 100%;
    height: 100%;
  }
  .box_top_search {
    width: 100%;
    height: 0.89rem;
    background-color: #f2f2f2;
    display: flex;
    align-items: center;
    margin-top: 1.7rem;
  }

  .icon-fangdajing4 {
    font-size: 20px;
    color: #afafaf;
    margin: 0 0.4rem;
  }

  .box_top_search_p {
    font-size: 20px;
    color: #afafaf;
  }
  .box_bottom{
    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  ._one{
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
  }
  .icon-zhifubaoshenghuohao{
font-size: 40px;
color:#09c1cd;
  }
  .txt_p{
font-size: 16px;
color: #000000;
margin: 0.15rem 0;
  }
  .txt_em{
font-size:14px;
color: #ababab;
  }
  .icon-xiaochengxu2{
    color: #2b83fe;
    font-size: 40px;
  }
  .icon-shenghuoquanxuanzhong{
color: #ff6110;
font-size: 40px;
  }

</style>
