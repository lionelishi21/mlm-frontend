<template>
    <div class="container" style="padding-top: 8.5%; background: #ececec;">
        <div class="row">
            <div class="col-lg-9">
                <div class="accordion accordion-modern" id="accordion">
                    <div class="card card-default">
                        <div class="card-header">
                            <h4 class="card-title m-0">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                                    Payment
                                </a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="collapse show">
                            <div class="card-body">
                                <form action="/" id="frmPayment" method="post">
                                    <div class="form-row" style="margin-top: 30px;">
                                        <div class="col-md-12">
                                            <label>Card Number</label>
                                            <div ref="cardNumber" class="form-control"></div>

                                        </div>
                                    </div>
                                    <div class="form-row" style="margin-top: 30px;">
                                        <div class="col-md-6">
                                            <label>Card Expiry Date</label>
                                            <div ref="cardExpiry"></div>
                                        </div>
                                        <div class="col-md-6">
                                            <label>Card CVC</label>
                                            <div ref="cardCvc"></div>
                                        </div>
                                    </div>
                                    <button @click.prevent="purchase">Purchase</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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
export default {

    data() {
        return {
            loading: false,
            email: false,
            publishableKey: 'pk_test_Yfe8V58F3Kw8aZUWqLtXqNnl00Bv7eXD7P',
            amount: 34.95,
            token: null,
            charge: null,
        }
    },

    computed: {

    },
    mounted: function () {
        cardNumber = elements.create('cardNumber',style);
        cardExpiry = elements.create('cardExpiry', style);
        cardCvc = elements.create('cardCvc', style);

        cardNumber.mount(this.$refs.cardNumber);
        cardExpiry.mount(this.$refs.cardExpiry)
        cardCvc.mount(this.$refs.cardCvc)
    },

    methods: {
        purchase: function () {
            stripe.createToken(cardNumber).then(function(result) {
               console.log(result.token)
                // Access the token with result.token
            });
        },
    }

}
</script>
