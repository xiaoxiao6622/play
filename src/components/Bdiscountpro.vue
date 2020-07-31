<template>
      <div class="prodiscount">
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
             <!-- <dl>
                <dt>
                    <img src="/static/img/dx_03.jpg" alt="">
                </dt>
                <dd>花闲悦茶</dd>
                <dd>【新店开业】</dd>
                <dd><div></div></dd>
            </dl>
             <dl>
                <dt>
                    <img src="/static/img/dx_03.jpg" alt="">
                </dt>
                <dd>花闲悦茶</dd>
                <dd>【新店开业】</dd>
                <dd><div></div></dd>
            </dl> -->

        </div>
</template>

<script>
export default {
    name:"Bdiscountpro",
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
      .prodiscount{
        padding: 0 0.35rem;
         width: 100%;
         /* min-height: 6.50rem; */
         display: flex;
         justify-content: space-between;
         margin-bottom: 0.2rem;
     }
     .prodiscount>dl{
           width:30%;
     }
     .prodiscount>dl>dt{
         height: 1.5rem;
         background: chartreuse;
     }
     .prodiscount>dl>dt img{
         width: 100%;
         height: 100%;
     }
     .prodiscount>dl>dd{
         font-size: 16px;
         padding:0.1rem 0 0.1rem 0;
     }

     .result{
         width: 100%;
         display: flex;
         font-size: 8px;
         justify-content: flex-start;
         /* background: plum; */
         border: 1px solid red;
         text-align: center;
         border-radius: 0.5rem 0.5rem;
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
