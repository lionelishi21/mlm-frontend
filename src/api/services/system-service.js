import Api from '../index.js'

export default {
    fetchAllSystemPackages() {
        return Api().get('/affiliates/system-packages')
    },
    fetchSystemDetails(id) {
        return Api().get('/affiliates/system-packages/'+id)
    }
}