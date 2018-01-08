// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import axios from 'axios'
Vue.prototype.$ajax = axios

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.withCredentials = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: { App }
  // method: {
  //   submitForm () {
  //     this.$ajax({
  //       method: 'post',
  //       url: '/user',
  //       data: {
  //         name: 'wise',
  //         info: 'wrong'
  //       }
  //     })
  //   }
  // }
})
