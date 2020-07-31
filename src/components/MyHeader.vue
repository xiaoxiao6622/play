<template>
  <div class="box">
      <span>我的</span>
      <span>设置</span>
  </div>
</template>

<script>

export default {
    name:"MyHeader"
}
</script>

<style scoped>
    .box{
        top: 0;
        width: 100%;
        height: 1.75rem;
        background: #1678ff;
        display: flex;
        justify-content: space-between;  /*水平两端对齐*/
        align-items: flex-end;          /* 在盒子末端对齐*/
        position: fixed;
        color: #e8f1f2;
        z-index:9999;
    
      
    }
    .box>span{
        font-size: 20px;
        padding: 0.35rem;
         
    }
  

</style>