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
	},

	fetchPersonalSales() {
		return Api().get('/affiliates/personal-sales')
	},

	fetchRayofhopes() {
		return Api().get('/rayofhopes')
	},

	fetchRayofhopeDetails(id) {
		return Api().get('/rayofhopes/'+ id );
	},

	getBoosterPackages() {
		return Api().get('/boosters')
	},

	transferPackage(userId) {
		return Api().get('/transfer/booster-packages/'+userId )
	},

	fetchBoosterDetails(affiliate_id) {
		return Api().get('/boosters/details/'+affiliate_id)
	},

	fetchUserBoosters( user_id ) {
		return Api().get('/boosters/user-boosters/'+ user_id)
	},

	fetchUserSummary() {
		return Api().get('/boosters/summary')
	},

	fetchUserBoosterList(id) {
		return Api().get('/boosters/list/'+id )
	},

	makeCompression( params ) {
		return Api().post('/affiliates/compression', params )
	},

	postTransferWise( params) {
		return Api().post('/transferwises/save', params )
	},

	transferwiseFetch() {
		return Api().get('/transferwises')
	},

	transferwisePayout(params) {
		return Api().post('/transferwises/payout', params)
	}

}



