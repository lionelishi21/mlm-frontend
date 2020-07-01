<template>
    <div>
        <stripe-elements
                ref="elementsRef"
                :pk="publishableKey"
                :amount="amount"
                locale="en"
                @token="tokenCreated"
                @loading="loading = $event">
        </stripe-elements>
        <button class="btn btn-primary" @click.prevent="submit">Pay ${{amount}}</button>
    </div>
</template>

<script>
    import { StripeElements } from 'vue-stripe-checkout';
    export default {
        props:['form'],
        components: {
            StripeElements
        },
        data () {
            return {
                loading: false,
                email: false,
                publishableKey: 'pk_test_Yfe8V58F3Kw8aZUWqLtXqNnl00Bv7eXD7P',
                amount: 34.95,
                token: null,
                charge: null,
            }
        },
        methods: {
            submit () {
                this.$refs.elementsRef.submit();
            },
            tokenCreated (token) {
                this.token = token;
                // for additional charge objects go to https://stripe.com/docs/api/charges/object
                this.charge = {
                    tokenId: token.id,
                    amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                    description: this.description // optional description that will show up on stripe when looking at payments
                }
                console.log(this.charge)
                this.sendTokenToServer(this.charge);
            },

            sendTokenToServer (charge) {
                this.$store.dispatch('MAKE_PAYMENT', charge)
                    .then( response => {
                        console.log(response)
                        this.sendPaymentInformation(response)
                    })
                    .catch( error => {
                        console.log(error.response)
                    })
                // Send to charge to your backend server to be processed
                // Documentation here: https://stripe.com/docs/api/charges/create

            },

            sendPaymentInformation(data) {

                this.loading = true
                let formData = new FormData()

                formData.append('payments', data)
                formData.append('form', JSON.stringify(this.form))

                console.log(formData)

                let form = {
                    payments: data,
                    user: this.form
                }

                this.$store.dispatch('BUY_BOOK', form)
                    .then( response => {
                        this.$router.push('/order-completed')
                    }).catch( error => {
                    console.log(error.response)
                })

            }
        }
    }
</script>
