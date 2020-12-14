<template>
	<div id="content" class="main-content">
		<div class="vld-parent">
			<loading :active.sync="isLoading"
					 :can-cancel="false"
					 :is-full-page="fullPage"></loading>
		</div>

		<b-modal  v-model="compressModal" title="Booster" modal-footer centered hide-footer="true">
			<label class="text-dark" >Select Affiliates you want to exchange position with </label>
			<hr>

			<div class="card">
				<div class="card-body">
					<h6>{{compression.affiliate_name}} ({{compression.selectedAffiliate }}) =>  {{compression.exchange_id}}</h6>
				</div>
			</div>

			<select class="form-control mt-3" name="" v-model="compression.exchange_id">
				<option v-for="affil in getAffiliates.response" :value="affil.order">{{affil.name}} - Postion: {{affil.order}}</option>
			</select>
			<hr>

			<div class="form-group">
				<button class="btn btn-primary pull-right" @click="compress()">Compress</button>
			</div>
		</b-modal>

		<div class="layout-px-spacing">
			<div class="row layout-top-spacing">
				<div class="col-md-12">
					<nav class="breadcrumb-two" aria-label="breadcrumb">
						<ol class="breadcrumb">
							<li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
							<li class="breadcrumb-item active"><a href="javascript:void(0);">Affiliates</a></li>
						</ol>
					</nav>
				</div>
			</div>
				<div class="col-lg-12">
					<div class="widget-content searchable-container list">
						<div class="row layout-top-spacing layout-spacing">
							<div class="col-lg-12">
								<div class="statbox widget box box-shadow">
									<div class="widget-header">
										<div class="row">
											<div class="col-xl-12 col-md-12 col-sm-12 col-12">
												<h4>All Affliates</h4>
												<div class="row">
													<div class="col-md-5">
														<div class="input-group mb-4">
															<input type="text" class="form-control" placeholder="Type to Search" v-model="filter">
															<div class="input-group-append">
																<button class="btn btn-primary" type="button" @click="filter = ''">Clear</button>
															</div>
														</div>
													</div>
												</div>


											</div>
										</div>
									</div>
									<div class="widget-content widget-content-area">
										<div class="table-responsive mb-4">

											    <b-table
													@filtered="onFiltered"
													:filter-included-fields="filterOn"
													:current-page="currentPage"
													:per-page="perPage"
													:sort-by.sync="sortBy"
													:sort-desc.sync="sortDesc"
													:filter="filter" id="style-3"
													class="table style-3 table-hover"
													striped
													hover
													:fields="fields"
													:items="getAffiliates.response">

													<template #cell(details)="row">
														{{row.item.details.country}}
													</template>

													<template #cell(active)="row">
														<p class="badge-success badge" v-if="row.item.active">	Active	</p>
														<p  class="badge-danger badge" v-else >	Inactive </p>
													</template>

													<template #cell(sponsor)="row">
														{{row.item.sponsor.first_name}} {{row.item.sponsor.last_name}}
													</template>

													<template #cell(actions)="row">
														<button @click="showCompressionModal(row.item.order, row.item.name)" class="btn btn-success">Compres</button>
														<button
															@click="goToDetails(row.item.affiliateid)"
															class="btn ml-1 btn-primary">view</button>
													</template>

												</b-table>

											<b-pagination
													v-model="currentPage"
													:total-rows="rows"
													:per-page="perPage"
													size="sm"
											></b-pagination>

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
			compressModal: false,
			compression: {
				selectedAffiliate: null,
				exchange_id: null,
				affiliate_name: 'Working'
			},

			filter: null,
			filterOn: ['name', 'email'],
			isLoading: false,
			fullPage: true,
			password: 'Majesticares1234',
			sortBy: 'order',
			sortDesc: false,
			form: {
				affiliate_id: null
			},
			totalRows: 1,
			currentPage: 1,
			perPage: 20,
			pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
			onCancel: false,
			fields: [
				{ key: 'order',  label: 'id', sortable: true, sortDirection: 'asc' },
				{ key: 'name', label: 'Name',  sortable: true, sortDirection: 'asc' },
				{ key: 'affiliateid', label: 'Affiliate Id'},
				{ key: 'email', label: 'Email' },
				{ key: 'sales', label: 'Sales' },
				{ key: 'booster', label: 'Boosters'},
				{ key: 'details', label: 'Country'},
				{ key: 'active', label: 'Status' },
				{ key: 'sponsor', label: 'Sponsor' },
				{ key: 'actions', label: 'Actions' }
			],
		}
	},
	computed: {
		...mapGetters([
			'getAffiliates'
		]),
		rows() {
			return this.getAffiliates.response.length
		}
	},

	created() {
		this.init()
	},
	methods: {

		init() {
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
		goToDetails(value) {
			var url = '/dashboard/affiliates/'+value
			this.$router.push(url);
		},

		showCompressionModal( affiliate_id, name)  {
			this.compressModal = true
			this.compression.selectedAffiliate = affiliate_id
			this.compression.affiliate_name = name
		},

		compress() {
			this.$store.dispatch('AFFILIATE_COMPRESS', this.compression)
				.then( response => {
					console.log(response.data)
					this.compressModal = false

					this.init()
				})
			.catch( error => {
				console.log(error.response)
			})
		},

		onFiltered(filteredItems) {
			// Trigger pagination to update the number of buttons/pages due to filtering
			this.totalRows = filteredItems.length
			this.currentPage = 1
		}
	}
}
</script>
<style>
	.badge-success {
		background: #44bd32;		
	}
</style>