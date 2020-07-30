import Api from '../index.js'

export default {
    purchaseEBook(params) {
        return Api().post('/purchase', params)
    },

    transferFunds(params) {
        return Api().post('/customers/transfer', params)
    },

    fetchCustomerDetails() {
        return Api().get('/customers')
    }
}