<template>
	<!--  BEGIN CONTENT AREA  -->
	<div id="content" class="main-content">
		<div class="layout-px-spacing">
			<div class="row layout-top-spacing mb-3">
				<div class="col-md-12">
					<h6><i>Welcome:</i> <strong>{{getUserDetails.first_name}}  {{getUserDetails.last_name}}</strong></h6>
				</div>
			</div>

			<snackbar ref="snackbar" baseSize="100px" :wrapClass="''" :colors="null" :holdTime="3000" :multiple="true"/>
			<!-- CONTENT AREA -->

			<div class="row">
				<div class="col-md-8">
					<div class="row">
						 <div class="col-md-4 layout-spacing">
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
							<div class="col-md-4 ">
								<sales-components :sales="userDasboard.all_members" :link="getUserDetails.affiliate.affiliate_id"></sales-components>
							</div>
							<div class="col-md-4">
								<summary-component></summary-component>
							</div>
					</div>
					<div class="row">
						<div class="col-md-4 layout-spacing">
							<booster-package></booster-package>
						</div>
<!--						<div class="col-md-4">-->
<!--							<div class="widget widget-five">-->
<!--								<div class="widget-content">-->

<!--									<div class="header">-->
<!--										<div class="header-body">-->
<!--											<h6>Countries</h6>-->
<!--										</div>-->
<!--									</div>-->

<!--									<div class="w-content">-->
<!--										<div class="text-center">-->
<!--											<h1>{{userDasboard.countries}}</h1>-->
<!--											<h2 class="text-success text-6" ><strong>Countries</strong></h2>-->
<!--										</div>-->
<!--									</div>-->
<!--								</div>-->
<!--							</div>-->
<!--						</div>-->


					</div>
				</div>
				<div class="col-md-4">
					<div class="row">
						<div class="col-12">
<!--							<pre>{{userDasboard}}</pre>-->
							<personal-sales  :boosters="userDasboard.boosters" :sales="getUserDetails.purchase"></personal-sales>
						</div>
						<div class="col-12">
							<group-sales :sales="getGroupSales.response" ></group-sales>
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
			'userDasboard'
		]),

		groupMore() {
			return this.getGroupSales.response - 10
		},

	},

	created() {
		this.$store.dispatch('USER_DASHBOARD')
		this.$store.dispatch('GET_USER_DETAILS')
		this.$store.dispatch('GET_AFFILIATE_LINK')
		this.canCopy = !!navigator.clipboard;

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





