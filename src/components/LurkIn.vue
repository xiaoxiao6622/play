<template>
    <div>
        <div class="box1" v-show="isshow">
            <Bdiscountpro/>
            <Bdiscountpro/>
            <Bdiscountpro/>
        </div>
        <div class="lurk"  @click.self="toggle" >
            <span @click="fn">更多5折</span>
            <i class="el-icon-arrow-down"></i>
        </div>
    </div>
</template>

<script>
import Bdiscountpro from "../components/Bdiscountpro"
export default {
    name:"LurkIn",
    data(){
        return {
            isshow:false
        }
    },
    methods:{
        toggle(){
           this.isshow=true;
        },
        fn(){
            this.isshow=!this.isshow
        }
        
    },
    components:{
        Bdiscountpro
    }
    
}
</script>

<style scoped="scoped">
    .lurk{
        width: 100%;
        height: 0.85rem;
        padding: 0 0.35rem; 
        /* background: rgb(160, 221, 173); */
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        border-top: 1px solid red;
        margin-top: 0.2rem;
    }
    .el-icon-arrow-down{
        font-size: 26px;
        padding-left: 0.1rem;
    }
    .box1{
        width: 100%;
        height: 10rem;
        /* background: turquoise; */
    }
</style>