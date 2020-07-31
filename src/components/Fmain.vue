<template>
  <div class="box">
    <ul class="icon_box">
    	<li v-for="icon in icon">
        <i :class="icon._class"></i>
        <span>{{icon.tit}}</span>
      </li>
    </ul>
    <!-- banner部分 -->
    <div class="banner_con">
       <div class="block">
          <el-carousel height="2.5rem" arrow="never"
                       indicator-position = "none">
            <el-carousel-item v-for="item in 4" :key="item">
              <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
    </div>
    <!-- 直播部分 -->
    <div class="show_box">
      <div class="show">
        <p>
          <img src="../assets/img/show.jpg" alt="">
        </p>
        <p>
          <span>普通人如何玩转基金?</span>
          <span>
            <i>
              <u :class="this.show"></u>
              直播中
            </i>
            <i>53444观看</i>
          </span>
        </p>
        <p>
          <span :class="this.packge"></span>
          <span>主播福利</span>
          <span :class="this.right"></span>
        </p>
      </div>
    </div>
    <!-- 财富直通车 -->
    <div class="wealth_box">
      <div class="tit_box">
        <h3>财富直通车</h3>
        <span>更多</span>
        <!-- banner -->
      </div>
      <div class="banner_box">
        <div class="block">
           <el-carousel height="5.1rem" arrow="never" :interval = '4000'
                        indicator-position = "outside">
             <el-carousel-item v-for="item in 6" :key="item" >
               <h3 class="small">{{ item }}</h3>
             </el-carousel-item>
           </el-carousel>
         </div>
      </div>
    </div>

    <!-- 支付宝精选 -->
    <div class="featured_box">
      <p>
        <img src="../assets/img/jx.jpg">
      </p>
      <div class="list_box">
        <div class="tit_con">
          <div>
            <h4>安稳理财</h4>
            <span>更多</span>
          </div>
          <p>安稳可靠，安心持有不操心</p>
          <div class="ul_box">
            <ul v-for="(data,index) in list">
              <li class="text_ellipsis">{{data.tit}}</li>
              <li class="text_ellipsis">{{data.count}}</li>
              <li class="text_ellipsis">{{data.info}}</li>
              <li class="text_ellipsis">{{data.good}}</li>
            </ul>
          </div>
        </div>

        <div class="tit_con">
          <div>
            <h4>稳中求进</h4>
            <span>更多</span>
          </div>
          <p>追求6%+收益，历史上持有至建议时长，80%实现收益目标</p>
          <div class="ul_box ul_box2">
            <ul v-for="data in chart">
              <li>
                <span>{{data.data}}</span>
                <span>12个月以上</span>
              </li>
              <li>
                <span>近一年的涨跌幅</span>
                <span>建议持有</span>
              </li>
              <li>
                <img :src="'/static/'+data.img">
              </li>
              <li>{{data.name}}</li>
            </ul>
          </div>
          54545454545
        </div>
      </div>
      155546456464
    </div>
 </div>
</template>

