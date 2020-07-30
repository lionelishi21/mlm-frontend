<template>
<div id="content" class="main-content">

    <div class="vld-parent">

        <loading :active.sync="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage">
        </loading>

    </div>

    <!-- Modal -->
    <div class="modal fade" id="accountModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <!-- Images -->
                    <ul class="list-group list-group-media">
                        <li class="list-group-item list-group-item-action" @click="selecAcount('bank')" :class="{ active: bankIsActive }">
                            <div class="media">
                                <div class="mr-3">
                                    <img src="@/assets/svg/005-credit-card.svg"  alt="" width="40px">
                                </div>
                                <div class="media-body">
                                    <h6 class="tx-inverse">Bank Account</h6>
                                    <p class="mg-b-0">Click Connect your back account</p>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item list-group-item-action " @click="selecAcount('paypal')"  :class="{ active: paypalIsActive }">
                            <div class="media">
                                <div class="mr-3">
                                    <img src="@/assets/svg/001-paypal.svg"  alt="" width="40px">
                                </div>
                                <div class="media-body">
                                    <span class="badge badge-danger">Comming soon</span>
                                    <h6 class="tx-inverse">Paypal</h6>
                                    <p class="mg-b-0">Connect Your paypal account</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <p v-if="bankIsActive" class="text-center mt-5">
                        <button class="btn btn-primary" @click="addAccount()">Set Up Account</button>
                    </p>

                </div>
                <div class="modal-footer">
                    <button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
                </div>
            </div>
        </div>
    </div>


<!--    <div class="row">-->
<!--        <pre>{{CustomerDetails}}</pre>-->
<!--    </div>-->
    <div class="layout-px-spacing">
        <div class="col-lg-12">
            <div class="widget-content searchable-container list">
                <div class="row layout-top-spacing layout-spacing">
                    <div class="col-lg-12">
                        <div class="statbox widget box box-shadow">
                            <div class="widget-header">
                                <div class="row">
                                    <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                        <h4>Payout Methods</h4>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content widget-content-area">
                                <!-- Icons -->
                                <ul class="list-group list-group-icons-meta">
                                    <li class="list-group-item list-group-item-action" v-for="acc in CustomerDetails">
                                        <div class="media" v-if="acc.gateway.name == 'Bank'">
                                            <div class="mr-3 mt-3">
                                                <img src="@/assets/svg/005-credit-card.svg"  alt="" width="40px">
                                            </div>
                                            <div class="media-body mt-2">
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <h6 class="tx-inverse">Person Name</h6>
                                                        <!--                                                <p class="mg-b-0">ACH# *** 4343</p>-->
                                                        <p class="mg-b-0">{{acc.customer_id}}</p>
                                                        <p class="mg-b-0">Connected</p>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="btn-group pull-right">
                                                            <button class="btn btn-default">Edit</button>
                                                            <button class="btn btn-default">Del</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
<!--                                        <div class="media" v-if="acc.gateway.name == 'Paypal'">-->
<!--                                            <div class="mr-3 mt-3">-->
<!--                                                <img src="@/assets/svg/001-paypal.svg"  alt="" width="40px">-->
<!--                                            </div>-->
<!--                                            <div class="media-body mt-2">-->
<!--                                                <h6 class="tx-inverse">Paypal</h6>-->
<!--                                                <p class="mg-b-0">lionelishmael@gmail.com</p>-->
<!--                                                <p class="mg-b-0">Connected</p>-->
<!--                                            </div>-->
<!--                                            <div class="media-notation mt-3">-->
<!--                                                <button class="btn btn-default">Edit</button>-->
<!--                                                <button class="btn btn-default">Delete</button>-->
<!--                                            </div>-->
<!--                                        </div>-->
                                    </li>
                                    <li class="list-group-item list-group-item-action text-center">
                                         <button class="btn btn-primary mt-5 mb-5" @click="showAccountModal()"><i class="fa fa-plus"></i> Add Account</button>
                                    </li>
                                </ul>
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
        name: "Settings.vue",
        data() {
            return {
                type: {
                    bank: null,
                    paypal: null
                },
                bankIsActive: false,
                paypalIsActive: false,
                isLoading: false,
                fullPage: true,
                onCancel: true

            }
        },

        created() {
            this.$store.dispatch('FETCH_CUSTOMER_DETAILS')
        },

        computed: {
            ...mapGetters([
                'CustomerDetails'
            ])
        },

        methods: {
            addAccount(){
                this.isLoading = true
                this.$store.dispatch('ADD_USER_BANKACCOUNT')
                    .then( response => {

                        this.isLoading = false
                        console.log(response)
                        let url = response.account.url
                        window.location.href = url
                    })
                    .catch( error => {
                        this.isLoading = false
                        console.log(error)
                    })
            },
            showAccountModal() {

                this.bankIsActive = false
                this.paypalIsActive = false

                $('#accountModal').modal('show')
            },
            selecAcount(type) {

                if (type == 'bank') {
                    this.bankIsActive = true
                    this.paypalIsActive = false
                }

                if ( type == 'paypal') {
                    this.paypalIsActive = true
                    this.bankIsActive = false
                }
            }
        }
    }
</script>

<style scoped>

</style>