<template>
<div class="container">
	<section  style="padding-top: 20%;">
		<div class="row">
			<div class="col-md-3"></div>
			<div class="col-md-6">
					<a href="/" class="logos">
				    	<img src="@/assets/logo.png" height="150" alt="MCC" />
				    </a>
					<div class="card-body" style="margin-top: 10%">
					
					        <div class="alert alert-success" role="alert" v-show="successMsg">
					          <h4 class="alert-heading">Well done!</h4>
					          <p class="alert-text">Thank you for registering.</p>
					          <p class="alert-text mb-0">Check your email for verification.</p>
					        </div>
					        <!-- Form Group -->
					<form @submit.prevent="login(user)">
						<legend><small>MCC Back Office Login Information</small></legend>
						<div class="form-group mb-3">
						</div>
						<div class="form-group mb-3">
							<label>Email Address</label>
							<div class="input-group">
								<input v-model="user.email" name="username" type="text" class="form-control form-control-lg" />
								<span class="input-group-append">
									<span class="input-group-text">
										<i class="fas fa-user"></i>
									</span>
								</span>
							</div>
						</div>

						<div class="form-group mb-3">
							<div class="clearfix">
								<label class="float-left">Password</label>
								<a href="#" class="float-right">Lost Password?</a>
							</div>
							<div class="input-group">
								<input v-model="user.password" name="pwd" type="password" class="form-control form-control-lg" />
								<span class="input-group-append">
									<span class="input-group-text">
										<i class="fas fa-lock"></i>
									</span>
								</span>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-8">
								<div class="checkbox-custom checkbox-default">
									<input value="true" v-model="user.rememberme" id="RememberMe" name="rememberme" type="checkbox"/>
									<label for="RememberMe">Remember Me</label>
								</div>
							</div>
							<div class="col-sm-4 text-right">
								<button type="submit" class="btn btn-primary mt-2">Sign In</button>
							</div>
						</div>

						<p class="text-center">Don't have an account yet? <a href="#">Sign Up!</a></p>
					</form>
				</div>
			</div>
			<div class="col-md-3"></div>
		</div>
	</section>
</div>
</template>
<script>
export default {

	data() {
		return {
			title: 'Login Page',
			loading: false,
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
		login(user) {
			this.loading = true

			this.is_valid = '',
			this.error.message = ''


			this.$store.dispatch('login', user)
				.then( response => {
					console.log( response )
					console.log('logging user in...')

					this.$store.dispatch('FETCH_USER')
						.then ( resp => {
							this.loading = false
							this.$router.push('/dashboard')
						})
						.catch(err => {
							this.loading = false
							console.log( err.response )
						})
				}).catch ( ( error ) => {
					console.log(error.response)
					this.is_valid = 'is-invalid'
					this.error.message = error.response.data
					this.loading = false
				})
		}	
	}
}
</script>
<style lang="scss" scoped>
.logos {
	padding: 9%;
	margin: 100px;
}
</style>