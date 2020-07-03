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
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import csc from 'country-state-city'

// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'
Vue.component('vue-phone-number', VuePhoneNumberInput);
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
