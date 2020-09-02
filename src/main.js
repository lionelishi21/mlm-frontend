import Vue from 'vue'
import App from './App.vue'
import Maintenance from "./views/Maintenance";
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
import Snackbar from 'vuejs-snackbar';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import VueMask from 'v-mask'
import { VueMaskDirective } from 'v-mask'
import ApexCharts from 'apexcharts'

// Or only as a filter
import { VueMaskFilter } from 'v-mask'
import VueTour from 'vue-tour'
require('vue-tour/dist/vue-tour.css')
Vue.use(VueTour)

// Global register
Vue.component('snackbar', Snackbar);
Vue.use(VueMask);
Vue.directive('mask', VueMaskDirective);
Vue.filter('VMask', VueMaskFilter)

// Import Interfaces`
import { ICountry, IState, ICity } from 'country-state-city'
Vue.component('vue-phone-number', VuePhoneNumberInput);
Vue.component('pagination', require('laravel-vue-pagination'));

Vue.use(PrettyCheckbox);
Vue.use(ModalPlugin)
Vue.use(VueCurrencyFilter,
{
  symbol : '$',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
})


Vue.component('notification-component', require('./components/Notification').default);
Vue.filter('str_limit', function (value, size) {
  if (!value) return '';
  value = value.toString();

  if (value.length <= size) {
    return value;
  }
  return value.substr(0, size) + '...';
});

Vue.use(vueCountryRegionSelect)
Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
