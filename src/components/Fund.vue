<template>
  <!-- <div class="box"> -->
    <div class="fund_box">
      <div class="tit_box">
        <h4>精选基金</h4>
        <span>更多</span>
      </div>
      <ul v-for="data in list">
        <li>
         <p>
           <i></i>
           <span>{{data.tit}}</span>
         </p>
        <div>
          <span>
            <i>{{data.data}}</i>
            <i>{{data.info}}</i>
          </span>
          <span>
            <i>{{data.des}}</i>
            <i>{{data.name}}</i>
          </span>
          <span>
            试一试
          </span>
        </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  <!-- </div> -->
</template>

<script>
  export default{
    name:"Fund",
   data(){
     return{
       list:[
         {
          tit:"精选好基金",
          data:"+4.72%",
          info:"近三年涨跌幅",
          des:"抱紧A股最正确",
          name:"鹏华中证银联"
         }
       ]
     }
   }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    padding: 0 0.35rem;
    /* margin-top: 0.23rem; */
    background-color: pink;
  }
  .fund_box{
    width: 100%;
    height: 1.2rem;
    border-radius: 0.1rem;
    background-color: #fff;
    padding: 0.35rem 0 ;
  }
  .tit_box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.2rem;
    /* height: 0.85rem; */
  }
  .tit_box > h4{
    font-weight: bold;

  }
  .tit_box > span{
    color: #757575;
  }
  .fund_box > ul > li > p,
  .fund_box > ul > li > div
  {
    display: flex;
  }
  .fund_box > ul{
    padding: 0.3rem 0;
  }
  .fund_box > ul > li > p {
    align-items: center;
  }
  .fund_box > ul > li > p > span{
    font-size: 18px;
  }
  .fund_box > ul > li > div{
    justify-content: space-between;
  }
  .fund_box > ul > li > div > span{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
