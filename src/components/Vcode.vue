<template>
  <div class="box">
    <div class="left">
      <i class="iconfont icon-next-copy"></i>
    </div>
    <div class="p_box">
      <h3>请输入验证码</h3>
      <p>
        <span>我们已向  <i>{{installTel}}</i>  发送短信验证码，</span>
      </p>
      <p>
        <span>请查看短信并输入验证码</span>
      </p>
    </div>
    <!-- 验证码框 -->
    <div class="input_box" @click="inputFn">
     <input type="text" ref="code" maxlength="1">
     <input type="text" ref="code" maxlength="1">
     <input type="text" ref="code" maxlength="1">
     <input type="text" ref="code" maxlength="1">

    </div>
    <p v-show="pShow">重新发送验证码（<span>{{this.sec}}</span>）</p>
    <el-row>
      <el-button type="primary" class="btn" v-show="btnShow" @click="vcodeFn">重新发送</el-button>
    </el-row>
    <p id="err" class="animate__animated animate__bounce" v-show="show">验证码错误</p>
  </div>
</template>

<script>
  import axios from "axios";
  export default{
    name:"Vcode",
    data:function(){
      return{
        installTel:'',
        sec:45,
        pShow:true,
        btnShow:false,
        autoFocus:"autofocus",
        show:false
      }
    },
    methods:{
      vcodeFn(){
        this.pShow = !this.pShow;
        this.btnShow = !this.btnShow;
        this.sec = 45;
        // 请求手机验证码
        axios({
          url:"vcode",
          // params:{
          //   tel:tel
          // }
        }).then((res)=>{
          sessionStorage.setItem("vCode",res.data);
        });
         let t = null;
         clearInterval(t);
         t=setInterval(()=>{
           this.sec--;
           if(this.sec == 0){
             this.pShow = !this.pShow;
             this.btnShow = !this.btnShow;
             clearInterval(t);
           }
         },1000);
      },
      // 输入验证码的处理函数
      inputFn(){
        let that = this;
        // console.log(that)
        let vcodeStr = '';
        $(".input_box").children().eq(0).focus();
        $(".input_box").children().on("input",function(){
          if($(this).val() != ''){
            $(this).next().focus();
                let str = sessionStorage.getItem("vCode");
                // console.log(str);
                vcodeStr += $(this).val()
                // if(vcodeStr == str){
                  // 注意this的使用
                  that.show = false;
                  that.$router.push({name:"SetPass"});

                // }else if(vcodeStr != str && $(this).index() == 3){
                //   that.show = true;
                // }
          }else{
            $(this).prev().focus();
          }
        });
      }
    },
    mounted() {
      //  把用户信息存到localstorage
      this.installTel = localStorage.getItem("installTel");
      let t = null;
      clearInterval(t);
      t=setInterval(()=>{
        this.sec--
        if(this.sec == 0){
          this.pShow = !this.pShow;
          this.btnShow = !this.btnShow;
          clearInterval(t);
        }
      },1000);
    }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
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
    width: 100%;
    padding: 1.5rem 0 0.8rem 0 ;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .p_box h3{
    padding: 0.4rem 0 ;
    font-size: 24px;
  }
  .p_box p{
    display: flex;
    margin: 0.15rem 0 ;
    color: #757575;
    font-size: 18px;
  }
  .p_box p i{
    color: #000;
  }
  .input_box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .input_box input{
    width: 1.4rem;
    height: 1.4rem;
    margin: 0 0.1rem;
    text-align: center;
    line-height: 1.4rem;
    border: 1px solid #ccc;
    outline-color: #0074D9;
    outline-style:auto;
    font-size: 22px;
  }

  .box > p{
    width: 100%;
    text-align: center;
    margin-top: 0.5rem;
    color: #757575;
    font-size: 18px;
  }
  .box .btn {
    width: 3rem;
    height: 1rem;
    margin-top: 0.5rem;
    font-size: 20px;
  }
  .box > #err{
    color: darkred;
  }
</style>
