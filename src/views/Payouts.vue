<template>
    <!--  BEGIN CONTENT AREA  -->
    <div id="content" class="main-content">

        <!--  Bank Modal Popup -->
        <div class="modal fade" id="confrimPayout" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-body text-center">
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
                        <button class="btn btn-primary">Confirm</button>
                    </div>
                </div>
            </div>
        </div>

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
                            <ul class="nav nav-tabs mb-3 mt-3" id="borderTop" role="tablist">
                                <li class="nav-item">
                                    <a class=" text-dark nav-link active"
                                       @click="tab('all')"
                                       id="border-top-home-tab"
                                       data-toggle="tab"
                                       href="#border-top-home" role="tab" aria-controls="border-top-home" aria-selected="true"> <h6>All Cash Bonuses</h6></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-dark"
                                       @click="tab('paid')"
                                       id="border-top-profile-tab"
                                       data-toggle="tab"
                                       href="#border-top-profile"
                                       role="tab" aria-controls="border-top-profile"
                                       aria-selected="false"> Paid Out Cash Bonuses</a>
                                </li>
                                <li class="nav-item text-dark">
                                    <a class="nav-link"
                                       @click="tab('available')"
                                       id="border-top-contact-tab"
                                       data-toggle="tab"
                                       href="#border-top-contact"
                                       role="tab"
                                       aria-controls="border-top-contact"
                                       aria-selected="false">Available Cash Bonuses</a>
                                </li>
                            </ul>


                            <div class="table-responsive">
                                <table class="table table-bordered table-hover table-striped table-checkable table-highlight-head mb-4">
                                    <thead>
                                    <tr class="text-dark">
                                        <th class="">Affiliate Name</th>
                                        <th class="">Affiliate Email</th>
                                        <th class="">Cash Bonus</th>
                                        <th class="">Status</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody class="text-dark" v-if="tab == 'all'">
                                        <tr v-for="escrow in getAllUserEscrows.data">
                                            <td>{{escrow.user.first_name}} {{escrow.user.last_name}}</td>
                                            <td>{{escrow.user.email}}</td>
                                            <td><span class="badge-danger badge"> {{ escrow.cash_bonus }} </span> </td>
                                            <td> {{escrow.status }}</td>
                                            <td> <button class="btn-primary btn" @click="confirmationModal(escrow.id)"> Manual Payout </button> </td>
                                        </tr>
                                    </tbody>

                                    <tbody class="text-dark" v-if="tab == 'paid'">
                                        <tr v-for="escrow in getAllUserEscrows.escrows" v-if="escrow.status = 'Transfer'">
                                            <td>{{escrow.user.first_name}} {{escrow.user.last_name}}</td>
                                            <td>{{escrow.user.email}}</td>
                                            <td><span class="badge-danger badge"> {{ escrow.cash_bonus }} </span> </td>
                                            <td> {{escrow.status }}</td>
                                            <td> <button class="btn-primary btn" v-if="escrow.status = 'Transfer'" disabled="disabled"> Paid! </button>  </td>
                                        </tr>
                                    </tbody>

                                    <tbody class="text-dark" v-if="tab == 'available'">
                                        <tr v-for="escrow in getAllUserEscrows.escrows" v-if="escrow.status = 'Ready'">
                                            <td>{{escrow.user.first_name}} {{escrow.user.last_name}}</td>
                                            <td>{{escrow.user.email}}</td>
                                            <td><span class="badge-danger badge"> {{ escrow.cash_bonus }} </span> </td>
                                            <td> {{escrow.status }}</td>
                                            <td> <button class="btn-primary btn" @click="confirmationModal(escrow.id)"> Payout </button> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="paginating-container">
                                <ul class="">
                                    <pagination :limit="2" :data="getAllUserEscrows" @pagination-change-page="getResults">
                                        <span slot="prev-nav">&lt; Previous</span>
                                        <span slot="next-nav">Next &gt;</span>
                                    </pagination>
                                </ul>
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
                tab: 'all',
                isLoading: false,
                form: {
                    selectedEscrow: null,
                    method: null
                },
               filter: ''

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

            tab(param) {
                this.tab = param
            },

            manualPayout() {
                this.isLoading = true
                this.$store.dispatch('MANUAL_PAYOUT', this.form)
                    .then( response => {
                        this.isLoading = false
                        console.log( response )
                    })
                    .catch( error => {
                        this.isLoading = false
                        console.log( error.response )
                    })
            },

            // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
                var params = { page: page, filter: this.filter}
                this.$store.dispatch('FETCH_ALL_ESCROWS', params)
            },

            confirmationModal(id) {
                this.selectedEscrow = id
                $('#confrimPayout').modal('show')
            }
        }
    }
</script>

<style scoped>

</style>