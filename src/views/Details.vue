<template>
	<div id="content" class="main-content">
		<div class="layout-px-spacing">
			<div class="row layout-spacing">
				<!-- Content -->
				<div class="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">

					<div class="user-profile layout-spacing">
						<div class="widget-content widget-content-area">
							<div class="d-flex justify-content-between">
								<h3 class="">Info</h3>
								<a href="user_account_setting.html" class="mt-2 edit-profile">
									<svg xmlns="http://www.w3.org/2000/svg"
										 width="24"
										 height="24"
										 viewBox="0 0 24 24"
										 fill="none"
										 stroke="currentColor"
										 stroke-width="2"
										 stroke-linecap="round"
										 stroke-linejoin="round"
										 class="feather feather-edit-3">
										<path d="M12 20h9"></path>
										<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
								</a>
							</div>
							<div class="text-center user-info">
								<img src="@/assets/img/90x90.jpg" alt="avatar">
								<p class="">{{getAffiliateDetails.user.first_name}} {{getAffiliateDetails.user.last_name}}</p>
							</div>
							<div class="user-info-list">
								<div class="">
									<ul class="contacts-block list-unstyled">

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

										<li class="contacts-block__item">
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
										<li class="contacts-block__item">
											<a>{{ getAffiliateDetails.bitly_link.link }}</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>


<!--					<div class="work-experience layout-spacing ">-->

<!--						<div class="widget-content widget-content-area">-->

<!--							<h3 class="">Work Experience</h3>-->

<!--							<div class="timeline-alter">-->

<!--								<div class="item-timeline">-->
<!--									<div class="t-meta-date">-->
<!--										<p class="">04 Mar 2009</p>-->
<!--									</div>-->
<!--									<div class="t-dot">-->
<!--									</div>-->
<!--									<div class="t-text">-->
<!--										<p>Netfilx Inc.</p>-->
<!--										<p>Designer Illustrator</p>-->
<!--									</div>-->
<!--								</div>-->

<!--								<div class="item-timeline">-->
<!--									<div class="t-meta-date">-->
<!--										<p class="">25 Apr 2014</p>-->
<!--									</div>-->
<!--									<div class="t-dot">-->
<!--									</div>-->
<!--									<div class="t-text">-->
<!--										<p>Google Inc.</p>-->
<!--										<p>Designer Illustrator</p>-->
<!--									</div>-->
<!--								</div>-->

<!--								<div class="item-timeline">-->
<!--									<div class="t-meta-date">-->
<!--										<p class="">04 Apr 2018</p>-->
<!--									</div>-->
<!--									<div class="t-dot">-->
<!--									</div>-->
<!--									<div class="t-text">-->
<!--										<p>Design Reset Inc.</p>-->
<!--										<p>Designer Illustrator</p>-->
<!--									</div>-->
<!--								</div>-->

<!--							</div>-->
<!--						</div>-->

