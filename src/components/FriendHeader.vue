<template>
  <div id="box">
    <div class="box_one">
      <p class="_friend">朋友</p>
      <div class="box_right">
        <i class="iconfont icon-gerenshezhi1"></i>
        <em class="iconfont icon-add"></em>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FriendHeader",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  #box {
    width: 100%;
    height: 1.4rem;
    background-color: #1678ff;
    padding: 0 0.5rem;
    position: fixed;
    top: 0;
  }

  .box_one {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box_right{
    width: 2.5rem;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  ._friend{
font-size: 20px;
color: white;
  }
  .icon-gerenshezhi1{
  font-size: 30px;
  color: white;
  }
  .icon-add{
  font-size: 30px;
  color: white;
  }
</style>
