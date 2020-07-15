<template>
    <div id="content" class="main-content">
        <div class="vld-parent">
            <loading :active.sync="isLoading"
                     :can-cancel="true"
                     :on-cancel="onCancel"
                     :is-full-page="fullPage"></loading>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Fix Affiliate</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-row mb-4">
                            <div class="form-group col-md-12">
                                <label>Select the affiliate to give sales</label>
                                <select v-model="form.parent_id" class="form-control">
                                    <option v-for="usr in getAffiliates.response" :value="usr.affiliate_id">{{usr.name}}</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Discard</button>
                        <button @click="save()" type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
        </div>
        <div class="layout-px-spacing">
            <div class="col-lg-12">
                <div class="widget-content searchable-container list">
                    <div class="row layout-top-spacing layout-spacing">
                        <div class="col-lg-12">
                            <div class="statbox widget box box-shadow">
                                <div class="widget-header">
                                    <div class="row">
                                        <div class="col-xl-6 col-md-6 col-sm-6 col-6">
                                            <h4>All Affliates</h4>
                                        </div>
                                        <div class="col-xl-6 col-md-6 col-sm-6 col-6">
                                            <div class="w-100">
                                                <input v-model="filter" autocomplete="false" type="text" class="w-100 form-control product-search br-30" id="input-search" placeholder="Search Users" >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content widget-content-area">

                                    <div class="table-responsive mb-4">

                                            <div class="table-responsive">
                                                <table class="table table-bordered mb-4">
                                                    <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Phone Number</th>
                                                        <th>Affiliate Id</th>
                                                        <th class="text-center">Action</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr v-for="user in users.data">
                                                        <td><strong class="text-warning">{{user.first_name}} {{user.last_name}}</strong></td>
                                                        <td><strong class="text-warning">{{user.email}}</strong></td>
                                                        <td><strong class="text-warning">{{user.phone_number}}</strong></td>
                                                        <td v-if="user.affiliate"><strong class="text-success">{{user.affiliate.affiliate_id}}</strong></td>
                                                        <td v-else="user.affiliate"><strong class="text-danger">No Affiliate Id</strong></td>
                                                        <td class="text-center">
                                                            <butto  v-if="user.affiliate" class="btn btn">Added</butto>
                                                            <button v-else @click="showModal(user.id)" class="btn btn-danger">Add Affiliate</button>
                                                        </td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                    </div>
                                    <div class="paginating-container">
                                        <ul class="">
                                            <pagination :limit="2" :data="users" @pagination-change-page="getResults">
                                                <span slot="prev-nav">&lt; Previous</span>
                                                <span slot="next-nav">Next &gt;</span>
                                            </pagination>
                                        </ul>
                                    </div>
<!--                                    <pagination limit="10" :data="users" @pagination-change-page="getResults">-->
<!--                                    </pagination>-->

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
    export default {
        name: "Users.vue",
        data() {
            return {
                offset: 30,
                users: {},
                fullpage: true,
                isLoading: false,
                filter: '',
                page: 1,
                form: {}
            }
        },
        mounted() {
            this.getResults()

            // $('.selectpicker').selectpicker('refresh')
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
                        this.users = response.data;
                    })
                    .catch( error => {
                        console.log(error.resonse)
                    })
            }
        },
        methods: {
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
            }
        }
    }
</script>

<style scoped>

</style>