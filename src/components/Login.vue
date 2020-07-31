<template>
  <div class="box">
      <div class="left">
        <i class="iconfont icon-next-copy"></i>
      </div>
      <div class="icon_box">
      <span class="iconfont icon-zhifubao"></span>
      </div>
      <!-- 登录 -->
      <div class="input_box">
       <span>
          <i>账号</i>
          <input id="tel" type="text" placeholder="请输入登录账号">
          <i class="iconfont icon-next-copy1"></i>
       </span>
       <span>
          <i>密码</i>
          <input id="pass" type="password" placeholder="请输入登录密码">
          <i :class="this.eyes" @click="eyesFn"></i>
       </span>
       <button @click="loginFn">登录</button>
      </div>
      <div class="i_box">
        <span>忘记密码?</span>
        <span>{{this.err}}</span>
        <span>换个方式登录</span>
      </div>
      <div class="bottom_box">
        <router-link to="/Install"><span>注册账号</span></router-link>
        <span>遇到问题?</span>
      </div>

  </div>
</template>

<script>
  import axios from 'axios';
  export default{
    name:"Login",
    data:function(){
      return {
        err:"",
        flag:true,
        // eyes:["iconfont icon-yey2","iconfont icon-zhengyan"]
        eyes:"iconfont icon-yey2"
      }
    },
    methods:{
      eyesFn:function(){
        this.flag=!this.flag;
        if(this.flag){
          this.eyes = "iconfont icon-yey2";
          console.log(this.eyes)
        }else{
          this.eyes = "iconfont icon-zhengyan"
        }
      },
      loginFn:function(){
      let oTxt = document.getElementById("tel");
      let oPsd = document.getElementById("pass");
      // console.log(oTxt.value,oPsd.value)

       // axios({
       //    methods:'post',
       //    url:'login/',
       //    data:{
       //      tel:oTxt.value,
       //      userpass:oPsd.value
       //    }
       //    }).then((res)=>{
       //      console.log(res.data)
       //    // if(oTxt.value == res.data[0].tel&&oPsd.value == res.data[0].userpass){
       //    //   localStorage.setItem("tel",res.data[0].tel);
       //    //   localStorage.setItem("userpass",res.data[0].userpass);
       //    //   this.$router.push("/");
       //    // }else{
       //    //   this.err = "用户名或密码错误";
       //    // }
       // })




        // 66666
       	// if(res.data.tel == oTxt.value && res.data.userpass == oPsd.value ){
       	// 	console.log("登录成功");
        //   localStorage.setItem("tel",res.data.tel);
        //   localStorage.setItem("userpass",res.data.userpass);
        //   this.$router.push({name:"Index"});
       	// }else{
       	// 	console.log('登录成功');
       	// }

      axios.post("login/","tel="+oTxt.value+"&userpass="+oPsd.value,{}).then((res)=>{
        console.log(res.data)
       if( res.data.code == 0){
       	// console.log("登录成功");
         console.log(res.data)
         localStorage.setItem("tel",res.data.tel);
         localStorage.setItem("userpass",res.data.userpass);
         this.$router.push({name:"Index"});
       }else{
         console.log(res.data)
       	// console.log('登录成功');
       }

       });
      }
    },
    mounted() {
      let t = null;
      t = setTimeout(()=>{
        let tel = localStorage.getItem("tel");
        let userpass = localStorage.getItem("userpass");
        // console.log(tel,userpass)
        if(tel != null && userpass != null){
          $("#tel").eq(0).val(tel);
          $("#pass").eq(0).val(userpass);
          this.$router.push({name:"Index"});
        }
      },2000);
      }
  }
</script>

<style scoped="scoped">
  .box{
    width: 100%;
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

  .icon_box {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1.5rem;
  }
  .icon_box .iconfont{
    font-size: 50px;
    color: #1678ff;
  }

  .input_box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 0.35rem;
  }
  .input_box > span{
    width: 100%;
    height: 0.9rem;
    /* background-color: red; */
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.2rem;
    border-bottom: 1px solid #757575;
  }
  .input_box > button{
    margin-top: 0.2rem;
    width: 100%;
    height: 1rem;
    font-size: 20px;
    color: #fff;
    background-color: #1678ff;
    border: none;
  }
  .input_box > span i:first-of-type{
    text-align: center;
    padding-left: 0.15rem;
    font-size: 20px;
  }
  .input_box > span input{
    height: 95%;
    width: 65%;
    outline: none;
    border: none;
    padding-left: 0.1rem;
    background-color: transparent;
  }
  .input_box > span i:last-of-type{
    font-size: 20px;
    padding-right: 10px;
  }
  .i_box{
    width: 100%;
    margin-top: 0.2rem;
    padding: 0 0.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #0074D9;
  }

  .bottom_box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0.3rem;
  }
  .bottom_box span{
    padding: 0 0.1rem;
    color: #0074D9;
  }
  .i_box span:nth-of-type(2){
    color: #c70e18;
  }
</style>
