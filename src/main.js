import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Cookies from 'js-cookie'
import './plugins/element.js'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss'
import '@/assets/iconfont/iconfont.css'
import router from './router'
import './permission' // permission control
import i18n from './lang' // internationalization
import Element from 'element-ui'
import * as filters from './filters' // global filters
import './icons' // icon

Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false



new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
