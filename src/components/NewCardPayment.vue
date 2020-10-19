<template>
    <div>
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
    <div class="row mt-5">
        <button class="btn btn-default" @click="cancel()">Cancel</button>
        <button  :disabled='isDisabled' class="btn pull-right btn-primary" @click.prevent="purchase">Submit</button>
    </div>
    </div>
</template>

<script>
    import {ValidationObserver, ValidationProvider} from "vee-validate";
    let stripe = Stripe(`pk_live_4qziF8NxRPkFZLYgqzEAZMKv00zMDbCPB5`),
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

    export default {
        props:['form'],
        data () {
            return {
                fullpage: true,
                isLoading: false,
                isDisabled: false,
                loading: false,
                email: false,
                publishableKey: 'pk_live_4qziF8NxRPkFZLYgqzEAZMKv00zMDbCPB5',
                publishableKeyTest: 'sk_test_Yha4F4mAhvGfsvZSvvCDgbBy00nMLLAhkJ',
                amount: 34.95,
                token: null,
                charge: null,
                hasCardErrors: false,
                api_error: false,
                emailInvalid: false,
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
                        amount: self.amount,
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
                this.$emit('send-payment', charge)
            },

            cancel() {
                $('#card_method').modal('hide')
            }
        }
    }
</script>
