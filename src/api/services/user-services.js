import Api from '../index.js';

export default {

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
	}
}