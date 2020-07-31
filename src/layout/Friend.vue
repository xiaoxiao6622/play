<template>
  <div>
  <FriendHeader/>
  <div class="main_box">
  <FriendSearch/>
  <FriendList/>

  </div>

  <MyFooter/>
  </div>
</template>

<script>
  import FriendHeader from "../components/FriendHeader";
  import FriendSearch from "../components/FriendSearch";
  import FriendList from "../components/FriendList";
  import MyFooter from "../components/MyFooter";

  export default{
    name:"Friend",
    components:{
       FriendHeader,MyFooter,FriendSearch,FriendList
     }
  }

</script>

<style scoped>
  .main_box{
   margin-top: 1.4rem;
   margin-bottom: 1.6rem;
  }
</style>
