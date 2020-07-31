import Vue from 'vue'
import Router from 'vue-router'
import Index from '../layout/index.vue'
import My from '../layout/My.vue'
import LoginPage from '../layout/LoginPage.vue'
import Fina from '../layout/Fina.vue'
import Praise from '../layout/Praise.vue'
import Install from '../components/Install.vue'
import Vcode from '../components/Vcode.vue'
import SetPass from '../components/SetPass.vue'

Vue.use(Router);


let router = new Router({
   routes:[
      {
        path:"/",
        name:"Index",
        component:Index,
        props:true,
        meta: { requiresAuth: true }
      },
      {
        path:"/My",
        name:"My",
        component:My,
        props:true,
        meta: { requiresAuth: true }
      },
      {
        path:"/LoginPage",
        name:"LoginPage",
        component:LoginPage,
        props:true
      },
      {
        path:"/Install",
        name:"Install",
        component:Install,
        props:true
      },
      {
        path:"/Vcode",
        name:"Vcode",
        component:Vcode,
        props:true
      },
      {
        path:"/SetPass",
        name:"SetPass",
        component:SetPass,
        props:true
      },
      {
        path:"/Fina",
        name:"Fina",
        component:Fina,
        props:true
      },
      {
        path:"/Praise",
        name:"Praise",
        component:Praise,
        props:true
      }
   ]
});
router.beforeEach((to,from,next)=>{
    if(to.meta.requiresAuth==true){
        //  判断是否登录
        if(localStorage.getItem("tel")){
            next();
        }else{
            next({
                path:'/LoginPage',
                query:{
                  "to":to.path
                }
            });
        }
    }else{
      next();
    }
});

export default router;
