<template>
<div class="container">
		<!-- start: page -->
	<div role="main" class="main shop py-4">
		<div class="container">
			<div class="row">
				<div class="col-lg-9">
					<div class="accordion accordion-modern" id="accordion">
						<div class="card card-default" v-if="step == 1">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
										My Information
									</a>
								</h4>
							</div>
							<div id="collapseOne" class="collapse show">
								<div class="card-body">
									<form action="/" id="frmBillingAddress" method="post">
										<div class="form-row">
											<div class="form-group col-lg-12" :class="{ 'has-error': emailIsInvalid }">
												<label  class="font-weight-bold text-dark text-2">Email Address<span class="text-danger">* </span><small><i>Why we require?</i></small></label>
												<input v-model="form.email" type="text" value="" class="form-control">
												<span class="help-block text-danger">{{msg.email}}</span>
												<br>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col-lg-12">
												<label  class="font-weight-bold text-dark text-2">Refferal ID<span class="text-danger">*</span> <small><i>What is this?</i></small></label>
												<input disabled="disabled" v-model="form.referral_id" type="text" value="" class="form-control">
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
						<div class="card card-default" v-if="step == 1">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
										Billing Address
									</a>
								</h4>
							</div>
							<div id="collapseOne" class="collapse show">
								<div class="card-body">
									  <div class="form-row">
											<div class="form-group col-lg-6">
												<label class="font-weight-bold text-dark text-2">First Name <span class="text-danger">*</span></label>
												<input v-model="form.first_name" type="text" value="" class="form-control">
												<span class="help-block text-danger">{{msg.first_name}}</span>
											</div>
											<div class="form-group col-lg-6">
												<label class="font-weight-bold text-dark text-2">Last Name <span class="text-danger">*</span></label>
												<input v-model="form.last_name" type="text" value="" class="form-control">
												<span class="help-block text-danger">{{msg.last_name}}</span>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col">
												<label class="font-weight-bold text-dark text-2">Country  <span class="text-danger">*</span></label>
												<country-select class="form-control" v-model="form.country" :country="form.country" topCountry="US" />
												<span class="help-block text-danger">{{msg.country}}</span>
												<br>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col">
												<label class="font-weight-bold text-dark text-2">City <span class="text-danger">*</span></label>
												<region-select class="form-control" v-model="form.region" :country="form.country" :region="form.region" />
												<br>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col">
												<label class="font-weight-bold text-dark text-2">Address <span class="text-danger">*</span></label>
												<input v-model="form.address" type="text" value="" class="form-control">
											</div>
										</div>
										
										<div class="form-row">
											<div class="form-group col">
												<button @click="goToPayment()" class="btn btn-xl btn-light pr-4 pl-4 text-2 font-weight-semibold text-uppercase float-right mb-2">Continue to Payment</button>
											</div>
										</div>
								</div>
							</div>
						</div>
						<div class="card card-default" v-if="step == 2">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
										My Informationn
									</a>
								</h4>
							</div>
							<div class="card-body">
								<h6>Name: <strong>{{form.first_name}} {{form.last_name}} </strong></h6>
								<h6>Email:<strong> {{form.email}} </strong> </h6>
								<h6>Referral Id <strong> {{form.referral_id}}</strong></h6>
							</div>
							<div class="card-footer text-center">
								<button class="btn btn-link"> Edit </button>
							</div>
						</div>
						<div class="card card-default"  v-if="step == 2">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
										Review &amp; Payment
									</a>
								</h4>
							</div>
							<div id="collapseThree" class="collapse show">
								<div class="card-body">
									<table class="shop_table cart">
										<thead>
											<tr>
												<th class="product-thumbnail">
													&nbsp;
												</th>
												<th class="product-name">
													Product
												</th>
												<th class="product-price">
													Price
												</th>
												<th class="product-subtotal">
													Total
												</th>
											</tr>
										</thead>
										<tbody>
											
											<tr class="cart_table_item">
												<td class="product-thumbnail">
													<a href="shop-product-sidebar-left.html">
														<img width="100" height="100" alt="" class="img-fluid" src="img/products/product-grey-3.jpg">
													</a>
												</td>
												<td class="product-name">
													<img src="@/assets/ebook.png">
												</td>
												<td class="product-price">
													<span class="amount">$34.95</span>
												</td>
												<td class="product-subtotal">
													<span class="amount">$34.95</span>
												</td>
											</tr>
										</tbody>
									</table>
					
									<hr class="solid my-5">
					
									<h4 class="text-primary">Cart Totals</h4>
					
									<form action="/" id="frmPayment" method="post">
										<div class="form-row">
											<div class="form-group col">
												<div class="custom-control custom-checkbox">
													<input v-model="payment_methods" type="radio" value="card" class="custom-control-input" id="paymentcheque">
													<label   class="custom-control-label" for="paymentcheque">Card</label>
												</div>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col">
												<div class="custom-control custom-checkbox">
													<input v-model="payment_methods" type="radio" value="paypal" class="custom-control-input" id="paymentpaypal">
													<label  value="paypal" class="custom-control-label" for="paymentpaypal">Paypal</label>
												</div>
											</div>
										</div>
										
										<div class="form-row" v-if="payment_methods == 'card'" style="margin-top: 30px;" y>
											<div class="col-md-12">
												<label>Enter Credit Card Info</label>
											    <credit-card-field v-model="card"></credit-card-field>
										    </div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="card">
						<div class="card-body">
							<h4 class="text-primary">Cart Totals</h4>
							<table class="cart-totals">
								<tbody>
									<tr class="total">
										<th>
											<strong class="text-dark">Order Total</strong>
										</th>
										<td>
											<strong class="text-dark"><span class="amount">$34.95</span></strong>
										</td>
									</tr>
								</tbody>
							</table>
							 <PayPal
							 	 class="mt-5 mb-5 mb-lg-0"
							 	 v-if="payment_methods == 'paypal'"
			                     currency="USD"
			                     env="sandbox"
			                     :button-style="myStyle"
			                     amount="34.95"
			                     :client="paypal"
			                     :experience="experience"
			                     v-on:payment-authorized="paymentAuthorized"
			                     v-on:payment-completed="paymentCompleted"
			                     v-on:payment-cancelled="paymentCancelled">
			                  </PayPal>
							 <button v-else @click="order()" name="proceed" class="btn btn-primary btn-block mt-5 mb-5 mb-lg-0">
							 	Place Order
							 </button>
							 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End page -->
