<template>
<div id="content" class="main-content">
	<div class="vld-parent">
<!--		<loading :active.sync="isLoading"-->
<!--				 :can-cancel="true"-->
<!--				 :on-cancel="onCancel"-->
<!--				 :is-full-page="fullPage"></loading>-->
	</div>

	<div class="modal fade" id="payoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<i class="fa fa-times"></i>
					</button>
				</div>
				<div class="modal-body text-center">
					<!-- Images -->
					<p>Are you sure you want to request a payout?</p>
					<button class="btn btn-primary" @click="request()">Confirm Payout</button>
					<hr>
					<small>Connect Account: </small>
				</div>
				<div class="modal-footer">
					<button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
				</div>
			</div>
		</div>
	</div>

	<div class="layout-px-spacing">
		<div class="breadcrumb-five">
			<ul class="breadcrumb">
				<li class="mb-2"><a href="javscript:void(0);">Home</a>
				</li>
				<li class="active mb-2"><a href="javscript:void(0);">Wallet</a></li>
			</ul>
		</div>
		<div class="row mt-5">
			<div class="col-md-10"></div>
			<div class="col-md-2">

			</div>
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
							<h1 class="value text-success">$0.00</h1>
							<h3>Payout</h3>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="card ">
					<div class="card-body">
						<div class="text-center mt-4">
							<p class="value text-success">Select Account you want to receive your cash bonus with</p>
						</div>
						<button class="btn btn-primary mb-3 btn-lg"
								@click="addAccount()" >Payout Account</button>

						<button class="btn btn-primary mb-3 btn-lg"
								@click="payoutModal()" >Withdraw</button>
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
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
		</div>
	</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			isPayoneerActive: false,
			isPayPalActive: false,
			isBankActive: false,
			selected_payout: null,
			gateway_id: null,
			isloading: false,
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
			}
		}
	},
	computed: {
		...mapGetters([
		    'userCashBonues',
		    'userAccounts',
		    'walletSummary',
			'escrow'
		]),
		totalItem: function(){
			let sum = 0;
			for(let i = 0; i < this.escrow.length; i++){
				sum += parseFloat(this.escrow[i].cash_bonus);
			}
			return sum;
		}
	},
	created() {
		this.$store.dispatch('FETCH_CASH_BONUSES')
		this.$store.dispatch('FETCH_USER_ACCOUNTS')
		this.$store.dispatch('FETCH_WALLET_SUMMARY')
		this.$store.dispatch('GET_ESCROW')
	},
	methods: {

		request() {

			let transfer = {
				transfer: this.totalItem
			}

			this.$store.dispatch('TRANSFER_FUNDS',transfer)
				.then( response => {
					console.log(response)
				})
			.catch( error => {
				console.log(error.response)
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