<template>
<div id="content" class="main-content">
	<div class="vld-parent">
		   <loading :active.sync="isLoading"
			  :can-cancel="true"
			  :is-full-page="fullPage">
		  </loading>
	</div>
	<notification-component :msg="message"></notification-component>

    <!-- Error Messages	-->
	<div class="col-md-12">
		<div v-if="payout.errors.error" class="alert alert-danger mb-4" role="alert">
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<i class="fa fa-times"></i>
			</button>
			<strong>Error Message!</strong> {{payout.errors.mesg}}</button>
		</div>
	</div>
    <!--End Error Message -->

	<div class="col-md-12">
		<div v-if="payout.success.succuss" class="alert alert-success mb-4" role="alert">
			<button type="button" class="close" data-dismiss="alert" aria-label="Close">
				<i class="fa fa-times"></i>
			</button>
			<strong>Error Message!</strong> {{payout.success.mesg}}</button>
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
					<!-- Images -->
					<p>Are you sure you want to request a payout?</p>
<!--				<button class="btn btn-primary"  @click="request()">Confirm Withdrawal</button>-->
					<button v-for="type in getPayoutAccount"
							 class="btn btn-success mt-3 btn-lg"
							 @click="payouts(type.type)">Confirm {{type.type}} Withdrawal</button>
					<hr>
				</div>
				<div class="modal-footer">
					<button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
				</div>
			</div>
		</div>
	</div>
	<div v-if="getPersonalSales > 2" class="layout-px-spacing">
		<div class="breadcrumb-five">
			<ul class="breadcrumb">
				<li class="mb-2"><a href="javscript:void(0);">Home</a>
				</li>
				<li class="active mb-2"><a href="javscript:void(0);">Wallet</a></li>
			</ul>
		</div>
		<div class="row">
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-card-four">
					<div class="widget-content">
						<div class="text-center mt-4">
							<h1 class="value text-success">{{totalItem | currency }}</h1>
							<h3>Wallet</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-card-four">
					<div class="widget-content">
						<div class="text-center mt-4">
							<h1 class="value text-success">{{ payoutTotal | currency }}</h1>
							<h3>Payout</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="card ">
					<div class="card-body">
						<button class="btn btn-primary btn-block mb-3 btn-lg"
								@click="addAccount()" >Payout Accounts</button>
						<button class="btn btn-primary btn-block mb-3 btn-lg"
								@click="payoutModal()" >Withdraw</button>
					</div>
				</div>
			</div>
		</div>

		<div class="row">

			<div class="col-md-6">
				<div class="widget widget-table-two">

					<div class="widget-heading">
						<h5 class="">Cash Bonuses</h5>
					</div>
					<div class="widget-content">
						<div class="table-responsive">
							<table class="table">
								<thead>
								<tr>
									<th><div class="th-content">Available On</div></th>
									<th><div class="th-content">Tier</div></th>
									<th><div class="th-content">Group Sales</div></th>
									<th><div class="th-content th-heading">Cash Bonus</div></th>
									<th><div class="th-content">Status</div></th>
								</tr>
								</thead>
								<tbody>
								<tr v-for="cash in escrow">
									<td><div class="td-content customer-name">{{cash.created_at}}</div></td>
									<td><div class="td-content product-brand">{{cash.tier}}</div></td>
									<td><div class="td-content">{{cash.sales}}</div></td>
									<td><div class="td-content pricing"><span class="">{{cash.cash_bonus | currency}}</span></div></td>
									<td><div class="td-content"><span class="badge outline-badge-primary">{{cash.status}}</span></div></td>
									<!--										<td><div class="td-content">{{cash.status}}</div></td>-->
								</tr>
								</tbody>
							</table>
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

	<div v-else class="outer">
		<div class="form-form">
			<div class="form-form-wrap">
				<div class="form-container">
					<div class="form-content">
						<div class="user-meta text-center">
							<h4 class=""><strong>You Have only {{getPersonalSales}} Personal Sales</strong></h4>
							<h4 ><strong>Get
								<span v-if="getPersonalSales == 0" class="text-dark">3</span>
								<span v-if="getPersonalSales == 1" class="text-dark">2</span>
								<span v-if="getPersonalSales == 2" class="text-dark">1</span>
								more to start receiving cash bonuses<br>
							</strong>
							</h4>
							<hr>
							<input type="text" class=" text-center form-control input-lg" :value="fetchLink.link">

							<br>
							<small>Use your Link</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
			'fetchLink'
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
					this.success.mesg = 'Withdraw was successful'
					this.isLoading = false
				})
			.catch( error => {
				this.isLoading = false
				$('#payoutModal').modal('hide')

				this.payout.errors.error = true
				if (error.data.message) {
					this.payout.errors.mesg = 'Something wrong with your account information please contact administrator'
				}

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
			if (params == 'Paypal') {
				this.paypalWithdrawal()
			}

			if ( params == 'Stripe') {
				this.request()
			}
			if (params == "MCC") {

			}
		},

		withDraw() {
			this.$store.dispatch('WITH_DRAW_WITH_PAYPAL')
				.then( response => {
					this.isLoading = false
					this.init();
					this.message = 'Withdraw was successfull'
					$('#payoutModal').modal('hide')
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
          $('#payoutModal').modal('show')
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