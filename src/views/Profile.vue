<template>
	<div id="content" class="main-content">

		<div class="layout-px-spacing">

		   <div class="row layout-spacing">

					<div class="col-md-6 layout-spacing">
						<form id="general-info" class="section general-info">
							<div class="info">
								<h6 class="">General Information</h6>
								<div class="row">
									<div class="col-lg-12 mx-auto">
										<div class="row">
											<div class="col-xl-12 col-lg-12 col-md-8 mt-md-0 mt-4">
												<div class="form">
													<div class="row">
														<div class="col-sm-6">
															<div class="form-group">
																<label for="fullName">First Name</label>
																<input type="text" class="form-control" id="fullName" placeholder="Full Name" :value="getLoginUser.first_name">
															</div>
														</div>
														<div class="col-sm-6">
															<label for="fullName">Last Name</label>
															<input type="text" class="form-control" placeholder="Last Name" :value="getLoginUser.last_name">
														</div>
													</div>
													<div class="form-group">
														<label for="company">Company</label>
														<input type="text" class="form-control"  placeholder="Company Name" :value="getLoginUser.company">
													</div>
													<div class="form-group">
														<label for="phone">Phone Number</label>
														<input type="text" class="form-control" placeholder="Phone Number" :value="getLoginUser.phone_number">
													</div>
													<div class="form-group">
														<button class="btn btn-success">Update</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div class="col-md-6 layout-spacing">
						<ValidationObserver ref="observer" v-slot="{ invalid }">
						<form id="contact" class="section contact">
							<div class="info">
								<h5 class="">Update Password</h5>
								<div class="row">
									<div class="col-md-12 mx-auto">
										<div class="row">
											<div class="alert alert-danger">
													{{ message }}
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<validation-provider rules="required" v-slot="{ errors }">
													<div class="form-group">
														<label class="text-dark" for="location">Current Password</label>
														<input type="password" v-model="password.current_password" class="form-control"  placeholder="Enter current password">
														<span class="help-block text-danger">{{errors[0]}}</span>
													</div>

												</validation-provider>
											</div>
											<div class="col-md-6">
												<validation-provider name="confirm" rules="required" v-slot="{ errors }">
												<div class="form-group">
													<label class="text-dark" for="address">New Password</label>
													<input type="password" v-model="password.new_password" class="form-control" id="address" placeholder="New Password" value="New York" >
													<span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
												</div>

												</validation-provider>
											</div>
											<div class="col-md-6">
												<validation-provider  rules="required|passwordconfirm:@confirm" v-slot="{ errors }">
												<div class="form-group">
													<label class="text-dark" for="location">Confrim Password</label>
													<input type="password" v-model="password.confirm_password "class="form-control" id="location" placeholder="Confrim password">
													<span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
												</div>

												</validation-provider>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12">
												<button :disabled="invalid" class="btn btn-primary pull-right" @click.prevent="changePassword()">Update Password </button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
						</ValidationObserver>
					</div>
			</div>
	   </div>
   </div>
</template>
<style lang="scss" scoped>
	@import '../cork/css/elements/alert.css';
</style>
<script>
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
import { mapGetters } from 'vuex';
import {required} from "vee-validate/dist/rules";

extend('passwordconfirm', {
	params: ['target'],
	validate(value, { target }) {
		return value === target;
	},
	message: 'Password does not match'
});

extend('required', {
	...required,
	message: 'This field is required'
});




export default {
	components: {
		ValidationProvider,
		ValidationObserver
	},
	data() {
		return {
			password: {
				current_password: '',
				new_password: '',
				confirm_password: ''
			},
			error: false,
			message: '',
			success: false
		}

	},
	created() {

	},
	computed: {
		...mapGetters([
			'getLoginUser'
		])
	},
	methods: {


		resetPsswordFeield() {

		},

		changePassword() {
			this.$store.dispatch('CHANGE_PASSWORD', this.password)
				.then( response => {

						console.log(response.data.message)
					 if ( response.data.status == false) {
					 	 this.error = true
						 this.message = response.data.message
					 }

					 if ( response.data.status  == true) {
					 	 this.error = false
						 this.success = true
						 this.message = response.data.message
					 }
				})
			.catch( error => {
				this.error = true
				console.log(error)
			})
		}
	}
}
</script>
