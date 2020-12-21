<template>
	<div id="content" class="main-content">
		<loading :active.sync="isLoading"
				 :can-cancel="false"
				 :is-full-page="fullPage"></loading>

	<notification-component :msg="message"></notification-component>
	<b-modal  v-model="withdrawModal" title="Withdraw Funds" modal-footer centered hide-footer>
		<div class="widget-account-invoice-one">

			<div class="widget-heading">
				<h5 class="">Wallet</h5>
			</div>

			<div class="widget-content">
				<div class="invoice-box">

					<div class="acc-total-info">
						<h5>Balance</h5>
						<p class="acc-amount">{{totalItem | currency }}</p>
					</div>

					<div class="inv-detail">
						<div class="info-detail-1" v-for="cash in escrow">
							<p>{{cash.tier}}</p>
							<p>{{cash.cash_bonus | currency}}</p>
						</div>
<!--						<div class="info-detail-3 info-sub">-->
<!--							<div class="info-detail">-->
<!--								<p>Transfer Fee</p>-->
<!--								<p>-{{percentage | currency}}</p>-->
<!--							</div>-->
<!--						</div>-->
						<hr>
						<div class="info-detail-3 info-sub">
							<div class="info-detail">
								<p>Total</p>
								<p class="text-dark"><strong>{{totalTransfer | currency}}</strong></p>
							</div>
						</div>
					</div>

					<div class="inv-action">
						<button v-for="type in getPayoutAccount"
								class="btn btn-primary mt-3 btn-lg"
								@click="payouts(type.type)"><i class="fa fa-money-check"></i>
							Confirm BanK Withdraw
						</button>

						<button v-if="transferwiseAccount"
								class="btn btn-primary mt-3 btn-lg"
								@click="payouts('transferwise')"
						>TransferWIse</button>
						<button class="btn  mt-3 btn-lg" data-dismiss="modal" @click="withdrawModal = !withdrawModal"><i class="flaticon-cancel-12"></i> Cancel</button>
					</div>
				</div>
			</div>

		</div>
	</b-modal>

	<div class="row">
		<!-- Error Messages	-->
		<div class="col-md-12 mt-5">
			<div v-if="payout.errors.error" class="alert alert-danger mb-4" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<i class="fa fa-times"></i>
				</button>
				<strong>Error Message!</strong> {{payout.errors.mesg}}</button>
			</div>
		</div>
	</div>


	<div class="row">
		<!--End Error Message -->
		<div class="col-md-12" v-if="!getUserStripeAccount">
			<div class="alert alert-light-danger mb-4" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close"><svg> ... </svg></button>
				<strong>Alert!</strong> Complete your transfer account in order to enable automatic payouts.</button>
			</div>
		</div>
	</div>


	<div class="row">
		<div class="col-md-12">
			<div v-if="payout.success.succuss" class="alert alert-success mb-4" role="alert">
				<button type="button" class="close" data-dismiss="alert" aria-label="Close">
					<i class="fa fa-times"></i>
				</button>
				<strong>Error Message!</strong> {{payout.success.mesg}}</button>
			</div>
		</div>
	</div>


	<div class="modal fade" id="payoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Confirm Payout</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times"></i>
					</button>
				</div>

				<div class="modal-body text-center">
					<div class="widget-account-invoice-one">

						<div class="widget-heading">
							<h5 class="">Wallet</h5>
						</div>

						<div class="widget-content">
							<div class="invoice-box">


							</div>
						</div>

					</div>
					<!-- Images -->


				</div>
			</div>
		</div>
	</div>

	<div class="layout-px-spacing">
		<div class="row">
			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-card-four">
					<div class="widget-content">
						<div class="text-center mt-4">
							<h1 class="value text-success">{{totalItem | currency }}</h1>
							<h6 class="text-6 text-bold">Wallet</h6>
							<small class="test-dark">Availble cash bonus</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-card-four">
					<div class="widget-content">
						<div class="text-center mt-4">
							<h1 class="value text-success">{{ payoutTotal | currency }}</h1>
							<h6 class="text-6 text-bold">Paid Out</h6>
							<small class="text-dark">The total paid out</small>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="card">
					<div class="card-body">
						<div class="text-center" v-if="getUserStripeAccount">
							<h6>Payout Account</h6>
							<h5 class="pt-3">{{getUserStripeAccount.name}}</h5>
							<p>Country: {{getUserStripeAccount.country}}</p>
							<span class="badge badge-danger text-3" v-if="getUserStripeAccount.transfer  == 'inactive'">{{getUserStripeAccount.transfer}}</span>
							<span class="badge badge-success text-3" v-else>{{getUserStripeAccount.transfer}}</span>
						</div>
						<div class="text-center" v-else>
							<h4>Payout Account</h4>
							<h6 class="pt-3">No Payout Account</h6>
							<button class="btn btn-primary" @click="addAccount()">Add Account</button>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="card">
					<div class="card-body">
						<div class="text-center" v-if="transferwiseAccount">
							<h6>Payout Account</h6>
							<h5 class="pt-1">TransferWise</h5>
							<p>Email: {{transferwiseAccount.email}}</p>
							<span class="badge badge-primary mt-1 text-3">Currency: {{transferwiseAccount.currency}}</span>
						</div>
						<div class="text-center" v-else>
							<h4>Payout Account</h4>
							<h6 class="pt-3">No International Payout Account</h6>
							<br>
							<button class="btn btn-primary" @click="addAccount()">Add Account</button>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row">

			<div class="col-md-6">
				<div class="widget widget-table-two">

					<div class="widget-heading">
						<h5 class="">Cash Bonuses

						</h5>

					</div>
					<div class="widget-content">
						<div class="table-responsive">
							<table class="table">
								<thead>
								<tr>
									<th><div class="th-content">Available On</div></th>
									<th><div class="th-content">Status</div></th>
									<th><div class="th-content">Group Sales</div></th>
									<th><div class="th-content th-heading">Cash Bonus</div></th>
									<th><div class="th-content">Payout</div></th>
								</tr>
								</thead>
								<tbody>
								<tr v-for="cash in escrow">
									<td><div class="td-content customer-name">{{cash.created_at}}</div></td>
									<td><div class="td-content product-brand">{{cash.tier}}</div></td>
									<td><div class="td-content">{{cash.sales}}</div></td>
									<td><div class="td-content pricing"><span class="">{{cash.cash_bonus | currency}}</span></div></td>
									<td><div class="td-content"><span>{{cash.status}}</span></div></td>
									<!--										<td><div class="td-content">{{cash.status}}</div></td>-->
								</tr>
								</tbody>
							</table>
							<div class="row">
								<div class="col-md-12">
									<button class="btn btn-success mb-3 btn-lg pull-right btn-block" @click="payoutModal()">Withdraw</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="widget widget-table-one">
					<div class="widget-heading">
						<h5 class="">Transactions</h5>
					</div>
					<div class="widget-content">
						<div class="transactions-list" v-for="trans in getTransactions">
							<div class="t-item">
								<div class="t-company-name">
									<div class="t-icon">
										<div class="avatar avatar-xl">
											<span class="avatar-title rounded-circle">SP</span>
										</div>
									</div>
									<div class="t-name">
										<h4>{{trans.type}}</h4>
										<p class="meta-date">{{trans.created_at}}</p>
									</div>
								</div>
								<div class="t-rate rate-inc">
									<p><span>+{{trans.amount}}</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></p>
								</div>
							</div>
						</div>
					</div>
				</div>
		   </div>
	</div>
    </div>

