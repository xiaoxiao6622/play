<template>
  <div class="box">
    <div class="left">
      <i class="iconfont icon-next-copy"></i>
    </div>
    <div class="i_box">
      <span>手机号注册</span>
    </div>
    <div class="msg_box">
      <span>
        <i>手机号归属地</i>
        <span>
          中国<i class="iconfont icon-xiangyou"></i>
        </span>
      </span>
    </div>
    <div class="tel_box">
      <span>+86</span>
      <input type="tel" placeholder="请输入你的手机号">
    </div>
    <button @click="installFn">注册</button>
    <p>注册即表示同意<span>支付宝及客户端服务协议、支付宝隐私协议政策</span>和<span>淘宝平台服务协议</span></p>
  </div>
</template>

<script>
  import axios from "axios";
  export default{
    name:"Install",
    methods:{
      installFn(){
        let tel = $(".tel_box input").eq(0).val();
        // 数据传到vuex
        this.$store.dispatch({
           type:"takeTelFn",
           tel:tel
       })
        localStorage.setItem('installTel',tel);
        // 请求手机验证码
       axios({
         url:"",
         params:{
           tel:tel
         }
       }).then((res)=>{
         sessionStorage.setItem("vCode",res.data);
         console.log(res.data);
       }).then(()=>{});
        this.$router.push({name:"Vcode"});
      }
    }
  }
</script>
<style scoped="scoped">
  .box{
    width: 100%;
    padding: 0 0.35rem;
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

  .i_box{
    padding: 1rem 0 ;
    text-align: center;
    font-size: 28px;
    }
    .msg_box{
      color: #757575;
    }
  .msg_box,
  .tel_box{
    width: 100%;
  }
  .tel_box{
    margin-top: 0.23rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #0077AA;
  }
  .tel_box > span{
    width: 20%;
    font-size: 22px;
    padding: 0.3rem 0 ;
  }
  .tel_box input{
    height: 26px;
    width: 80%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 20px;
    padding-left: 0.2rem;
  }
  .msg_box > span{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    border-bottom: 1px solid #757575;
    padding: 0.3rem 0 ;
  }
  .msg_box > span span{
    display: flex;
    align-items: center;
  }
  .msg_box > span span i{
    margin-left: 0.25rem;
  }

  .box button{
   margin-top: 0.4rem;
   width: 100%;
   height: 1rem;
   font-size: 20px;
   color: #fff;
   background-color: #1678ff;
   border: none;
  }
  .box > p{
    width: 100%;
    margin-top: 0.4rem;
    color: #757575;
  }
  .box > p > span{
    color: #0077AA;
  }
</style>
