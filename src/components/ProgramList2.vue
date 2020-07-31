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
    name:"programList2",
    data(){
        return {
            lists:[
                 { ico:'iconfont icon-zhangdan', name:"账单",remark:""},
                { ico:'iconfont icon-zongzichan', name:"总资产",remark:"账户保障即将到期"},
                { ico:'iconfont icon-yue', name:"余额",remark:"0.00元"},
                { ico:'iconfont icon-yuebao', name:"余额宝",remark:""},
                { ico:'iconfont icon-huabei', name:"花呗",remark:""},
                { ico:'iconfont icon-licaiTab_pinleirukou-yulibao', name:"余利宝",remark:""},
                { ico:'iconfont icon-zhuce-yinhangkahao', name:"银行卡",remark:""}

            ]
        }
    }
}
</script>

<style scoped>
    .box3{
        width: 100%;
        height:6.97rem;
        /* height: 6.72rem; */
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