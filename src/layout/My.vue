<template>
    <div>
         <MyHeader/>
      <div class="he">
          <Myhead/>
          <ProgramList/>
        <ProgramList2/>
        <ProgramList3/>
        <ProgramList4/>
      </div> 
        
         <MyFooter/>
    </div>
</template>

<script>
import MyHeader from "../components/MyHeader"
import Myhead from "../components/Myhead"
import ProgramList from "../components/ProgramList"
import ProgramList2 from "../components/ProgramList2"
import ProgramList3 from "../components/ProgramList3"
import ProgramList4 from "../components/ProgramList4"
import MyFooter from "../components/MyFooter"
export default {
    name:"My",
    components:{
        MyHeader,Myhead,ProgramList,ProgramList2,ProgramList3,ProgramList4,MyFooter
    }
}
</script>

<style scoped="scoped">
    .he{
        margin-top: 1.75rem;
        margin-bottom: 1.6rem;
    }
</style>