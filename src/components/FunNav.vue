<template>
  <div id="box">
      <div class="box1">
         <div class="box1_one" v-for="(data,index) in datas" :key="index">
           <div class="box1_target">{{data.title}}</div>
           <p class="box1_p">{{data.txt_one}}</p>
           <em class="box1_em">{{data.txt_two}}</em>
           <i :class="data._class"></i>
         </div>
      </div>
  </div>
</template>
<script>
export default{
    name:"FunNav",
    data(){
       return{
        datas:[
          {
            _class:"iconfont icon-licai3",
            txt_one:"奖励金",
            txt_two:"吃喝玩乐",
            title:"0元夺宝"


          },
          {
            _class:"iconfont icon-zhoubianyou",
            txt_one:"附近好店",
            txt_two:"又近又好",
            // title:"0元夺宝",


          },
          {
            _class:"iconfont icon-xinpin-copy",
            txt_one:"口碑直播",
            txt_two:"限时抽奖",
            // title:"0元夺宝"

          },
          {
            _class:"iconfont icon--fenlei-hanbaopisa",
            txt_one:"江湖封神榜",
            txt_two:"市井好味",
            title:"必尝"

          }

         ]

       }
    }
}

</script>

<style scoped>
  #box{
     width: 100%;
     height: 1.56rem;
     background-color: #f7f7f7;
     padding: 0 0.25rem;
     margin-top: 0.25rem;
  }
 .box1{
    width: 100%;
    height: 1.56rem;
    background-color: #f7f7f7;
    border-radius: 0.15rem;
    display: flex;
    justify-content: space-between;

 }
.box1_one{
   width: 2.1rem;
   height: 100%;
   background-color: white;
   border-radius: 0.15rem;
   margin: 0 0.05rem;
   padding: 0.3rem 0 0 0.12rem;
   /* flex: 1; */
   position: relative;
   }
   .icon-licai3{
     font-size: 25px;
     position: absolute;
     right: 0;
     bottom: 0;
     color: yellow;

   }
   .icon-zhoubianyou{
     font-size: 25px;
     position: absolute;
     right: 0;
     bottom: 0;
     color: greenyellow;

   }
   .icon-xinpin-copy{
     font-size: 25px;
     position: absolute;
     right: 0;
     bottom: 0;
     color: red;

   }
   .icon--fenlei-hanbaopisa{
     font-size: 25px;
     position: absolute;
     right: 0;
     bottom: 0;
     color: purple;

   }
   .box1_target{
    width: 1.2rem;
    height: 0.3rem;
    background-color: orangered;
    border-radius: 0 0.3rem  0  0.3rem ;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 0.3rem;
    color: white;
    font-size: 12px;
   }
   .box1_p{
     color: #000000;
     font-weight: bold;
     font-size: 14px;
   }
   .box1_em{
    color:#bbbbbb;
    font-size: 12px;
   }
</style>
