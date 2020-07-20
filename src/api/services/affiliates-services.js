import Api from '../index.js'

export default {
	
	fetchAffiliates() {
		return Api().get('/affiliates')
	},

	fetchAffiliateDetails(id) {
		return Api().get('/affiliates/details/'+id)
	},

	deleteAffiliate(id) {
		return Api().get('/affiliates/delete-affailiate/'+id)
	}
}