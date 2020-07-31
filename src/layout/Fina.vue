<template>
    <div class="box">
      <div class="main_box">
        <Fhead></Fhead>
        <Fmain></Fmain>
        <!-- <Fund></Fund> -->
      </div>
      <MyFooter></MyFooter>

    </div>
</template>

<script>
  import Fhead from "../components/Fhead"
  import MyFooter from "../components/MyFooter"
  import Fmain from "../components/Fmain"
  import Fund from "../components/Fund"
  export default{
    name:"Fina",
    components:{
      Fhead,MyFooter,Fmain,Fund
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
  }
  .main_box{
    width: 100%;

    /* background-color: red; */
    /* padding-bottom: 1.63rem; */
    margin-bottom: 3.63rem;
  }
</style>
