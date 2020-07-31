<template>
  <div class="bbox">
      <i class="el-icon-arrow-left"></i>
      <span>超值抢购</span>
      <div class="searchbox">
           <span class="el-icon-search"></span>
         <input type="text" name="" id="">
     </div>
  </div>
</template>

<script>
export default {
    name:"Bhead"
}
</script>

<style scoped="scoped">
    .bbox{
        width: 100%;
        height: 1.07rem;
        background: palegreen;
        display: flex;
        /* justify-content: space-around; */
        align-items: center;
        padding: 0 0.25rem;
        background: linear-gradient(to bottom,#fe2917,#fb503d);
      position: fixed;
       top: 0;
       z-index: 999;
    }
    .bbox>i{
        width: 8%;
        font-size: 34px;
        color: #ffffff;
    }
    .bbox>span{
        width: 30%;
        font-size: 22px;
        /* padding-right: 0.25rem; */
        color: #ffffff;
    }
    .searchbox{
        /* width: 1rem; */
          width: 60%;
         height: 0.6rem;
        display: flex;
        /* border: 1px solid red;   */
        background-color: #fe968b;
        /* border-radius: 15%; */
     }
    .searchbox>span{
        /* width:0.5rem; */
        height: 0.6rem;
        font-size: 20px;
        line-height: 0.6rem;
        color: #feeddb;
        padding-left: 0.15rem;
    }
    .searchbox input{
        width: 30%;
        height: 0.6rem;
        border: none;
        background-color: #fe968b;
        display: block;
    }
</style>
