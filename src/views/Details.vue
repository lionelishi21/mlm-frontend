<template>
	<div id="content" class="main-content">
		<div class="layout-px-spacing">
			<div class="row">
				<loading :active.sync="isLoading" :can-cancel="true" :is-full-page="fullpage"></loading>
				<snackbar ref="snackbar" baseSize="100px" :wrapClass="''" :colors="null" :holdTime="3000" :multiple="true"/>
			</div>

			<div class="row layout-spacing">
				<!-- Content -->
				<div class="col-xl-3 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">
					<div class="card">
						<div class="widget-content widget-content-area">
							<div class="text-center user-info">
								<img src="@/assets/avatar/img12.jpg" alt="avatar">
								<p class="">{{getAffiliateDetails.user.first_name}} {{getAffiliateDetails.user.last_name}}</p>
							</div>
							<div class="user-info-list">
								<div class="">
									<ul class="contacts-block list-unstyled text-center" style="max-width: 100%;">

										<li class="contacts-block__item">
											<svg xmlns="http://www.w3.org/2000/svg"
												 width="24" height="24"
												 viewBox="0 0 24 24"
												 fill="none" stroke="currentColor"
												 stroke-width="2" stroke-linecap="round"
												 stroke-linejoin="round" class="feather feather-calendar">
												<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
												<line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
											{{getAffiliateDetails.user.created_at}}
										</li>

										<li class="contacts-block__item">
											<svg xmlns="http://www.w3.org/2000/svg"
												 width="24" height="24"
												 viewBox="0 0 24 24"
												 fill="none" stroke="currentColor"
												 stroke-width="2" stroke-linecap="round"
												 stroke-linejoin="round"
												 class="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z">
											</path><circle cx="12" cy="10" r="3"></circle></svg>
											{{getAffiliateDetails.user.detail.state}}, {{getAffiliateDetails.user.detail.countru}}
										</li>
										<li class="contacts-block__item">
											<a>
												<svg xmlns="http://www.w3.org/2000/svg"
													 width="24" height="24"
													 viewBox="0 0 24 24" fill="none"
													 stroke="currentColor" stroke-width="2"
													 stroke-linecap="round" stroke-linejoin="round"
													 class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
													<polyline points="22,6 12,13 2,6"></polyline></svg>
												{{getAffiliateDetails.user.email }}</a>
										</li>

										<li class="contacts-block__item" v-if="getAffiliateDetails.user.phone_number">
											<svg xmlns="http://www.w3.org/2000/svg"
												 width="24" height="24"
												 viewBox="0 0 24 24" fill="none"
												 stroke="currentColor"
												 stroke-width="2"
												 stroke-linecap="round" stroke-linejoin="round"
												 class="feather feather-phone"><path
													d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
											{{getAffiliateDetails.user.phone_number}}
										</li>
										<li class="contacts-block__item" v-else>
											<svg xmlns="http://www.w3.org/2000/svg"
												 width="24" height="24"
												 viewBox="0 0 24 24" fill="none"
												 stroke="currentColor"
												 stroke-width="2"
												 stroke-linecap="round" stroke-linejoin="round"
												 class="feather feather-phone"><path
													d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
											No Number
										</li>
										<li class="contacts-block__item">

											<div class="input-group mt-2">
												<input ref="mylink" type="text" class="form-control" :value="getAffiliateDetails.bitly_link.link">
											</div>
											<a @click="copy()" class="mt-2 btn btn-primary" href="#">Copy Referral ID</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="card layout-spacing ">
						<div class="widget-content widget-content-area">
							<p class="text-6 text-dark">Personal Sales</p>
							<hr>
							<div class="row pb-2" v-for="sale in getAffiliateDetails.personal_sales">

								<div class="col-md-12">
									<div class="card" @click="replaceRoute(sale.affiliate_id)">
										<div class="p-2 text-center">
											<p><a class="text-dark" href="#">{{sale.purchaser_name}}</a></p>
