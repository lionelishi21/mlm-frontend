<template>
    <div id="content" class="main-content">

        <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :is-full-page="true">
        </loading>

        <b-modal  v-model="showmodal" title="Payment" centered hide-footer="true">
            <card-payment @send-payment="acceptPayment"></card-payment>
        </b-modal>


        <div class="row layout-top-spacing">
            <div class="col-md-12">
                <nav class="breadcrumb-two" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Booster</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0);">Payment</a></li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row layout-px-spacing">
            <div class="col-md-12">
                <div class="card"  v-if="isComplete === false">
                    <div class="card-body">
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
                            </select>
                        </div>
                    </div>
                </div>
                <div v-else class="card mt-5">
                        <div class="card-body">
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
            showmodal: false,
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
                    this.showmodal = !this.showmodal
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

                        this.showmodal = false
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