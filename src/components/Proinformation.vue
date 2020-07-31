<template>
    <div class="box">
       <div v-for="(food,index) in foods" :key="index">
            <div class="boximg">
               <img :src="/static/+food.img" alt="">
            </div>
            <div  class="information">
              <div class="box1"> <span class="proname">{{food.storename}}<span class="proid">{{food.storeid}}</span></span>
                <h3>{{food.title}}</h3>
                </div> 
                <div class="box2">
                    <div class="box4">
                         <div>
                            <span>{{food.price}}</span>
                            <span class="item dot-left"></span>
                            <span>{{food.discount}}</span>
                         </div>
                         <div class="el"><el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress></div>
                    </div>
                    <div class="box3">
                        <div class="box5">
                            <span>马上抢</span>
                        </div>
                    </div>
                </div>
             </div>
        </div>

<div v-for="food in foods" :key="food.storename" >
            <div class="boximg">
               <img :src="/static/+food.img" alt="">
            </div>
            <div  class="information">
              <div class="box1"> <span class="proname">{{food.storename}}<span class="proid">{{food.storeid}}</span></span>
                <h3>{{food.title}}</h3>
                </div> 
                <div class="box2">
                    <div class="box4">
                         <div>
                            <span>{{food.price}}</span>
                            <span class="item dot-left"></span>
                            <span>{{food.discount}}</span>
                         </div>
                         <div class="el"><el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress></div>
                    </div>
                    <div class="box3">
                        <div class="box5">
                            <span>马上抢</span>
                        </div>
                    </div>
                </div>
             </div>
        </div>

        <div v-for="food in foods" :key="food.storename" >
            <div class="boximg">
               <img :src="/static/+food.img" alt="">
            </div>
            <div  class="information">
              <div class="box1"> <span class="proname">{{food.storename}}<span class="proid">{{food.storeid}}</span></span>
                <h3>{{food.title}}</h3>
                </div> 
                <div class="box2">
                    <div class="box4">
                         <div>
                            <span>{{food.price}}</span>
                            <span class="item dot-left"></span>
                            <span>{{food.discount}}</span>
                         </div>
                         <div class="el"><el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress></div>
                    </div>
                    <div class="box3">
                        <div class="box5">
                            <span>马上抢</span>
                        </div>
                    </div>
                </div>
             </div>
        </div>




       </div>
  
</template>

<script>
import axios from 'axios';
export default {
    name:"Proinformation",
    props:["type"],
    data(){
        return {
            foods:[]
        }
    },
     created(){
          this.getprotype();

    },
    watch:{
        type:function(){
            this.getprotype();
        }
    },
    methods:{
        getprotype(){
         axios({
            url:"foods",
            params:{
                "type":this.type
            }
        })
        .then((res)=>{
            this.foods= res.data;
        });
        }
    }
}
</script>

<style scoped="scoped">
.box{
    width: 100%;
    min-height:3.58rem;
    padding: 0 0.35rem;
    margin-top: 0.2rem;
}


    .box>div{
        /* background:plum ; */
      
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.2rem;
      
    }
    
   .boximg{    
        width: 40%;
        height: 2.88rem;
        background: powderblue;
    }
    .boximg   img{
         width: 100%;
         height: 100%;
     }
      .information{
        width: 55%;
        height: 2.88rem;
        /* background: yellow; */
        /* padding-left: 0.27rem; */
        margin: 0 auto;
    }

    .box1{
        height: 1.3rem;
    }
    .proname{
        font-size: 0.35rem;

    }
    .proid{
        font-size: 0.28rem;
    }
    .box1 h3{
        font-weight: bolder;
        padding-top: 0.35rem;
        /* margin-bottom: 0.35rem; */
    }
    .box2{
        height: 1.5rem;
    }
    .box3{
        height: 1.3rem;
        /* width: 1.8rem; */
        float: right;
    }
    .box4{
        /* width: 1.7rem; */
        height: 0.4rem;
        float: left;
    }
    .box4>div{
        margin-top: 0.35rem;
    }
    .box4>div span:nth-child(1){
        font-size: 0.38rem;
        color: red; 
        padding-right: 0.1rem;
         float: left; 
    }
    .box4>div span:nth-child(3){
   
        font-size: 0.20rem;  
        width: 0.62rem;
        height: 0.4rem;
        background: #ffebf1;
        /* background-color: red; */
        float: left;
        text-align: center;
        line-height: 0.4rem;
        color: red;
        

    }
    /* .el{
        margin-bottom: 0.3rem;
    } */
   
    .box5{
        width: 1.80rem;
        height: 0.94rem;
        background: #fd4924;
         line-height: 0.94rem;
         text-align: center;
         border-radius: 0.52rem 0.52rem;
         /* margin-top: 0.2rem; */
         color: #fffdf4;
         margin-left: 0.3rem;
    }
   
    .dot-left{
        font-size: 0;
        line-height: 0;
        border-width: 10px ;
        border-color:  #ffebf1;
        /* background-color: red; */
        border-left-width: 0;
        border-style: dashed;
        border-right-style: solid;
        border-top-color: transparent;
        border-bottom-color: transparent;
        float: left;
    }
  
</style>
