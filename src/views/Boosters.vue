<template>
    <div id="content" class="main-content">

        <div class="layout-px-spacing">
            <!--   Card Modal   -->
            <!--   Card Modal   -->
            <div class="modal fade slide-up disable-scroll"  id="booster_modal"
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
                                        <select class="form-control" v-model="packages.affiliate">
                                            <option value=""> Select Affiliate</option>
                                            <option v-for="affiliates in getAffiliates" :value="affiliates.user.id"> {{affiliates.user.first_name}}</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <select class="form-controle" name="" v-model="packages.qty">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                        </select>
                                    </div>


                                    <div class="form-group">
                                        <button class="btn btn-primary" @click="createBoosters()">Submit</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.modal-content -->
                </div>
            </div>
            <!--  End Card Modal-->

            <div class="col-lg-12">
                <div class="widget-content searchable-container list">
                    <div class="row">
                        <div class="col-md-12">
                            <button class="btn btn-primary pull-right" @click="showBoosters()">Add Boosters</button>
                        </div>
                    </div>
                    <div class="row layout-top-spacing layout-spacing">

                        <div class="col-lg-12">

                            <div class="statbox widget box box-shadow">

                                <div class="widget-header">
                                    <div class="row">
                                        <div class="col-xl-6 col-md-12 col-sm-12 col-12">
                                            <h4>Booster Packages</h4>
                                        </div>
                                    </div>
                                </div>

                                <div class="widget-content widget-content-area">
                                    <div class="table-responsive mb-4">
                                        <table id="style-3" class="table style-3 table-hover">
                                            <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Name</th>
                                                <th>Email</th>
<!--                                                <th>Escrow</th>-->
                                                <th>Tiers</th>
                                                <th>Boosters</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="affiliate in boosterAll" class="items">
                                                <td><h4 class="text-primary">{{ affiliate.id}}</h4></td>
                                                <td>
                                                    <h4 v-if="affiliate.is_system" style="color: darkolivegreen;" >
                                                        <b>
                                                            {{ affiliate.name}}
                                                        </b>
                                                    </h4>
                                                    <h4 v-else class="text-primary" >
                                                        {{ affiliate.name}}
                                                    </h4>
                                                </td>
                                                <td><h4 class="text-primary">{{ affiliate.email}}</h4> </td>
<!--                                                <td>-->
<!--                                                    <h4 class="text-primary" v-if="affiliate.escrow">{{ affiliate.escrow.amount }}</h4>-->
<!--                                                    <h4 class="text-primary" v-else>Pending</h4>-->
<!--                                                </td>-->

                                                <td><h4 class="text-primary">  </h4> </td>
                                                <td><h4 class="text-primary"> {{affiliate.boosters}} </h4></td>
                                                <td class="text-center">
                                                    <button  @click="goToDetails(affiliate.id)" class="btn btn-outline-primary">view</button>
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

    import { mapGetters } from 'vuex';
    export default {

        name: "Boosters",

        data:() => ({

            isLoading: false,
            fullpage: true,
            packages: {
                qty: null,
                affiliate: null,
                method: 'manual',
            },

            affiliates: {}
        }),

        computed: {
            ...mapGetters([
                'boosterAll',
            ])
        },

        created() {

        },

        mounted() {
            this.init()
        },

        methods: {

            init() {
                this.$store.dispatch('BOOSTER_FETCH_ALL')
                    .then( response => {
                        console.log(response.data)
                        this.datatable()
                    })
                    .catch( error => { console.log(error.response) })
            },

            goToDetails(id) {
                this.$router.push('/dashboard/user-boosters/'+id)
            },

            acceptPayment(params) {
                this.isLoading = true
                this.$store.dispatch('BUY_BOOSTER_PACKAGES', this.packages)
                    .then( response => {

                        this.isLoading = false
                        $('#boosterModal').modal('hide')


                        console.log(response)

                    }).catch( error => {

                    this.isLoading = false
                    console.log(error.response)
                })
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
                    "pageLength": 50,
                    "order": [[ 3, "desc" ]]
                });
                multiCheck(c3);
            }
        }


    }
</script>

<style scoped>

</style>