<template>
<section role="main" class="content-body" style="background: #ececec; min-height: 90vh">
<div class="row">
	<div class="col-md-4">
		<section class="card card-featured-left card-featured-primary mb-4">
			<div class="card-body">
				<div class="widget-summary">
					<div class="widget-summary-col widget-summary-col-icon">
						<div class="summary-icon bg-success">
								<i class="fas fa-dollar-sign"></i>
						</div>
					</div>
					<div class="widget-summary-col">
						<div class="summary">
							<h4><b>Available Cash Bonus</b></h4>
							<div class="info">
								<strong class="amount">${{walletSummary.cashbonus}}</strong>
								<span class="text-primary"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>

	<div class="col-md-4">
		<section class="card card-featured-left card-featured-primary mb-4">
			<div class="card-body">
				<div class="widget-summary">
					<div class="widget-summary-col widget-summary-col-icon">
						<div class="summary-icon bg-success">
								<i class="fas fa-dollar-sign"></i>
						</div>
					</div>
					<div class="widget-summary-col">
						<div class="summary">
							<h4><b>Total Payouts Recieved</b></h4>
							<div class="info">
								<strong class="amount">${{walletSummary.payout}}</strong>
								<span class="text-primary"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<!-- <div class="col-md-4">
		<section class="card card-featured-left card-featured-primary mb-4">
			<div class="card-body">
				<div class="widget-summary">
					<div class="widget-summary-col widget-summary-col-icon">
						<div class="summary-icon bg-primary">
								<i class="fas fa-dollar-sign"></i>
						</div>
					</div>
					<div class="widget-summary-col">
						<div class="summary">
							<h4 class="title">Request Funds</h4>
							<div class="info">
								<strong class="amount">$1,000.00</strong><br>
								<span class="text-primary"><a href="">Click Here</a></span>
							</div>
						</div>
						<div class="summary-footer">
							<a class="text-muted text-uppercase">(Payoneer)</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div> -->
</div>
<div class="row">
	<div class="col-md-3">
	    <h4>Your Payment Account(s)</h4>	
   </div>
   <div class="col-md-9">
   		 <b-button class="btn btn-primary pull-left" @click="showModal()">Add Account</b-button>
   		 <button class="btn btn-default pull-left ml-1">Go to Payouts</button>
   </div>
 </div>
<div class="row">
		<div class="col-md-3" v-for="account in userAccounts">
				<section class="card card-featured-left card-featured-primary mb-4">
					<div class="card-body">
						<div class="widget-summary">
							<div class="widget-summary-col">
								<div class="summary">
									<h4 class="title" >{{account.account.name}}</h4>
									<div class="info" v-if="account.account_routing_number === null">
										<strong class="amount"><small>{{account.email}}</small></strong>
										<strong class="amount"><small>{{account.account_routing_number}}</small></strong>
									</div>

									<div class="info" v-else>
										<small>Routing Number: {{account.account_routing_number}}</small><br>
										<strong class="amount"><small>Account #: {{account.account_number}}</small></strong>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
		</div>
	</div>
