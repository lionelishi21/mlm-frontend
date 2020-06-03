
import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user.js';
import affiliate from './modules/affiliate.js';

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
    modules: {
    	user,
    	affiliate
    },
});