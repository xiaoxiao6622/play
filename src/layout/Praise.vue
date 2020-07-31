<template>
  <div>
     <MyHeader1/>
     <div class="main">
          <NavBanner/>
          <FunNav/>
          <LastDay/>
          <GoWhere/>
          <New/>
          <Buy/>
          <Play @changetype="fn"/>
          <PlayList :type="type"/>
          <BottomBanner/>
          <LastNav/>
     </div>
     <MyFooter/>
  </div>
</template>

<script>
  import MyHeader1 from "../components/MyHeader1";
  import NavBanner from "../components/NavBanner";
  import MyFooter from "../components/MyFooter";
  import FunNav from "../components/FunNav";
  import LastDay from "../components/LastDay";
  import GoWhere from "../components/GoWhere";
  import New from "../components/New";
  import Buy from "../components/Buy";
  import Play from "../components/Play";
  import PlayList from "../components/PlayList";
  import BottomBanner from "../components/BottomBanner";
  import LastNav from "../components/LastNav";
  export default{
    name:"Praise",
    data(){
      return{
       type:"优选大餐"
      }
    },
    components:{
        MyHeader1,NavBanner,MyFooter,FunNav,LastDay,GoWhere,New,Buy,Play,BottomBanner,LastNav,PlayList
    },
    methods:{
     fn(type){
       this.type = type;
     }
    }

  }
</script>

<style scoped>
  .main{
    background-color: #f7f7f7;
    margin-top: 1.4rem;
    margin-bottom: 1.6rem;
    }
</style>
