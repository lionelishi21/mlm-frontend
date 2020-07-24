import api from '../../api/services/user-services.js';

const state = {
    escrows: {}
}

const getters = {
    escrow: state => state.escrows
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
                console.log(error.response)
            })
    }
}

const mutations = {

    SET_ESCROW(state, escrow) {
        state.escrows = escrow
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}