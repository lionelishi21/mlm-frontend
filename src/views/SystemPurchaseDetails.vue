<template>
    <div id="content" class="main-content">
        <div class="layout-px-spacing">
            <div class="row layout-top-spacing">
                <div class="col-md-12">
                    <nav class="breadcrumb-two" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0);">System Purchases</a></li>
                            <li class="breadcrumb-item active"><a href="javascript:void(0);">Details</a></li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div class="row layout-spacing">

                <!-- Content -->
                <div class="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">

                    <div class="user-profile layout-spacing">
                        <div class="widget-content widget-content-area">
                            <div class="d-flex justify-content-between">
                                <h3 class="">Info</h3>
                            </div>
                            <div class="text-center user-info">
                                <img src="@/assets/img/90x90.jpg" alt="avatar">
                                <p class="">{{fullname}}</p>
                            </div>
                            <div class="user-info-list">

                                <div class="">
                                    <ul class="contacts-block list-unstyled">
                                        <li class="contacts-block__item">
                                            <a href="mailto:example@mail.com">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     class="feather feather-mail">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                    <polyline points="22,6 12,13 2,6"></polyline></svg>
                                                {{systemDetails.user.email}}</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">

                    <div class="bio layout-spacing ">
                        <div class="widget-content widget-content-area">
                            <h3 class="">User Systems Stats</h3>
                            <div class="bio-skill-box">

                                <div class="row">
                                    <div class="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 ">

                                        <div class="b-skills">
                                            <div class="text-center">
                                                <h5>E-book Sys. Purchases</h5>
                                                <h2>{{systemDetails.ebook.length}}</h2>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-xl-6 col-lg-12 mb-xl-5 mb-5 ">

                                        <div class="b-skills">
                                            <div class="text-center">
                                                <h5>BP Sys. Purchases</h5>
                                                <h2>{{systemDetails.booster.length}}</h2>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-xl-6 col-lg-12 mb-xl-0 mb-5 ">

                                        <div class="b-skills">
                                            <div class="text-center">
                                                <h5>SBP Sys. Purchases</h5>
                                                <h2>0</h2>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-12 col-xl-6 col-lg-12 mb-xl-0 mb-5 ">

                                        <div class="b-skills">
                                            <div class="text-center">
                                                <h5>MCC Products</h5>
                                                <h2>0</h2>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <b-table  :fields="fields" :items="systemDetails.ebook">
                                                        <template #cell(actions)="row">
                                                            <button class="btn btn-primary" @click="changeSystem(row.item.id)">Convert To MCC</button>
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

                </div>

            </div>
        </div>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    export default {
        name: "SystemPurchaseDetails.vue",

        created() {
          this.init()
        },
        data: () => ({
            fields: [
                { key: 'id', label: 'Id' },
                { key: 'affiliate_id', label: 'Affiliate Id'},
                { key: 'actions', lable: 'Actions'}
            ]
        }),
        computed: {
            ...mapGetters([
                'systemDetails'
            ]),

            fullname: function() {

                if (this.systemDetails.user) {
                    return this.systemDetails.user.first_name+' '+this.systemDetails.user.last_name
                }

            }
        },

        methods: {
            init() {
                var id = this.$route.params.id
                this.$store.dispatch('SYSTEM_DETAILS', id)
            },
            changeSystem(affiliateId) {
                var params = {
                    affiliate_id: affiliateId
                }
                this.$store.dispatch('SYSTEM_UPDATE', params )
                .then( response => {

                    alert('deleting')
                    this.init();
                    console.log( response.data)
                })
            }
        }
    }
</script>

<style scoped>

</style>