<!--	<div v-else class="outer">-->
<!--		<div class="form-form">-->
<!--			<div class="form-form-wrap">-->
<!--				<div class="form-container">-->
<!--					<div class="form-content">-->
<!--						<div class="user-meta text-center">-->
<!--							<h4 class=""><strong>You Have only {{getPersonalSales.sales}} Personal Sales and {{getPersonalSales.booster}} Booster Packages</strong></h4>-->
<!--							<h4 ><strong>Get-->
<!--								<span v-if="getPersonalSales.sales == 0" class="text-dark">3</span>-->
<!--								<span v-if="getPersonalSales.sales == 1" class="text-dark">2</span>-->
<!--								<span v-if="getPersonalSales.sales == 2" class="text-dark">1</span>-->
<!--								more to start receiving cash bonuses<br>-->
<!--							</strong>-->
<!--							</h4>-->
<!--							<hr>-->
<!--							<input type="text" class=" text-center form-control input-lg" :value="fetchLink.link">-->

<!--							<br>-->
<!--							<small>Use your Link</small>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</div>-->
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import Loading from 'vue-loading-overlay';


export default {
	components: {
		Loading
	},
	data() {
		return {
			sales: 0,
			withdrawModal: false,
			isPayoneerActive: false,
			isPayPalActive: false,
			isBankActive: false,
			selected_payout: null,
			gateway_id: null,
			isLoading: false,
			fullPage: true,
			method: '',
			title: 'Wallet',
			paypal: {
				gateway_id: 1,
				email: ''
			},
			payoneer: {
				gateway_id: 2,
				email: ''
			},
			bank: {
				gateway_id: 3,
				account_number: '',
				account_routing_number: ''
			},
			message: '',
			payout: {

				errors: {
					mesg: '',
					error: false
				},

				success: {
					mesg: '',
					succuss: false
				}
			}
		}
	},
	computed: {

		...mapGetters([
		    'userCashBonues',
		    'userAccounts',
		    'walletSummary',
			'escrow',
			'getTransactions',
			'getPayoutAccount',
			'getPersonalSales',
			'fetchLink',
			'getUserStripeAccount',
			'transferwiseAccount'
		]),

		totalItem: function(){
			let sum = 0;
			for(let i = 0; i < this.escrow.length; i++){
				sum += parseFloat(this.escrow[i].cash_bonus);
			}
			return sum;
		},

		payoutTotal: function() {
			let sum = 0;
			for(let i = 0; i < this.getTransactions.length; i++){
				sum += parseFloat(this.getTransactions[i].amount);
			}
			return sum;
		},
		percentage() {
			return ((5/ 100) * this.totalItem).toFixed(2)
		},
		totalTransfer() {
			return this.totalItem
			// return this.totalItem - this.percentage
		}

	},
	created() {

		this.$store.dispatch('PERSONAL_SALES')
		this.init()

	},
	mounted() {
		this.$store.dispatch('GET_USER_PAYOUT_ACCOUNT')
	},
	methods: {

		init() {

			this.$store.dispatch('FETCH_CASH_BONUSES')
			this.$store.dispatch('FETCH_USER_ACCOUNTS')
			this.$store.dispatch('FETCH_WALLET_SUMMARY')
			this.$store.dispatch('GET_ESCROW')
			this.$store.dispatch('GET_TRANSACTIONS')
			this.$store.dispatch('GET_USER_PAYOUT_ACCOUNT')
			this.$store.dispatch('GET_AFFILIATE_LINK')
			this.$store.dispatch('FETCH_STRIPE_ACCOUNT')
			this.$store.dispatch('TRANSFERWISE_FETCH_ACCOUNT')

		},
		request() {

			this.isLoading = true;

			let transfer = {
				transfer: this.totalItem
			}

			this.$store.dispatch('TRANSFER_FUNDS', transfer)
				.then( response => {
					console.log(response)

					this.success.success = true
					this.payout.success.mesg = 'Withdraw was successful'
					this.isLoading = false
					this.init();
					this.withdrawModal = !this.withdrawModal
				})
			.catch( error => {
				console.log(error.response)

				this.isLoading = false
				this.withdrawModal = !this.withdrawModal
				this.init()
				this.payout.errors.error = true
				// if (error.data) {
				// 	this.payout.errors.mesg = 'Something wrong with your account information please contact administrator'
				// }

				console.log(error.data)
			})
		},

		paypalWithdrawal() {

			this.isLoading = true

			let self = this
			setTimeout(()=>{
				self.withDraw()
			},1000);

		},

		payouts(params) {


			if ( params == 'Stripe') {
				this.request()
			}
			if (params == "transferwise") {
				this.internationalPayout()
			}
		},

		internationalPayout() {
			this.isLoading = true;

			this.payout.errors.mesg = '';
			let transfer = {
				transfer: this.totalItem
			}

			this.$store.dispatch('TRANSFERWISE_PAYOUT', transfer)
					.then( response => {
						console.log(response)
						this.success.success = true
						this.payout.success.mesg = 'Withdraw was successful'
						this.isLoading = false
						this.init();
						this.withdrawModal = !this.withdrawModal
					})
					.catch( error => {

						this.isLoading = false
						this.withdrawModal = !this.withdrawModal
						this.init()
						this.payout.errors.error = true
						if (error.data) {
							this.payout.errors.mesg = error.data.message
						}

						console.log(error)
					})
		},

		withDraw() {
			this.$store.dispatch('WITH_DRAW_WITH_PAYPAL')
				.then( response => {
					this.isLoading = false
					this.init();
					this.message = 'Withdraw was successfull'
					this.withdrawModal = !this.withdrawModal
					$('.toast').toast('show');
					console.log(response)
				})
			.catch( error => {
				this.isLoading = false
				this.init();
				this.message = 'Somethine went wrong';
				$('.toast').toast('show');
				console.log(error)
			})
		},

		addAccount(){
			this.$router.push('/dashboard/settings')
		},

	   showConfirmPayout() {	

	   		this.$store.dispatch('CONFRIM_PAYMENT')
	   },
	   showModal() {
	      this.$refs['my-modal'].show()
	   },
	   hideModal() {
         this.$refs['my-modal'].hide()
       },

       payoutModal() {
		   this.withdrawModal = !this.withdrawModal
       },

       hidePayoutModal() {
       	  this.$refs['payout-modal'].hide()
       },
       selectPayment(value) {
       	
       	 if (value === 'paypal') {
       	 	this.isPayPalActive = true
       	 	this.isPayoneerActive = false
       	 	this.isBankActive = false
       	 	this.gateway_id = 1
       	 }

       	 if ( value === 'payoneer') {
       	 	this.isPayoneerActive = true
       	 	this.isPayPalActive = false
       	 	this.isBankActive = false
       	 	this.gateway_id = 2
       	 }

       	 if ( value === 'bank') {
       	 	this.isBankActive = true
       	 	this.isPayPalActive = false 
       	 	this.isPayoneerActive = false
       	 	this.gateway_id = 3
       	 }

       },
       makePayout() {
			var method = null
			if (this.isBankActive) {
				var method = 3
			}

			if (this.isPayPalActive) {
				var method = 2
			}

			if (this.Payoneer) {
				var method = 1
			}
		    this.$store.dispatch('MAKE_PAYOUT', method)
       },
	   saveAcount() {
		this.isloading = true
		if (this.method == 'paypal'){

			this.$store.dispatch('ADD_USER_ACCOUNT', this.paypal)
				.then( response => {
					this.isloading = false
					console.log(response)
					this.hideModal();
				})
				.catch( errpr => {
					this.isloading = false
					console.log(error.response)
					this.hideModal();
				})
		}

		if (this.method == 'payoneer') {

			this.$store.dispatch('ADD_USER_ACCOUNT', this.payoneer)
				.then( response => {

					this.isloading = false
					console.log(response)
					this.hideModal();
				})
				.catch( errpr => {
					this.isloading = false
					console.log(error.response)
					this.hideModal();
				})
		}

		if (this.method == 'bank') {

			this.$store.dispatch('ADD_USER_ACCOUNT', this.bank)
				.then( response => {
					this.isloading = false
					console.log(response)
					this.hideModal();
				})
				.catch( errpr => {
					this.isloading = false
					console.log(error.response)
					this.hideModal();
				})
		}

		this.isloading = false
		}
	}
}
</script>
<style lang="scss">
.custom-table {
	background: white;	
	border-left: 2px solid green;

		p {
		    padding-top: 15px;
		}
	  
}

.card_active {
	border: solid 1px #0984e3;
}
</style>