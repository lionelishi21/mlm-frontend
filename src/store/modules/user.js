import axios from "axios";
import api from '../../api/services/user-services.js'

const state = {
  tokens: {
    access_token: null,
    expires_in: null,
    refresh_token: null,
    token_type: null
  },
  userDetails: {},
  profile: {},
  user: {},
  group_sales: 0,
  adminDashboard: {},
  cashbonuses: {}

}

const actions = {
  login( context, user) {
     return new Promise((resolve, reject) => {

        let data = {
          email: user.email,
          password: user.password,
        };

         api.loginUser(data).then(response => {
            let responseData = response.data
            let now = Date.now()

            responseData.expires_in = responseData.expires_in + now
            context.commit('updateTokens', responseData.token)
            localStorage.setItem('access_token', responseData.token )

            resolve(response)
          }).catch( err => { reject(err)})
     })
  },

  AUTH_REGISTER(context, user) {

    return new Promise((resolve, reject) => {
      
       api.registerUser(user).then(response => {
        
          let responseData = response.data
          let now = Date.now()

          responseData.expires_in = responseData.expires_in + now
          context.commit('updateTokens', responseData.token)

          resolve(response)
        }).catch( err => { reject(err)})
     })
  },
  AUTH_LOGOUT({commit, dispatch}){
     
    let token = localStorage.getItem('access_token')
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    return new Promise(( resolve, reject) => {
        
        api.logoutUser().then( response => {
 
             localStorage.removeItem('access_token')
             let user = {}
             // context.dispatch('getCurrentUser')
             
            resolve(response)
        }).catch( error => {
            reject(error)
        })
    });
  
   },
  
  GET_LOGIN_USER({commit, dispatch}) {

       let token = localStorage.getItem('access_token')
       axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

       api.fetchUser()
         .then( response => {
           commit('SET_LOGIN_USER', response.data)
         })
         .catch( error => {
           console.log(error.response)
         })
  },

  GET_USER_DETAILS({commit}, payload) {

     let token = localStorage.getItem('access_token')
     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

     return new Promise((resolve, reject) => {

      api.fetchUserProfile().then( response => {
           console.log(response.data.response)
           commit('SET_USER_DETAILS', response.data.response)
           resolve(response)
        }).catch( error => {
          console.log(error.response)
          reject(error)
        })
    })
  },

   BUY_BOOK (context, params) {
    return new Promise((resolve, reject) => {

      api.purchaseEBook(params)
        .then ( response => {
          console.log(response)
        })
        .catch( error => {
          console.log(error.response)
        })
    })
  },

  FETCH_USER({ commit, dispatch}) {

  },
  USER_GROUP_SALES({commit, dispatch}) {

      api.fetchUserGroupSales()
        .then( response => {
          console.log( response )
          commit('SET_GROUP_SALES', response.data)
        })
        .catch( error => {
          console.log(error.response)
        })
  },

  ADMIN_DASHBOARD({commit}) {

    api.fetchAdminDashboard()
      .then( response => {
         console.log(response) 
         commit('SET_ADMIN_DASHBOARD',response.data)
      })
      .catch( error => {
        console.log( error.response )
      })
  },

  GET_USER_CASHBONUS({commit}, id) {

     api.fetchUserCashBonuses(id) 
       .then( response => {

          console.log(response) 
          commit('SET_CASHBONUSES', response.data)
       })
       .catch(error => {

          console.log(error.response)
       }) 
  }

}


const mutations = {

    updateTokens(state, tokens) {
      state.tokens = tokens
    },

    SET_USER_DETAILS(state, detail) {
      state.userDetails = detail
    },

    SET_LOGIN_USER(state, detail) {
      state.user = detail
    },

    SET_GROUP_SALES(state, sale) {
      state.group_sales = sale
    },

    SET_ADMIN_DASHBOARD(state, dash) {
      state.adminDashboard = dash
    },

    SET_CASHBONUSES(state, cash) {
      state.cashbonuses = cash
    }

}


const getters = {

    getAccessToken(state) {
      return state.tokens.access_token
    },

    getUserDetails(state) {
      return state.userDetails 
    },
    getLoginUser: state => state.user,
    getGroupSales: state => state.group_sales,
    getAdminDashboard: state => state.adminDashboard,
    getCashBonuses: state => state.cashbonuses
}

export default {
  state,
  getters,
  actions,
  mutations
}