import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import App from './App.vue'

Vue.use(VuePlyr)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
