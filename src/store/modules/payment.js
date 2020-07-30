import axios from 'axios';
import api from '../../api/services/payment-services.js';

const state = {
    payments: null,
    customers: {}
}

const getters = {
    CustomerDetails: state => state.customers
}

const actions = {

    MAKE_PAYMENT(context, params) {

        return new Promise((resolve, reject) => {
            api.purchaseEBook(params)
                .then( response => {
                    resolve(response)
                })
                .catch( error => {
                    reject(error)
                })
        })
    },

    TRANSFER_FUNDS(context, params) {

        return new Promise( (resolve, reject) => {
            api.transferFunds(params)
                .then( response => {
                    resolve(response)
                })
                .catch( error => {
                    console.log(error.response)
                })
        })
    },
    FETCH_CUSTOMER_DETAILS({commit}) {

        api.fetchCustomerDetails()
            .then(response => {
                console.log(response)
                commit('SET_CUSTOMER_DETAILS',response.data)
            })
            .catch( error => {
                console.log(error.response)
            })
    }
}

 const mutations = {

    SET_CUSTOMER_DETAILS(state, customer) {
        state.customers = customer
    }
 }


export default {
    state,
    actions,
    getters,
    mutations
}
