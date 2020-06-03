<template>
<section role="main" class="content-body">

					<header class="page-header">
						<h2>User Profile</h2>
					
						<div class="right-wrapper text-right">
							<ol class="breadcrumbs">
								<li>
									<a href="index.html">
										<i class="fas fa-home"></i>
									</a>
								</li>
								<li><span>Dashboard</span></li>
								<li><span>User Profile</span></li>
							</ol>
					
							<a class="sidebar-right-toggle" data-open="sidebar-right"><i class="fas fa-chevron-left"></i></a>
						</div>
					</header>

					<!-- start: page -->

					<div class="row">
						<div class="col-lg-4 col-xl-3 mb-4 mb-xl-0">

							<section class="card">
								<div class="card-body">
									<div class="thumb-info mb-3">
										<img src="img/!logged-user.jpg" class="rounded img-fluid" alt="John Doe">
										<div class="thumb-info-title">
											<span class="thumb-info-inner">{{getAffiliateDetails.user.first_name}}</span>
											<span class="thumb-info-type">MCC</span>
										</div>
									</div>
<!-- 
									<div class="widget-toggle-expand mb-3">
										<div class="widget-header">
											<h5 class="mb-2">Profile Completion</h5>
											<div class="widget-toggle">+</div>
										</div>
										<div class="widget-content-collapsed">
											<div class="progress progress-xs light">
												<div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
													60%
												</div>
											</div>
										</div>
										<div class="widget-content-expanded">
											<ul class="simple-todo-list mt-3">
												<li class="completed">Update Profile Picture</li>
												<li class="completed">Change Personal Information</li>
												<li>Update Social Media</li>
												<li>Follow Someone</li>
											</ul>
										</div>
									</div>

									<hr class="dotted short">

									<h5 class="mb-2 mt-3">About</h5>
									<p class="text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis vulputate quam. Interdum et malesuada</p>
									<div class="clearfix">
										<a class="text-uppercase text-muted float-right" href="#">(View All)</a>
									</div>

									<hr class="dotted short"> -->

									

								</div>
							</section>

							<section class="card">
								<header class="card-header">

									<h2 class="card-title">
										<span class="va-middle"> Personal Sales</span>
									</h2>
								</header>
								<div class="card-body pb-1" v-for="sale in getAffiliateDetails.personal_sales">
									<div class="content" >
										<ul class="simple-user-list">
											<li >
												<figure class="image rounded">
													<img width="40px" src="@/assets/ebook.png">
												</figure>
												<span class="title">{{sale.purchaser_name}}  -  <small>{{sale.date}}</small></span>
												<span class="message truncate">{{sale.purchaser_name}} purchased ebook using your affiliate id.</span>
											</li>
										</ul>
									</div>
								</div>
							</section>
							<section class="card">
								<header class="card-header">

									<h2 class="card-title">
										<span class="va-middle">Group Sales</span>
									</h2>
								</header>
								<div class="card-body pb-1" v-for="sale in getAffiliateDetails.sales">
									<div class="content" >
										<ul class="simple-user-list">
											<li >
												<figure class="image rounded">
													<img width="40px" src="@/assets/ebook.png">
												</figure>
												<span class="title">{{sale.purchaser_name}}  -  <small>{{sale.date}}</small></span>
												<span class="message truncate">{{sale.purchaser_name}} purchased ebook using affiliate {{sale.affiliate_id}}.</span>
											</li>
										</ul>
									</div>
								</div>
							</section>

						</div>
						<div class="col-lg-8 col-xl-6">

							<div class="tabs">
								<ul class="nav nav-tabs tabs-primary">
									<li class="nav-item active">
										<a class="nav-link" href="#overview" data-toggle="tab">Overview</a>
									</li>
								</ul>
								<div class="tab-content">
									<div id="overview" class="tab-pane active">

										<div>
											<h4 class="mb-3 pt-4">Affiliates</h4>
											<div class="row">
												<div class="col-md-4"></div>
												<div class="col-md-4">
													<section class="card card-featured">
														<header class="card-header text-center">
															<h2 class="card-title">{{getAffiliateDetails.user.first_name}}</h2>
														</header>
													</section>
												</div>
												<div class="col-md-4"></div>
											</div>
											 <div class="row">
												<div class="col-md-1"></div>
												<a href="#" class="col-md-3" v-for="af in getAffiliateDetails.affiliate" @click.prevent="replaceRoute(af.user_id)">
													<section class="card " style="margin-top: 50px;" >
														<div class="card-header  text-center">
															<h4>{{af.username}}</h4>
														</div>
													</section>
												</a>
												<div class="col-md-1"></div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-3">

							<h4 class="mb-3 mt-0">Sale Stats</h4>
							<ul class="simple-card-list mb-3">
								<li class="primary">
									<h3>{{getAffiliateDetails.personal_sales.length}}</h3>
									<p class="text-light">Personal Sales</p>
								</li>
								<li class="primary">
									<h3>$0</h3>
									<p class="text-light">Group Sales</p>
								</li>
							<!-- 	<li class="primary">
									<h3>16</h3>
									<p class="text-light">Nullam quris ris.</p>
								</li> -->
							</ul>

							<h4 class="mb-3 mt-4 pt-2">Personal Sales Status</h4>
							<ul class="simple-bullet-list mb-3">
								<li class="red">
									<span class="title">Bronze</span>
									<span class="description truncate">12 Group sales</span>
								</li>
								<li class="green">
									<span class="title">Silver</span>
									<span class="description truncate">26 Group sales</span>
								</li>
								<li class="blue">
									<span class="title">Gold</span>
									<span class="description truncate">108 Group sales</span>
								</li>
								<li class="orange">
									<span class="title">Ruby</span>
									<span class="description truncate">304 Group sales</span>
								</li>
								<li class="orange">
									<span class="title">Dianmond</span>
									<span class="description truncate">927 Group sales</span>
								</li>
							</ul>

							</div>

					</div>
					<!-- end: page -->
				</section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return{
			title:' Affiliates Details',
		}
	},
	created() {
		this.init()
	},
	computed: {
		...mapGetters([
			'getAffiliateDetails',
			'getUserDetails'
		])
	},
	methods: {
		init() {
			var affiliateId = this.$route.params.id
			this.$store.dispatch('AFFILIATE_DETAILS', affiliateId)
			this.$store.dispatch('GET_USER_DETAILS')
		},
		replaceRoute(value) {
			var affiliateId = value
			this.$store.dispatch('AFFILIATE_DETAILS', affiliateId)
			this.$store.dispatch('GET_USER_DETAILS')
		},
		goToDetails(value) {
			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		},
		updateInformation(value) {

		}
	}
}
</script>