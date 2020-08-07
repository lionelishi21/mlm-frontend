<template>
<div id="content" class="main-content">

    <div class="vld-parent">
        <loading
             :active.sync="isLoading"
             :can-cancel="true"
             :on-cancel="onCancel"
             :is-full-page="fullPage">
        </loading>
    </div>
    <!-- Account Modal -->
    <div class="modal fade" id="accountModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="row" v-if="step == 1">
                        <div class="col-md-12">
                            <h4>Select Account</h4>
                            <small>Account you want to recieve your cash bonuses</small>
                            <hr>

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
                                            <h6 class="tx-inverse">Paypal</h6>
                                            <p class="mg-b-0">Connect Your paypal account</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item list-group-item-action " @click="selecAcount('debit')"  :class="{ active: debitIsActive }">
                                    <div class="media">
                                        <div class="mr-3">
                                            <img src="@/assets/svg/006-mastercard.svg"  alt="" width="40px">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">Debit Card</h6>
                                            <p class="mg-b-0">Connect you debit card</p>
                                        </div>
                                    </div>
                                </li>

                                <li class="list-group-item list-group-item-action " @click="selecAcount('mcc')"  :class="{ active: mccIsActive }">
                                    <div class="media">
                                        <div class="mr-3">
                                            <img src="@/assets/svg/007-money.svg"  alt="" width="40px">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="tx-inverse">MCC Debit & Virtual Card</h6>
                                            <p class="mg-b-0">Get you own mcc card</p>
                                        </div>
                                    </div>
                                </li>

                              </ul>
                        </div>
                        <div class="col-md-12 text-center mt-5" v-if="paypalIsActive != false || bankIsActive != false">
                        </div>
                    </div>
                    <div class="row" v-if="step == 2">
                        <div class="col-md-12">
                            <h4>Account Information</h4>
                            <hr>
                            <form v-if="bankIsActive">

                                <ValidationProvider name="country" rules="required" v-slot="{ errors }">

                                    <div class="form-group">
                                        <label for="">Country</label>
                                        <select v-model="bank.country" class="form-control">
                                            <option value="us">United States</option>
<!--                                            <option value="gb">United Kingdom</option>-->
<!--                                            <option value="ch">Switzerland</option>-->
<!--                                            <option value="se">Sweden</option>-->
<!--                                            <option value="ca">Canada</option>-->
                                        </select>
                                        <span class="help-block"> More countries comming soon </span>
                                    </div>

                                </ValidationProvider>

                                <ValidationProvider name="currency" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="">Currency</label>
                                        <select v-model="bank.currency" class="form-control">
                                            <option value="usd">US</option>
                                            <option value="can">CA</option>
                                            <option value="gbp">GB</option>
                                            <option value="sek">SE</option>
                                            <option value="chf">CH</option>
                                        </select>
                                    </div>
                                </ValidationProvider>

                                <div class="form-group" v-if="bank.country == 'us'">
                                    <ValidationProvider name="account_number" rules="required" v-slot="{ errors }">
                                        <label for="">Routing Number:</label>
                                        <input type="text" v-model="bank.routing_number" class="form-control">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </ValidationProvider>
                                </div>

                                <div class="form-group" v-if="bank.country == 'ca'">
                                    <label for="">Transit Number:</label>
                                    <input type="text" v-model="bank.transit_number" class="form-control">
                                </div>

                                <div class="form-group" v-if="bank.country == 'ca'">
                                    <label for="">Insitution Number:</label>
                                    <input type="text" v-model="bank.institution_number" class="form-control">
                                </div>

                                <div class="form-group" v-if="bank.country == 'gb'">
                                    <label for="">Sort Code:</label>
                                    <input type="text" v-model="bank.sort_code" class="form-control">
                                </div>

                                <div class="form-group" v-if="bank.country == 'ch'">
                                    <label for="">IBAN:</label>
                                    <input type="text" v-model="bank.iban" class="form-control">
                                </div>


                                <ValidationProvider name="account_number" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label>Account Number</label>
                                        <input type="text" class="form-control" v-model="bank.account_number" >
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider name="email" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="">Account Holder Name</label>
                                        <input type="text" v-model="bank.account_holder_name" class="form-control">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <ValidationProvider name="email" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label for="">Account Holder Type</label>
                                        <select class="form-control" v-model="bank.account_holder_type">
                                            <option value="individual">Individual</option>
                                            <option value="company">Company</option>
                                        </select>
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>

                                <div class="form-group">
                                    <button class="btn btn-block btn-primary" @click.prevent="saveBankInformation()">Submit</button>
                                </div>
                            </form>

                        </div>
