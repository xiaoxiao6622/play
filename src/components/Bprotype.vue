<template>
   <div class="protype">
       <h2>夏季烘焙茶饮5折起</h2>
        <div class="box">
        
           <dl v-for="prolist in prolists" :key="prolist.id">
                <dt>
                    <img src="/static/img/dx_03.jpg" alt="">
                </dt>
                <dd>{{prolist.name}}</dd>
                <dd>{{prolist.txt}}</dd>
                <dd>
                    <div class="result">
                        <div>3.4折</div>
                        <div>￥100元</div>
                    </div>
                </dd>
            </dl>
    </div>
   </div>
</template>

<script>
export default {
    name:"Bprotype",
       data(){
        return {
            prolists:[
                {name:"花闲悦茶",txt:"【新店开业】"},
                {name:"花闲悦茶",txt:"【新店开业】"},
                {name:"花闲悦茶",txt:"【新店开业】"}
            ]
        }
    }
}
</script>

<style scoped="scoped">
    .protype{
        width: 100%;
        height: 5.84rem;
        /* background: magenta; */
        padding: 0 0.35rem; 
    }
     .protype>h2{
        width: 100%;
        height: 1.26rem;
        /* background: mediumaquamarine; */
        line-height: 1.26rem;
    }
    .box{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
   
     .box>dl{
        width:30%;
     }
     .box>dl>dt{
         height: 2.16rem;
         /* background: chartreuse; */
     }
     .box>dl>dt img{
         width: 100%;
         height: 100%;
     }
    .box>dl>dd{
         font-size: 0.3rem;
         padding:0.25rem 0 0.1rem 0;
     }

     .result{
         width: 70%;
         display: flex;
         font-size: 8px;
         /* background: plum; */
         border: 1px solid red;
         text-align: center;
         border-radius:0.5rem 0.5rem;
     }
     .result>div:nth-child(1){
         width: 40%;
         /* border: 1px solid blue; */
     }
     .result>div:nth-child(2){
         width: 60%;
         /* border: 1px solid plum; */
     }
</style>