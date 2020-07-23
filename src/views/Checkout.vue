<template>
	<div class="container" style="padding-top: 10.5%; background: #ececec;">
		<loading
				:active.sync="isLoading"
				:can-cancel="true"
				:on-cancel="onCancel"
				:is-full-page="fullPage">
		</loading>
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

			<div class="row mt-5">
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
													<div class="form-group ">
														<label class="font-weight-bold text-dark text-2">Address <small>optional</small></label>
														<input v-model="form.address1" type="text" value="" class="form-control">
													</div>
											</div>
										</div>

										<div class="form-row mt-3">
											<div class="col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group">
														<label class="font-weight-bold text-dark text-2">Country  <span class="text-danger">*</span></label>
														<country-select class="form-control" v-model="form.country" :country="country" topCountry="US" />
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>
												</validation-provider>
											</div>


											<div class="col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group">
														<label class="font-weight-bold text-dark text-2">State / Province <span class="text-danger">*</span></label>
														<region-select class="form-control" v-model="form.region" :country="form.country" :region="form.region" />
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>
												</validation-provider>
											</div>
										</div>
										<div class="form-row mt-3">
											<div class="col-md-6">
												<validation-provider rules="required" v-slot="{ errors }">
												<div class="form-group">
													 <label class="font-weight-bold text-dark text-2"> City </label>
													 <input type="text" class="form-control" v-model="form.city" placeholder="Enter City Name">
												    	<span class="help-block text-danger">{{errors[0]}}</span>
												</div>
												</validation-provider>
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
													<div class="">
														<input type="checkbox" value="1" class="" v-model="form.recieve_email" >
														<label class=""><b  class="ml-2">I agree to recieve emails from MCC</b></label>
													</div>
												</div>
											</div>
										</div>

										<div class="form-row mt-2">
											<div class="col-md-12">
												<validation-provider rules="required" v-slot="{ errors }">
												<div class="form-group">
													<div class="">
														<input type="checkbox" value="1" v-model="form.terms" class="">
														<label class=""> <b class="ml-2">I agree to the <a href="#" v-b-modal.modal-1>Terms and Conditions</a></b></label>
													</div>
													<span class="help-block text-danger">{{errors[0]}}</span>
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
								<button class="btn btn-success" @click="step = 1"> Edit </button>
							</div>
						</div>
						<div class="card card-default" v-if="step == 2">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
										Credit Card Checkout
									</a>
								</h4>
							</div>
							<div id="collapseThree" class="collapse show">
								<div class="card-body">
										<div class="form-row" >
											<div class="col-md-12">
												<card-payment :form="form"></card-payment>
									       </div>
										</div>
								</div>
							</div>
						</div>
						<div class="card card-default" v-if="step == 2">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
										Paypal Checkout
									</a>
								</h4>
							</div>
							<div id="collapseThr" class="collapse show">
								<div class="card-body">
									<div class="form-row">
										<div class="col-md-4">
											<label >Paypal Checkout </label>
										   <PayPal
												class="form-control"
												currency="USD"
												:button-style="myStyle"
												amount="34.95"
												:client="paypal"
												:experience="experience"
												v-on:payment-authorized="paymentAuthorized"
												v-on:payment-completed="paymentCompleted"
												v-on:payment-cancelled="paymentCancelled">
										</PayPal>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card card-default" v-if="step == 2">
							<div class="card-header">
								<h4 class="card-title m-0">
									<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
										Coupon Code
									</a>
								</h4>
							</div>
							<div id="collapseThr" class="collapse show">
								<div class="card-body">
									<div class="form-row">
										<label >Coupon Code</label>
										<input v-model="form.code" type="text" class="form-control">
									</div>
									<div class="form-row">
										<button class="btn btn-primary mt-3" @click="SubmitCoupon()">Submit</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-3">
					<div class="card">
						<div class="card-body">
							<h4 class="text-primary">Ebook</h4>
							 <img src="@/assets/ebook.png" class="img-fluid">
							<table class="cart-totals mt-2">

								<tbody>
									<tr>
										<td class="ce">

										</td>
									</tr>
									<tr class="total mt-3">
										<th>
											<strong class="text-dark">Order Total: </strong>
										</th>

										<td>
											<strong class="text-dark"><span class="amount">$34.95</span></strong>
										</td>
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

import PayPal from 'vue-paypal-checkout'
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

import { ModelSelect } from 'vue-search-select'
export default {
	components: {
		ModelSelect,
        PayPal,
	    CardPayment,
		ValidationProvider,
		TermsComponent,
		ValidationObserver
	},
  data() {
    return {
		fullpage: true,
		isLoading: false,
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
			zip: null,
			code: null
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
		       production: 'ASDLLb5slq4glmE0Xoa1ANXKNp9Z6JDsdBB1HnYwQNTOwK5s1lxreTz0wuo_gWyJCsvlmJpKJqrD1Jj9'
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
  created() {
      if (this.$route.query.referral_id != undefined ) {
         this.form.referral_id = this.$route.query.referral_id
      }
  },
  methods: {

	  invalidSubmit() {
		  this.$refs.observer.validate().then(() => {
			  console.log(this.$refs.observer);
		  })
	  },

	  SubmitCoupon() {
		  this.isLoading = true
		  this.form.payment_type = 'coupon';

		  let form = {
			  user: this.form
		  }

		  this.$store.dispatch('MAKE_PAYMENT', form)
				  .then( response => {
					  this.isLoading = false
					   this.$router.push('/order-completed')
					  console.log(response)
				  }).catch( error => {
			  this.isLoading = false
			  console.log(error.response)
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

	   paypalPayment(data) {

		   this.loading = true
		   let formData = new FormData()

		   formData.append('payments', data)
		   formData.append('form', JSON.stringify(this.form))
		   console.log(formData)

		   this.form.payment_type = 'paypal';

		   let form = {
			   payments: data,
			   user: this.form
		   }

		   this.$store.dispatch('MAKE_PAYMENT', form)
			   .then( response => {
				   console.log(response)
			   }).catch( error => {
			      console.log(error.response)
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

		   this.isLoading = true
		   this.$store.dispatch('BUY_BOOK', form)
			   .then( response => {

				   this.isLoading = false
				   console.log(response)

			   }).catch( error => {
			   console.log(error.response)
		   })

	   },

	   paymentAuthorized: function( data ) {
		   this.paypalPayment( data )
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
   }
}
</script>
