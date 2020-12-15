<template>
	<div class="container" style="padding-top: 8.5%">
	<section class="http-error" style="height: 70vh;">
		<div class="row justify-content-center py-3">
			<div class="col-8 text-center mt-3 pt-3">
				<div class="http-error-main">
					<h3 class="mb-0">Order Complete!</h3>
					<p class="text-6 my-4">"Please check your email (and Spam) for further instructions." <br>
					Contact <a href="">admin@majesticares.com </a>if assistance is needed.</p>
				</div>
				<a href="https://app.majesticares.com" class="btn btn-primary btn-rounded btn-xl font-weight-semibold text-2 px-4 py-3 mt-1 mb-4"><i class="fas fa-angle-left pr-3"></i>PROCEED TO LOGIN</a>
			</div>
		</div>
	</section>
</div>
</template>
<script>
	export default {
		data() {
			return {
				title: 'Order Completed'
			}
		},
		created() {
			var id = this.$route.params.id

			if (id == '') {
				this.$route.push('/')
			}

			// this.$store.dispatch('ORDER_COMPLETED', id)
		},
		methods:{
			goToHome() {
				this.$route.push('/login')
			}
		}
	}
</script>