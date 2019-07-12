import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

require('./assets/styles/global.scss');

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
