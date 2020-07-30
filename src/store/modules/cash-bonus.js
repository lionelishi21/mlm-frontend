import api from '../../api/services/payout-service.js';

const state = {
	bonuses: {},
	allBounses: {},
	wallet_summary: {
		cashbonus: 0,
		payout: 0
	},
	accounts: {}
}

const actions = {

	FETCH_CASH_BONUSES({commit}) {

		api.fetchUserBonuses()
			.then( response => {
				console.log( response)
				commit('SET_CASH_BONUSES', response.data.response)
			})
			.catch( error => {
				console.log(error.response)
			})
	},

	FETCH_ALL_BONUSES({commit}) {
		api.fetchBonuses()
			.then( response => {
				console.log( response )
				commit('SET_ALL_CASH_BONUSES', response.data)
			})
			.catch( error => {
				console.log(error.response)
			})
	},

	ACCEPT_CASH_BONUS({commit}) {
		return new Promise((resolve, reject) => {
			api.acceptCash()
				.then( response => {
					console.log(response)
					resolve(resolve)
				})
				.catch( error => {
					console.log(error.response)
					reject(error.response)
				})
		})
	},

	FETCH_USER_ACCOUNTS({commit}) {

		api.getUserAccount()
			.then( response => {
				console.log(response)

				if (response.status) {
					commit('SET_USER_ACCOUNTS', response.data.response) 
				}

			})
			.catch( error => { console.log(error.response) })
	},

	ADD_USER_ACCOUNT({commit, dispatch}, payload) {

		api.addUserAccount(payload)
			.then( response => {
				console.log( response )
				dispatch('FETCH_USER_ACCOUNTS')
			})
			.catch(error => {
				console.log(error.response)
			})
	},

	FETCH_WALLET_SUMMARY({commit}) {

		api.getWalletSummary()
			.then( response => {
				console.log( response )
				commit('SET_WALLET_SUMMARY', response.data)
			})
			.catch( error => {
				console.log(error.response)
			})
	},
	DELETE_ACCOUNT({dispatch}, id) {

		api.removePaymentAccount(id)
			.then( response => {
				console.log(response)
				dispatch('FETCH_USER_ACCOUNTS')
			}).catch(error => {
				console.log(err.response)
			})
	},
	MAKE_PAYOUT({dispatch}, details) {

		api.makePayout(details)
			.then( response => {
				console.log(response)
				dispatch('FETCH_CASH_BONUSES')
			})
			.catch( error => {
				console.log(error.response)
			})
	}

}

const mutations = {

	SET_CASH_BONUSES(state, cash) {
		state.bonuses = cash
	},

	SET_ALL_CASH_BONUSES(state, cash) {
		state.allBounses = cash
	},

	SET_USER_ACCOUNTS(state, account) {
		state.accounts = account
	},
	SET_WALLET_SUMMARY(state, wallet) {
		state.wallet_summary = wallet
	} 
}

const getters = {
	userCashBonues: state => state.bonuses,
	allCashBonuses: state => state.allBounses,
	userAccounts: state => state.accounts,
	walletSummary: state => state.wallet_summary
}

export default {
	state,
	getters,
	actions,
	mutations
}