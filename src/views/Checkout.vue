<template>
	<div class="container" style="padding-top: 8.5%; background: #ececec;">

			<div class="">
				<div class="alert alert-danger" role="alert" v-if="msg.email">
					<strong><i class="fas fa-exclamation-triangle"></i>Oh snap!</strong> Please enter all require fields
					<ul>
						<li v-if="msg.email">{{msg.email}}</li>
						<li v-if="msg.first_name">{{msg.first_name}}</li>
						<li v-if="msg.last_name">{{msg.last_name}}</li>
						<li v-if="msg.country">{{msg.country}}</li>
						<li v-if="msg.region">{{msg.region}}</li>
						<li v-if="msg.address">{{msg.address}}</li>
					</ul>
				</div>
			</div>
		<div class="row">
			<terms-component></terms-component>
		</div>

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

							<div class="collapse show">
								<div class="card-body">
									<ValidationObserver ref="observer" v-slot="{ invalid }">
									<form>
									   <div class="form-row">
										   <div class="col-lg-6">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group" :class="{ 'has-danger': errors[0]}">
														<label class="font-weight-bold text-dark text-2" >First Name <span class="text-danger">*</span></label>
														<input v-model="form.first_name" type="text" value="" class="form-control">
														<span class="help-block text-danger" v-if="errors[0]">{{ errors[0] }}</span>
													</div>
												</validation-provider>
										   </div>

											<div class="col-lg-6">
												    <validation-provider rules="required" v-slot="{ errors }">
														<div class="form-group" :class="{ 'has-danger': errors[0]}">
															<label class="font-weight-bold text-dark text-2">Last Name <span class="text-danger">*</span></label>
															<input v-model="form.last_name" type="text" value="" class="form-control">
															<span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
														</div>
													</validation-provider>
											</div>
										</div>

										<div class="form-row mt-3">
											<div class="form-group col">
											    <label class="font-weight-bold text-dark text-2">Company <small>( optional )</small></label>
												<input v-model="form.company" type="text" value="" class="form-control">
											</div>
										</div>

										<div class="form-row mt-3">
											<div class="col-md-12 ">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group" :class="{ 'has-danger': errors[0]}">
														<label  class="font-weight-bold text-dark text-2">Phone Number <small class="text-danger">*</small></label>
														<vue-phone-number v-model="form.phone_number" />
														<span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
													</div>
												</validation-provider>
											</div>
										</div>
										<div class="form-row mt-3">

											<div class="col-md-6">
												<validation-provider name="confirm" rules="required|email" v-slot="{ errors }">
												<div class="form-group"  :class="{ 'has-danger': errors[0]}" >
													<label  class="font-weight-bold text-dark text-2">Email Address<span class="text-danger">* </span></label>
													<input placeholder="Email" v-model="form.email" type="email" class="form-control ">
													<span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
												</div>
												</validation-provider>
											</div>

											<div class="col-md-6">
											<validation-provider  rules="required|email|emailconfirm:@confirm" v-slot="{ errors }">
												<div class="form-group" >
													<label  class="font-weight-bold text-dark text-2">Confirm Email Address<span class="text-danger">* </span></label>
													<input  placeholder="Email" v-model="form.confirm_email" type="email" value="" class="require form-control ">
													<span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
												</div>
											</validation-provider>
											</div>
										</div>
										<div class="form-row">

										</div>
										<div class="form-row mt-3">
											<div class="col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group ">
														<label class="font-weight-bold text-dark text-2">Address <small>*</small></label>
														<input v-model="form.address" type="text" value="" class="form-control">
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>
												</validation-provider>
											</div>
											<div class="col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group ">
														<label class="font-weight-bold text-dark text-2">Address <small>optional</small></label>
														<input v-model="form.address1" type="text" value="" class="form-control">
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>
												</validation-provider>
											</div>
										</div>

										<div class="form-row mt-3">
											<div class="col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group">
														<label class="font-weight-bold text-dark text-2">Country  <span class="text-danger">*</span></label>
														<select name="" id="" class="form-control" v-model="form.country">
															<option  v-for="country in countries" :value="country.id">{{country.name}}</option>
														</select>
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>
												</validation-provider>
											</div>

											<div class="col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group">
														<label class="font-weight-bold text-dark text-2">State / Province <span class="text-danger">*</span></label>
														<select name="" id="" class="form-control" v-model="form.region">
															<option  v-for="state in states" :value="state.id">{{state.name}}</option>
														</select>
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>
												</validation-provider>
											</div>
										</div>
										<div class="form-row mt-3">
											<div class="col-md-6">
												<div class="form-group">
													<label class="font-weight-bold text-dark text-2"> City </label>
													<select  class="form-control" v-model="form.city">
														<option  v-for="city in cities" :value="city.id">{{city.name}}</option>
													</select>
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label class="font-weight-bold text-dark text-2"> ZIP </label>
													<input v-model="form.zip" type="text" value="" class="form-control">
													<span class="help-block text-danger">{{msg.zip}}</span>
												</div>
											</div>
										</div>
										<div class="form-row mt-3">
											<div class="col-md-6">
												<div class="form-group">
													<label  class="font-weight-bold text-dark text-2">Username<span class="text-danger">*</span></label>
													<input type="text" class="form-control" v-model="form.username" placeholder="Username">

												</div>
											</div>
											<div class=" col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
												<div class="form-group">
													<label  class="font-weight-bold text-dark text-2">Refferal ID<span class="text-danger">*</span> <small><i>What is this?</i></small></label>
													<input disabled="disabled" v-model="form.referral_id" type="text" value="" class="form-control">
													<span class="help-block text-danger">{{errors[0]}}</span>
												</div>
												</validation-provider>
											</div>
										</div>

										<div class="form-row mt-2">
											<div class="col-md-12">
												<div class="form-group">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" value="card" class="custom-control-input" v-model="form.recieve_email" >
														<label class="custom-control-label"><b>I agree to recieve emails from MCC</b></label>
													</div>
												</div>
											</div>
										</div>

										<div class="form-row mt-2">
											<div class="col-md-12">
												<validation-provider rules="required" v-slot="{ errors }">
												<div class="form-group">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" value="card" v-model="form.terms" class="custom-control-input">
														<label class="custom-control-label"><b>  I agree to the <a href="#" v-b-modal.modal-1>Terms and Conditions</a></b></label>
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>
												</div>
												</validation-provider>
											</div>
										</div>