</div>
<div class="row">
	  <div>
		  <b-modal ref="my-modal"  hide-footer title="My Account" ok-only centered>
		  	   <div class="row">
		  	   		<div class="col-md-12">
		  	   			<label>Select Account</label>
		  	   			<select class="form-control" v-model="method">
		  	   				<option value="">Select Payment Method</option>
		  	   				<option value="paypal">PayPal</option>
		  	   				<option value="payoneer">Payoneer</option>
		  	   				<option value="bank">Bank Deposit</option>
		  	   			</select>
		  	   		</div>
		       </div>
		       <div class="row mt-2" v-if="method == 'paypal'">
		       	  <div class="col-md-12">
		       		<div class="form-group">
		       	  	    <input type="email" placeholder="Enter paypal email" v-model="paypal.email" class="form-control" name="">
		         	</div>
		         	<div class="form-group pull-right">
		         		    <button @click="hideModal()" class="btn btn-default">Cancel</button>
		         			<button @click="saveAcount()" class="btn btn-primary">Save</button>
		         	</div>
		         </div>
		       </div>
		       <div class="row mt-2" v-if="method == 'payoneer'">
		       	  <div class="col-md-12">
		       		<div class="form-group">
		       	  	    <input type="email" placeholder="Enter payoneer email" v-model="payoneer.email" class="form-control" name="">
		         	</div>
		         	<div class="form-group pull-right">
		         		<button @click="hideModal()" class="btn btn-default">Cancel</button>
		         			<button @click="saveAcount()" class="btn btn-primary">Save</button>
		         	</div>
		         </div>
		       </div>
		        <div class="row mt-2" v-if="method == 'bank'">
		       	  <div class="col-md-12">
		       		<div class="form-group">

		       		    <label>Bank Transfer:</label>
		       		    <input type="text" class="form-control" v-model="bank.account_number" placeholder="Account Number">
		       		    <input type="text" class="form-control" v-model="bank.account_routing_number" placeholder="Routing Number" name="">
		         	</div>
		         	<div class="form-group pull-right">
		         			<button @click="hideModal()" class="btn btn-default">Cancel</button>
		         			<button @click="saveAcount()" class="btn btn-primary">Save</button>
		         	</div>
		         </div>
		       </div>
		  </b-modal>

		  <!-- Payout Modal -->
		  <b-modal ref="payout-modal" hide-footer size="lg" title="Payout" ok-only centered>
		  	<div class="content">
		  	  <div class="row" >
		  	  		<div class="col-md-3"></div>
		  	  		<div class="col-md-2">
		  	  			<section class="card" :class="{ card_active: isPayoneerActive }" @click="selectPayment('payoneer')" style="background: #ececec;"  >
							<div class="card-body m-0 " style="background: #ececec;">
								<img  src="@/assets/img/payoneer.png" width="100%">
							</div>
						</section>
		  	  		</div>

		  	  		<div class="col-md-2">
		  	  			<section class="card" @click="selectPayment('paypal')" style="background: #ececec;" 
		  	  			     :class="{ card_active: isPayPalActive }">
							<div class="card-body m-0 " style="background: #ececec;">
								<img src="@/assets/img/paypal.png" width="100%">
							</div>
						</section>
		  	  		</div>

		  	  	    <div class="col-md-2">
		  	  			<section class="card" @click="selectPayment('bank')" style="background: #ececec;" :class="{ card_active: isBankActive }">
							<div class="card-body m-0 " style="background: #ececec;">
								<img src="@/assets/img/bank.png" width="100%">
							</div>
						</section>
		  	  		</div>
		  	  		<div class="col-md-3"></div>
		  	  </div>

		  	  <div class="row mt-4">
		  	  	<div class="col-md-12 text-center">
		  	  		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		  	  		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		  	  		quis nostrud exercitation ullamco <br></p>
		  	  		<p class="mt-2">
		  	  			<h4>Account Information</h4>
		  	  			<p v-for="account in userAccounts">
		  	  				<span v-if="account.gateway_id === gateway_id">
		  	  					{{account.email}}
		  	  				</span>
		  	  			</p>
		  	  		</p>
		  	  		<button class=" btn btn-primary mt-4 btn-disabled" :disabled="showConfirmPayout()">Confirm Payout</button>
		  	  	</div>
		  	  </div>
		  	</div>
		  </b-modal>
      </div>
</div>

<div class="row">
	 <div class="col-md-12">
	 	
	 	<section>
			<table class="table table-responsive-md mb-0" style="border-top: 0px">
				<thead style="padding-left: 10px;">
					<tr class="text-5">
						<th>Avilable On</th>
						<th>Name</th>
						<th>Status</th>
						<th>Total</th>
						<th>Actions</th>
					</tr>
				</thead>
				   <tbody >
						 <tr class="custom-table"  v-for="cash in userCashBonues">
							<td><p class="text-4"><b>{{cash.created_at}}</b></p></td>
							<td><p class="text-4"><b>{{cash.user.first_name}} {{cash.user.last_name}}</b></p></td>
							<td><p class="text-4"><span class="badge badge-primary text-4"><strong>{{cash.status}}</strong></span></p></td>
							<td><p class="text-4"><b>{{cash.cash_bonus_amount | currency}}</b></p></td>
							<td><p class="text-4"><button @click="payoutModal(cash.id)" class="btn btn-primary"><i class="fa fa-dollar-sign"></i></button></p></td>
						</tr>
					</tbody>
			  </table>
		</section>
		<!-- <section class="card card-featured-left card-featured-success">
			<div class="card-body">
				<table class="table table-responsive-md mb-0">
					<tbody>
						 <tr v-for="cash in userCashBonues">
							<td>{{cash.created_at}}</td>
							<td>{{cash.user.first_name}} {{cash.user.last_name}}</td>
							<td>{{cash.status}}</td>
							<td>{{cash.cash_bonus_amount}}</td>
							<td>Options</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section> -->
	 </div>
</div>
</section>
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
		    'walletSummary'
		])	
	},
	created() {
		this.$store.dispatch('FETCH_CASH_BONUSES')
		this.$store.dispatch('FETCH_USER_ACCOUNTS')
		this.$store.dispatch('FETCH_WALLET_SUMMARY')
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