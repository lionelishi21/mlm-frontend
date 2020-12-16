import api from '../../api/services/affiliates-services.js';
const state = {
    account: {},

}

const getters = {
    transferwiseAccount: state => state.account
}

const actions = {

    TRANSFERWISE_FETCH_ACCOUNT({commit}) {
        api.transferwiseFetch()
            .then( response => {
                console.log( response)
                commit('SET_TRANSFER_WISE',response.data)
            })
    },

    TRANSFERWISE_POST(content, params) {
        return new Promise((resolve, reject) => {
            api.postTransferWise( params)
                .then( response => {
                    resolve(response.data)
                })
                .catch( error => {
                    console.log(error.response)
                    reject(error.response)
                })
        })
    },

    TRANSFERWISE_PAYOUT(content, params) {
        return new Promise((resolve, reject) => {
            api.transferwisePayout(params)
                .then( response => {
                    resolve(response.data)
                })
                .catch( error => {
                    console.log( error.response)
                    reject(error.response)
                })
        })
    }

}

const mutations = {
    SET_TRANSFER_WISE(state, trans) {
        state.account = trans
    }
}

export default  {
    state,
    getters,
    actions,
    mutations
}