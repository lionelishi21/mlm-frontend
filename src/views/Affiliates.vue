<template>
<section role="main" class="content-body">
		<header class="page-header">
			<h2>Affliates </h2>
		
			<div class="right-wrapper text-right">
				<ol class="breadcrumbs">
					<li>
						<a href="index.html">
							<i class="fas fa-home"></i>
						</a>
					</li>
					<li><span>Dashboard</span></li>
					<li><spand>Affiliates</spand></li>
				</ol>
				<a class="sidebar-right-toggle" data-open="sidebar-right"><i class="fas fa-chevron-left"></i></a>
			</div>
		</header>
	<div class="row pt-4 mt-1">
			<div class="col-xl-12">
				<section class="card">
					<header class="card-header card-header-transparent">
						<div class="card-actions">
							<a href="#" class="card-action card-action-toggle" data-card-toggle></a>
							<a href="#" class="card-action card-action-dismiss" data-card-dismiss></a>
						</div>
						<h2 class="card-title">All Affiliates</h2>
					</header>

					<div class="card-body">
						<table class="table table-responsive-md table-striped mb-0">
							<thead>
								<tr class="text-6">
									<th>Name</th>
									<th>Email</th>
									<th>Affilate ID</th>
									<th>Sales</th>
									<th>Status</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="affiliate in getAffiliates.response">
									<td><a @click="goToDetails(affiliate.user_id)" href="#">{{affiliate.name}}</a></td>
									<td>{{affiliate.email}}</td>
									<td>{{affiliate.affiliate_id}}</td>
									<td>{{affiliate.sales}}</td>
									<td>
										<span v-if="affiliate.status === 'Active'" class="badge badge-success text-5" >
											{{affiliate.status}}
									     </span>
									     <span v-else class="badge btn-danger text-5 text-white" >
											{{affiliate.status}}
									     </span>
									</td>

									<td>
										<button @click="goToDetails(affiliate.user_id)" class="btn btn-primary"> 
											<i class="fa fa-eye"></i>
									    </button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="card-footer">
						<h5>
							<!-- After Diamond Completes, counter restarts from zero (0) to 12 each continus cycle -->
					    </h5>
					</div>
				</section>
			</div>
		</div>
</section>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			title: 'Affiliates'
		}
	},
	computed: {
		...mapGetters([
			'getAffiliates'
		])
	},
	created() {
		this.$store.dispatch('FETCH_AFFILIATES')
	},
	methods: {
		goToDetails(value) {

			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		}
	}
}
</script>
<style>
	.badge-success {
		background: #44bd32;		
	}
</style>