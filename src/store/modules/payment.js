import axios from 'axios';
import api from '../../api/services/payment-services.js';

const state = {
    payments: null,
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
    }
}

export default {
    actions
}
