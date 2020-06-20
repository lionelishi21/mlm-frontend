import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vueCountryRegionSelect from 'vue-country-region-select'
import VueCurrencyFilter from 'vue-currency-filter'
import $ from 'jquery'
window.$ = $
import { ModalPlugin } from 'bootstrap-vue'
import PrettyCheckbox from 'pretty-checkbox-vue';

Vue.use(PrettyCheckbox);
Vue.use(ModalPlugin)
Vue.use(VueCurrencyFilter,
{
  symbol : 'USD $',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.use(vueCountryRegionSelect)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
