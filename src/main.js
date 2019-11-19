import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.less' // global css
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small', locale })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