<!--										<div class="form-row mt-2">-->
<!--											<validation-provider rules="required" v-slot="{ errors }">-->
<!--											<div class="form-group col">-->
<!--												<div class="custom-control custom-checkbox">-->
<!--													<input type="checkbox" value="terms" v-model="form.terms">-->
<!--													<label class=""> <b clss="ml-2">  I agree to the <a href="#" v-b-modal.modal-1>Terms and Condition</a></b></label>-->
<!--													<span class="help-block text-danger">{{errors[0]}}</span>-->
<!--												</div>-->
<!--												<br>-->
<!--											</div>-->
<!--											</validation-provider>-->
<!--										</div>-->

										<div class="form-row">
											<div class="form-group col">
												<button @click.prevent="invalidSubmit()" v-if="invalid" class="btn btn-xl btn-primary pr-4 pl-4 text-2 font-weight-semibold text-uppercase float-right mb-2"> Submit </button>
												<button @click.prevent="goToPayment()" v-else class="btn btn-xl btn-primary pr-4 pl-4 text-2 font-weight-semibold text-uppercase float-right mb-2">Continue to Payment</button>
											</div>
										</div>

									</form>
									</ValidationObserver>
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
								<button class="btn btn-link" @click="step = 1"> Edit </button>
							</div>
						</div>
						<div class="card card-default" v-if="step == 2">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
										Payment
									</a>
								</h4>
							</div>
							<div id="collapseThree" class="collapse show">
								<div class="card-body">
									<form action="/" id="frmPayment" method="post">
										<div class="form-row">
											<div class="form-group col">
												<div class="custom-control custom-checkbox">
													<input v-model="payment_methods" type="radio" value="card" class="custom-control-input" >
													<label   class="custom-control-label" for="paymentcheque">Card</label>
												</div>
											</div>
										</div>
										<div class="form-row">
											<div class="form-group col">
												<div class="custom-control custom-checkbox">
													<input v-model="payment_methods" type="radio" value="paypal" class="custom-control-input">
													<label  value="paypal" class="custom-control-label">Paypal</label>
												</div>
											</div>
										</div>

										<div class="form-row" v-if="payment_methods == 'card'" style="margin-top: 30px;" y>
											<div class="col-md-12">
												<label>Enter Credit Card Information</label>
												<card-payment :form="form"></card-payment>
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
							<h4 class="text-primary">Ebook</h4>
							<table class="cart-totals">

								<tbody>
									<tr>
										<td>
											<img src="@/assets/ebook.png">
										</td>
									</tr>
									<tr class="total mt-3">
										<th>
											<strong class="text-dark">Order Total</strong>
										</th>

										<td>
											<strong class="text-dark"><span class="amount">$34.95</span></strong>
										</td>
									</tr>
								</tbody>
							</table>
							<div v-if="step == 2">
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

							 <button v-else @click="submit()" name="proceed" class="btn btn-primary btn-block mt-5 mb-5 mb-lg-0">
							 	Place Order
							 </button>
							</div>
						</div>
					</div>
				</div>
			</div>
	</div>