<!--					</div>-->

				</div>

				<div class="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">

					<div class="row mb-5" >
						<div class="col-md-6">
							<div class="widget widget-card-four" >
								<div class="widget-content">
									<div class="w-content">
										<div class="w-info">
											<p class="text-6 text-danger" v-if="getAffiliateDetails.personal_sales.length < 3">Personal Sales Status <b>( Inactive )</b></p>
											<p class="text-6 text-success" v-else>Personal Sales Status <b>( Active )</b></p>
											<hr>
										</div>

									</div>
									<div class="progress-order-body">
										<div class="row mt-1">
											<div class="col-md-12">
												<ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">
													<li class="list-inline-item chat-online-usr" v-for="sale in getAffiliateDetails.personal_sales.length">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>
													<p class="text-4 mt-1"><strong>{{getAffiliateDetails.personal_sales.length}} Personal Sales</strong></p>
												</ul>
											</div>
											<div class="col-md-12 text-right">
												<div class="progress p-o-progress mt-2">
													<div  v-if="getAffiliateDetails.personal_sales.length < 3" class="progress-bar bg-danger"
														 role="progressbar" :style="'width:'+qSalesPercentage+'%'"
														 :aria-valuenow="qSalesPercentage" aria-valuemin="0" aria-valuemax="100">
													</div>
													<div  v-else class="progress-bar bg-success"
														  role="progressbar" :style="'width:'+qSalesPercentage+'%'"
														  :aria-valuenow="qSalesPercentage" aria-valuemin="0" aria-valuemax="100">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div v-if="bronze()" class="widget widget-card-four" >
								<div class="widget-content">
									<div class="w-content">
										<div class="w-info">
											<p class="text-6 text-danger">Group Sales Status <b>( Bronze )</b></p>
											<hr>
										</div>

									</div>
									<div class="progress-order-body">
										<div class="row mt-1">
											<div class="col-md-12">
												<ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

													<li class="list-inline-item chat-online-usr" v-for="sale in getAffiliateDetails.group_sales_counts">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>

													<p class="text-4 mt-1"><strong>{{getAffiliateDetails.group_sales_counts}} Group Sales</strong></p>
												</ul>
											</div>
											<div class="col-md-12 text-right">
												<div class="progress p-o-progress mt-2">

													<div class="progress-bar bg-danger"
														 role="progressbar" :style="'width:'+bronzePercentage+'%'"
														 :aria-valuenow="bronzePercentage" aria-valuemin="0" aria-valuemax="100">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="silver()" class=" silver widget widget-card-four" >
								<div class="widget-content">
									<div class="w-content">
										<div class="w-info">
											<p class="text-6 text-white">Group Sales Status <b>( Silver )</b></p>
											<hr>
										</div>

									</div>
									<div class="progress-order-body">
										<div class="row mt-1">
											<div class="col-md-12">
												<ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

													    <li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item chat-online-usr" v-for="sale in 10">
															<img alt="avatar" src="@/assets/img/90x90.jpg">
														</li>
														<li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item badge-notify mr-0">
															<div class="notification">
																<span class="badge badge-info badge-pill">+{{groupMore}} more</span>
															</div>
														</li>

														<li v-show="getAffiliateDetails.group_sales_counts <= 10" class="list-inline-item chat-online-usr" v-for="sale in getAffiliateDetails.group_sales_counts">
															<img alt="avatar" src="@/assets/img/90x90.jpg">
														</li>

													<p class="text-4 mt-1 text-white"><strong>{{getAffiliateDetails.group_sales_counts}} Group Sales</strong></p>
												</ul>
											</div>
											<div class="col-md-12 text-right">
												<div class="progress p-o-progress mt-2">
													<div class="progress-bar bg-danger"
														 role="progressbar" :style="'width:'+goldPercentage+'%'"
														 :aria-valuenow="goldPercentage" aria-valuemin="0" aria-valuemax="100">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="gold()" class=" gold widget widget-card-four" >
								<div class="widget-content">
									<div class="w-content">
										<div class="w-info">
											<p class="text-6 text-dark">Group Sales Status <b>( Gold )</b></p>
											<hr>
										</div>
									</div>
									<div class="progress-order-body">
										<div class="row mt-1">
											<div class="col-md-12">
												<ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

													<li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item chat-online-usr" v-for="sale in 10">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>
													<li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item badge-notify mr-0">
														<div class="notification">
															<span class="badge badge-info badge-pill">+{{groupMore}} more</span>
														</div>
													</li>
													<li v-show="getAffiliateDetails.group_sales_counts <= 10" class="list-inline-item chat-online-usr" v-for="sale in getAffiliateDetails.group_sales_counts">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>
													<p class="text-4 mt-1 text-dark"><strong>{{getAffiliateDetails.group_sales_counts}} Group Sales</strong></p>
												</ul>
											</div>
											<div class="col-md-12 text-right">
												<div class="progress p-o-progress mt-2">
													<div class="progress-bar bg-danger"
														 role="progressbar" :style="'width:'+silverPercentage+'%'"
														 :aria-valuenow="silverPercentage" aria-valuemin="0" aria-valuemax="100">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="ruby()" class="ruby widget widget-card-four" >
								<div class="widget-content">
									<div class="w-content">
										<div class="w-info">
											<p class="text-6 text-dark">Group Sales Status <b>( Gold )</b></p>
											<hr>
										</div>
									</div>
									<div class="progress-order-body">
										<div class="row mt-1">
											<div class="col-md-12">
												<ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

													<li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item chat-online-usr" v-for="sale in 10">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>
													<li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item badge-notify mr-0">
														<div class="notification">
															<span class="badge badge-info badge-pill">+{{groupMore}} more</span>
														</div>
													</li>
													<li v-show="getAffiliateDetails.group_sales_counts <= 10" class="list-inline-item chat-online-usr" v-for="sale in getAffiliateDetails.group_sales_counts">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>
													<p class="text-4 mt-1 text-dark"><strong>{{getAffiliateDetails.group_sales_counts}} Group Sales</strong></p>
												</ul>
											</div>
											<div class="col-md-12 text-right">
												<div class="progress p-o-progress mt-2">
													<div class="progress-bar bg-danger"
														 role="progressbar" :style="'width:'+rubyPercentage+'%'"
														 :aria-valuenow="rubyPercentage" aria-valuemin="0" aria-valuemax="100">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="diamond()" class=" diamond widget widget-card-four" >
								<div class="widget-content">
									<div class="w-content">
										<div class="w-info">
											<p class="text-6 text-dark">Group Sales Status <b>( Diamond )</b></p>
											<hr>
										</div>
									</div>
									<div class="progress-order-body">
										<div class="row mt-1">
											<div class="col-md-12">
												<ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

													<li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item chat-online-usr" v-for="sale in 10">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>
													<li v-show="getAffiliateDetails.group_sales_counts > 10" class="list-inline-item badge-notify mr-0">
														<div class="notification">
															<span class="badge badge-info badge-pill">+{{groupMore}} more</span>
														</div>
													</li>
													<li v-show="getAffiliateDetails.group_sales_counts <= 10" class="list-inline-item chat-online-usr" v-for="sale in getAffiliateDetails.group_sales_counts">
														<img alt="avatar" src="@/assets/img/90x90.jpg">
													</li>
													<p class="text-4 mt-1 text-dark"><strong>{{getAffiliateDetails.group_sales_counts}} Group Sales</strong></p>
												</ul>
											</div>
											<div class="col-md-12 text-right">
												<div class="progress p-o-progress mt-2">
													<div class="progress-bar bg-danger"
														 role="progressbar" :style="'width:'+diamondPercentage+'%'"
														 :aria-valuenow="diamondPercentage" aria-valuemin="0" aria-valuemax="100">
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="bio layout-spacing ">
						<div class="widget-content widget-content-area">
							<h3 class="">Affiliates</h3>

							<div class="bio-skill-box">

								<div class="row">

									<div class="col-md-4">

									</div>

									<div class="col-md-4 ">

										<div class="d-flex b-skills text-center">
											<div>
											</div>
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
										<div class="card mt-5" @click.prevent="replaceRoute(af.user_id)">
											<div class="card-body text-center">
												<h5>{{af.username}}</h5>
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
export default {
	data() {
		return{
			title:' Affiliates Details',
		    name: this.$route.params.name
		}
	},
	created() {
		this.init()
	},
	computed: {
		...mapGetters([
			'getAffiliateDetails',
			'getUserDetails',
			'getCashBonuses'
		]),
		groupMore() {
			return this.getAffiliateDetails.group_sales_counts - 10
		},
		qSalesPercentage() {
			let num = this.getAffiliateDetails.personal_sales.length
			let per = 3
			return num / (per / 100);
		},
		bronzePercentage() {

			let num = this.getAffiliateDetails.group_sales_counts
			let per = 12
			return num / (per / 100);
		},
		silverPercentage() {
			let num = this.getAffiliateDetails.group_sales_counts
			let per = 36
			return num / (per / 100);
		},
		goldPercentage() {
			let num = this.getAffiliateDetails.group_sales_counts
			let per = 108
			return num / (per / 100);
		},
		rubyPercentage() {
			let num = this.getAffiliateDetails.group_sales_counts
			let per = 324
			return num / (per / 100);
		},
		diamondPercentage() {
			let num = this.getAffiliateDetails.group_sales_counts
			let per = 972
			return num / (per / 100);
		}
		
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
			this.$store.dispatch('GET_USER_CASHBONUS', affiliateId)
		},
		replaceRoute(value) {
			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		},
		goToDetails(value) {
			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		},
		updateInformation(value) {

		},
		bronze() {
			if (this.getAffiliateDetails.group_sales_counts < 12) {
				return true
			}
			return false
		},
		silver() {
			if (this.getAffiliateDetails.group_sales_counts < 36 && this.getAffiliateDetails.group_sales_counts >= 12) {
				return true
			}
			return false
		},
		gold() {
			if (this.getAffiliateDetails.group_sales_counts < 108 && this.getAffiliateDetails.group_sales_counts >= 36) {
				return true
			}
			return false
		},
		ruby() {
			if (this.getAffiliateDetails.group_sales_counts < 324 && this.getAffiliateDetails.group_sales_counts >= 108) {
				return true
			}
			return false
		},
		diamond() {
			if (this.getAffiliateDetails.group_sales_counts < 972  && this.getAffiliateDetails.group_sales_counts >= 324) {
				return true
			}
			return false
		},
		diamondRepeat() {
			if (this.getAffiliateDetails.group_sales_counts >= 972) {
				return true
			}
			return false
		},
		percentage(partialValue, totalValue) {
		   return (100 * partialValue) / totalValue;
		} 

	}
}
</script>
<style lang="scss">

$silver: #bfbfbf !important;
$bronze: #cd7f32 !important;
$gold: #FFD700 !important;
$ruby: #e0115f !important;
$diamond:  #b9f2ff !important;


.silver {
	background:  $silver;
}
.bronze {
	background: $bronze;
}
.gold {
	background: $gold;
}
.ruby {
	background: $ruby;
}
.diamond {
	background: $diamond;
}

ul.simple-bullet-list li.diamond-dot:before {
	border-color: $diamond;
}

ul.simple-bullet-list li.ruby-dot:before {
	border-color: $ruby;
}

ul.simple-bullet-list li.gold-dot:before {
	border-color: $gold;
}

ul.simple-bullet-list li.silver-dot:before {
	border-color: $silver;
}

ul.simple-bullet-list li.bronze-dot:before {
	border-color: $bronze;
}

.card-status {
	border: 3px solid #f03434;
}

.h2 {
	font-size: 20px !important;
	font-weight: bold;
	color: #3498db;
}

.h1 {
	font-size: 20px !important;
	font-weight: bold;
	color: #ffffff !important;
}

.hdescriprion {
	font-size: 19px !important;
	color: #000000;
}


</style>

