import api from '../../api/services/user-services.js';

const state = {

    escrows: {},
    allEscrows: {}

}

const getters = {
    escrow: state => state.escrows,
    getAllUserEscrows: state => state.allEscrows
}

const actions = {

    GET_ESCROW({commit}) {
        api.fetchEscrow()
            .then( response => {
                console.log(response)
                commit('SET_ESCROW', response.data)
            })
            .catch( error => {
                console.log(error.response)
            })
    },

    FETCH_ALL_ESCROWS({commit} ) {


            api.getAllUserEscrow()
                .then( response => {
                    console.log(response)
                    commit('SET_USER_ESCROW', response.data)
                })
                .catch( error => {
                    console.log(error.response)
                })

    },

    MANUAL_PAYOUT( content, params) {

        return new Promise((resolve, reject) => {

            api.postEscrowPayout( params )
                .then( response  => {
                    console.log(response)
                    resolve(response)
                })
                .catch( error => {
                    console.log(error.response)
                    reject(error.response)
                })
        })

    },

    PAYOUT_REMOVE(content, id) {

        return new Promise((resolve, reject) => {
             api.removePayout(id)
                 .then( response => {
                     console.log(response)
                     resolve(response)
                 })
                 .reject( error => {
                     console.log(error.response)
                     reject(error)

                 })
        })
    }
}

const mutations = {

    SET_ESCROW(state, escrow) {
        state.escrows = escrow
    },

    SET_USER_ESCROW( state, esc) {
        state.allEscrows = esc
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}