import Api from '../index.js';

export default {

	changePassword(payload) {
		return Api().post('/password/email-link', payload)
	},

	saveUserFilter(filters) {
		return Api().post('/user/save-userfilter', filters)
	},

	fetchUserFilter() {
		return Api().get('/user/filters')
	},

	fetchParishes() {
		return Api().get('/parishes')
	},

	fetchBodystyles() {
		return Api().get('/bodystyles')
	},

	loginUser(params) {
		return Api().post('/login', params)
	},

	fetchCurrentUser() {
		return Api().get('/user')
	},

	registerUser( params ) {
		return Api().post('/register', params)
	},

	logoutUser() {
		return Api().get('/logout')
	},

	fetchUserProfile() {
		return Api().get('/profile')
	},

	fetchBitlyLink() {
		return Api().get('/referral')
	},

	fetchRefs() {
		return Api().get('/referees')
	},

	fetchReferralPoints() {
		return Api().get('/referral-points')
	},

	verifyAcount() {
		return Api().get('/email/resend')
	},

	fetchUser() {
		return Api().get('/user')
	},

	purchaseEBook(params) {
		return Api().post('/purchase', params)
	},

	fetchUserGroupSales() {
		return Api().get('/affiliates/group-sales')
	},

	fetchAdminDashboard() {
		return Api().get('/admin/dashboard')
	},

	fetchUserCashBonuses(userId) {
		return Api().get('/cashbonuses/'+userId)
	},

	fetchUsername(username) {
		return Api().get('/username-availability?username='+username)
	},

	getCountries() {
		return Api().get('/countries')
	},

	getStates(id) {
		return Api().get('/states/'+id)
	},

	getCities(id) {
		return Api().get('/cities/'+id)
	},

	fetchAffiliate() {
		return Api().get('/link')
	},


	changeUserPassword(payload) {
		return Api().post('/change-password', payload)
	},

	PostPassword( payload ) {
		return Api().post('/password/reset', payload)
	},

	fetchUserDashboard() {
		return Api().get('/affiliates/user-dashboard')
	},

	fetchAllUser(page, params) {
		return Api().get('/users?page='+page+''+params)
	},

	addAffiliate(params) {
		return Api().post('/affiliates/add-affiliate', params)
	},

    fetchUserAffiliateDetails(id) {
	    return Api.get('/users/details/'+ id)
    },

	fetchEscrow() {
		return Api().get('/escrow');
	},

	addAccount() {
		return Api().get('/customers/account');
	},

	addBankAccount(params) {
		return Api().post('/customers/bank', params)
	},

	stripAccount() {
		return Api().get('/customers/account')
	},

	storePaypalAccont(params) {
		return Api().post('/customers/add-paypal', params)
	},

	storeDebitCard( params ) {
		return Api().post('/customers/add-debit-card', params)
	},

	storeMccCard( params ) {
		return Api().post('/customers/add-mcc-card', params);
	},

	getPaypalAccount() {
		return Api().get('/customers/get-paypal')
	},

	fetchTransaction() {
		return Api().get('/customers/transactions');
	},

	fetchUserAccount() {
		return Api().get('/customers/payout-accounts');
	},

	addDebitCard(params) {
		return Api().post('/customers/add-debitcard', params);
	},

	getUserStripeAccount() {
		return Api().get('/customers/stripe-account')
	},

	fetchAccountLink() {
		return Api().get('/customers/account-link')
	},

	updateAccount() {
		return Api().get('/customers/update-account-link')
	},

	fetchDetail() {
		return Api().get('/users/detail')
	},

	removeExternalAccount(params) {
		return Api().post('/customers/remove-account', params)
	}
}


