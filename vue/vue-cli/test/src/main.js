// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
import store from "./store"

Vue.config.productionTip = false  //是否开启动生产环境
Vue.config.devtools = true   //启动就可以在chrome控制台看到vue扩展里面看到变化s
 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