<script>
  export default{
    name:"Fmain",
    data(){
      return{
        right:"iconfont icon-xiangyou",
        packge:"iconfont icon-hongbao",
        show:"iconfont icon-zhibo",
        chart:[
          {
            data:"14.27%",
            img:"img/chart1.jpg",
            name:"汇添富双利债券A"
          },
          {
            data:"18.72%",
            img:"img/chart2.jpg",
            name:"傅天时颐债券A"
          }
        ],
        list:[
          {
          tit:"申赎灵活",
          count:"3.74%",
          info:"近一年的收益率",
          good:"建信活钱佳"
        },
        {
          tit:"月度理财",
          count:"2.9970%",
          info:"七日年化",
          good:"福利待领取"
        },
        {
          tit:"年度理财",
          count:"4.47%",
          info:"成立以来，年化",
          good:"建信养老飞越336"
        }
        ],
        icon:[
          {
            tit:"余额宝",
            _class:"iconfont icon-yuebao"
          },
          {
            tit:"理财产品",
            _class:"iconfont icon-licaichanpin1"
          },{
            tit:"基金",
            _class:"iconfont icon-jijin"
          },{
            tit:"黄金",
            _class:"iconfont icon-huangjin"
          },{
            tit:"股票",
            _class:"iconfont icon-gupiao"
          },{
            tit:"帮你投",
            _class:"iconfont icon-licaiTab_pinleirukou-bangnitou"
          },{
            tit:"保险",
            _class:"iconfont icon-baoxian"
          },{
            tit:"互助宝",
            _class:"iconfont icon-huzhuzhuanxiang"
          },{
            tit:"备用",
            _class:"iconfont icon-beiyongjin-"
          },{
            tit:"更多",
            _class:"iconfont icon-icon"
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
    padding: 0.5rem 0.35rem;
  }
  .box .icon_box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

  }
  .icon_box li{
    list-style: none;
    display: flex;
    width: 20%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .icon_box li > span{
    margin-top: 0.1rem;
  }
  .icon_box li > i{
    color: #1778fd;
    font-size: 30px;
  }
  .icon_box li:last-of-type > i{
    color: #ccc;
  }

  /* banner部分 */
  .block{
    margin-top: 0.23rem;
  }
  .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }
  .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

    .el-carousel{
      border-radius: 0.15rem;
    }

    .show{
      height: 1.8rem;
      width: 100%;
      background-color: #fff;
      margin-top: 0.23rem;
      border-radius: 0.1rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .show > p:first-of-type{
      width: 1.2rem;
      height: 1.2rem;
    }
     .show > p:first-of-type img{
       width: 100%;
       height: 100%;
     }
     .show > p{
       display: flex;
     }
     .show > p:last-child{
      align-items: center;
      color: #f73c4d;
     }
     .show > p:last-child span{
       margin-right: 0.08rem;
     }
     .show > p:nth-child(2){
       flex-direction: column;
       justify-content: center;

     }
     .show > p:nth-child(2) span:first-child{
       font-size: 18px;
     }
     .show > p:nth-child(2) span i:first-of-type{
      height: 0.48rem;
      width: 2rem;
      background-color: #f73c4d;
      color: #fff;
      border-radius: 0.24rem;
      margin-right: 0.1rem;
     }
     .show > p:nth-child(2) span i:nth-child(2){
       color: #757575;
     }

     /* 财富直通车 */
    .wealth_box{
      width: 100%;
      padding: 0.45rem 0.45rem 0.4rem 0.45rem;
      background-color: #fff;
      border-radius: 0.1rem;
      margin-top: 0.23rem;
    }
    .tit_box{
      display: flex;
      justify-content: space-between;
      /* padding: 0 0.4rem; */
      align-items: center;
    }
    .tit_box span{
      color: #757575;
    }
    .banner_box{
      background-color: #fff;
    }
    .featured_box{
      width: 100%;
      margin-top: 0.23rem;
      background-color: #fff;
    }
    .featured_box > p{
      width: 100%;
      height: 2.45rem;

    }
    .featured_box > p img{
      width: 100%;
      height: 100%;
    }
    .list_box{
      padding: 0.4rem 0.25rem;
    }
    .tit_con{
      width: 100%;
      padding: 0.45rem 0 ;
      /* background-color: #007AFF; */
      background-image: linear-gradient(to bottom, #f8f7f5 4% , #fff 96%);
    }
    .tit_con > div{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .tit_con > div h4{
      color: #5b3920;
    }
    .tit_con > div span{
      color: #a5978c;
      font-size: 14px;
    }
    .tit_con > P{
      margin-top: 0.2rem;
      color: #969696;
      font-size: 12px;
    }
    .ul_box2 {
      width: 100%;
    }
    .ul_box2 > ul{
      width: 45%!important;
      /* height: 3rem; */
      /* background-color: red; */
    }
    .tit_con > .ul_box > ul{
      width: 25%;
      margin-top: 0.35rem;
    }
   /* .tit_con > .ul_box:last-of-type > ul{
      width: 45%;
      height: 3rem;
      background-color: red;
    } */

    .tit_con > .ul_box > ul > li{
      width: 100%;
      margin: 0.25rem 0 ;
    }
    .tit_con > .ul_box > ul > li:first-of-type{
      color: #000000;
    }
   .tit_con > .ul_box > ul > li:nth-child(2){
      color: #d67555;
      font-size: 20px;
    }
   .tit_con > .ul_box > ul > li:nth-child(3){
      color: #757575;
    }
   .tit_con > .ul_box > ul > li:last-of-type{
      color: #383838;
    }
    .tit_con > .ul_box2 > ul > li{
      display: flex;
    }
    .tit_con > .ul_box2 > ul > li:first-of-type {
      display: flex;
      justify-content:space-between;
      align-items: center;
    }
    .tit_con > .ul_box2 > ul > li:first-of-type > span:first-of-type{
      font-size: 20px;
      color: #de5123;
    }
    .tit_con > .ul_box2 > ul > li:nth-child(2){
      justify-content: space-between;
      align-items: center;
    }
     .tit_con > .ul_box2 > ul > li:nth-child(3){
       width: 100%;
       height: 2.1rem;
     }
    .tit_con > .ul_box2 > ul > li:nth-child(3) > img{
      width: 100%;
      height: 100%;
    }
</style>
