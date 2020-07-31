<template>
  <div id="box">
    <div class="super_box">
      <div class="box1">
        <ul class="slide_box" v-for="(nav,index) in navs" :key="index">
          <li class="_one">{{nav.t1}}</li>
          <li class="_two">{{nav.t2}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SpecialNav",
    data() {
      return {
        navs:[
          {
            t1:"全部",
            t2:"热卖爆品"
          },
          {
            t1:"箱包",
            t2:"包罗万象"
          },
          {
            t1:"数码",
            t2:"实用好货"
          },
          {
            t1:"女装",
            t2:"百变潮流"
          },
          {
            t1:"百货",
            t2:"居家必备"
          },
          {
            t1:"食品",
            t2:"美味零食"
          },

        ]

      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 3rem;
    background-color: #f7f7f7;
    padding: 0 0.25rem;

  }

  .super_box {
    width: 100%;
    height: 2.72rem;
    overflow: auto;
    border-radius: 0.15rem;
    background-color: white;

  }

  .box1 {
    width: 10rem;
    height: 2.72rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f7f7f7;
  }

  .slide_box li {
    width: 2.5rem;
    height: 0.7rem;
    text-align: center;
    line-height: 0.7rem;
  }

  ._one {
    font-size: 20px;
    color: #000000;
    font-weight: bold;
  }

  ._two {
    font-size: 15px;
    color: #a5a5a5;

  }
</style>
