import axios from 'axios';
import api from '../../api/services/affiliates-services.js';

const state = {
	affiliates: {},
	details: {},
	personal_sales: 0
}

const actions = {
	FETCH_AFFILIATES(context) {

		return new Promise((resolve, reject) =>{
			let token = localStorage.getItem('access_token')
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

			api.fetchAffiliates()
				.then( response => {
					console.log(response)
					context.commit('SET_AFFILIATES', response.data)
					resolve(response)
				})
				.catch( error => {
					console.log(error.response)
					reject(error)
				})
		})


	},
	AFFILIATE_DETAILS(content, affiliateId) {

		return new Promise((resolve, reject) => {

			let token = localStorage.getItem('access_token')
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

			api.fetchAffiliateDetails(affiliateId)
				.then( response => {
					console.log(response.data)
					content.commit('SET_AFFILIATE_DETAILS', response.data)
					resolve(response.data)
				})
				.catch( error => {
					console.log(error.response)
					reject(error.response)
				})
		})

	},

	DELETE_AFILIATE(context, id) {
		return new Promise((resolve, reject) => {

			api.deleteAffiliate(id)
				.then( response => {
					console.log(response)
					resolve(response.data)
				})
				.catch( error => {
					console.log(error.response)
					reject(error.response)
				})
		})
	},

	PERSONAL_SALES( { commit } ) {

		api.fetchPersonalSales()
			.then( response => {
				console.log(response.data)
				commit('SET_PERSONAL_SALES', response.data)
			}).catch( error => {
				console.log(error.response)
		})
	},

	AFFILIATE_COMPRESS( content, params) {
		return new Promise((resolve, reject) => {
			api.makeCompression(params)
				.then( response => {
					resolve(response)
				})
				.catch( error => {
					console.log(error.response)
					reject(error.response)
				})
		})
     }
}

const mutations = {
	SET_AFFILIATES(state, affiliate) {
		state.affiliates = affiliate
	},
	SET_AFFILIATE_DETAILS(state, detail) {
		state.details = detail
	},

	SET_PERSONAL_SALES(state, personal) {
		state.personal_sales = personal
	}
}

const getters = {
	getAffiliates: state => state.affiliates,
	getAffiliateDetails: state => state.details,
	getPersonalSales: state => state.personal_sales
}

export default {
	state,
	getters,
	actions,
	mutations
}