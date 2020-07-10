import Api from '../index.js'

export default {
    purchaseEBook(params) {
        return Api().post('/purchase', params)
    }
}