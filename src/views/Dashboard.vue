<template>
	<!--  BEGIN CONTENT AREA  -->
	<div id="content" class="main-content">
		<div class="layout-px-spacing">
			<!-- CONTENT AREA -->
			<div class="row layout-top-spacing">
				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
					<div class="widget widget-five">
						<div class="widget-content">

							<div class="header">
								<div class="header-body">
									<h6>Your Affiliate Link</h6>
									<p class="meta-date"></p>
								</div>
							</div>

							<div class="w-content">
								<div class="input-group mt-4">
									<input type="text" class="form-control" :value="fetchLink.link">
								</div>
								<a @click="copy(fetchLink.link)" class="mt-3 btn btn-primary" href="#"><svg> ... </svg> Copy from Input</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
					<div class="widget widget-five">
						<div class="widget-content">

							<div class="header">
								<div class="header-body">
									<h6>Personal Sales</h6>
								</div>
							</div>

							<div class="w-content">
								<div class="text-center mt-3">
									<h1>{{getUserDetails.purchase.length}} </h1>
									<h2 class="task-hight-priority text-danger text-4" v-if="getUserDetails.purchase.length < 3"> Personal Sales ( Inactive )</h2>
									<h2 class="text-success text-6" v-else><strong> </strong> Personal Sales ( Active )</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
					<div class="widget widget-card-two">
						<div class="widget-content">

							<div class="media">
								<div class="w-img">
									<img src="@/cork/img/90x90.jpg" alt="avatar">
								</div>
							</div>
							<div class="card-bottom-section">
								<ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

									<li v-show="getGroupSales.response > 10" class="list-inline-item chat-online-usr" v-for="sale in 10">
										<img alt="avatar" src="@/assets/img/90x90.jpg">
									</li>
									<li v-show="getGroupSales.response > 10" class="list-inline-item badge-notify mr-0">
										<div class="notification">
											<span class="badge badge-info badge-pill">+{{ groupMore}} more</span>
										</div>
									</li>

									<li v-show="getGroupSales.response <= 10" class="list-inline-item chat-online-usr" v-for="sale in getGroupSales.response">
										<img alt="avatar" src="@/assets/img/90x90.jpg">
									</li>

									<p class="text-4 mt-1 text-white"><strong>{{getGroupSales.response}} Members Going</strong></p>
								</ul>
								<a @click="goToDetails()" href="javascript:void(0);" class="btn">View Details</a>
							</div>

						</div>
					</div>
				</div>
			</div>
			<div class="row sales">
				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">

					<div class="widget widget-account-invoice-one">

						<div class="widget-heading">
							<h5 class="">Wallet</h5>
						</div>

						<div class="widget-content">
							<div class="invoice-box">

								<div class="acc-total-info">
									<h5>Balance</h5>
									<p class="acc-amount">$0</p>
								</div>

<!--								<div class="inv-detail">-->

