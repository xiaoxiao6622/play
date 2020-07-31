<template>
  <div>
    <div id = "main">
      <Search></Search>
      <Banner></Banner>
      <GroupBuy></GroupBuy>
      <Discount></Discount>
      <Pay></Pay>
      <News></News>
      <Financial></Financial>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
  import Search from "../components/Search.vue";
  import MyFooter from "../components/MyFooter.vue";
  import Banner from "../components/Banner.vue";
  import GroupBuy from "../components/GroupBuy.vue";
  import Discount from "../components/Discount.vue";
  import Pay from "../components/Pay.vue";
  import News from "../components/News.vue";
  import Financial from "../components/Financial.vue";
  export default{
    name:"Index",
    components:{
      Search,MyFooter,Banner,GroupBuy,Discount,Pay,News,Financial
    }
  }
</script>

<style scoped="scoped">
  #main{
    width: 100%;
    padding-bottom: 1.63rem;
  }
</style>
