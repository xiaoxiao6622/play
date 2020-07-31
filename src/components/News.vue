<template>
  <div class="box">
    <div class="list_box">
      <div class="tit_box">
        <h3 tit_h3>抗击新冠肺炎</h3>
        <p>
          <span>截至&nbsp;{{date[0].date}}</span>
          <span>&nbsp;{{date[0].time}}</span>
        </p>
      </div>
      <div class="news">
        <span v-for="data in nums">
          <i :style="data.color">{{data.num}}</i>
          <i>{{data.adress}}</i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"News",
    data:function(){
      return {
        date:[],
        nums:[
          {
            num:"1",
            adress:"陕西新增",
            color:"color:#118b80"
          },
          {
            num:"135",
            adress:"国内新增",
            color:"color:#f5c877"
          },
          {
            num:"3",
            adress:"境外输入新增",
            color:"color:#fc9d63"
          },
          {
            num:"12055",
            adress:"国外新增",
            color:"color:#a4a4a4"
          }
        ]
      }
    },
    created() {
      let d = new Date();
      let date = d.toLocaleDateString();
      let time  = d.toLocaleTimeString().substr(2);
      let obj = {
        date:date,
        time:time
      }
      this.date.push(obj);
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    margin-top: 0.23rem;
    padding:0 0.35rem;
  }
  .list_box{
    background-color: #fff;
    padding: 0.4rem 0.35rem;
    border-radius: 0.1rem;
  }
  .tit_box{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #2c2c2c;
    padding-bottom: 0.4rem;
  }
  .tit_box span{
    margin-right: 0.1rem;
    color: #757575;
  }
  /* 新增统计部分 */
  .news{
    width: 100%;
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
  }
  .news span{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .news span > i {
    margin-bottom: 0.08rem;
  }
</style>
