<template>
    <div id="content" class="main-content">

        <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :is-full-page="true">
        </loading>

         <!--   Card Modal   -->
        <div class="modal fade slide-up disable-scroll"  id="card_method"
             tabindex="-1" role="dialog" aria-labelledby="modalSlideUpLabel" aria-hidden="false">
            <div class="modal-dialog ">

                <div class="modal-content-wrapper">
                    <div class="modal-content">
                        <div class="modal-header clearfix text-left">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                <i class="pg-close fs-14"></i>
                            </button>
                            <h5>Payment</h5>
                        </div>
                        <div class="modal-body">
                            <card-payment @send-payment="acceptPayment"></card-payment>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
        </div>
         <!--  End Card Modal-->

         <!--  Paypal Modal -->
        <div class="modal fade slide-up disable-scroll"  id="paypal_modal"
             tabindex="-1" role="dialog" aria-labelledby="modalSlideUpLabel" aria-hidden="false">
            <div class="modal-dialog ">

                <div class="modal-content-wrapper">
                    <div class="modal-content">
                        <div class="modal-header clearfix text-left">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                                <i class="pg-close fs-14"></i>
                            </button>
                            <h5>Payment</h5>
                        </div>
                        <div class="modal-body">
                            <div id="app">
                           
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
        </div>
         <!--  End Paypal Modal -->

        <div class="row layout-px-spacing">
            <div class="col-md-12">

                 <div class="widget widget-account-invoice-one" v-if="isComplete === false">
                    <div class="widget-heading">
                        <h5>Billing Information</h5>
                    </div>
                    <div class="widget-content">
                        <div class="form-row mb-4">
                            <div class="col-md-6">
                                <h4>Purchase MCC Booster Package </h4>
                                <h2 class="text-primary"><strong>${{display_total}}.00</strong></h2>
                            </div>
                            <div class="col-md-6">

                            </div>
                        </div>

                        <div class="form-row mb-4">
                            <label for="">Payment Method</label>
                            <select @change="showPaymentModal()" class="form-control" v-model="form.payment_method">
                                <option value="">Select Payment Method</option>
                                <option value="card">Debit/Credit Card</option>
                                <option value="paypal">Paypal</option>
                            </select>
                        </div>
                    </div>
                 </div>

                  <div v-else class="widget widget-account-invoice-one mt-5">
                        <div class="widget-content text-center">
                            <h3 class="mb-0">Order Complete!</h3>
                            <p class="text-6 my-4">"Please check your email (and Spam) for further instructions." <br>
                                Contact <a href="">admin@majesticares.com </a>if assistance is needed.</p>
                                <a href="/dashboard" class="btn btn-primary">
                                    <i class="fas fa-angle-left pr-3"></i> DashBoard
                                </a>
                         </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import BoosterPayment from "../components/partials/BoosterPayment";
    import CardPayment from "../components/NewCardPayment";
    import PayPal from 'vue-paypal-checkout'

    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        name: "Boaster-packages.vue",
        components: {
            BoosterPayment,
            CardPayment,
            PayPal,
            Loading
        },

        data: () => ({

            isComplete: false,
            amount: 0,
            form: {},
            payment_method: '',
            isLoading: false,
            fullpage: true,
            payment_method: 'card',
            packages: [{name: 'MCC Booster', cost: '25.00'}],
            qty: 1,
            step: 1,

            credentials: {
                sandbox: 'AbUMmsT4JJSCUg86MP4SV1-iA3jjCtPYpqkrV3xrU2ZrAZ17FkFHA_AuI2LVe2xhu-nYBZB5ezKN2Y9z',
                production: 'ASDLLb5slq4glmE0Xoa1ANXKNp9Z6JDsdBB1HnYwQNTOwK5s1lxreTz0wuo_gWyJCsvlmJpKJqrD1Jj9'
            },

            myStyle: {
                label: 'checkout',
                size:  'responsive',
                shape: 'rect',
                color: 'blue'
            },

            experience: {

                input_fields: {
                    no_shipping: 1,
                },
            },

            billing: {
                amount: 2500,
                qty: 1,
                tokenId: '',
                method: ''
            }

        }),

        computed: {

            total: function () {
                return this.billing.qty * '2500';
            },

            display_total() {
                return this.billing.qty * '25';
            }
        },

        created() {
            this.billing.qty = this.$route.params.id
        },

        methods: {

            nextStep() {
                this.step = 2
            },

            showPaymentModal() {

                if ( this.form.payment_method == 'card') {
                    $('#card_method').modal('show')
                }

                if (this.form.payment_method == 'paypal') {
                    $('#paypal_modal').modal('show')
                }

            },

            acceptPayment(params) {

                this.billing.amount = this.total
                this.billing.tokenId = params.tokenId
                this.billing.method = 'stripe'
                this.isLoading = true
                this.$store.dispatch('BUY_BOOSTER_PACKAGES', this.billing)
                    .then( response => {

                        this.isLoading = false
                        $('#card_method').modal('hide')
                        this.isComplete = true

                        console.log(response)

                    }).catch( error => {

                        this.isLoading = false
                        console.log(error.response)
                })
            },

            paymentAuthorized: function( data ) {
                this.paypalPayment( data )
            },

            paymentCompleted: function (data) {

            },

            paymentCancelled: function (data) {

            },

            paypalPayment( params ) {

                this.billing.amount = this.total
                this.billing.tokenId = params.tokenId
                this.billing.method = 'paypal'

                this.isLoading = true
                this.$store.dispatch('BUY_BOOSTER_PACKAGES', this.billing)
                    .then( response => {

                        this.isLoading = false
                        $('#card_method').modal('hide')
                        this.isComplete = true

                        console.log(response)

                    }).catch( error => {

                    this.isLoading = false
                    console.log(error.response)
                })
            },

            couponCode() {

                this.billing.amount = this.total
                this.billing.tokenId = params.tokenId
                this.billing.methods = 'coupon'

                this.isLoading = true
                this.$store.dispatch('BUY_BOOSTER_PACKAGES', this.billing)
                    .then( response => {
                        console.log( response)
                    })
                    .catch( error => {
                        console.log( response )
                    })
            }
        }
    }
</script>

<style scoped>
    ::placeholder {
        color: dark !important;
        opacity: 2 !important; /* Firefox */
    }

    .glowing-border {
        border: 2px solid #dadada !important;
        border-radius: 7px;
    }

    .glowing-border:focus {
        outline: none !important;
        border-color: #9ecaed !important;
        box-shadow: 0 0 10px #9ecaed !important;
    }

    label {
        color: black !important;
    }
</style>