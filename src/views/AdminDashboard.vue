<template>
	<div id="content" class="main-content">
		<div class="vld-parent">
			<loading :active.sync="isLoading"
					 :can-cancel="true"
					 :on-cancel="onCancel"
					 :is-full-page="fullPage"></loading>
		</div>

		<div class="row">
			<div class="col-md-8">
					<div class="row">
						<div class="col-md-4">
						   <section class="card">
								<div class="card-body">
									<div class="small-chart float-right" id="sparklineBarDash"></div>
									<div class="h4 font-weight-bold mb-0"> ${{getAdminDashboard.total_ebook_purchase}} USD</div>
									<p class="text-3 text-muted mb-0">Total eBook Amount Purchase</p>
								</div>
							</section>
						</div>
						<div class="col-md-4">
							 <section class="card">
								<div class="card-body">
									<div class="small-chart float-right" id="sparklineBarDash"></div>
									<div class="h4 font-weight-bold mb-0">${{getAdminDashboard.available_payouts}} USD</div>
									<p class="text-3 text-muted mb-0">Available Payouts</p>
								</div>
							</section>
						</div>

					    <div class="col-md-4">
							 <section class="card">
								<div class="card-body">
									<div class="small-chart float-right" id="sparklineBarDash"></div>
									<div class="h4 font-weight-bold mb-0"> {{getAdminDashboard.payouts}}</div>
									<p class="text-3 text-muted mb-0">Total Payouts</p>
								</div>
							</section>
						</div>
					
			        </div>
			        <div class="row mt-3">
			        	 <div class="col-md-4">
							 <section class="card">
								<div class="card-body">
									<div class="small-chart float-right" id="sparklineBarDash"></div>
									<div class="h4 font-weight-bold mb-0"> {{getAdminDashboard.all_affiliates}}</div>
									<p class="text-3 text-muted mb-0">All Affliliates</p>
								</div>
							</section>
						</div>
						<div class="col-md-4">
							<section class="card">
								<div class="card-body">
									<div class="small-chart float-right" id="sparklineBarDash"></div>
									<div class="h4 font-weight-bold mb-0"> {{getAdminDashboard.inactive_affiliate}}</div>
									<p class="text-3 text-muted mb-0">Inactive Affiliates</p>
								</div>
							</section>
					     </div>
					   	<div class="col-md-4">
							<section class="card">
								<div class="card-body">
									<div class="small-chart float-right" id="sparklineBarDash"></div>
									<div class="h4 font-weight-bold mb-0"> {{getAdminDashboard.active_affiliate}}</div>
									<p class="text-3 text-muted mb-0">Active Affliates</p>
								</div>
							</section>
					   </div>
			        </div>
			</div>
			<div class="col-md-4">
				<div class="row">
						<div class="col-md-12">
							<section class="card mb-4">
								<header class="card-header card-header-transparent">
									<h2 class="card-title">Activity Stream</h2>

									</header>
								<div class="card-body">
									Content.
								</div>
							</section>
						</div>
					</div>
		    	</div>
		</div>
		

		<div class="row">
		
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