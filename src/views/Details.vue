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
										<img src="@/assets/img/logged-user.jpg" class="rounded img-fluid" alt="John Doe">
										<div class="thumb-info-title">
											<span class="thumb-info-inner">{{getAffiliateDetails.user.first_name}}</span>
											<span class="thumb-info-type">MCC</span>
										</div>
									</div>
									<hr class="dotted short">
								</div>
							</section>

							<section class="card">
								<header class="card-header">
									<h1 class="card-title">
										<span class="va-middle"><strong>Personal Sales</strong></span>
									</h1>
								</header>
								<div class="card-body pb-1" v-for="sale in getAffiliateDetails.personal_sales">
									<div class="content" >
										<ul class="simple-user-list">
											<li >
												<figure class="image rounded">
													<img width="40px" src="@/assets/ebook.png">
												</figure>
												<span class="title text-5"><strong>{{sale.purchaser_name}}  -  <small>{{sale.date}}</small></strong></span>
												<span class="message truncate text-4">{{sale.purchaser_name}} purchased ebook using your affiliate id.</span>
											</li>
										</ul>
									</div>
								</div>
							</section>
							<section class="card">
								<header class="card-header">

									<h1 class="card-title">
										<span class="va-middle"><strong>Group Sales </strong></span>
									</h1>
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
											<!-- <h4 class="mb-3 pt-4 text-6">Affiliates</h4> -->
											<div class="row">
												<div class="col-md-4"></div>
												<div class="col-md-4">
													<section class="card card-featured"">
														<header class="card-header text-center">
															<h2 class="card-title">{{getAffiliateDetails.user.first_name}}</h2>
														</header>
													</section>
												</div>
												<div class="col-md-4"></div>
											</div>
											 <div class="row">
												<a href="#" class="col-md-4" v-for="af in getAffiliateDetails.affiliate" @click.prevent="replaceRoute(af.user_id)">
													<section class="card " style="margin-top: 50px;" >
														<div class="card-header text-center p-2">
															<h4 class="text-6"><small>{{af.username}}</small></h4>
														</div>
													</section>
												</a>
											</div>
										</div>

									</div>
								</div>
							</div>

							<div class="tabs">
								<ul class="nav nav-tabs tabs-primary">
									<li class="nav-item active">
										<a class="nav-link" href="#overview" data-toggle="tab">Cash Bonese</a>
									</li>
								</ul>
								<div class="tab-content">
									<div id="overview" class="tab-pane active">
										<div>
											<!-- <h4 class="mb-3 pt-4 text-6">Affiliates</h4> -->
											<div class="row" >
												<div class="col-md-12">
														<section>
														<table class="table table-responsive-md mb-0" style="border-top: 0px">
															   <tbody >
																	 <tr class="custom-table" v-for="cash in getCashBonuses">
																		<!-- <td><p class="text-4"><b>{{cash.created_at}}</b></p></td> -->
																		<!-- <td><p class="text-4"><b>{{cash.user.last_name}}</b></p></td> -->
																		<td><p class="text-4"><span class="badge badge-primary text-4"><strong>{{cash.status}}</strong></span></p></td>
																		<td><p class="text-4"><b>{{cash.cash_bonus_amount | currency}}</b></p></td>
																		<td><p class="text-4"><b>{{cash.created_at}}</b></p></td>
																		
																	</tr>
																</tbody>
														  </table>
													</section>
												</div>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-3">

							<h4 class="mb-3 mt-0 text-6">Sales Status</h4>
							<ul class="simple-card-list mb-3">
								
								<li v-if="getAffiliateDetails.personal_sales.length < 3" class="danger">
									<h3 class="text-white "><i>{{getAffiliateDetails.personal_sales.length}}</i></h3>
									<span class="h1"><strong>Personal Sales  ( Inactive )</strong></span>
								</li>
								<li v-else class="success">
									<h3  class="text-white">{{getAffiliateDetails.personal_sales.length}}</h3>
									<span class="h1"><strong>Personal Sales ( Active )</strong></span>
								</li>
								


								<li class="bronze" v-if="bronze()">
									
									<h3 class="text-white">{{getAffiliateDetails.group_sales_counts}}</h3>
									<span class="h1"><strong>Group Sales ( Bronze )</strong></span>

								    <div class="widget-content-collapsed mt-1">
										<div class="progress progress-xs light">
											<div class="progress-bar" role="progressbar" :aria-valuenow="getAffiliateDetails.group_sales_counts" aria-valuemin="0" 
											aria-valuemax="36" :style="{ width: percentage(getAffiliateDetails.group_sales_counts, 12) + '%'}">
												
											</div>
										</div>
									</div>
								</li>


								<li class="silver" v-if="silver()">
									<h3 class="text-white">{{getAffiliateDetails.group_sales_counts}}</h3>
									<span class="h1"><strong>Group Sales ( Sliver )</strong></span>
									 <div class="widget-content-collapsed mt-1">
										<div class="progress progress-xs light">
											<div class="progress-bar" role="progressbar" :aria-valuenow="getAffiliateDetails.group_sales_counts" aria-valuemin="36" 
											aria-valuemax="108" :style="{ width: percentage(getAffiliateDetails.group_sales_counts, 36) + '%'}">
												
											</div>
										</div>
									</div>
								</li>

								<li class="gold" v-if="gold()">
									<h3 class="text-white">{{getAffiliateDetails.group_sales_counts}}</h3>
									<span class="h1"><strong>Group Sales ( Gold )</strong></span>
									 <div class="widget-content-collapsed mt-1">
										<div class="progress progress-xs light">
											<div class="progress-bar" role="progressbar" :aria-valuenow="getAffiliateDetails.group_sales_counts" aria-valuemin="108" 
											aria-valuemax="324" :style="{ width: percentage(getAffiliateDetails.group_sales_counts, 108) + '%'}">
												
											</div>
										</div>
									</div>
								</li>

								<li class="ruby" v-if="ruby()">
									<h3 class="text-white">{{getAffiliateDetails.group_sales_counts}}</h3>
									<span class="h1"><strong>Group Sales ( Ruby)</strong></span>
									 <div class="widget-content-collapsed mt-1">
										<div class="progress progress-xs light">
											<div class="progress-bar" role="progressbar" :aria-valuenow="getAffiliateDetails.group_sales_counts" aria-valuemin="324" 
											aria-valuemax="972" :style="{ width: percentage(getAffiliateDetails.group_sales_counts, 324) + '%'}">
												
											</div>
										</div>
									</div>
								</li>

								<li class="diamond" v-if="diamond()">
									<h3 class="text-dark">{{getAffiliateDetails.group_sales_counts}}</h3>
									<span class="h1 text-dark"><strong><b>Group Sales ( Diamond )</b></strong></span>
								</li>


								<li class="diamond" v-if="diamondRepeat()">
									<h3 class="text-dark">{{getAffiliateDetails.group_sales_counts}}</h3>
									<span class="h1 text-dark"><strong><b>Group Sales ( Diamond Repeat )</b></strong></span>
								</li>
							<!-- 	<li class="primary">
									<h3>16</h3>
									<p class="text-light">Nullam quris ris.</p>
								</li> -->
							</ul>

							<h4 class="mb-3 mt-4 pt-2 text-6">Personal Sales Status</h4>
							<ul class="simple-bullet-list mb-3">

								<div  v-if="bronze()" class="card card-status mb-0 pb-0">
									<div class="card-body p-2 mt-0">
										<li class="bronze-dot mt-2">
											<span class="h2">Bronze    </span>
											<span class="hdescriprion"><small>   <i>12 Group sales</i></small></span>
										</li>
									</div>
								</div>
								<div  v-else class="card mb-0 pb-0">
									<div class="card-body p-2 mt-0">
										<li class="bronze-dot mt-2">
												<span class="h2">Bronze    </span>
											<span class="hdescriprion"><small>   <i>12 Group sales</i></small></span>
										</li>
									</div>
								</div>

								<div v-if="silver()" class="card mt-2 card-status"  >
									<div class="card-body p-2 mt-0">
										<li class="silver-dot mt-2">
											<span class="h2">Silver   </span>
											<span class="hdescriprion">  <small> <i>  36 Group sales</i> </small></span>
										</li>
									</div>
								</div>
								<div v-else class="card mt-2" >
									<div class="card-body p-2 mt-0">
										<li class="silver-dot mt-2">
											<span class="h2">Silver    </span>
											<span class="hdescriprion"><small><i>  36 Group sales</i> </small></span>
										</li>
									</div>
								</div>


								<div v-if="gold()" class="card mt-2 card-status">
									<div class="card-body p-2 mt-0">
										<li class="gold-dot mt-2">
											<span class="h2">Gold  </span>
											<span class="hdescriprion"> <small> <i>  108 Group sales </i></small></span>
										</li>
									</div>
								</div>
								<div v-else class="card mt-2">
									<div class="card-body p-2 mt-0">
										<li class="gold-dot mt-2">
											<span class="h2">Gold  </span>
											<span class="hdescriprion"> <small><i>  108 Group sales </i></small></span>
										</li>
									</div>
								</div>

								<div v-if="ruby()" class="card mt-2 card-status">
									<div class="card-body p-2 mt-0">
										<li class="ruby-dot mt-2">
											<span class="h2">Ruby  </span>
											<span class="hdescriprion"> <small> <i>  324 Group sales </i></small></span>
										</li>
									</div>
								</div>
								<div v-else class="card mt-2">
									<div class="card-body p-2 mt-0">
										<li class="ruby-dot mt-2">
											<span class="h2">Ruby  </span>
											<span class="hdescriprion"><small><i>  324 Group sales </i></small></span>
										</li>
									</div>
								</div>

								<div v-if="diamond()" class="card mt-2 card-status">
									<div class="card-body p-2 mt-0">
										<li class="diamond-dot mt-2">
											<span class="h2">Diamond  </span>
											<span class="hdescriprion"> <small> <i>  972 Group sales </i></small></span>
										</li>
									</div>
								</div>
								<div v-else class="card mt-2">
									<div class="card-body p-2 mt-0">
										<li class="diamond-dot mt-2">
											<span class="h2">Diamond </span>
											<span class="hdescriprion"> <small> <i>  972 Group sales </i></small></span>
										</li>
									</div>
								</div>
								<div v-if="diamondRepeat()" class="card mt-2 card-status">
									<div class="card-body p-2 mt-0">
										<li class="diamond-dot mt-2">
											<span class="h2">Diamond <small>Repeat</small>  </span>
											<span class="hdescriprion"> <small> <i>  12 Group sales </i></small></span>
										</li>
									</div>
								</div>
								<div v-else class="card mt-2">
									<div class="card-body p-2 mt-0">
										<li class="diamond-dot mt-2">
											<span class="h2">Diamond <small>Repeat</small> </span>
											<span class="hdescriprion"> <small> <i>  12 Group sales </i></small></span>
										</li>
									</div>
								</div>
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
		
	},
	 beforeRouteUpdate(to, from, next) {
	    this.name = to.params.name
	    next()
	    this.init()
	  },
	methods: {
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

$silver: #bfbfbf;
$bronze: #cd7f32;
$gold: #FFD700;
$ruby: #e0115f;
$diamond:  #b9f2ff;

.silver {
	background: $silver;
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