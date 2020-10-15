<template>
    <div>
        <loading
                :active.sync="isLoading"
                :can-cancel="true"
                :on-cancel="onCancel"
                :is-full-page="fullPage">
        </loading>

        <div class="form-row" v-if="api_error">
            <span class="alert alert-danger">{{api_error_message}}</span>
        </div>

        <div class="form-row" v-if="emailInvalid">
            <span class="alert alert-danger">{{error.message}}</span>
        </div>

        <div class="form-row" style="margin-top: 30px;">
            <div class="col-md-12">
                <label>Card Number</label>
                <div ref="cardNumber" class="form-control"></div>
            </div>
        </div>

        <div class="form-row" style="margin-top: 30px;">
            <div class="col-md-6">
                <label>Card Expiry Date</label>
                <div ref="cardExpiry" class="form-control"></div>
            </div>
            <div class="col-md-6">
                <label>Card CVC</label>
                <div ref="cardCvc" class="form-control""></div>
        </div>
    </div>
    <div class="form-row mt-5">
        <button  :disabled='isDisabled' class="btn pull-right btn-primary" @click.prevent="purchase">Purchase with card</button>
    </div>
    </div>
</template>

<script>
    import {ValidationObserver, ValidationProvider} from "vee-validate";

    let stripe = Stripe(`pk_test_Yfe8V58F3Kw8aZUWqLtXqNnl00Bv7eXD7P`),
        elements = stripe.elements(),
        cardNumber = undefined,
        cardExpiry = undefined,
        cardCvc = undefined;

    let style = {
        style: {
            base: {
                lineHeight: '1.929'
            },
            invalid: {
                iconColor: '#FFC7EE',
                color: '#FFC7EE',
            },

        },
    }

    import Loading from 'vue-loading-overlay';
    export default {
        components: {
            Loading,

        },
        props:['billing'],
        data () {
            return {
                fullpage: true,
                isLoading: false,
                isDisabled: false,
                loading: false,
                email: false,
                publishableKey: 'pk_live_4qziF8NxRPkFZLYgqzEAZMKv00zMDbCPB5',
                publishableKeyTest: 'sk_test_Yha4F4mAhvGfsvZSvvCDgbBy00nMLLAhkJ',
                // amount: 25.00,
                token: null,
                charge: null,
                hasCardErrors: false,
                api_error: false,
                emailInvalid: false,
                description: 'MCC Booster packages',
                api_error_message: '',
                error: {
                    message: ''
                }
            }
        },

        mounted: function () {

            cardNumber = elements.create('cardNumber', style);
            cardExpiry = elements.create('cardExpiry', style);
            cardCvc = elements.create('cardCvc', style);

            cardNumber.mount(this.$refs.cardNumber);
            cardExpiry.mount(this.$refs.cardExpiry)
            cardCvc.mount(this.$refs.cardCvc)
        },

        methods: {
            submit () {
                this.$refs.elementsRef.submit();
            },

            purchase: function () {

                this.isDisabled = true
                this.isLoading = true
                let self = this;

                stripe.createToken(cardNumber).then(function(result) {

                    if ( result.error ) {
                        console.log(result.error)
                        self.isLoading = false
                        self.isDisabled = false
                        self.hasCardErrors = true;
                        self.api_error = true,
                            self.api_error_message = 'Something went wrong whilte trying to process credit card please contact administrator'
                        self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                        return;
                    }

                    var token = result.token

                    self.charge = {
                        tokenId: token.id,
                        payment_type: 'stripe',
                        billing: self.billing, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                        description: self.description // optional description that will show up on stripe when looking at payments
                    }

                    self.sendPaymentInformation(self.charge);
                })
                    .catch(error => {
                        console.log(error)
                        this.isLoading = false
                        this.isDisabled = false
                    });

            },


            sendPaymentInformation(charge) {

                this.api_error = false
                let form = {
                    charge: charge,
                }

                this.$store.dispatch('BUY_BOOSTER_PACKAGES', form)
                    .then( response => {

                        console.log(response)
                        this.isDisabled = false
                        // this.$router.push('/order-completed')
                        this.isLoading = false

                    }).catch( error => {

                    console.log(error)
                    this.isLoading = false
                    this.isDisabled = false
                    this.emailInvalid = true
                    this.error.message = error.data.message.email
                    this.loading = false
                })

            }
        }
    }
</script>
