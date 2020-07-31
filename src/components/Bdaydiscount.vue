<template>
   <div class="bbox3">
       <!-- <div class="discount"> -->
           <div>
                <i class="iconfont icon-shandian1"></i>
                <span>天天5折起</span>
           </div>
            <div class="countdown">
                <span>本场倒计时</span>
                <ul>
                    <li>{{hr}}</li><P>:</P>
                    <li>{{min}}</li><P>:</P>
                    <li>{{sec}}</li>
                </ul>
            </div>
       <!-- </div> -->
   </div>
</template>
<script>
export default {
    name:"Bdaydiscount",
    data(){
        return {
            hr:"",
            min:"",
            sec:""
        }
    },
    mounted:function(){
        this.countdown()
    },
    methods:{
        countdown:function(){
             // 设置截止时间
             var endDate = new Date("2020-7-30 23:23:23");
			 var end = endDate.getTime();
            //  console.log(end)
            // var end=Date.parse(new Date('12:00:00'))

            //获取当前时间
            // const now=Date.parse(new Date())
           var date=new Date();//获取当前时间
           var now=date.getTime();//获取当前的天数
        //    console.log(now)
        //    console.log(date)
            //判断倒计时结束后都为0
            if(now>=end){
                this.hr=0
                this.min=0
                this.sec=0
                return
            }
            //用结束的时间减去当前时间获得倒计时时间戳
            var msec=end-now;
                // console.log(msec);
            let hr = parseInt(msec / 1000 / 60 / 60 );//算出小时数
			let min = parseInt(msec / 1000 / 60 -hr*60);//算出分钟数;
			let sec = parseInt(msec / 1000 -hr*60*60-min*60);//算出秒数;
                //给数据赋值
				this.hr = hr > 9 ? hr : '0' + hr;
				this.min = min > 9 ? min : '0' + min;
                this.sec = sec > 9 ? sec : '0' + sec;
                
                //定义this指向
                var that =this;

                //使用定时器，然后用递归让每一次函数能调用自己达到倒计时效果
                setTimeout(function(){
                    that.countdown()
                },1000)
        }
    },
    
      // computed:{
    //     ss:function(){
    //         setInterval(() => {
    //             this.sec-=1;
    //             if(this.sec<0){
    //                 this.min-=1;
    //                 this.sec=59
    //                if(this.min<0){
    //                    this.hr-=1;
    //                    this.min=59
    //                }
    //             }
    //         }, 1000);
    //     }
    // }
}
</script>

<style scoped="scoped">
    .bbox3{
        width: 100%;
        /* height:7.86rem ; */
        padding: 0 0.35rem; 
         background: linear-gradient(to bottom,#ffe9d4,#fffbf8);
        height: 0.75rem;
        display: flex;
        justify-content: space-between;
        color: red;
        padding-top: 0.15rem;
    }
    .bbox3>div>i{
       font-size: 20px;
    }
    .bbox3>div>span{
        padding-top: 5px;
        font-size: 16px;
     }
     .countdown{
          height: 0.75rem;
          display: flex;
         justify-content: space-around;
     }
     .countdown>ul{
         /* width: 50%; */
          height: 0.75rem;
         display: flex;
         justify-content: space-around;
         padding-left: 0.15rem;
         
     }
     .countdown>ul>li{
         width: 0.45rem;
       height: 0.45rem;
       background: #393941;
       text-align: center;
       line-height: 0.5rem;
       font-size: 0.3rem;
       color: #f2f2f4;
     }


   p{
       font-size: 25px;
       color: black;
       text-align: center;
   } 
</style>