</div>
</template>
<script>
	

// import ValidationError from '@/components/ValidationError.vue'
import CreditCardField from 'vue-credit-card-field/src/Components/CreditCardField'
import PayPal from 'vue-paypal-checkout'

export default {
  components: {
     CreditCardField,
     PayPal
  },
  data() {
    return {
	    card: {},
	    step: 1,
	 	payment_methods: 'card',
	    continue: false,
	    loading: false,
	    form: {
	      	country: '',
	      	region: '',
	        name: null,
	        email: null,
	        first_name: null,
	        last_name: null,
	        password: null,
	        password_confimation: null,
	        referral_id: '',
	        address: ''
	      },
	      validationErrors: "",
	      errors: {
	        name: [],
	        email: [],
	        password: [],
	        password_confimation: [],
	      },
	      msg: {
	    	email: ''
	       },
	       paypal: {
		       sandbox: 'AbUMmsT4JJSCUg86MP4SV1-iA3jjCtPYpqkrV3xrU2ZrAZ17FkFHA_AuI2LVe2xhu-nYBZB5ezKN2Y9z',
		       production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
	       },
	      experience: {
	        input_fields: {
	          no_shipping: 1,
	        },
	      },
	      myStyle: {
	          label: 'checkout',
	          size:  'responsive',
	          shape: 'rect',
	          color: 'blue'
	      },
	    }
  },

  computed: {
  	emailIsInvalid() {
       return !this.form.email
    },
  },
  created() {
      if (this.$route.query.referral_id != undefined ) {
         this.form.referral_id = this.$route.query.referral_id
      }
  },  

  watch: {
  	'form.email': function ( value ) {
	    this.validateEmail(value)
  	}
  },

  methods: {
   goToPayment() {
   		if (this.form.email !== null && this.form.referral_id !== null && this.form.first_name !== null &&
   			this.form.last_name !== null && this.form.country !== '' && this.form.region !== null && 
   			this.form.address !== '') {
   			this.step = 2
	   	} else {
	   	}
   },
   validateEmail(value) {
	   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
		   this.msg.email = '';
	   } else if (value == ''){
	   	  this.msg.email = 'Email Address is require'
	   }else {
		   this.msg.email = 'Invalid Email Address';
	   } 
   },
   validRefferalCode(value) {
	
	this.$store.dispatch('FETCH_REFFERAL_CODE', value)
		.then ( response => {

		})
		.catch(error => {

		})
   },

   paymentAuthorized: function( data ) {

   },

   paymentCompleted: function (data) {
   		this.loading = true
   		console.log(this.form)

   		if (data['state'] == 'approved') {

   			let details = {

   			}

   			let formData = new FormData()
   			formData.append('payments', data)
   			formData.append('form', JSON.stringify(this.form))

   			console.log(formData)

   			let form = {
   				payments: data,
   				user: this.form
   			}

   			this.$store.dispatch('BUY_BOOK', form)
   				.then( response => {
   					console.log(response)
   					alert('working')
   					this.loading = false

   				}).catch( error => {
   				 	console.log(error.response)
   				})
   		}
   },

   paymentCancelled: function (data) {

   },
  }
}
</script>