<!--									<div class="info-detail-1">-->
<!--										<p>Mcc Bronze Cash Bonuse Payout</p>-->
<!--										<p>$ 199.0</p>-->
<!--									</div>-->
<!--									<div class="info-detail-3 info-sub">-->
<!--										<div class="info-detail-sub">-->
<!--											<p>Transfer</p>-->
<!--											<p>$ -0.68</p>-->
<!--										</div>-->
<!--									</div>-->
<!--									<div class="info-detail-3 info-sub">-->
<!--										<div class="info-detail-sub">-->
<!--											<p>Total</p>-->
<!--											<p>$ -0.68</p>-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->

								<div class="inv-action">
									<a href="" class="btn btn-outline-dark">Summary</a>
									<a href="" class="btn btn-danger">Transfer</a>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div class="col-xl-8 col-lg-6 col-md-6 col-sm12 col-12 layout-spacing">
							<div class="widget-content widget-content-area">
								<div class="table-responsive">
									<table class="table table-bordered table-striped mb-4">
										<thead>
										<tr>
											<th>Personal Sales Status</th>
											<th>Total Group Sales</th>
											<th>Cash Bonus</th>
											<th class="text-center">Status</th>
										</tr>
										</thead>
										<tbody>
										<tr>
											<td>
												<div class="d-flex">
													<p class="align-self-center mb-0">Bronze</p>
												</div>
											</td>
											<td>12</td>
											<td>$100</td>
											<td class=" text-center">
												<svg xmlns="http://www.w3.org/2000/svg"
													 width="24" height="24" viewBox="0 0 24 24" fill="none"
													 stroke="currentColor"
													 stroke-width="2"
													 stroke-linecap="round"
													 stroke-linejoin="round"
													 class="feather feather-x t-icon t-hover-icon">
													<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
											   </td>
										</tr>
										<tr>
											<td>
												<div class="d-flex">
													<p  class="align-self-center mb-0">Silver</p>
												</div>
											</td>
											<td>36</td>
											<td>$600</td>
											<td class="text-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x t-icon t-hover-icon"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></td>
										</tr>
										<tr>
											<td>
												<div class="d-flex">
													<p  class="align-self-center mb-0">Gold</p>
												</div>
											</td>
											<td>108</td>
											<td>$3,800</td>
											<td class="text-center">
												<svg xmlns="http://www.w3.org/2000/svg"
													 width="24"
													 height="24"
													 viewBox="0 0 24 24"
													 fill="none" stroke="currentColor"
													 stroke-width="2" stroke-linecap="round"
													 stroke-linejoin="round"
													 class="feather feather-x t-icon t-hover-icon">
													<line x1="18" y1="6" x2="6" y2="18"></line>
													<line x1="6" y1="6" x2="18" y2="18"></line></svg>
											</td>
										</tr>
										<tr>
											<td>
												<div class="d-flex">
													<p  class="align-self-center mb-0">Ruby</p>
												</div>
											</td>
											<td>324</td>
											<td>$22,000</td>
											<td class="text-center">
												<svg xmlns="http://www.w3.org/2000/svg"
													 width="24" height="24"
													 viewBox="0 0 24 24" fill="none"
													 stroke="currentColor" stroke-width="2"
													 stroke-linecap="round" stroke-linejoin="round"
													 class="feather feather-x t-icon t-hover-icon">
													<line x1="18" y1="6" x2="6" y2="18"></line>
													<line x1="6" y1="6" x2="18" y2="18"></line></svg>
											</td>
										</tr>
										<tr>
											<td>
												<div class="d-flex">
													<p  class="align-self-center mb-0">Diamond</p>
												</div>
											</td>
											<td>972</td>
											<td>$412,855.60 (Recycle)</td>
											<td class="text-center">
												<svg xmlns="http://www.w3.org/2000/svg"
													 width="24" height="24"
													 viewBox="0 0 24 24" fill="none"
													 stroke="currentColor" stroke-width="2"
													 stroke-linecap="round" stroke-linejoin="round"
													 class="feather feather-x t-icon t-hover-icon">
													<line x1="18" y1="6" x2="6" y2="18"></line>
													<line x1="6" y1="6" x2="18" y2="18"></line></svg>
											</td>
										</tr>
										</tbody>
									</table>
								</div>
							</div>
				</div>
			</div>
		</div>
		<div class="footer-wrapper">
			<div class="footer-section f-section-1">
				<p class="">Copyright © 2020 <a target="_blank" href="https://designreset.com">DesignReset</a>, All rights reserved.</p>
			</div>
			<div class="footer-section f-section-2">
				<p class="">Coded with
					     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
							  viewBox="0 0 24 24" fill="none" stroke="currentColor"
							  stroke-width="2"
						 stroke-linecap="round"
							  stroke-linejoin="round"
							  class="feather feather-heart">
						<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
						 </svg>
				</p>
			</div>
		</div>

	</div>
	<!--  END CONTENT AREA  -->
</template>
<script>
import { mapGetters } from 'vuex';
export default {

	data() {
		return {
			tilte: 'Dashbord',
			cash: 0,
			canCopy:false
		}
	},
	computed: {
		...mapGetters([
		 	'getUserDetails',
		 	'getGroupSales',
			'fetchLink',
			'groupSales'

		]),

		cashBonus: function() {
			if ( this.getGroupSales.response == 12 ) {
				this.cash = 100
			}
		},
		groupMore() {
			return this.getGroupSales.response - 10
		},
	},
	created() {
		this.$store.dispatch('GET_USER_DETAILS')
		this.$store.dispatch('USER_GROUP_SALES')
		this.$store.dispatch('GET_AFFILIATE_LINK')
		this.$store.dispatch('GET_TOTAL_GROUP_SALES')
		this.canCopy = !!navigator.clipboard;
	},
	methods:{
		async copy(s) {
			await navigator.clipboard.writeText(s);
		},
		goToDetails() {
			var url = '/dashboard/affiliates/'+this.getUserDetails.id
			this.$router.push(url);
		}
	}
}
</script>






