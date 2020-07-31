<template>
   <div class="box3">
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
    name:"programList4",
    data(){
        return {
            lists:[
                { ico:'iconfont icon-gongyi', name:"支付宝公益",remark:""},
                { ico:'iconfont icon-wodekefu', name:"我的客服",remark:""}
            ]
        }
    }
}
</script>

<style scoped>
    .box3{
        width: 100%;
        height: 2.17rem;
        border-bottom: 0.25rem solid #f5f5f5;
        
        
   
    }
     .box3>div{
        width: 100%;
        height: 0.96rem;
        display: flex;
        line-height:0.96rem;
        font-size: 16px;  
    }
   .box3>div>span{
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
    

</style>