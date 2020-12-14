<template>

	<!--  BEGIN CONTENT AREA  -->
	<div id="content" class="main-content">
		<div class="layout-px-spacing">

			<div class="row layout-top-spacing">
				<div class="col-md-12">
					<nav class="breadcrumb-two" aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
							<li class="breadcrumb-item active"><a href="javascript:void(0);">Dashboard</a></li>
						</ol>
					</nav>
				</div>
			</div>

			<div class="row layout-top-spacing mb-1">
				<div class="col-md-12">
					<h6><i>Welcome:</i> <strong>{{getUserDetails.first_name}}  {{getUserDetails.last_name}}</strong></h6>
				</div>
			</div>

<!--			<snackbar ref="snackbar" baseSize="100px" :wrapClass="''" :colors="null" :holdTime="3000" :multiple="true"/>-->
			<!-- CONTENT AREA -->

			<div class="row">

				<div class="col-md-8">
					<div class="row">
						<div class="col-md-6 layout-spacing">
								<div class="widget widget-five">
									<div class="widget-content">
										<div class="header">
											<div class="header-body">
												<h6>Your Affiliate Link</h6>
											</div>
										</div>
										<div class="w-content">
											<div class="input-group">
												<input ref="mylink" type="text" class="form-control input-group-lg input-lg" :value="fetchLink.link">
											</div>
											<a @click="copy(fetchLink.link)" class="btn mt-1 btn-primary btn-lg" href="#">Copy Referral ID</a>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-6 layout-spacing">
								<summary-component :affiliateid="getUserDetails.affiliate.affiliate_id"></summary-component>
							</div>
					 </div>
					<div class="row layout-spacing">

						<div class="col-md-6 layout-spacing">
							<booster-package></booster-package>
						</div>

						<div class="col-md-6 layout-spacing">
							<div class="row">
								<div class="col-12">
									<personal-sales :userid="getUserDetails.id"  :boosters="userDasboard.boosters" :sales="getUserDetails.purchase"></personal-sales>
								</div>
								<div class="col-12 mt-2">
									<group-sales :sales="getGroupSales.response" ></group-sales>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-md-4">
					<div class="">
						<group-sales :user_id="getUserDetails.id" :stats="getGroupSales"></group-sales>
					</div>
					<div class="widget-four mt-2" style="height: 20%; overflow-y: scroll;">
						<div class="widget-heading">
							<h5 class="">Booster Packages</h5>
						</div>
						<div class="widget-content" >
							<div class="vistorsBrowser" >
								<div class="browser-list" v-for="(boost, index ) in boosterSummary">
									<div class="w-icon">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chrome"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line></svg>
									</div>
									<div class="w-browser-details">

										<div class="w-browser-info">
											<h4><strong> Booster {{index + 1}} </strong></h4>
											<p class="browser-count text-dark"><strong>{{boost.stats.tiers}} / {{boost.stats.percentage}}%</strong></p>

										</div>

										<div class="w-browser-stats">
											<div class="progress">
												<div class="progress-bar bg-gradient-danger" role="progressbar" :style="'width: '+boost.stats.percentage+'%'" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>


			<div class="row layout-top-spacing">
			</div>

			<div class="row layout-top-spacing">
				<div class="row">
<!--				<apexchart type="line" height="212" :options="options"></apexchart>-->
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
 import SalesComponents from "../components/SalesComponents";
 import BoosterPackage from "../components/BoosterPackage";
export default {
	components: {
		SalesComponents,
		SummaryComponent,
		PersonalSales,
		GroupSales,
		BoosterPackage
	},
	data() {
		return {
			tilte: 'Dashbord',
			cash: 0,
			canCopy:false,
			fullPage: true,
			isLoading: false,
			options: {
				series: [{
					name: 'TEAM A',
					type: 'column',
					data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
				}]
			}
		}
	},

	computed: {

		...mapGetters([
		 	'getUserDetails',
			'fetchLink',
			'getGroupSales',
			'userDasboard',
			'boosterSummary'
		]),

		groupMore() {
			return this.getGroupSales.response - 10
		},

	},

	created() {

		this.$store.dispatch('USER_DASHBOARD')
		this.$store.dispatch('GET_USER_DETAILS')
		this.$store.dispatch('GET_AFFILIATE_LINK')
		this.$store.dispatch('BOOSTER_SUMMARY')
		this.canCopy = !!navigator.clipboard;
	},

	mounted() {


	},

	methods:{

		async copy(s) {
			var Url = this.$refs.mylink;
			Url.innerHTML = window.location.href;
			console.log(Url.innerHTML)
			Url.select();
			document.execCommand("copy");

			this.notify()
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

		notify() {
			this.$snack.success({
				text: 'Link copy succssefully',
				button: 'close',
				action: this.clickAction
			})
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
	},

	.snackky {
		background: red;
	}
</style>





