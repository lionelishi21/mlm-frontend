import Api from '../index.js'

export default {
	
	fetchUserBonuses() {
		return Api().get('/wallet')
	},

	fetchBonuses() {
		return Api().get('/wallet/all')
	},

	acceptCash() {
		return Api().post('/wallet/accept-cash-bonus')
	},

	getUserAccount() {
		return Api().get('/wallet/user-accounts')
	},

	addUserAccount(params) {
		return Api().post('/wallet/add-account', params)
	},

	getWalletSummary() {
		return Api().get('/wallet/summary');
	},

	makePayout(params) {
		return Api().post('/wallet/make-payout', params)
	}
}