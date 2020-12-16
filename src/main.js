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
import VueSnackbar from 'vue-snack'
import 'vue-snack/dist/vue-snack.min.css'
import VueApexCharts from 'vue-apexcharts'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { VuejsDatatableFactory } from 'vuejs-datatable';
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);
Vue.use( VuejsDatatableFactory );
// Install BootstrapVue
Vue.use(BootstrapVue)


// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons)

Vue.component('apexchart', VueApexCharts)
Vue.use(VueApexCharts)
Vue.use(VueSnackbar, { position: 'bottom-right', time: 3000 })

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Or only as a filter
import { VueMaskFilter } from 'v-mask'

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


// importing the helper
import interceptorsSetup from './helpers/interceptors'

// and running it somewhere here
interceptorsSetup()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