<!--                        <div class="col-md-12">-->
<!--                            <form>-->
<!--                                <ValidationProvider name="email" rules="required" v-slot="{ errors }">-->
<!--                                    <div class="form-group">-->
<!--                                        <label for="">Account Holder Name</label>-->
<!--                                        <input type="text" v-model="bank.account_holder_name" class="form-control">-->
<!--                                        <span class="text-danger">{{ errors[0] }}</span>-->
<!--                                    </div>-->
<!--                                    <div class="form-group">-->
<!--                                        <button class="btn btn-block btn-primary" @click.prevent="savePaypalAccount()">Submit</button>-->
<!--                                    </div>-->
<!--                                </ValidationProvider>-->
<!--                            </form>-->
<!--                        </div>-->
                        <div class="col-md-12">
                            <form v-if="paypalIsActive">
                                <div class="form-group">
                                    <label for="">PayPal Email</label>
                                    <input type="text" v-model="paypal.email" class="form-control" placeholder="Enter your paypal email">
                                </div>
                                <div class="form-group">
                                    <button class="btn btn-block btn-primary" @click.prevent="savePaypalAccount()">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div class="modal-footer" v-if="step == 1">
                    <button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
                    <button v-if="paypalIsActive != false || bankIsActive != false" class="btn btn-primary" @click="next()"><i class="fa fa-arrow-circle-o-right"></i> Next</button>
                </div>
                <div class="modal-footer" v-if="step == 2">
                    <button class="btn" data-dismiss="modal"><i class="flaticon-cancel-12"></i> Cancel</button>
                    <button v-if="step == 2" class="btn btn-primary" @click="prev()"><i class="fa fa-arrow-circle-o-right"></i> Back</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End Account Modal-->

    <!-- Main Content -->
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
                                <div class="list-group list-group-icons-meta">
                                    <li class="list-group-item list-group-item-action" v-for="acc in getStripeAccount">
                                        <div class="media">
                                            <div class="mr-3 mt-3">
                                                <img src="@/assets/svg/005-credit-card.svg"  alt="" width="40px">
                                            </div>
                                            <div class="media-body mt-2">
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <h6 class="tx-inverse">{{acc.account_holder_name}}</h6>
                                                        <p class="mg-b-0">{{acc.bank_name}}</p>
                                                        <p class="mg-b-0">*** {{acc.last4}}</p>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="btn-group pull-right">
                                                            <button class="btn btn-default" @click="showBankModal()">Edit</button>
                                                            <button class="btn btn-default" @click="deleteAccount()">Del</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <div>


                                    </div>
                            </div>
                                    <li class="list-group-item list-group-item-action" v-for="cash in GetPaypalAccount">
                                        <div class="media">
                                            <div class="mr-3 mt-3">
                                                <img src="@/assets/svg/005-credit-card.svg"  alt="" width="40px">
                                            </div>
                                            <div class="media-body mt-2">
                                                <div class="row">
                                                    <div class="col-md-10">
                                                        <h6 class="tx-inverse">PayPal Account</h6>
                                                        <p class="mg-b-0">{{cash.customer_id}}</p>
                                                    </div>
                                                    <div class="col-md-2">
                                                        <div class="btn-group pull-right">
                                                            <button class="btn btn-default" @click="showBankModal()">Edit</button>
                                                            <button class="btn btn-default" @click="deleteAccount()">Del</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
    <!-- End Main Content -->
