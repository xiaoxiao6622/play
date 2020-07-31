<template>
   <div class="bbox2">
       <div>
           <i class="iconfont icon-gouwuche "></i>
           <span>线上抢购</span>
           <i class="iconfont icon-shangjia "></i>
           <span>到店优惠</span>
           <i class="iconfont icon-zhichisuishituiguoqitui"></i>
           <span>过期退</span>
       </div>
       <div>
           <img src="/static/img/hbzk_03.jpg" alt="">
       </div>
   </div>
</template>

<script>
export default {
    name:"Bpacket"
}
</script>

<style scoped="scoped">
    .bbox2{
        width: 100%;
        height: 3.82rem;
        background: linear-gradient(to bottom,#ff4d3f,#f5f5f5);
        /* border: 1px solid blue; */
        padding: 0 0.35rem;
        position: relative;
        margin-bottom: 0.2rem;
		    /* top: 1.07rem; */


    }
    .bbox2>div:nth-child(1){
        padding-top: 0.15rem;
        color: #f5f5f5;
    }
    .bbox2>div>i{
        padding-right: 0.1rem;
    }
    .bbox2>div>span{
        padding-right: 0.1rem;
    }
    .bbox2>div:nth-child(2){
        width:90%;
        height: 3rem;
        bottom: 0;
        background: paleturquoise;
        position: absolute;
    }
    .bbox2>div:nth-child(2) img{
        width: 100%;
        height: 100%;
    }
</style>
