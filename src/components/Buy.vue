<template>
  <div id="box">
    <div class="box1">
      <div class="box_one">
        <div class="box_one_first">
          <span>超值抢购</span>
          <div>08</div>
          <div>42</div>
          <div>36</div>
        </div>
        <p>迈德思客.汉堡双人餐</p>
        <em  class="_em">￥29.5</em>
        <span class="_span">￥73</span>
        <div class="img_box">
            <img :src="'/static/'+this.msg">
        </div>
      </div>
      <div class="super_box">

      <div class="box_two" v-for="(detail,index) in details" :key="index">

            <div class="box_two_first_top">
               <p>{{detail._title}}</p>
               <span></span>
            </div>
            <div class="box_two_first_bottom">
                  <div class="box_two_first_bottomL">
                    <em>{{detail._t1}}</em>
                   <div class="txt_box">
                      <p>{{detail._t2}}</p>
                      <span>{{detail._t3}}</span>
                   </div>
                  </div>
                  <div class="box_two_first_bottomR">
                     <img :src="'/static/'+detail._img">
                  </div>
            </div>

      </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Buy",
    data(){
      return {
           msg:"img/hb.png",
           details:[
             {
              _title:"大牌甄选",
              _t1:"肯德基官方会……",
              _t2:"￥70.5",
              _t3:"￥97",
              _img:"img/pop1.png"
             },
             {
              _title:"1元尝鲜",
              _t1:"蜀儿郎市井串……",
              _t2:"￥1",
              _t3:"￥5",
              _img:"img/pop2.png"
             }
           ]

      }
    }
  }
</script>

<style scoped>
  #box{
width: 100%;
height: 5.43rem;
background-color: #f7f7f7;
margin-top: 0.35rem;
padding: 0 0.25rem;

  }
  .box1{
width: 100%;
height: 100%;
background-color: white;
border-radius: 0.15rem;
display: flex;
justify-content: space-between;

  }
 .box_one{
width:4.6rem;
height: 100%;
padding: 0.5rem 0 0 0.4rem;
border-right: 1px solid #CCCCCC;

  }
  .box_one_first{
    display: flex;
    align-items: center;


  }
  .img_box{
    width: 4.22rem;
    height: 2.43rem;
    margin-top: 0.15rem;
  }
  .img_box img{
    width: 100%;
    height: 100%;
  }
  .box_one_first span{
    color: orangered;
    font-size: 20px;
  }
  .box_one_first div{
    width: 0.5rem;
    height: 0.5rem;
    background-color: orangered;
    border-radius: 0.1rem;
    color: white;
    margin: 0 0.1rem;
    text-align: center;
    line-height: 0.5rem;
  }
  .box_one p{
    margin: 0.2rem 0  0.1rem 0;
   font-size: 18px;
  }
  .box_one ._em{
   color: red;
   font-size: 16px;
  }
  .box_one ._span{
   color: #CCCCCC;
   font-size: 16px;
   text-decoration: line-through;
  }
  .super_box{
width: 4.85rem;
height: 50%;
display: flex;
flex-direction: column;
  }
  .box_two{
    width: 4.85rem;
    height:3rem;
    display: flex;
    flex-direction: column;
    margin-top: 0.2rem;
    border-bottom: 1px solid #CCCCCC;
  }
 .box_two_first_top{
   width:4.85rem;
   height: 0.8rem;
   display: flex;
   padding: 0.2rem 0 0 0.2rem;

 }
 .box_two_first_bottom{
width: 4.85rem;
height: 1.7rem;
display: flex;
justify-content: space-around;

 }
 .txt_box{
width: 2.8rem;
height: 0.6rem;
display: flex;

 }
 .box_two_first_bottomR{
width: 1.22rem;
height: 1.22rem;
border-radius: 0.15rem;

 }
 .box_two_first_bottomR img{
 width:100%;
 height:100%;
 margin-top: 0.4rem;
  }
  .box_two_first_top{
    color: #dc9930;
    font-size: 20px;
  }
  .box_two_first_bottomL em{
    display: block;
    font-size: 15px;
     margin: 0.3rem 0;
  }
  .box_two_first_bottomL p{
    color: red;
    font-size: 15px;
  }
  .box_two_first_bottomL span{
    color: #ccc;
    font-size: 15px;
    text-decoration: line-through;
  }
</style>
