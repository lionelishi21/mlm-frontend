<template>
	<div id="content" class="main-content">
		<div class="vld-parent">
			<loading :active.sync="isLoading"
					 :can-cancel="true"
					 :on-cancel="onCancel"
					 :is-full-page="fullPage"></loading>
		</div>

		<div class="layout-px-spacing">
				<div class="col-lg-12">
					<div class="widget-content searchable-container list">
						<div class="row layout-top-spacing layout-spacing">
							<div class="col-lg-12">
								<div class="statbox widget box box-shadow">
									<div class="widget-header">
										<div class="row">
											<div class="col-xl-12 col-md-12 col-sm-12 col-12">
												<h4>All Affliates</h4>
											</div>
										</div>
									</div>
									<div class="widget-content widget-content-area">
										<div class="table-responsive mb-4">
											<table id="style-3" class="table style-3 table-hover">
												<thead>
												<tr>
														<th>Record Id</th>
													<th>Name</th>
													<th>Affiliate Id</th>
													<th>Email</th>
													<th>Sales.</th>
													<th class="text-center">Status</th>
													<th class="text-center">Action</th>
												</tr>
												</thead>
												<tbody>
												<tr v-for="affiliate in getAffiliates.response" class="items">
													<th>{{affiliate.user_id}}</th>
													<td>{{affiliate.name}}</td>
													<td>{{affiliate.affiliate_id}}</td>
													<td>{{affiliate.email}}</td>
													<td>{{affiliate.sales}}</td>
													<td class="text-center">
														<span v-if="affiliate.status == 'Active'" class="shadow-none badge outline-badge-success">Active</span>
														<span v-else class="shadow-none badge badge-danger">Inactive</span>
													</td>
													<td class="text-center">
														<button  @click="goToDetails(affiliate.user_id)" class="btn btn-outline-primary">view</button>
													</td>
											    	</tr>

												</tbody>
											</table>
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

	import Loading from 'vue-loading-overlay';
import { mapGetters } from 'vuex';
export default {
	components: {
		Loading
	},
	data() {
		return {
			title: 'Affiliates',
			isLoading: false,
			fullPage: true,
		}
	},
	computed: {
		...mapGetters([
			'getAffiliates'
		])
	},
	mounted() {

		this.datatable()
		let self = this
		this.$nextTick(() => {
			self.datatable()
		})
	},
	created() {
		this.isLoading = true
		this.$store.dispatch('FETCH_AFFILIATES')
			.then( response => {
				console.log(response)
				this.isLoading = false
			}).catch(error => {
				this.isLoading = false
				console.log(error.response)
		})
	},
	methods: {

		goToDetails(value) {
			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		},

		datatable() {
			c3 = $('#style-3').DataTable({
				"oLanguage": {
					"oPaginate": { "sPrevious": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>', "sNext": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>' },
					"sInfo": "Showing page _PAGE_ of _PAGES_",
					"sSearch": '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
					"sSearchPlaceholder": "Search...",
					"sLengthMenu": "Results :  _MENU_",
				},
				"stripeClasses": [],
				"lengthMenu": [5, 10, 20, 50],
				"pageLength": 50
			});

			multiCheck(c3);
		}
	}
}
</script>
<style>
	.badge-success {
		background: #44bd32;		
	}
</style>