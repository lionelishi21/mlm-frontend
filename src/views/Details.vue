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
					<div class="row mt-5">
						<div class="col-md-12">
							<h5>Personal Sales</h5>
							<hr>
						</div>
					</div>
					<div class="row">
						<a @click="replaceRoute(sale.affiliate_id)" class="card1 text-center" href="#" v-for="sale in getAffiliateDetails.personal_sales">
							<h4>{{sale.purchaser_name}}</h4>
							<div class="go-corner" href="#">
								<div class="go-arrow">
									→
								</div>
							</div>
						</a>
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
										<div class="text-center">
											<div class="text-center">
												<a class="card text-center" href="#" >
													<div class="card-body">
														<h4>{{getAffiliateDetails.user.first_name}} {{getAffiliateDetails.user.last_name}}</h4>
													</div>
												</a>
												<h5></h5>
											</div>
										</div>
									</div>
									<div class="col-md-4">
									</div>
								</div>
								<div class="row">

									<div class="col-md-4" v-for="af in getAffiliateDetails.affiliate">
										<a @click.prevent="replaceRoute(af.affiliateId)" class="card3 text-center" href="#" >
											<h4>{{af.username}}</h4>
											<div class="go-corner" href="#">
												<div class="go-arrow">
													→
												</div>
											</div>
										</a>

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


					<div class="card card-primary mt-5" style="max-height: 30%; overflow-y: scroll;">
						<div class="card-header">
							<h4>Booster Packages</h4>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-md-6" v-for="(boost, index ) in boosterUserList">
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
			var self = this;
			setTimeout(function() {
				var url = '/dashboard/affiliates/'+value
				self.$router.push(url);

				self.isLoading = false
			}, 2000);

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
<style lang="scss" scoped>

	.go-corner {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 32px;
		height: 32px;
		overflow: hidden;
		top: 0;
		right: 0;
		background-color: #00838d;
		border-radius: 0 4px 0 32px;
	}

	.go-arrow {
		margin-top: -4px;
		margin-right: -4px;
		color: white;
		font-family: courier, sans;
	}

	.card1 {
		display: block;
		position: relative;
		width: 100%;
		background-color: #f2f8f9;
		border-radius: 4px;
		padding: 32px 24px;
		margin: 12px;
		text-decoration: none;
		z-index: 0;
		overflow: hidden;

	&:before {
		 content: "";
		 position: absolute;
		 z-index: -1;
		 top: -16px;
		 right: -16px;
		 background: #00838d;
		 height: 32px;
		 width: 32px;
		 border-radius: 32px;
		 transform: scale(1);
		 transform-origin: 50% 50%;
		 transition: transform 0.25s ease-out;
	 }

	&:hover:before {

		 transform: scale(25);
	 }
	}

	.card1:hover {
	p {
		transition: all 0.3s ease-out;
		color: rgba(255, 255, 255, 0.8);
	}
	h4 {
		transition: all 0.3s ease-out;
		color: #ffffff;
	}
	}

	.card2 {
		display: block;
		top: 0px;
		position: relative;
		max-width: 262px;
		background-color: #f2f8f9;
		border-radius: 4px;
		padding: 32px 24px;
		margin: 12px;
		text-decoration: none;
		z-index: 0;
		overflow: hidden;
		border: 1px solid #f2f8f9;

	&:hover {
		 transition: all 0.2s ease-out;
		 box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
		 top: -4px;
		 border: 1px solid #cccccc;
		 background-color: white;
	 }

	&:before {
		 content: "";
		 position: absolute;
		 z-index: -1;
		 top: -16px;
		 right: -16px;
		 background: #00838d;
		 height: 32px;
		 width: 32px;
		 border-radius: 32px;
		 transform: scale(2);
		 transform-origin: 50% 50%;
		 transition: transform 0.15s ease-out;
	 }

	&:hover:before {
		 transform: scale(2.15);
	 }
	}

	.card3 {
		display: block;
		top: 0px;
		position: relative;
		max-width: 100%;
		background-color: #f2f8f9;
		border-radius: 4px;
		padding: 32px 24px;
		margin: 12px;
		text-decoration: none;
		overflow: hidden;
		border: 1px solid #f2f8f9;

	.go-corner {
		opacity: 0.7;
	}

	&:hover {
		 border: 1px solid #00838d;
		 box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
		 z-index: 500;
	 }
	}

	.card3:hover {
	p{color: #00838d}
	.go-corner {
		transition: opactiy 0.3s linear;
		opacity: 1;
	}
	}

	.card4 {
		display: block;
		top: 0px;
		position: relative;
		max-width: 262px;
		background-color: #ffffff;
		border-radius: 4px;
		padding: 32px 24px;
		margin: 12px;
		text-decoration: none;
		overflow: hidden;
		border: 1px solid #cccccc;

	.go-corner {
		background-color: #00838d;
		height: 100%;
		width: 16px;
		padding-right: 9px;
		border-radius: 0;
		transform: skew(6deg);
		margin-right: -36px;
		align-items: start;
		background-image: linear-gradient(-45deg, #8F479A 1%, #DC2A74 100%);
	}

	.go-arrow {
		transform: skew(-6deg);
		margin-left: -2px;
		margin-top: 9px;
		opacity: 0;
	}

	&:hover {
		 border: 1px solid #CD3D73;
	 }

	h3 {margin-top: 8px;}
	}

	.card4:hover {
	.go-corner {
		margin-right: -12px;
	}
	.go-arrow {
		opacity: 1;
	}
	}
</style>
