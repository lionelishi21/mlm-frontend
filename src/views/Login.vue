<template>
	<div class="form-container outer">

		<div class="form-form">
			<div class="form-form-wrap">
				<div class="form-container" >
					<div class="form-content">
						<img class="logos mb-5" src="@/assets/logo.png" height="100" alt="MCC" />

						<h1 class="">Sign In</h1>
						<p class="">Log in to your backoffice to continue.</p>

						<ValidationObserver ref="observer" v-slot="{ invalid }">
							<form class="text-left" @submit.prevent="login(user)">
								<div class="form">

									<div class="alert alert-danger" role="alert" v-if="error.message">
										<h4 class="alert-heading">Error!</h4>
										<p class="text-white">{{error.message}}</p>
									</div>

									<validation-provider rules="required|email" v-slot="{ errors }">
										<div id="username-field" class="field-wrapper input">
											<label for="username">Email Address</label>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
											<input id="username" v-model="user.email" type="text" class="form-control" placeholder="e.g johndoe@email.com">
											<span class="help-block text-danger">{{errors[0]}}</span>
										</div>
									</validation-provider>

									<validation-provider rules="required" v-slot="{ errors }">
										<div id="password-field" class="field-wrapper input mb-2">
											<div class="d-flex justify-content-between">
												<label for="password">PASSWORD</label>
												<a @click="goToForgotPassword()" href="#" class="forgot-pass-link">Forgot Password?</a>
											</div>
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
											<input v-model="user.password" type="password" class="form-control" placeholder="Password">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="toggle-password" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
											<span class="help-block text-danger">{{errors[0]}}</span>
										</div>
									</validation-provider>
									<div class="d-sm-flex justify-content-between">
										<div class="field-wrapper">
											<button :disabled="invalid" type="submit" class="btn btn-primary" value="">Log In</button>
										</div>
									</div>
								</div>
							</form>
						</ValidationObserver>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Loading from 'vue-loading-overlay';
	import 'vue-loading-overlay/dist/vue-loading.css';
	import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
	import { required, email } from 'vee-validate/dist/rules';

	extend('required', {
		...required,
		message: 'This field is required'
	});

	extend('email', {
		...email,
		message: 'The E-mail field must be a valid email'
	});


	export default {
		components: {
			Loading,
			ValidationObserver,
			ValidationProvider
		},
		data() {
			return {
				title: 'Login Page',
				isLoading: false,
				fullPage: true,
				user: {
					email: '',
					password: '',
					rememberme: false,
				},
				successMsg: false,
				validationErr: '',
				is_valid: '',
				error: {
					message: ''
				}
			}
		},

		created() {
			this.successMsg = false
			if ( this.$route.query.user != undefined ) {
				this.successMsg = true
			}
		},
		mounted() {

		},
		methods: {
			back() {
				this.$router.push('/')
			},
			goToForgotPassword(){
				this.$router.push('/auth/password-reset')
			},
			login(user) {
				this.isLoading = true

				this.is_valid = '',
						this.error.message = ''


				this.$store.dispatch('login', user)
						.then( response => {
							console.log( response )
							console.log('logging user in...')

							this.$store.dispatch('FETCH_USER')
									.then ( resp => {
										this.isLoading = false
										this.$router.push('/dashboard')
									})
									.catch(err => {
										this.isLoading = false
										console.log( err.response )
									})

						}).catch ( ( error ) => {
					this.isLoading = false
					console.log(error.response)
					this.is_valid = 'is-invalid'
					this.error.message = error.response.data
					this.loading = false
				})
			}
		}
	}
</script>
<style scoped>

</style>