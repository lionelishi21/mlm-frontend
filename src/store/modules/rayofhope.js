import api from '../../api/services/affiliates-services.js';

const state = {
    rayofhope: {},
    rayofhopedetails: {}
}

const getters = {
    getHope: state => state.rayofhope,
    getHopeDetails: state => state.rayofhopedetails
}

const actions = {

    FETCH_RAYOFHOPE_AFFILIATES( {commit} ) {
        return new Promise((resolve, reject) => {
            api.fetchRayofhopes()
                .then( response => {
                    console.log( response )
                    commit('SET_RAYOFHOPE_AFFILIATE', response.data)
                    resolve( response.data )
                })
                .catch( error => {
                    reject( error.response)
                })
        })

    },

    FETCH_RAYOFHOPE_DETAILS( { commit }, id) {

        api.fetchRayofhopeDetails(id)
            .then( response => {
                console.log( response )
                commit('SET_RAYOFHOPE_DETAILS', response.data )
            })
            .catch( error => [
                console.log( error.response )
            ])
    }
}

 const mutations = {

     SET_RAYOFHOPE_AFFILIATE (state, ray) {
        state.rayofhope = ray
     },

     SET_RAYOFHOPE_DETAILS( state, detail) {
         state.rayofhopedetails = detail
     }
 }

 export default  {
     state,
     getters,
     actions,
     mutations
 }