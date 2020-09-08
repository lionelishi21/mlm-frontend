import axios from 'axios';
import api from '../../api/services/account-service.js';

const state = {
    stripe_account: {}
}

const getters = {
    getAllAccounts: state => state.stripe_account
}

const actions = {

    FETCH_STRIPE_ACCOUNTS ({commit}) {
        api.getUserStripeAccounts()
            .then( res => {
                console.log(res)
                commit('SET_USER_STRIPE_ACCOUNTS', res.data)
            })
            .catch( error => {
                console.log(error.response)
            })
    }


}

const mutations = {

    SET_USER_STRIPE_ACCOUNTS(state, acc) {
        state.stripe_account = acc;
    }
}

export default  {
    state,
    actions,
    getters,
    mutations
}