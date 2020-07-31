<template>
    <div>
        <Bhead/>
      <div class="ha">
        <Bpacket/>
        <Bdaydiscount/>
        <Bdiscountpro/>
        <Bdiscountpro/>
        <LurkIn/>
        <Bnav @changetype="fn"/>
        <Proinformation :type="type"/>
        <!-- <Bprotype/> -->

      </div>

      <Bfooter/>


    </div>
</template>

<script>
import Bhead from "../components/Bhead"
import Bpacket from "../components/Bpacket"
import Bdaydiscount from "../components/Bdaydiscount"
import Bdiscountpro from "../components/Bdiscountpro"
import LurkIn from "../components/LurkIn"
import Bnav from "../components/Bnav"
import Proinformation from "../components/Proinformation"
import Bprotype from "../components/Bprotype"
import Bfooter from "../components/Bfooter"


export default {
    name:"Bargining",
    data(){
        return {
            type:"精选特卖"
        }
    },
    components:{
        Bhead
        ,Bpacket
        ,Bdaydiscount
        ,Bdiscountpro
        ,LurkIn
        ,Bnav
        ,Proinformation
        ,Bprotype
        ,Bfooter

    },
    methods:{
        fn(type){
            this.type=type;
        }
    }
}
</script>

<style scoped="scoped">
    html,body{
         background-color: #f5f4f9;
    }
    /* .prolist{
        height: 3.58rem;
    } */
    .ha{
        margin-top: 1.07rem;
        margin-bottom: 1.6rem; 
    }
</style>
