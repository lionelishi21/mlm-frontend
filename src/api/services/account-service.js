import Api from '../index.js';

export default {
    getUserStripeAccounts() {
        return Api().get('/accounts/all')
    }
}