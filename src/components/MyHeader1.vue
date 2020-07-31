<template>
    <div class="box">
      <div class="top_box1">
         <span class="top_span1">西安</span>
         <i class="iconfont icon--up-sanjiao-copy"></i>
      </div>
     <div class="top_box2">
          <i class=" iconfont icon-fangdajing4"></i>
          <span class="top_span2">搜一搜：竹园村</span>
          <i class="iconfont icon-maike1"></i>
     </div>
     <i class="iconfont icon-sself"></i>
    </div>
</template>

<script>
export default {
    name:"MyHeader1"
}
</script>

<style scoped>
.box{
  width: 100%;
  height: 1.4rem;
  background-color: #1678ff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2000;
}
.top_box1{
display: flex;
justify-content: space-around;
align-items: center;
}
.top_span1{
font-size:20px;
color: white;

}
.icon--up-sanjiao-copy{
display: block;
font-size: 25px;
color: white;
margin: 14px 0  0 0;
}
.top_box2{
width:6.8rem;
height: 0.82rem;
background-color: white;
display:flex ;
justify-content: space-around;
align-items: center;
border-radius: 0.15rem;
}
.top_box2 .icon-fangdajing4{
font-size: 0.5rem;
color: #999999;
}
.top_span2{
margin-right:3rem;
color: #666666;
}
.top_box2 .icon-maike1{
font-size: 0.45rem;
color: #999999;
}
.icon-sself{
  font-size: 0.5rem;
  color: white;
}
</style>
