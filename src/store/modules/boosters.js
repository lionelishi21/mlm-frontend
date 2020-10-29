import api from '../../api/services/affiliates-services.js';

const state = {
    boosters: {},
    details: {}
}

const getters = {
    boosterAll: state => state.boosters,
    boosterDetails: state => state.details
}

const actions = {

    BOOSTER_FETCH_ALL(content) {
        return new Promise((resolve, reject) => {

            api.getBoosterPackages()
                .then( response => {
                    console.log( response )
                    content.commit('SET_BOOSTERS',response.data)
                    resolve(response)
                })
                .catch( error => {
                    console.log( error.response )
                    reject(error.response)
                })
        })
    },

    BOOSTER_TRANSFER(content, userId) {
        return new Promise((resolve, reject ) => {
            api.transferPackage(userId)
                .then( response => {
                    console.log( response )
                    resolve(response.data)
                })
                .catch( error => {
                    console.log(error.response)
                    reject(error.response)
                })
        })
    },

    BOOSTER_DETAILS({commit}, id) {

        api.fetchBoosterDetails( id )
            .then( response => {
                console.log( response )
                commit('SET_BOOSTER_DETAILS', response.data )
            })
            .catch( error => {
                console.log( error.response )
            })
    }
}

const mutations = {

    SET_BOOSTERS(state, booster) {
        state.boosters = booster
    },

    SET_BOOSTER_DETAILS(state, detail) {
        state.details = detail
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}