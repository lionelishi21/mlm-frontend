<template>
<div id="content" class="main-content">



     <!--  User Modal Popup -->
    <user-account :country="getDetail.country"></user-account>
     <!--  End User Modal Popup -->


    <!-- Main Content -->
    <div class="layout-px-spacing">
        <div class="col-md-12">

            <!-- Page Header -->
            <div class="breadcrumb-five mt-2">
                <ul class="breadcrumb">
                    <li class="mb-2"><a href="javscript:void(0);">Home</a></li>
                    <li class="active mb-2"><a href="javscript:void(0);"> Settings</a></li>
                </ul>
            </div>
            <!-- End Page Header -->

            <div v-if="getUserStripeAccount.transfer  != 'active'" class="alert alert-light-danger mb-4" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><svg> ... </svg></button>
                <strong>Alert!</strong> Complete your transfer account in order to enable automatic payouts.</button>
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
                                        <h4>Payout Methods</h4>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                            <div class="widget-content widget-content-area">
                                <div class="list-group list-group-icons-meta" >

                                    <li class="list-group-item list-group-item-action text-center">
                                        <div class="mt-5" v-if="getUserStripeAccount">
                                            <div class="user-profile">
                                                <div class="widget-content widget-content-area">
                                                    <div class="text-center">
                                                        <img src="@/assets/avatar/img12.jpg" alt="avatar">
                                                        <h5 class="">{{getUserStripeAccount.name}}</h5>
                                                        <p>Country: {{getUserStripeAccount.country}}</p>
                                                        <p>Payout Status:
                                                            <span class="badge badge-danger text-3" v-if="getUserStripeAccount.transfer  == 'inactive'">{{getUserStripeAccount.transfer}}</span>
                                                            <span class="badge badge-success text-3" v-else>{{getUserStripeAccount.transfer}}</span>

                                                        </p>
                                                        <button class="btn btn-danger btn-sm" @click="accountUpdate()">
                                                            Update
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-5" v-else>
                                            <h5 class="pb-4">Verify your identity with stripe will enable automatic payout for supported debit card and bank account</h5>
                                            <button class="btn btn-primary mb-5" @click="accountOnboarding()"><i class="fa fa-user-alt-slash"></i> Verify Identity </button>
                                        </div>

                                    </li>

                                    <div class="list-group list-group-icons-meta" v-if="getStripeAccount">
                                        <li class="list-group-item list-group-item-action" v-for="acc in getStripeAccount">
                                            <div class="media">
                                                <div class="mr-3 mt-3">
                                                    <img src="@/assets/svg/005-credit-card.svg"  alt="" width="40px">
                                                </div>
                                                <div class="media-body mt-2">
                                                    <div class="row">

                                                        <div class="col-md-10" v-if="acc.object == 'card'">
                                                            <h6 class="tx-inverse">{{acc.brand}} {{acc.funding}}</h6>
                                                            <p class="mg-b-0">{{acc.bank_name}}</p>
                                                            <p class="mg-b-0">**** **** **** {{acc.last4}}</p>
                                                        </div>

                                                        <div class="col-md-10" v-if="acc.object == 'bank_account'">
                                                            <h6 class="tx-inverse">{{acc.account_holder_name}}</h6>
                                                            <p class="mg-b-0">{{acc.bank_name}}</p>
                                                            <p class="mg-b-0">**** **** **** {{acc.last4}}</p>
                                                        </div>

                                                        <div class="col-md-2">
                                                            <div class="btn-group pull-right">
                                                                <router-link to="/dashboard/wallet" tag="a" class="btn btn-primary" v-if="getUserStripeAccount['payouts_enabled']" >Transfer Active</router-link>
                                                                <button class="btn btn-warning" @click="deleteAccount(acc.id, acc.object, acc.account)"><i class="fa fa-trash-alt"></i> Remove</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>

                                    <li class="list-group-item list-group-item-action text-center" v-if="supportedCountry(getDetail.country)">
                                        <div class="mt-5">
                                            <h5 class="">Add bank account or debit card</h5>
                                            <h6 class="text-danger pb-2">Bank Transfer takes 1-3 business days while Debit Card Transfer takes up 30 mins </h6>

                                            <button class="btn btn-primary mb-5" @click="modalBankAccount()"><i class="fa fa-plus"></i> Add Bank Account </button>
                                            <button class="btn btn-primary mb-5" @click="modalDebitCard()"><i class="fa fa-plus"></i> Add Debit Card <span class="badge badge-success">Recommended</span></button>
                                            <div class="row">
                                                <div class="col-md-4"></div>
                                                <div class="col-md-1">
                                                    <img width="50px" src="@/assets/svg/004-mastercard.svg" alt="">
                                                </div>

                                                <div class="col-md-1">
                                                    <img width="50px" src="@/assets/img/payoneer.png" alt="">
                                                </div>

                                                <div class="col-md-1">
                                                    <img width="50px" src="@/assets/svg/007-discover.svg" alt="">
                                                </div>

                                                <div class="col-md-1">
                                                    <img width="50px" src="@/assets/svg/005-visa.svg" alt="">
                                                </div>
                                                <div class="col-md-4"></div>
                                            </div>
                                            <div class="row mt-2 mb-3">
                                                <div class="col-md-12 text-center mb-3">
                                                    <h5><i>Payoneer</i></h5>
                                                    <a href="https://www.payoneer.com/accounts/">Signup</a>
                                                </div>
                                            </div>
                                         </div>
                                    </li>

                                    <!-- Great Britain account -->
                                    <li class="list-group-item list-group-item-action text-center" v-if="supportedCountryBankOnly(getDetail.country)">
                                        <div class="mt-5">
                                            <h5 class="pb-4">Add your bank account</h5>
                                            <button class="btn btn-primary mb-5" @click="showAccountModal()"><i class="fa fa-plus"></i> Add Bank </button>
                                            <div class="row">
                                                <div class="col-md-4"></div>
                                                <div class="col-md-1"></div>

                                                <div class="col-md-2">
                                                    <img width="50px" src="@/assets/img/payoneer.png" alt="">
                                                </div>

                                                <div class="col-md-1"></div>
                                                <div class="col-md-4"></div>
                                            </div>
                                            <div class="row mt-2 mb-3">
                                                <div class="col-md-12 text-center mb-3">
                                                    <h5><i>Payoneer</i></h5>
                                                    <a href="https://www.payoneer.com/accounts/">Signup</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- Japan Bank Account-->

                                    <li class="list-group-item list-group-item-action text-center" v-if="checkIfCountry(getDetail.country)">
                                        <div class="mt-5">
                                            <div class="row">
                                                <div class="col-md-3"></div>
                                                <div class="col-md-6">
                                                    <div class="card card-block w-100" style="background: #f2f5f7;">
                                                        <div class="card-body">
                                                            <div class="row text-center">
                                                                <div class="col-md-12">
                                                                    <img src="@/assets/transferwise.png" width="50%">
                                                                </div>
                                                            </div>
                                                            <div class="row text-center">
                                                                <div class="col-md-12">
                                                                    <button class="btn btn-primary btn-rounded" @click="showTransferWiseModal()">Add Account</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3"></div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <!-- Icons -->

