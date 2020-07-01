import Api from '../index.js'

export default {
    purchaseEBook(params) {
        return Api().post('/store', params)
    }
}