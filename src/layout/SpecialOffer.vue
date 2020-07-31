<template>
  <div>
       <SpecialHeader/>
       <div class="main">
           <SpecialBanner/>
           <SpecialWrite/>
           <SpecialPicture/>
           <SpecialRecommend/>
           <SpecialLimited/>
           <SpecialNav/>
           <SpecialNavList/>
       </div>
       <SpecialFooter/>

  </div>
</template>

<script>
  import SpecialHeader from "../components/SpecialHeader";
  import SpecialFooter from "../components/SpecialFooter";
  import SpecialBanner from "../components/SpecialBanner";
  import SpecialWrite from "../components/SpecialWrite";
  import SpecialPicture from "../components/SpecialPicture";
  import SpecialRecommend from "../components/SpecialRecommend";
  import SpecialLimited from "../components/SpecialLimited";
  import SpecialNav from "../components/SpecialNav";
  import SpecialNavList from "../components/SpecialNavList";

  export default{
   name:"SpecialOffer",
   components:{
     SpecialHeader,SpecialFooter,SpecialBanner,SpecialWrite,SpecialPicture,SpecialRecommend,SpecialLimited,SpecialNav,SpecialNavList
   }

  }


</script>

<style scoped>
.main{
  margin-top: 1.54rem;
  margin-bottom: 1.6rem;
}
</style>
