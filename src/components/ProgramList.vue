<template>
   <div class="box2">
        <div  v-for="list in lists" :key="list.name">
            <span :class="list.ico"></span>
            <div class="tbox">
                <span>{{list.name}}</span>
                <span class="jbox">
                    <p>{{list.remark}}</p>
                    <i class="el-icon-arrow-right"></i>
                </span>
            </div>
        </div>
   </div>
</template>

<script>
export default {
    name:"programList",
    data(){
        return {
            lists:[
                { ico:'iconfont icon-Vblue', name:"支付宝会员",remark:"5,346 积分"},
                { ico:'iconfont icon-shangjia', name:"商家服务",remark:"最高领88元红包"}

            ]
        }
    }
}
</script>

<style scoped>
    .box2{
        /* margin-top: 1.75rem; */
        width: 100%;
         /* height: 0.96rem; */
        /* 给高加个边框的0.25rem */
        height: 2.17rem;       
        /* background: rebeccapurple;   */
        z-index: 9999;
        border-bottom: 0.25rem solid #f5f5f5;;
    }
     .box2>div{
         width: 100%;
         height: 0.96rem;
        display: flex;
        line-height:0.96rem;
         font-size: 16px;
      
      
    }
   .box2>div>span{
       width: 10%;
        font-size: 26px;
        color: #007cd6;
        /* background: red; */
        padding-left: 0.25rem;
    }
 
   .tbox{
       width: 90%;
       /* background:palegreen ; */
        font-size: 16px;
        display: flex;
        border-bottom: 1px solid #eeeeee;
        justify-content:space-between;   
         padding-left: 0.15rem;
    }
   
   
     .jbox{
        display: flex;   
       
    }  
    .jbox>p{
         font-size:4px;   
         padding-right: 0.15rem;
         color: #9a9a9a;
    }

   
  .el-icon-arrow-right {
        display: block;
        color: #cdcdcd;
        font-size: 25px;
        padding-right:0.25rem;
        line-height: 0.96rem;
  
      } 
  
   /* <span v-for="list in lists" :key="list.name">
           <p :class="list.ico"></p>
           <p>{{list.name}}</p>    
        </span>
        <div class="leri">
            <i class="el-icon-arrow-right"></i>
        </div> -->
        <!-- <div class="hrr"></div>  */
    

</style>