<!--											<a href="#" class="text-primary">{{sale.link.link}}</a>-->
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-xl-9 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">

					<div class="row mb-5" >
						<div class="col-md-6">
							<personal-sales :sales="getAffiliateDetails.personal_sales"
											:boosters="getAffiliateDetails.boosters">
							</personal-sales>
						</div>

						<div class="col-md-6">
							<group-sales :user_id="getAffiliateDetails.user.id" :stats="getAffiliateDetails.stats"></group-sales>
						</div>
					</div>

					<div class="card layout-spacing ">
						<div class="widget-content widget-content-area">
							<h4 class="">Affiliates</h4>

							<div class="bio-skill-box">
								<div class="row">
									<div class="col-md-4">
									</div>
									<div class="col-md-4 ">
										<div class="d-flex b-skills text-center">
											<div class="text-center">
												<h5>{{getAffiliateDetails.user.first_name}} {{getAffiliateDetails.user.last_name}}</h5>
											</div>
										</div>
									</div>
									<div class="col-md-4">
									</div>
								</div>
								<div class="row">
									<div class="col-md-4" v-for="af in getAffiliateDetails.affiliate">
										<div class="card mt-5" @click.prevent="replaceRoute(af.affiliateId)" style="cursor: pointer">
											<div class="card-body text-center">
												<h5>{{af.username}}</h5>
											</div>
										</div>
										<div class="row mt-3" v-if="af.children">
											<div class="col-md-4" v-for="child in af.children">
												<div class="card">
													<div class="card-body text-center p-1">
														<b class="text-dark"><small>{{child.name}}</small></b>
													</div>
												</div>
											</div>
										</div>

									</div>
								</div>

							</div>

						</div>
					</div>

					<div class="card layout-spacing" style="height: 20%; overflow-y: scroll;">
						<div class="widget-four mt-2" >
							<div class="widget-heading">
								<h5 class="">Booster Packages</h5>
								{{boosterUserList}}
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
												<p class="browser-count text-dark"><strong>{{boost.stats.tiers}} | {{boost.stats.percentage}}%</strong></p>

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
			</div>
		</div>

	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import GroupSales from "../components/GroupSales";
import PersonalSales from "../components/PersonalSales";
import Loading from 'vue-loading-overlay';
export default {

	components: {
		GroupSales,
		PersonalSales,
		Loading
	},

	data() {
		return{
			title:' Affiliates Details',
		    name: this.$route.params.name,
			fullpage: true,
			isLoading: false
		}
	},


	created() {
		this.init()
	},

	computed: {
		...mapGetters([
			'getAffiliateDetails',
			'getUserDetails',
			'getCashBonuses',
			'boosterSummary',
			'boosterUserList'
		]),
		groupMore() {
			return this.getAffiliateDetails.group_sales_counts - 10
		},

	},

	watch: {
		// call again the method if the route changes
		'$route': 'init'
	},

	beforeRouteUpdate(to, from, next) {
		this.name = to.params.name
		next()
		this.init()
	},

	methods: {

	    percentage(num, per) {
	      return (num/100)*per;
        },

		init() {
			var affiliateId = this.$route.params.id
			this.$store.dispatch('AFFILIATE_DETAILS', affiliateId)
			this.$store.dispatch('GET_USER_DETAILS')
			this.$store.dispatch('BOOSTER_SUMMARY')
			this.$store.dispatch('BOOSTER_USER_SUMMARY', affiliateId)
			// this.$store.dispatch('GET_USER_CASHBONUS', affiliateId)
		},

		replaceRoute(value) {

	    	this.isLoading = true
			this.$nextTick(() => {

				this.$store.dispatch('AFFILIATE_DETAILS', value)
				.then( response => {
					this.isLoading = false
				})
				this.$store.dispatch('GET_USER_DETAILS')
			});

		},

		goToDetails(value) {
			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		},

		percentage(partialValue, totalValue) {
			return (100 * partialValue) / totalValue;
		},

		async copy() {
			var Url = this.$refs.mylink;
			Url.innerHTML = window.location.href;
			console.log(Url.innerHTML)
			Url.select();
			document.execCommand("copy");

			this.notify()
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

