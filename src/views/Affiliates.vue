<template>
	<div id="content" class="main-content">
		<div class="vld-parent">
			<loading :active.sync="isLoading"
					 :can-cancel="true"
					 :on-cancel="onCancel"
					 :is-full-page="fullPage"></loading>
		</div>
		<div class="modal fade" id="deleteConfirmationModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalCenterTitle">Delete Affiliate (only admin)</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
						</button>
					</div>
					<div class="modal-body">
						<h4 class="modal-heading mb-4 mt-2">Are Sure yuo want to delete this Affiliates</h4>
						<p class="modal-text">
							Delete an Affiliate may cause conflict within the application, please make sure you contact administrator
							before you click delete
						</p>
						<div class="form-group">
							<textarea class="form-control" id="" cols="30" rows="5" placeholder="descrine the reason for delete this affiliate"></textarea>
						</div>
						<div class="form-group">
							<input class="form-control" type="password" placeholder="Enter Administrator password id or to delete"></input>
						</div>
					</div>
					<div class="modal-footer">
						<button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
						<button type="button" class="btn btn-primary" @click="deleteAffiliate()">Confirm</button>
					</div>
				</div>
			</div>
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
														<span v-if="affiliate.sales >= 3" class="shadow-none badge outline-badge-success">Active</span>
														<span v-else class="shadow-none badge badge-danger">Inactive</span>
													</td>
													<td class="text-center">
														<button  @click="goToDetails(affiliate.user_id)" class="btn btn-outline-primary">view</button>
														<button  @click="showDeleteConfirmationModal(affiliate.affiliate_id)" class="btn btn-outline-danger">Delete</button>
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
			password: 'Majesticares1234',
			form: {
				affiliate_id: null
			}
		}
	},
	computed: {
		...mapGetters([
			'getAffiliates'
		])
	},

	mounted() {
        this.isLoading = true
        this.$store.dispatch('FETCH_AFFILIATES')
            .then( response => {
                console.log(response)
                this.datatable()
                this.isLoading = false
            }).catch(error => {
            this.isLoading = false
            console.log(error.response)
        })

	},
	created() {

	},
	methods: {

		goToDetails(value) {
			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		},

		deleteAffiliate() {
			this.$store.dispatch('DELETE_AFILIATE', this.form.affiliate_id)
				.then( response => {
					$('#deleteConfirmationModal').modal('hide');
					console.log(response)
				})
				.catch(error => {
					console.log(error)
				})
		},

		showDeleteConfirmationModal(id){
			this.form.affiliate_id = id
			$('#deleteConfirmationModal').modal('show');
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