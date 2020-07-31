<template>
	<!--  BEGIN CONTENT AREA  -->
	<div id="content" class="main-content">
		<div class="layout-px-spacing">

<!--			<div class="vld-parent">-->
<!--				<loading :active.sync="isLoading"-->
<!--						 :can-cancel="false"-->
<!--						 :is-full-page="fullPage"></loading>-->
<!--			</div>-->


			<!-- CONTENT AREA -->
			<div class="modal fade" id="payoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered" role="document">
					<div class="modal-content">
						<div class="modal-body text-center">
							<!-- Images -->
							<p>Are you sure you want to request a payout?</p>
							<button class="btn btn-primary" @click="request()">Confirm Payout</button>
							<hr>
							<small>Connect Account: </small>
						</div>
						<div class="modal-footer">
							<button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
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
									<h6>Your Affiliate Link</h6>
									<p class="meta-date"></p>
								</div>
							</div>

							<div class="w-content">
								<div class="input-group mt-2">
									<input type="text" class="form-control" :value="fetchLink.link">
								</div>
								<a @click="copy(fetchLink.link)" class="mt-2 btn btn-primary" href="#"><svg> ... </svg> Copy from Input</a>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
					<personal-sales :sales="getUserDetails.purchase"></personal-sales>
				</div>

				<div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
					<group-sales :sales="getGroupSales.response"></group-sales>
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
								<div class="text-center">
<!--									<h1>{{userDasboard.countries}} </h1>-->
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
									<h6>Total Affiliates</h6>
								</div>
							</div>

							<div class="w-content">
								<div class="text-center">
									<h1>{{userDasboard.all_members}} </h1>
									<h2 class="text-success text-6" ><strong>Affiliates </strong></h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
					<summary-component></summary-component>
				</div>
			</div>
		</div>

		<div class="footer-wrapper">
			<div class="footer-section f-section-1">
				<p class="">Copyright © 2020 <a target="_blank" href="majesticares.com">majesticares.com</a>, All rights reserved.</p>
			</div>
		</div>

	</div>
	<!--  END CONTENT AREA  -->
</template>
<script>

 import { mapGetters } from 'vuex';
 import SummaryComponent from "../components/Summary";
 import PersonalSales from "../components/PersonalSales";
 import GroupSales from "../components/GroupSales";

export default {
	components: {
		SummaryComponent,
		PersonalSales,
		GroupSales
	},
	data() {
		return {
			tilte: 'Dashbord',
			cash: 0,
			canCopy:false,
			fullPage: true,
			isLoading: false
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

		groupMore() {
			return this.getGroupSales.response - 10
		},

	},

	created() {
		this.$store.dispatch('USER_DASHBOARD')
		this.$store.dispatch('GET_USER_DETAILS')
		this.$store.dispatch('USER_GROUP_SALES')
		this.$store.dispatch('GET_AFFILIATE_LINK')
		this.canCopy = !!navigator.clipboard;

	},
	methods:{

		async copy(s) {
			await navigator.clipboard.writeText(s);
		},

		goToDetails() {
			var url = '/dashboard/affiliates/'+this.getUserDetails.id
			this.$router.push(url);
		},

		request() {
			let transfer = {
				transfer: this.totalCashbonus
			}
				this.$store.dispatch('TRANSFER_FUNDS',transfer)
					.then( response => {
						console.log(response)
					})
					.catch( error => {
						console.log(error.response)
					})
		},

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





