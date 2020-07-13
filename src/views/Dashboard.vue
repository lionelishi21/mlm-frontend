<template>
	<!--  BEGIN CONTENT AREA  -->
	<div id="content" class="main-content">
		<div class="layout-px-spacing">
			<!-- CONTENT AREA -->
<!--			<div class="row">-->
<!--				<pre>{{userDasboard}}</pre>-->
<!--			</div>-->
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
								<div class="media-body">
									<h4 class="media-heading">Group Sales</h4>
									<h5 class="media-text text-primary">
										{{getGroupSales.response}}
									</h5>
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
			<div class="row layout-top-spacing">
				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
					<div class="widget widget-five">
						<div class="widget-content">

							<div class="header">
								<div class="header-body">
									<h6>Countries</h6>
								</div>
							</div>

							<div class="w-content">
								<div class="text-center mt-3">
									<h1>{{userDasboard.countries}} </h1>
									<h2 class="text-success text-6" ><strong>Countries</strong></h2>
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
									<h6>Total Members</h6>
								</div>
							</div>

							<div class="w-content">
								<div class="text-center mt-3">
									<h1>{{userDasboard.all_members}} </h1>
									<h2 class="text-success text-6" ><strong>Members </strong></h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">

					<div class="widget widget-account-invoice-one">

						<div class="widget-heading">
							<h5 class="">Wallet</h5>
						</div>

						<div class="widget-content">
							<div class="invoice-box">

								<div class="acc-total-info">
									<h5>Balance</h5>
									<p class="acc-amount">{{userDasboard.cashbouns}}</p>
								</div>

<!--								<div class="inv-detail" style="max-height: 100px; overflow: auto;" >-->
<!--									<div class="info-detail-1" v-for="cash in userDasboard.cashbouns">-->
<!--										<p>Mcc Bronze Cash Bonuse Payout</p>-->
<!--										<p>$ {{cash.cash_bonus_amount}}</p>-->
<!--									</div>-->


<!--									<div class="info-detail-3 info-sub">-->
<!--										<div class="info-detail-sub">-->
<!--											<p>Total</p>-->
<!--											<p>$ {totalCashBonuses</p>-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->

								<div class="inv-action">
									<a href="" class="btn btn-outline-dark">Summary</a>
									<a href="" class="btn btn-success">Withdraw</a>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="row sales">
<!--				<div class="col-xl-12 col-lg-12 col-md-12 col-sm12 col-12 layout-spacing">-->
<!--							<div class="widget-content widget-content-area">-->
<!--								<div class="table-responsive" >-->
<!--									<table class="table table-bordered table-striped mb-4">-->
<!--										<thead>-->
<!--										<tr>-->
<!--											<th>Personal Sales Status</th>-->
<!--											<th>Total Group Sales</th>-->
<!--											<th>Cash Bonus</th>-->
<!--											<th class="text-center">Status</th>-->
<!--										</tr>-->
<!--										</thead>-->
<!--										<tbody>-->
<!--										<tr v-for="status in userDasboard.cashbouns">-->
<!--											<td>-->
<!--												<div class="d-flex">-->
<!--													<p class="align-self-center mb-0" v-if="status.sales_count == 12"><i class="badge badge-warning">Bronze</i></p>-->
<!--													<p class="align-self-center mb-0" v-if="status.sales_count == 36"><i class="badge badge-silver">Silver</i></p>-->
<!--													<p class="align-self-center mb-0" v-if="status.sales_count == 108"><i class="badge badge-gold">Gold</i></p>-->
<!--													<p class="align-self-center mb-0" v-if="status.sales_count == 324"><i class="badge badge-ruby">Ruby</i></p>-->
<!--													<p class="align-self-center mb-0" v-if="status.sales_count == 972"><i class="badge badge-diamond">Diamond</i></p>-->
<!--												</div>-->
<!--											</td>-->
<!--											<td>{{status.sales_count}}</td>-->
<!--											<td>{{status.cash_bonus_amount}}</td>-->
<!--											<td class=" text-center">-->
<!--												<svg xmlns="http://www.w3.org/2000/svg"-->
<!--													 width="24" height="24" viewBox="0 0 24 24" fill="none"-->
<!--													 stroke="currentColor"-->
<!--													 stroke-width="2"-->
<!--													 stroke-linecap="round"-->
<!--													 stroke-linejoin="round"-->
<!--													 class="feather feather-x t-icon t-hover-icon">-->
<!--													<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>-->
<!--											   </td>-->
<!--										</tr>-->
<!--										</tbody>-->
<!--									</table>-->
<!--								</div>-->
<!--							</div>-->
<!--				</div>-->
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
			'groupSales',
			'userDasboard'

		]),

		cashBonus: function() {
			if ( this.getGroupSales.response == 12 ) {
				this.cash = 100
			}
		},

		groupMore() {
			return this.getGroupSales.response - 10
		},

		totalCashBonuses: function() {
			let sum = 0;
			let cashbonus = this.userDasboard.cashbouns

			for (let i = 0; i < this.userDasboard.cashbouns.length; i++){
					sum += (parseFloat(this.userDasboard.cashbouns[i].cash_bonus_amount));
			}

			return sum
		}
	},

	created() {
		this.$store.dispatch('GET_USER_DETAILS')
		this.$store.dispatch('USER_GROUP_SALES')
		this.$store.dispatch('GET_AFFILIATE_LINK')
		this.$store.dispatch('GET_TOTAL_GROUP_SALES')
		this.$store.dispatch('USER_DASHBOARD')
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
<style>
	.badge-silver {
		color: #fff;
		background: #C0C0C0;
		box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.2);
		will-change: opacity, transform;
		transition: all 0.3s ease-out;
		-webkit-transition: all 0.3s ease-out;
	}

	.badge-gold {
		color: black;
		background: #FFDF00;
		box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.2);
		will-change: opacity, transform;
		transition: all 0.3s ease-out;
		-webkit-transition: all 0.3s ease-out;
	}

	.badge-ruby {
		color: #fff;
		background: #e0115f;
		box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.2);
		will-change: opacity, transform;
		transition: all 0.3s ease-out;
		-webkit-transition: all 0.3s ease-out;
	}

	.badge-diamond {
		color: #fff;
		background: #b9f2ff;
		box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.2);
		will-change: opacity, transform;
		transition: all 0.3s ease-out;
		-webkit-transition: all 0.3s ease-out;
	}
</style>





