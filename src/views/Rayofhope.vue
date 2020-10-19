<template>
    <div id="content" class="main-content">
        <div class="layout-px-spacing">
            <div class="col-lg-12">
                <div class="widget-content searchable-container list">


                    <div class="row layout-top-spacing layout-spacing">

                        <div class="col-lg-12">

                            <div class="statbox widget box box-shadow">
                                <div class="widget-header">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
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
                                                <th>Escrow</th>
                                                <th>Tiers</th>
                                                <th>Cost</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                          <tr v-for="affiliate in getHope" class="items">

                                                  <td><h4 class="text-primary">{{ affiliate.id}}</h4></td>
                                                  <td><h4 class="text-primary">{{ affiliate.name}}</h4> </td>
                                                  <td><h4 class="text-primary">{{ affiliate.email}}</h4> </td>
                                                  <td><h4 class="text-primary">{{ affiliate.escrow }}</h4> </td>
                                                  <td><h4 class="text-primary"> Tiers </h4> </td>
                                                  <td><h4 class="text-primary">${{affiliate.cost}}.00</h4></td>
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
        name: "Rayofhope.vue",
        data:() => ({
            isLoading: false,
            fullpage: true,
        }),

        computed: {
            ...mapGetters([
                'getHope'
            ])
        },

        created() {

            this.$store.dispatch('FETCH_RAYOFHOPE_AFFILIATES')
                .then( response => {
                    this.datatable()
                })
            .catch( error => {
                console.log(error)
            })
        },

        methods: {

            goToDetails(id) {
                this.$router.push('/dashboard/rayofhope-details/'+id)
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

<style scoped>

</style>