<template>
    <!--  BEGIN CONTENT AREA  -->
    <div id="content" class="main-content">


        <b-modal v-model="payoutOutModal" hide-footer>
            <div class="row text-center">
                <div class="col-md-12">
                    <h3>Manual Payout</h3>
                    <h5>Are you sure about this payout?</h5>
                    <p>What method did you use?</p>

                    <select v-model="form.method" class="form-control">
                        <option value="">Select</option>
                        <option value="wired">Wire Transfer</option>
                        <option value="paypal">PayPal</option>
                        <option value="western union">Western Union</option>
                        <option value="moneygram">Money Gram</option>
                        <option value="check">Check</option>
                    </select>

                    <hr>
                    <button class="btn btn-default" @click="payoutOutModal = !payoutOutModal">Cancel</button>
                    <button class="btn btn-primary" @click="manualPayout()">Confirm</button>
                </div>
            </div>
        </b-modal>

        <div class="layout-px-spacing">

            <div class="row layout-top-spacing mb-3">
                <div class="col-md-12">
                    <h6><i>Affliates Payouts</i></h6>
                </div>
            </div>

            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                    <div class="widget widget-card-four">
                        <div class="widget-content">
                            <div class="text-center mt-4">
                                <h1 class="value text-success">1000</h1>
                                <h6 class="text-6 text-bold">Available</h6>
                                <small class="test-dark">Availble cash bonus</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                    <div class="widget widget-card-four">
                        <div class="widget-content">
                            <div class="text-center mt-4">
                                <h1 class="value text-success">100</h1>
                                <h6 class="text-6 text-bold">Paid Out</h6>
                                <small class="text-dark">The total amount that was paid out</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing">
                    <div class="card">
                        <div class="card-body">

                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="table-responsive">
                                <b-table :fields="fields" :items="getAllUserEscrows">

                                    <template #cell(status)="row">
                                        <h5><span class="badge badge-danger" v-if="row.item.status == 'Completed'">{{row.item.status}}</span></h5>
                                        <h5> <span class="badge badge-primary" v-if="row.item.status == 'Processing'">
                                               <small> {{row.item.status}}</small>
                                            </span>
                                        </h5>
                                        <h5> <span class="badge badge-success"  v-if="row.item.status == 'Available'" >{{row.item.status}}</span></h5>

                                    </template>
                                    <template #cell(actions)="row">
                                        <button class="btn btn-success btn-sm" @click="showBoostersModal(row.item.id)"> Manual Payout </button>
                                        <button class="btn btn-danger ml-1 btn-sm" @click="deletePayout(row.item.id)"> <i class="far fa-trash-o"></i>
                                            Remove</button>
                                    </template>
                                </b-table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import api from "../api/services/user-services";
    export default {
        name: "Payouts.vue",
        data() {
            return {
                isLoading: false,
                form: {
                    payout_id: null,
                    method: null
                },
                payoutOutModal: false,
                filter: '',
                fields: [
                    {key: 'id', label: 'id', sortable: true, sortDirection: 'desc'  },
                    {key: 'user', label: 'Affiliate', sortable: true},
                    {key: 'status', label: 'Status', sortable: true },
                    {key: 'payout', label: 'Payout' },
                    {key: 'actions', label: 'Actions'}
                ]

            }
        },

        computed: {
            ...mapGetters([
                'getAllUserEscrows'
            ])
        },

        created() {
            this.$store.dispatch('FETCH_ALL_ESCROWS', this.filter)
        },

        methods: {


            manualPayout() {

                this.isLoading = true
                this.$store.dispatch('MANUAL_PAYOUT', this.form)
                    .then( response => {
                        this.isLoading = false
                        this.payoutOutModal = !this.payoutOutModal
                        this.$store.dispatch('FETCH_ALL_ESCROWS', this.filter)
                        console.log( response )
                    })
                    .catch( error => {
                        this.isLoading = false
                        this.payoutOutModal = !this.payoutOutModal
                        console.log( error.response )
                    })
            },

            // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
                var params = { page: page, filter: this.filter}
                this.$store.dispatch('FETCH_ALL_ESCROWS', params)
            },

            showBoostersModal(id) {
                this.form.payout_id = id
                this.payoutOutModal = true
            },

            deletePayout(id) {

                this.$store.dispatch('PAYOUT_REMOVE', id)
                    .then( response => {
                        console.log( response.data)
                        this.$store.dispatch('FETCH_ALL_ESCROWS', this.filter)
                    })
                .catch( error => {
                    console.log( error.response )
                })
            }
        }
    }
</script>

<style scoped>

</style>