<template>
    <div id="content" class="main-content">
        <loading :active.sync="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"></loading>

        <b-modal  v-model="boosterModal" title="Booster" modal-footer centered hide-footer="true">
            <label class="text-dark" >Select Amount of Booster Packages</label>
            <select class="form-control" name="" v-model="packages.qty">
                <option value="1">1 Package</option>
                <option value="2">2 Packages</option>
                <option value="3">3 Packages</option>
                <option value="4">4 Packages</option>
                <option value="5">5 Packages</option>
                <option value="6">6 Packages</option>
                <option value="7">7 Packages</option>
                <option value="8">8 Packages</option>
                <option value="9">9 Packages</option>
                <option value="10">10 Packages</option>
                <option value="11">11 Packages</option>
                <option value="12">12 Packages</option>
                <option value="13">13 Packages</option>
                <option value="14">14 Packages</option>
                <option value="15">15 Packages</option>
                <option value="16">16 Packages</option>
                <option value="17">17 Packages</option>
                <option value="18">18 Packages</option>
                <option value="19">19 Packages</option>
                <option value="20">20 Packages</option>
            </select>
            <hr>
            <button class="btn btn-primary" @click="createBoosters()">Submit</button>
        </b-modal>

        <div class="modal fade slide-up disable-scroll"  id="bmodal-1"
             tabindex="-1" role="dialog" aria-labelledby="modalSlideUpLabel" aria-hidden="false">
            <div class="modal-dialog ">

                <div class="modal-content-wrapper">
                    <div class="modal-content">
                        <div class="modal-header clearfix text-left">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                <i class="pg-close fs-14"></i>
                            </button>
                            <h5>Booster</h5>
                        </div>

                        <div class="modal-body">
                            <div class="form-group">
                            </div>
                            <div class="form-group">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
        </div>
        <!-- Modal -->
<!--        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">-->
<!--            <div class="modal-dialog" role="document">-->
<!--                <div class="modal-content">-->
<!--                    <div class="modal-header">-->
<!--                        <h5 class="modal-title" id="exampleModalLabel">Fix Affiliate</h5>-->
<!--                    </div>-->
<!--                    <div class="modal-body">-->
<!--                        <div class="form-row mb-4">-->
<!--                            <div class="form-group col-md-12">-->
<!--                                <label>Select the affiliate to give sales</label>-->
<!--                                <select v-model="form.parent_id" class="form-control">-->
<!--                                    <option v-for="usr in getAffiliates.response" :value="usr.affiliate_id">{{usr.name}}</option>-->
<!--                                </select>-->
<!--                            </div>-->
<!--                        </div>-->

<!--                    </div>-->
<!--                    <div class="modal-footer">-->
<!--                        <button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>-->
<!--                        <button @click="save()" type="button" class="btn btn-primary">Save</button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="layout-px-spacing">

            <div class="row layout-top-spacing">
                <div class="col-lg-12">
                    <nav class="breadcrumb-two" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0);">All Users</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="widget-content searchable-container list">
                    <div class="row" v-show="showalert">
                        <div class="col-lg-12">
                            <div class="alert alert-primary" role="alert">
                                <strong>Success!</strong> Booster Packages was added successfully.</button>
                            </div>
                        </div>
                    </div>
                    <div class="row layout-top-spacing layout-spacing">

                        <div class="col-lg-12">
                            <div class="card box box-shadow">
                                <div class="card-header">
                                    <h4>All Affliates</h4>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-xl-6 col-md-6 col-sm-6 col-6">
                                            <div class="w-100">
                                                <input v-model="filter" autocomplete="false" type="text" class="w-100 form-control product-search br-30" id="input-search" placeholder="Search Users" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <b-table
                                        :filter-included-fields="filterOn"
                                        :current-page="currentPage"
                                        :per-page="perPage"
                                        :sort-by.sync="sortBy"
                                        :sort-desc.sync="sortDesc"
                                        :filter="filter"
                                        id="style-3"
                                        class="table style-3 table-hover"
                                        striped
                                        hover
                                        sort-icon-left
                                        :items="users"
                                        :fields="fields"
                                    >
                                        <template #cell(status)="row">
                                            <h3 class="badge badge-success" v-if="row.item.status">
                                                {{row.item.status}}
                                            </h3>
                                            <span v-else class="badge-danger badge">
                                                  {{row.item.status}}
                                            </span>
                                        </template>

                                        <template #cell(actions)="row">
                                            <button class="btn btn-primary" @click="showBoostersModal(row.item.id)"> Add Booster </button>
                                        </template>
                                    </b-table>
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
    import api from '../api/services/user-services';
    import Loading from 'vue-loading-overlay';

    export default {

        components: {
            Loading
        },

        name: "Users.vue",
        data() {
            return {

                fields: [
                    { key: 'id', label: 'Id', sortable: true,},
                    { key: 'name', label: 'Name', sortable: true, },
                    { key: 'email', label: 'Email', sortable: true,},
                    { key: 'affiliate_id', label: 'Affiliate Id'},
                    { key: 'status', label: 'Affiliate', sortable: true,},
                    { key: 'actions', label: 'Actions', sortable: true,}
                ],
                isLoading: false,
                fullPage: true,
                showalert: false,
                modalShow: false,
                boosterModal: false,
                offset: 30,
                users: {},
                fullpage: true,
                isLoading: false,
                filter: '',
                page: 1,
                form: {},
                packages: {
                    qty: null,
                    user_id: null,
                    method: 'manual',
                },
                filter: null,
                filterOn: ['name', 'email'],
                isLoading: false,
                fullPage: true,
                currentPage: 1,
                perPage: 20,
                pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
                password: 'Majesticares1234',
                sortBy: 'order',
                sortDesc: false,
            }
        },

        mounted() {
            this.getResults()
        },

        created() {
            this.$store.dispatch('FETCH_AFFILIATES')
        },

        computed: {
            ...mapGetters([
                'getAllUser',
                'getAffiliates'
            ])
        },

        watch: {
            filter: function(value) {
                var params = '&filter='+value+'&offset='+this.offset
                api.fetchAllUser(this.page, params)
                    .then(response => {
                        console.log(response)
                        this.users = response.data;
                    })
                    .catch( error => {
                        console.log(error.resonse)
                    })
            }
        },
        methods: {

            showBoostersModal(userId) {
                this.packages.user_id = userId
                this.boosterModal = !this.boosterModal
            },

            // Our method to GET results from a Laravel endpoint
            getResults(page = 1) {
                this.page = page
                var params = '&filter='+this.filter+'&offset='+this.offset
                api.fetchAllUser(page, params)
                    .then(response => {
                        this.users = response.data;
                    })
                .catch( error => {
                    console.log(error.resonse)
                })
            },

            showModal(id) {
                this.form.affiliate_id = id
                $('#exampleModal').modal('show')
            },

            save() {
                this.$store.dispatch('ADD_AFFILIATE', this.form)
                    .then( response => {
                        this.getResults()
                    })
                .catch( error => {
                    console.log(error.response)
                })
            },

            createBoosters() {

                this.isLoading = true
                this.showalert = false
                this.$store.dispatch('BUY_BOOSTER_PACKAGES', this.packages)
                    .then( response => {

                        this.isLoading = false
                        this.boosterModal = !this.boosterModal
                        console.log(response)
                        this.showalert = true

                    }).catch( error => {
                        this.isLoading = false
                        console.log(error.response)
                })
            }
        }
    }
</script>

<style scoped>

</style>