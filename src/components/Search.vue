<template>
  <div>
    <!-- 头部搜索框 -->
     <div class="serch-box">
       <i class="lo">
         <u>西安</u>
         <u>阴 25°</u>
       </i>
       <span></span>
       <i class="iconfont icon-sself"></i>
       <i class="iconfont icon-jia"></i>
     </div>
    <!-- 导航 -->
    <div class="nav-box">
     <span v-for="data in navData">
       <i :class="data._class" :style="data.color"></i>
       <i>{{data.title}}</i>
     </span>
    </div>
  </div>
</template>

<script>
  export default{
    name:"Search",
    data:function(){
      return{
        navData:[
          {
            title:"饿了么",
            _class:"iconfont icon-changyonglogo40-copy",
            color:"color:#2b83fe"
          },
          {
            title:"口碑",
            _class:"iconfont icon-praise",
            color:"color:#fc5f10"
          },
          {
            title:"酒店出游",
            _class:"iconfont icon-loufang",
            color:"color:#fda817"
          },
          {
            title:"电影演出",
            _class:"iconfont icon-praise",
            color:"color:#fc5f10"
          },
          {
            title:"市民中心",
            _class:"iconfont icon-praise",
            color:"color:#2b83fe"
          },
          {
            title:"转账",
            _class:"iconfont icon-xianzhihuanqian",
            color:"color:#2b83fe"
          },
          {
            title:"花呗",
            _class:"iconfont icon-xianzhihuanqian",
            color:"color:#2b83fe"
          },
          {
            title:"充值中心",
            _class:"iconfont icon-huafeichongzhi",
            color:"color:#fda817"
          },
          {
            title:"余额宝",
            _class:"iconfont icon-yuebao",
            color:"color:#fc5f10"
          },
          {
            title:"我的快递",
            _class:"iconfont icon-wuliu",
            color:"color:#fda817"
          },
          {
            title:"蚂蚁庄园",
            _class:"iconfont icon-dashu",
            color:"color:#fc5f10"
          },
          {
            title:"交通出行",
            _class:"iconfont icon-jiaotong",
            color:"color:#2b83fe"
          },
          {
            title:"健康码",
            _class:"iconfont icon-jiankangma",
            color:"color:#2b83fe"
          },
          {
            title:"蚂蚁森林",
            _class:"iconfont icon-dashu",
            color:"color:#00b379"
          },
          {
            title:"全部",
            _class:"iconfont icon-icon",
            color:"color:#bbbbbb"
          }
        ]
      }
    }
  }
</script>

<style scoped="scoped">
  .serch-box{
    width: 100%;
    height: 1.48rem;
    background-color: #1678ff;
    display: flex;
    padding: 0 0.35rem;
    justify-content: space-between;
    align-items: center;
  }
	.iconfont{
		font-size: 0.65rem;
    color: #fff;
	}
  .serch-box span{
    width: 6.02rem;
    height: 0.95rem;
    background-color: #fff;
    border-radius: 8px;
  }
  .serch-box > .lo{
    height: 80px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: cneter;
    color: #fff;
  }
  .serch-box > .lo > u:last-of-type{
     font-size: 10px;
  }
  /* 导航 */
  .nav-box{
    width: 100%;
    height: 6.55rem;
    background-color: #f5f5f5;

    display: flex;
    padding: 0.55rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .nav-box span{
    /* background-color: gold; */
    height: 1.32rem;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav-box span > i:first-of-type{
    margin-bottom: 0.2rem;
    font-size: 0.75rem;
  }
</style>
