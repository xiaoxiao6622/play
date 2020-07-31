import Vue from "vue";
import VueX from "vuex";

// 安装Vuex
Vue.use(VueX);

export default new VueX.Store({
   state:{
        tel:""
      },
   mutations:{
     takeTelFn(state,payload){
      state.tel = payload.tel
     }
  },
  
  actions:{
   takeTelFn(context,payload){
       context.commit(payload);
   }
}
});
