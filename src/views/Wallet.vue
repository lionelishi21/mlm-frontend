<template>
<div id="content" class="main-content">
	<div class="vld-parent">
		<loading :active.sync="isLoading"
				 :can-cancel="true"
				 :on-cancel="onCancel"
				 :is-full-page="fullPage"></loading>
	</div>
	<div class="layout-px-spacing">
		<div class="col-lg-12">
			<div class="widget-content widget-content-area">
				<div class="table-responsive mb-4">
					<table id="style-3" class="table style-3 table-hover">
						<thead>
						<tr>
							<th>Avilable On</th>
<!--							<th>Name</th>-->
<!--							<th>Status</th>-->
							<th>Tier</th>
							<th>Pay it Forwad</th>
							<th>Group Sales</th>
							<th>Amount Recieved</th>
							<th>Escrow</th>
							<th>Cash Bonus</th>
							<th>Actions</th>
						</tr>
						</thead>

						<tbody>
						<tr class="custom-table"  v-for="cash in escrow.escrow">
							<td><p class="text-4"><b>{{cash.created_at}}</b></p></td>
<!--							<td><p class="text-4"><b>{{cash.user.first_name}} {{cash.user.last_name}}</b></p></td>-->
<!--							<td><p class="text-4"><span class="badge badge-primary text-4"><strong>{{cash.status}}</strong></span></p></td>-->



							<td><p class="text-4"><b>{{cash.tier}}</b></p></td>
							<td><p class="text-4"><b>{{cash.pf}}</b></p></td>
							<td><p class="text-4"><b>{{cash.sales}}</b></p></td>
							<td><p class="text-4"><b>{{cash.amount_recieved | currency}}</b></p></td>
							<td><p class="text-4"><b>{{cash.escrow | currency}}</b></p></td>
							<td><p class="text-4"><b>{{cash.cash_bonus | currency}}</b></p></td>
							<td><p class="text-4"><button @click="payoutModal(cash.id)" class="btn btn-primary"><i class="fa fa-dollar-sign"></i></button></p></td>
						</tr>
						</tbody>
					</table>
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
		])	
	},
	created() {
		this.$store.dispatch('FETCH_CASH_BONUSES')
		this.$store.dispatch('FETCH_USER_ACCOUNTS')
		this.$store.dispatch('FETCH_WALLET_SUMMARY')
		this.$store.dispatch('GET_ESCROW')
	},
	methods: {
	   showConfirmPayout() {	

	   		this.$store.dispatch('CONFRIM_PAYMENT')
	   },
	   showModal() {
	      this.$refs['my-modal'].show()
	   },
	   hideModal() {
         this.$refs['my-modal'].hide()
       },
       payoutModal(id) {
          this.selected_payout = id
          this.$refs['payout-modal'].show()
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