<!--                                <div class="list-group list-group-icons-meta">-->
<!--                                    <li class="list-group-item list-group-item-action" v-for="cash in GetPaypalAccount">-->
<!--                                        <div class="media">-->
<!--                                            <div class="mr-3 mt-3">-->
<!--                                                <img src="@/assets/svg/005-credit-card.svg"  alt="" width="40px">-->
<!--                                            </div>-->
<!--                                            <div class="media-body mt-2">-->
<!--                                                <div class="row">-->
<!--                                                    <div class="col-md-10">-->
<!--                                                        <h6 class="tx-inverse">PayPal Account</h6>-->
<!--                                                        <p class="mg-b-0">{{cash.customer_id}}</p>-->
<!--                                                    </div>-->
<!--                                                    <div class="col-md-2">-->
<!--                                                        <div class="btn-group pull-right">-->
<!--                                                            <button class="btn btn-default" @click="showBankModal()">Edit</button>-->
<!--                                                            <button class="btn btn-default" @click="deleteAccount()">Del</button>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </li>-->


<!--                                </div>-->


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
    import UserAccount from '../components/UserAccount';

    extend('required', {
        ...required,
        message: 'This field is required'
    });


    export default {

        name: "Settings.vue",

        components: {
            Loading,
            ValidationProvider,
            ValidationObserver,
            UserAccount
        },

        data() {
            return {
                isLoading: false,
                transfer_modal: false,
                form: {
                    email: null,
                    phone: null,
                    currency: null
                },
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
                    account_number: null,
                    sort_code: null
                },

                debit: {
                    name: null,
                    currency: null,
                    cvc: null,
                    exp_year: null,
                    exp_month: null,
                    number: null,
                    object: 'card'
                },

                type: null,

                alerts: {
                    debit: {
                        isAlert: false,
                        message: null
                    }
                },
                countries: ['US', 'GB', 'CA'],
                countries2: [ 'AU','AT', 'BE', 'BG', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
                    'HK', 'IE', 'IT', 'JP', 'LV', 'LT', 'LU', 'MT', 'MX', 'NL', 'NZ', 'NO', 'PL',
                    'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'CH', 'GB']

            }
        },



        created() {
           this.init()
        },

        computed: {

            ...mapGetters([
                'CustomerDetails',
                'getStripeAccount',
                'GetPaypalAccount',
                'getUserStripeAccount',
                'getLoginUser',
                'getDetail'
            ]),
        },

        methods: {

            init() {
                this.$store.dispatch('FETCH_DETAIL')
                this.$store.dispatch('FETCH_CUSTOMER_DETAILS')
                this.$store.dispatch('STRIPE_ACCOUNT')
                this.$store.dispatch('FETCH_USER_PAYPAL_ACCOUNT')
                this.$store.dispatch('FETCH_STRIPE_ACCOUNT')
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

            getAccountLink() {

                this.$store.dispatch('GET_ACCOUNT_LINK')
                    .then( response => {
                        console.log(response)
                        let url = response.link
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

            saveDebitCard() {

                this.isLoading = true

                this.alerts.debit.isALert = false
                this.alerts.debit.message = ''

                //TODO add loaifng
                this.$store.dispatch('ADD_CUSTOMER_DEBIT', this.debit)
                    .then( response => {
                        console.log(response)
                        debugger;
                        this.isLoading = false
                        $('#accountModal').modal('hide')
                        this.init()
                        // //Todo: show notification

                        var msg = 'Card Added successfully';
                        this.showSweetAlert(msg)

                    })
                .catch( error => {
                    console.log(error.data)

                    this.isLoading = false

                    this.alerts.debit.isAlert = true
                    this.alerts.debit.message = error.data.message
                })

            },


            deleteAccount(id, object, account) {
                this.isLoading = true
                var params = {}
                params.id = id,
                    params.object = object
                params.account_id = account

                this.$store.dispatch('REMOVE_EXTERNAL_ACCOUNT', params)
                .then(response => {
                    console.log(response)
                    this.init()
                    this.isLoading = false
                })
                .catch( error => {
                    console.log(error);
                    this.init()
                    this.isLoading = false
                })
            },


            showAccountModal() {

                this.bankIsActive = false
                this.paypalIsActive = false
                this.step = 1

                $('#accountModal').modal('show')
            },

            modalBankAccount() {
                $('#bankAccountModal').modal('show')
            },

            modalDebitCard() {

                $('#debitCardModal').modal('show')
            },

            showBankModal() {
                $('#bankModal').modal('show')
            },

            showPayoneerDebitCardModal() {
                $('#payoneerDebitCardModal').modal('show')
            },

            showPayoneerBankAccountModal() {
                $('#payoneerBankAccountModal').modal('show')
            },


            showSweetAlert(msg) {

                $('.widget-content .mixin').on('click', function () {
                    const toast = swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        padding: '2em'
                    });

                    toast({
                        type: 'success',
                        title: msg,
                        padding: '2em',
                    })

                })
            },

            accountOnboarding() {

                this.isLoading = true
                this.$store.dispatch('GET_ACCOUNT_LINK')
                    .then( response => {
                        console.log(response)
                        let url = response
                        window.location.href = url
                    })
                .catch( error => {
                    console.log(error)
                })
            },

            accountUpdate() {
                this.isLoading = true
                this.$store.dispatch('UPDATE_ACCOUNT_LINK')
                    .then( response => {
                        console.log(response)
                        let url = response
                        window.location.href = url
                    })
                    .catch( error => {
                        console.log(error)
                    })
            },

            checkIfCountry(country) {

                var countries = this.countries2.length
                for (var i = 0; i < countries.length; i++) {
                    if (countries[i] === country) {
                        return false;
                    }
                }
                return true;
            },

            supportedCountry( country ) {
                if (country === 'US' || country === 'CA' || country === 'SG') {
                    return true
                }
                return false
            },

            supportedCountryBankOnly( country ) {
                var countries = this.countries2.length
                for (var i = 0; i < countries.length; i++) {
                    if (countries[i] === country) {
                        return true;
                    }
                }
                return false;
            },

            showTransferWiseModal() {
                this.transfer_modal = !this.transfer_modal
            },

            addTransferWiseAccount() {

                this.isLoading = true;
                var self = this

                setTimeout(function() {

                    self.$store.dispatch('TRANSFERWISE_POST', this.form)
                        .then( response => {
                            console.log( response )
                            self.isLoading = false
                            self.modal = !self.modal
                        })
                        .catch( error => {
                            self.isLoading = false
                            console.log(error.response)
                        })

                }, 2000, this);
            }
        }
    }
</script>

<style scoped>
    label {
        color:black;
    }
</style>