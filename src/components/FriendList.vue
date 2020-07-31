<template>
  <div id="box">
    <div class="big_box" v-for="(list,index) in lists" :key="index">
      <div class="box_left">
        <div class="img_box">
          <img :src="'/static/'+list.img">
        </div>
      </div>
      <div class="box_right">
            <div class="box_right_one">
              <p class="list_p">{{list.inform}}</p>
              <span class="list_span">{{list.time}}</span>
            </div>
            <div class="box_right_two">
              <em class="list_em">{{list.warn}}</em>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FriendList",
    data() {
      return {
        lists: [
          {
          img: "img/h_03.png",
          inform:"服务提醒",
          time:"14:47",
          warn:"你有一张券即将到期"
        },
        {
          img: "img/h_03.png",
          inform:"服务提醒",
          time:"14:47",
          warn:"你有一张券即将到期"
        },
        {
          img: "img/h_03.png",
          inform:"服务提醒",
          time:"14:47",
          warn:"你有一张券即将到期"
        },
        {
          img: "img/h_03.png",
          inform:"服务提醒",
          time:"14:47",
          warn:"你有一张券即将到期"
        },
        {
          img: "img/h_03.png",
          inform:"服务提醒",
          time:"14:47",
          warn:"你有一张券即将到期"
        },
        {
          img: "img/h_03.png",
          inform:"服务提醒",
          time:"14:47",
          warn:"你有一张券即将到期"
        },
        {
          img: "img/h_03.png",
          inform:"服务提醒",
          time:"14:47",
          warn:"你有一张券即将到期"
        }

        ]
      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 2.23rem;
    padding-left: 0.25rem;
  }
  .big_box{
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
  }

  .img_box {
    width: 1.5rem;
    height: 1.5rem;
  }

  .img_box img {
    width: 100%;
    height: 100%;
  }
  .box_right{
width: 7.5rem;
height: 100%;
padding-left: 0.35rem;
border-bottom: 1px solid #CCCCCC;
  }
  .box_right_one{
display: flex;
justify-content: space-between;
align-items: center;
  }
  .list_p{
    margin-top: 0.3rem;
color: #000000;
font-size: 16px;
  }
  .list_span{
color: #ababab;
font-size: 14px;
  }
  .list_em{
    display: block;
color: #ababab;
font-size: 16px;
margin: 0.2rem 0;
  }
</style>
