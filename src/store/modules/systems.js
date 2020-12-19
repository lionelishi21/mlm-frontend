import api from '../../api/services/system-service.js';

const state = {
    packages: {},
    details: {}
}

const getters = {
    systemPackage: state => state.packages,
    systemDetails: state => state.details
}

const actions = {

    SYSTEM_ALL_PACKAGES({commit}) {
        api.fetchAllSystemPackages()
            .then( response => {
                console.log('system_packages', response.data)
                commit('SET_SYSTEM_PACKAGES', response.data)
            })
            .catch( error => {
                console.log( error.response)
            })
    },

    SYSTEM_DETAILS( { commit }, id ) {
        api.fetchSystemDetails(id)
            .then( response => {
                console.log( response.data)
                commit('SET_SYSTEM_DETAILS', response.data)
            })
            .catch( error => {
                console.log(error.response)
            })
    },

    SYSTEM_UPDATE( { commit }, params) {

        api.updateSystemPackages(params)
            .then( response => {
                console.log( response.data)
            })
            .catch( error => {
                console.log(error.respop)
            })
    }
}

const mutations = {

    SET_SYSTEM_PACKAGES(state, pkg ) {
        state.packages = pkg
    },

    SET_SYSTEM_DETAILS( state, detail) {
        state.details = detail
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}