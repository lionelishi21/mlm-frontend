<template>

	<div id="content" class="main-content">
		<div class="row">
			<pre>{{getAdminDashboard}}</pre>
		</div>
		<div class="row ">
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-five">
					<div class="widget-content">

						<div class="header">
							<div class="header-body">
								<h6>Total eBook Amount Purchase</h6>
							</div>
						</div>

						<div class="w-content">
							<div class="text-center">
								<h1>${{getAdminDashboard.total_ebook_purchase}} USD</h1>
								<h2 class="text-success text-6" ><strong>Sales</strong></h2>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-five">
					<div class="widget-content">

						<div class="header">
							<div class="header-body">
								<h6>Available Payout</h6>
							</div>
						</div>

						<div class="w-content">
							<div class="text-center">
								<h1>${{getAdminDashboard.available_payouts}} USD</h1>
								<h2 class="text-success text-6" ><strong>Payouts available</strong></h2>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-five">
					<div class="widget-content">

						<div class="header">
							<div class="header-body">
								<h6>Total Payout</h6>
							</div>
						</div>

						<div class="w-content">
							<div class="text-center">
								<h1>${{getAdminDashboard.payouts}} USD</h1>
								<h2 class="text-success text-6" ><strong>Payouts</strong></h2>
							</div>
						</div>

					</div>
				</div>
			</div>
	</div>

		<div class="row">
			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-five">
					<div class="widget-content">

						<div class="header">
							<div class="header-body">
								<h6>All Affiliates</h6>
							</div>
						</div>

						<div class="w-content">
							<div class="text-center">
								<h1> {{getAdminDashboard.all_affiliates}}</h1>
								<h2 class="text-success text-6" ><strong>All Affiliates</strong></h2>
							</div>
						</div>

					</div>
				</div>
			</div>


			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-five">
					<div class="widget-content">

						<div class="header">
							<div class="header-body">
								<h6>Inactive</h6>
							</div>
						</div>

						<div class="w-content">
							<div class="text-center">
								<h1> {{getAdminDashboard.inactive_affiliate}}</h1>
								<h2 class="text-success text-6" ><strong>Inactive Affiliates</strong></h2>
							</div>
						</div>

					</div>
				</div>
			</div>

			<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
				<div class="widget widget-five">
					<div class="widget-content">

						<div class="header">
							<div class="header-body">
								<h6>Active</h6>
							</div>
						</div>

						<div class="w-content">
							<div class="text-center">
								<h1> {{getAdminDashboard.active_affiliate}}</h1>
								<h2 class="text-success text-6" ><strong>Active Affiliates</strong></h2>
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

  name: 'AdminDashboard',

  data () {
    return {

    }
  },
  computed: {
  	 ...mapGetters([
  	 	'getAdminDashboard'
  	 ])
  },
  created() {
  	this.$store.dispatch('ADMIN_DASHBOARD')
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>