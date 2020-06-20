<template>
<section role="main" class="content-body">
		<header class="page-header">
			<h2>Welcome Lionel to your MCC Home Office</h2>
		
			<div class="right-wrapper text-right">
				<ol class="breadcrumbs">
					<li>
						<a href="index.html">
							<i class="fas fa-home"></i>
						</a>
					</li>
					<li><span>Dashboard</span></li>
				</ol>
				<a class="sidebar-right-toggle" data-open="sidebar-right"><i class="fas fa-chevron-left"></i></a>
			</div>
		</header>
		<div class="row">
			<div class="col-md-12">
               
			    <h4>Your Affilate ID is: <strong> {{getUserDetails.affiliate_id.affiliate_id}}</strong></h4>
			    <h6> Affiliate Link: <a :href="'http://majesticares.com/checkout?referral_id='+getUserDetails.affiliate_id.affiliate_id">
			    	 	http://majesticares.com/checkout?referral_id={{getUserDetails.affiliate_id.affiliate_id}}
			    	 </a></h6>
		    </div>
		</div>
		<div class="row">
			
		</div>
		<div class="row">
			<div class="col-lg-12">
						<div class="row mb-3">
							<div class="col-xl-3">
								<section class="card card-featured-left card-featured-primary mb-3">
									<div class="card-body">
										<div class="widget-summary">
											<div class="widget-summary-col widget-summary-col-icon">
												<div class="summary-icon bg-primary">
													<i class="fas fa-life-ring"></i>
												</div>
											</div>
											<div class="widget-summary-col">
												<div class="summary">
													<h4><b>Personal Sales </b></h4>
													<div class="info">
														<strong class="amount">{{getUserDetails.purchase.length}}</strong>
														<span v-if="getUserDetails.purchase.length >= 3" class="text-success text-5">
														 <b>(Active)</b>
													   </span>
														<span v-else class="text-danger">(Inactive)</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
							<div class="col-xl-3">
								<section class="card card-featured-left card-featured-secondary">
									<div class="card-body">
										<div class="widget-summary">
											<div class="widget-summary-col widget-summary-col-icon">
												<div class="summary-icon bg-secondary">
													<i class="fas fa-shopping-cart"></i>
												</div>
											</div>
											<div class="widget-summary-col">
												<div class="summary">
													<h4><b>Total Group Sales</b></h4>
													<div class="info">
														<strong class="amount">{{getGroupSales.response}}</strong>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
								<div class="col-xl-3">
								<section class="card card-featured-left card-featured-tertiary mb-3">
									<div class="card-body">
										<div class="widget-summary">
											<div class="widget-summary-col widget-summary-col-icon">
												<div class="summary-icon bg-tertiary">
													<i class="fas fa-dollar-sign"></i>
												</div>
											</div>
											<div class="widget-summary-col">
												<div class="summary">
													<h4><b>Cash Bonus</b></h4>
													<div class="info">
														<strong class="amount" v-if="getGroupSales.response >= 12">$100.00</strong>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
							<div class="col-xl-3">
								<section class="card card-featured-left card-featured-quaternary">
									<div class="card-body">
										<div class="widget-summary">
											<div class="widget-summary-col widget-summary-col-icon">
												<div class="summary-icon bg-quaternary">
													<i class="fas fa-user"></i>
												</div>
											</div>
											<div class="widget-summary-col">
												<div class="summary">
													<h4><b>Wallet</b></h4>
													<div class="info">
														<strong class="amount">$0</strong>
													</div>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
			</div>
		</div>
		<div class="row pt-4 mt-1">
			<div class="col-xl-12">
				<section class="card">
					<header class="card-header card-header-transparent">
						<div class="card-actions">
							<a href="#" class="card-action card-action-toggle" data-card-toggle></a>
							<a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
						</div>
		
						<h2 class="card-title">Affilate Stats</h2>
					</header>
					<div class="card-body">
						<table class="table table-responsive-md table-striped mb-0">
							<thead>
								<tr>
									<th>Personal Sales Status</th>
									<th>Total Group Sales</th>
									<th>Cash Bonus</th>
									<th>Date Paid</th>
									<th>Total Paid To Date</th>
								</tr>
							</thead>
							<tbody>
							
								<tr>
									<td><strong class="text-warning">Bronze</strong></td>
									<td><strong>12</strong></td>
									<td><strong>$100</strong></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td><strong class="text-default">Silver</strong></td>
									<td><strong>36</strong></td>
									<td><strong>$600</strong></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td><strong class="text-danger">Gold</strong></td>
									<td><strong>108</strong></td>
									<td><strong>$3,800</strong></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td><strong class="text-danger">Ruby</strong></td>
									<td><strong>324</strong></td>
									<td><strong>$22,000</strong></td>
									<td></td>
									<td></td>
								</tr>
								<tr>
									<td><strong class="text-danger">Diamond</strong></td>
									<td><strong>972</strong></td>
									<td><strong>$412,855.60</strong> <small>(Recycle)</small></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="card-footer">
						<h5>After Diamond Completes, counter restarts from zero (0) to 12 each continus cycle</h5>
					</div>
				</section>
			</div>
		</div>
		<!-- end: page -->
	</section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {

	data() {
		return {
			tilte: 'Dashbord',
			cash: 0
		}
	},
	computed: {
		...mapGetters([
		 	'getUserDetails',
		 	'getGroupSales'
		]),
		cashBonus: function() {
			if ( this.getGroupSales.response == 12 ) {
				this.cash = 100
			}
		}
	},
	created() {
		this.$store.dispatch('GET_USER_DETAILS')
		this.$store.dispatch('USER_GROUP_SALES')
	},
	methods:{
	}
}
</script>






