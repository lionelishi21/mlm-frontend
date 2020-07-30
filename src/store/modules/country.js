import api from '../../api/services/user-services.js';

const state = {
    countries: {},
    states: {},
    cities: {}
}

const getters = {
    countries: state => state.countries,
    states: state => state.states,
    cities: state => state.cities
}

const actions = {

    GET_COUNTRIES({dispatch, commit}) {
        api.getCountries()
            .then( response => {
                console.log(response)
                commit('SET_COUNTRIES', response.data.country)
            })
            .catch( error => {
                console.log(error.response)
            })
    },

    GET_STATES({commit, dispatch}, country_id) {

        api.getStates(country_id)
            .then( response => {
                console.log(response)
                commit('SET_STATES', response.data.states)
            })
            .catch( error => {
                console.log(response)
                console.log(error.response)
            })
    },

    GET_CITIES ({dispatch, commit}, state_id) {

        api.getCities(state_id)
            .then( response => {
                console.log(response)
                commit('SET_CITY', response.data.cites)
            })
            .catch( error => {
                console.log(error.response)
            })
    }
}

const mutations = {

    SET_COUNTRIES( state, country) {
        state.countries = country
    },

    SET_STATES (state, stat) {
        state.states = stat
    },

    SET_CITY (state, city) {
        state.cities = city
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
