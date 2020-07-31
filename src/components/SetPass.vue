<template>
  <div class="box">
    <div class="left">
      <i class="iconfont icon-next-copy"></i>
    </div>
    <div class="p_box">
      <p>请设置密码</p>
    </div>
    <div class="input_box">
      <span>
        <i>设置密码:</i>
        <input type="password" placeholder="请输入密码">
      </span>
      <span>
        <i>确认密码:</i>
        <input type="password" placeholder="请确认密码">
      </span>
       <p id="err" :class="mclass" v-show="show">两次密码不一致</p>
      <button id="btn" >提交</button>
    </div>

  </div>
</template>

<script>
  import axios from "axios"
  export default{
    name:"SetPass",
    data:function(){
      return{
        show:false,
        mclass:"animate__animated animate__bounceInLeft"
      }
    },
    methods:{

    },
    mounted() {
      let that = this;
      $("#btn").eq(0).on("click",function(){
        if($(".input_box input").eq(0).val() == $(".input_box input").eq(1).val()){
          that.mclass = "animate__animated animate__bounceOutRight";
          let installTel = localStorage.getItem("installTel")
          localStorage.setItem("tel",installTel);
          localStorage.setItem("userpass",$(".input_box input").eq(0).val());
          axios({
            method: "post",
            // url: "user",
            url: "regist/",
            data: {
              // id:"",
              tel: installTel,
              userpass:$(".input_box input").eq(0).val()
            }
          }).then(res => {
              // this.getData()
              console.log(res.data);
              if(res.data.code == 0){
                that.$router.push({name:"LoginPage"});
              }
          }).catch(err => {
              console.log(err);
          });

        }else{
          that.show = true;
          that.mclass = "animate__animated animate__bounceInLeft"
        }
      });
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
    height: 100%;
    padding: 0 0.35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .left{
    width: 100%;
    height: 1rem;
    /* background-color: red; */
    display: flex;
    align-items: center;
    padding-left: 0.25rem;
  }
  .iconfont{
    font-size: 0.5rem;
  }

  .p_box{
    font-size: 22px;
    text-align: center;
    padding: 1.5rem 0 1rem 0  ;
    /* background-color: red; */
  }
  .input_box{
    width: 100%;
    height: 0.8rem;
    margin-top: 0.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input_box > span{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0.15rem 0 ;
    /* border-bottom: 1px solid #757575; */
    padding: 0.2rem 0 ;
  }
  .input_box > span > i{
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 18px;
    border-right: 1px solid #757575;
    padding-right: 0.6rem;
  }
  .input_box input{
    height: 100%;
    margin-left: 0.1rem;
    padding-left: 0.6rem;
    width: 60%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 20px;
  }

  .input_box > #btn{
    width: 95%;
    background-color: #0074D9;
    font-size: 20px;
    padding: 0.15rem 0;
    border-radius: 0.1rem;
    border: none;
    color: #fff;
    margin-top: 0.1rem;
  }

  .input_box > #err{
    color: darkred;
    font-size: 18px;
  }

</style>
