
import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user.js';
import affiliate from './modules/affiliate.js';
import cashbonus from './modules/cash-bonus.js';
import payment from './modules/payment';
import country from "./modules/country";
import ebook from './modules/ebook';
import escrow from "./modules/escrow";
import account from "./modules/account";
import rayofhope from "./modules/rayofhope";

Vue.use(Vuex)
Vue.config.debug = true

export default new Vuex.Store({
    modules: {
    	user,
    	affiliate,
    	cashbonus,
		payment,
		country,
		ebook,
		escrow,
		account,
		rayofhope
    },
});