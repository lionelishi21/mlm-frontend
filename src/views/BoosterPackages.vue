<template>
<div id="content" class="main-content">
   <div class="row layout-px-spacing">
        <div class="col-md-6">
            <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                    <h5>Billing Information</h5>
                </div>
                <div class="widget-content">

                    <div class="form-row mb-4">
                        <div class="form-group col-md-6">
                            <label for="lastName">First Name</label>
                            <input v-model="billing.first_name" type="text" class="form-control form-control-lg" id="lastName" placeholder="First Name">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="firstName">Last Name</label>
                            <input  v-model="billing.last_name"  type="text" class="form-control form-control-lg" id="firstName" placeholder="Last Name">
                        </div>
                    </div>

                    <div class="form-group mb-4">
                        <label for="inputAddress">Address</label>
                        <input v-model="billing.address" type="text" class="form-control form-control-lg" id="inputAddress" placeholder="1234 Main St">
                    </div>

                    <div class="form-group mb-4">
                        <label for="inputAddress2">Address 2</label>
                        <input v-model="billing.address1" type="text" class="form-control form-control-lg" id="inputAddress2" placeholder="Apartment, studio, or floor">
                    </div>

                    <div class="form-row mb-4">
                        <div class="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input v-model="billing.city" type="text" class="form-control form-control-lg" id="inputCity">
                        </div>
                        <div class="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select v-model="billing.state" id="inputState" class="form-control form-control-lg">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input v-model="billing.zip" type="text" class="glowing-border form-control form-control-lg" id="inputZip">
                        </div>
                    </div>
                    <hr>
                    <h5>Payment Method</h5>
                    <div class="form-group mt-2 mb-4">
                        <div class="form-check pl-0">
                            <select v-model="payment_method" class="form-control form-control-lg">
                                <option value="card">Debit\Credit Card</option>
                                <option value="paypal">Paypal</option>
                            </select>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group mb-4" v-if="payment_method == 'card'">
                        <legend>Debit\Credit Card:</legend>
                        <booster-payment :billing="this.billing"></booster-payment>
                    </div>

                    <div class="form-group mb-4" v-if="payment_method == 'paypal'">
                        <legend>Pay with PayPal</legend>
                        <PayPal
                            class="pt-2"
                            currency="USD"
                            :button-style="myStyle"
                            :amount="total"
                            :client="paypal"
                            :experience="experience"
                            v-on:payment-authorized="paymentAuthorized"
                            v-on:payment-completed="paymentCompleted"
                            v-on:payment-cancelled="paymentCancelled">
                        </PayPal>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6 ">
            <div class="widget widget-account-invoice-one">
                <div class="widget-heading">
                    <h5 class="">MCC Booster Package</h5>
                </div>

                <div class="widget-content">
                    <div class="invoice-box">
                        <div class="acc-total-info">
                            <p class="acc-amount">$25.00 each</p>
                        </div>
                        <div class="inv-detail">
                            <div class="info-detail-1" v-for="pack in packages" style="font-size: 16px;">
                                <h4 class="text-primary mt-2"><strong>{{pack.name}}</strong></h4>
                                <h3>
                                    <select @change="updateQty($event)" class="form-control form-control-lg input-lg" style="color: black;">
                                        <option><h2><strong>Qty</strong></h2></option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                    </select>
                                </h3>
                                <h3><strong>${{total}}.00</strong></h3>
                            </div>
                        </div>
<!--                        <div class="inv-action">-->
<!--                            <a href="#" @click="nextStep()" class="btn btn-block btn-danger">Checkout</a>-->
<!--                        </div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    import BoosterPayment from "../components/partials/BoosterPayment";
    import PayPal from 'vue-paypal-checkout'
    export default {

        name: "Boaster-packages.vue",
        components: {
            BoosterPayment,
            PayPal,
        },

        data: () => ({
            isLoading: false,
            fullpage: true,
            payment_method: 'card',
            packages: [{name: 'MCC Booster', cost: '25.00'}],
            qty: 1,
            step: 1,

            paypal: {
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
                first_name: '',
                last_name: '',
                address: '',
                address1: '',
                city: '',
                state: '',
                country: '',
            }
        }),

        computed: {

            total: function () {
               return this.qty * '25.00';
            }
        },

        methods: {

            nextStep() {
                this.step = 2
            },

            updateQty(event) {

                this.qty = event.target.value
                this.billing.qty = event.target.value
                this.billing.amount = this.total+'00'
            },


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