import Vue from 'vue'
import App from './App'
import store from './store/index'
import 'mpvue-weui/src/style/weui.css';
import HttpRequest from './utils/req'  // 
Vue.prototype.$wxhttp = HttpRequest; 

Vue.prototype.$store = store;
Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  traceUser: true
})

const app = new Vue(App)
app.$mount()