</div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import Loading from 'vue-loading-overlay';
    import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
    import { required } from "vee-validate/dist/rules";

    extend('required', {
        ...required,
        message: 'This field is required'
    });

    export default {

        name: "Settings.vue",

        components: {
            Loading,
            ValidationProvider,
            ValidationObserver
        },

        data() {
            return {
                step: 1,

                type: {
                    bank: null,
                    paypal: null
                },

                paypal: {
                    email: null
                },

                bankIsActive: false,
                paypalIsActive: false,
                debitIsActive: false,
                mccIsActive: false,
                isLoading: false,
                fullPage: true,
                onCancel: false,

                bank: {
                    country: null,
                    currency: null,
                    account_holder_name: null,
                    account_holder_type: null,
                    routing_number: null,
                    account_number: null
                },

                type: null

            }
        },

        created() {
           this.init()
        },

        computed: {
            ...mapGetters([
                'CustomerDetails',
                'getStripeAccount',
                'GetPaypalAccount'
            ])
        },

        methods: {

            init() {
                this.$store.dispatch('FETCH_CUSTOMER_DETAILS')
                this.$store.dispatch('STRIPE_ACCOUNT')
                this.$store.dispatch('FETCH_USER_PAYPAL_ACCOUNT')
            },

            addAccount(){
                this.isLoading = true
                this.$store.dispatch('ADD_USER_ACCOUNT')
                    .then( response => {

                        this.isLoading = false
                        console.log(response)
                        let url = response.account.url
                        window.location.href = url
                        $('#accountModal').modal('hide')
                        this.init()
                    })
                    .catch( error => {
                        this.isLoading = false
                        this.init()
                        console.log(error)
                    })
            },

            editAccount() {
                this.$store.dispatch('ADD_USER_BANK', this.bank)
                    .then( response => {
                        this.init()
                        console.log(response)
                    })
                .catch( error => {
                    console.log(error.response)
                })
            },

            savePaypalAccount() {
                this.$store.dispatch('ADD_PAYPAL_ACCOUNT', this.paypal)
                    .then( response => {
                        this.init()
                        $('#accountModal').modal('hide')
                        console.log( response.data )
                    })
                    .catch( error => {
                        console.log(error.response)
                    })
            },

            saveBankInformation() {

                this.$store.dispatch('ADD_USER_BANK', this.bank)
                    .then( response => {
                        this.init()
                        var url = response.link
                        window.location.href = url;
                        console.log( response )
                    })
                    .catch( error => {
                        console.log(error)
                    })

            },

            deleteAccount() {},
            showAccountModal() {

                this.bankIsActive = false
                this.paypalIsActive = false
                this.step = 1

                $('#accountModal').modal('show')
            },

            showBankModal() {
                $('#bankModal').modal('show')
            },

            selecAcount(type) {

                this.type = type

                if (type == 'bank') {
                    this.bankIsActive = true
                    this.paypalIsActive = false
                    this.debitIsActive = false
                    this.mccIsActive = false
                }

                if ( type == 'paypal') {
                    this.paypalIsActive = true
                    this.bankIsActive = false
                    this.debitIsActive = false
                    this.mccIsActive = false
                }

                if (type == 'debit') {
                    this.paypalIsActive = false
                    this.bankIsActive = false
                    this.debitIsActive = true
                    this.mccIsActive = false
                }

                if (type == 'mcc') {
                    this.paypalIsActive = false
                    this.bankIsActive = false
                    this.debitIsActive = false
                    this.mccIsActive = true
                }

            },
            next() {
                this.step = 2
            },
            prev() {
                this.step = 1
            }
        }
    }
</script>

<style scoped>
    label {
        color:black;
    }
</style>