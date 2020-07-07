<template>
    <div>
        <div class="loading-overlay">
            <div class="bounce-loader">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
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
                isDisabled: false,
                loading: false,
                email: false,
                publishableKey: 'pk_live_4qziF8NxRPkFZLYgqzEAZMKv00zMDbCPB5',
                amount: 34.95,
                token: null,
                charge: null,
                hasCardErrors: false
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

                let self = this;
                stripe.createToken(cardNumber).then(function(result) {

                    if (result.error) {
                        self.hasCardErrors = true;
                        self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                        return;
                    }

                    var token = result.token
                    self.charge = {
                        tokenId: token.id,
                        amount: self.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                        description: self.description // optional description that will show up on stripe when looking at payments
                    }
                    console.log(self.charge)
                    self.sendPaymentInformation(self.charge);
                });
            },


            sendPaymentInformation(charge) {
                this.loading = true

                let form = {
                    charge: charge,
                    user: this.form
                }

                this.$store.dispatch('BUY_BOOK', form)
                    .then( response => {
                        this.isDisabled = true
                        this.$router.push('/order-completed')

                    }).catch( error => {

                    this.isDisabled = true
                    console.log(error.response)
                })

            }
        }
    }
</script>
