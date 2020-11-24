import api from '../../api/services/affiliates-services.js';

const state = {
    boosters: {},
    summary: {},
    details: {},
    user_boosters: {}
}

const getters = {
    boosterAll: state => state.boosters,
    boosterDetails: state => state.details,
    boosterUser: state => state.user_boosters,
    boosterSummary: state => state.summary
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
    },

    BOOSTER_USER( { commit }, user_id) {

        api.fetchUserBoosters( user_id )
            .then( response => {
                console.log(response)
                commit('SET_USER_BOOSTERS', response.data)
            })
            .catch( error => {
                console.log( error.response )
            })
    },

    BOOSTER_SUMMARY({ commit }) {
        api.fetchUserSummary()
            .then( response => {
                console.log('---------summary', response )
                commit( 'SET_BOOSTER_SUMMARY', response.data)
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
    },

    SET_USER_BOOSTERS(state, boost) {
        state.user_boosters = boost
    },

    SET_BOOSTER_SUMMARY( state, summar ) {
        state.summary = summar
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}