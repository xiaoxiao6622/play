// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index.js';
import store from './store/index.js';
import axios from 'axios';

import 'lib-flexible/flexible';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false;
// axios.defaults.baseURL = "http://localhost:3000/";
axios.defaults.baseURL = "http://10.36.172.40:8000/api/";

// import VueTouch from 'vue-touch';
// Vue.use(VueTouch, {name: 'v-touch'});

// import $ from 'zepto'

 import $ from 'n-zepto'

import animated from 'animate.css';
Vue.use(animated);
// import touch from 'zepto.touch';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