</template>
<script>

import PayPal from 'vue-paypal-checkout'

import { StripeElements } from 'vue-stripe-checkout';
import  CardPayment from '../components/CardPayment.vue';

import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import TermsComponent from '../components/Terms.vue';
import { mapGetters } from 'vuex';

extend('required', {
	...required,
	message: 'This field is required'
});

extend('email', {
	...email,
	message: 'The E-mail field must be a valid email'
});

extend('emailconfirm', {
	params: ['target'],
	validate(value, { target }) {
		return value === target;
	},
	message: 'Email confirmation does not match'
});


export default {
	components: {
        PayPal,
	    StripeElements,
	    CardPayment,
		ValidationProvider,
		TermsComponent,
		ValidationObserver
	},
  data() {
    return {
	    card: {},
	    step: 1,
	 	payment_methods: 'card',
	    continue: false,
	    loading: false,
	    form: {
	      	country: null,
	      	region: null,
	        name: null,
	        email: null,
			terms: null,
	        first_name: null,
	        last_name: null,
	        phone_number: null,
	        referral_id: '',
	        address: null,
			address1: null,
	        city: null,
			zip: null
	      },
	      validationErrors: "",
	      errors: {
	        name: [],
	        email: [],
	        password: [],
	        password_confimation: [],
	      },

	       msg: {
	    	email: '',
	    	first_name: '',
	    	last_name: '',
	    	country: '',
	    	region: '',
	    	address: '',
	    	username: ''
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
		  loading: false,
	      email: false,
	      publishableKey: 'pk_test_Yfe8V58F3Kw8aZUWqLtXqNnl00Bv7eXD7P',
		  amount: 100,
		  token: null,
		  charge: null,
	      successUrl: 'https://magesticares.com',
	      cancelUrl: 'https://magesticares.com',
	    }
  },
	computed: {
		...mapGetters([
				'countries',
				'states',
				'cities'
		])
	},
	watch: {
		'form.country': function(value) {
			this.$store.dispatch('GET_STATES', value)
		},
		'form.region': function( value ) {
			this.$store.dispatch('GET_CITIES', value)
		}
	},
  created() {

      if (this.$route.query.referral_id != undefined ) {
         this.form.referral_id = this.$route.query.referral_id
      }

      this.$store.dispatch('GET_COUNTRIES')
  },

  methods: {

	  invalidSubmit() {
		  this.$refs.observer.validate().then(() => {
			  console.log(this.$refs.observer);
		  })
	  },

	  goToPayment() {
		  this.step = 2;
	  },

	  validRefferalCode(value) {
		this.$store.dispatch('FETCH_REFFERAL_CODE', value)
			.then ( response => {

			})
			.catch(error => {

			})
	   },

	   sendPaymentDetails( data ) {

		   this.loading = true
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
			   }).catch( error => {
			   console.log(error.response)
		   })

	   },

	   paymentAuthorized: function( data ) {
		   this.sendPaymentDetails( data )
	   },

	   paymentCompleted: function (data) {
			this.$router.push('/order-completed')
	   },

	   paymentCancelled: function (data) {

	   },

	  checkout () {
		  this.$refs.checkoutRef.redirectToCheckout();
	   },


	  submit () {
		  this.$refs.elementsRef.submit();
	  },

	  ensurePayment(data) {

		  this.loading = true
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
					  this.$router.push('/order-completed')
				  }).catch( error => {
			  console.log(error.response)
		  })
	  },

	  tokenCreated (token) {

		  this.token = token;
		  // for additional charge objects go to https://stripe.com/docs/api/charges/object
		  this.charge = {
			  tokenId: token.id,
			  amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
			  description: this.description // optional description that will show up on stripe when looking at payments
		  }
		  console.log(this.charge)
		  this.sendTokenToServer(this.charge);
	  },

	  sendTokenToServer (charge) {
		    this.$store.dispatch('MAKE_PAYMENT', charge)
		  	.then( response => {
		  		console.log(response)
				this.ensurePayment( response )
			})
		  	.catch( error => {
		  		console.log(error.response)
			})
	  }
   }
}
</script>
