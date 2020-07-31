<template>
  <div class="box">
      <div class="left">
        <i class="iconfont icon-next-copy"></i>
      </div>
      <div class="icon_box">
      <span class="iconfont icon-zhifubao"></span>
      </div>
  </div>
</template>

<script>
  export default{
    name:"Login"
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
  }
  .left{
    width: 100%;
    height: 1rem;
    background-color: red;
    display: flex;
    align-items: center;
    padding-left: 0.25rem;
  }
  .iconfont{
    font-size: 0.5rem;

  }

  .icon_box {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1.5rem;
  }
   .icon_box .iconfont{
      font-size: 50px;
   }
</style>
