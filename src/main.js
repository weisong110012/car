import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './plugins/element.js'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss'
import '@/assets/iconfont/iconfont.css'
import router from './router'
import './permission' // permission control

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
