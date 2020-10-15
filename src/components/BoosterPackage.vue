<template>
    <div class="widget widget-account-invoice-one">
                    <div class="widget-heading">
                        <h5 class="">MCC Booster Package</h5>
                        <div class="acc-total-info">
                            <p class="acc-amount">$25.00 each</p>
                        </div>
                    </div>

                    <div class="widget-content">
                        <div class="invoice-box">
                            <div class="inv-detail">
                                <div class="info-detail-1" v-for="pack in packages" style="font-size: 16px;">
                                    <h4 class="text-primary mt-2"><strong>{{pack.name}}</strong></h4>
                                    <h3>
                                        <select @change="updateQty($event)" class="form-control form-control-lg" style="color: black;">
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
                            <div class="inv-action">
                                <a href="#" @click="goToPayment()" class="btn btn-block btn-primary">Purchase Booster ${{total}}.00</a>
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
            packages: [{name: 'MCC Booster Package', cost: '25.00'}],
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

            goToPayment() {
                var url = '/dashboard/make-payment/'+this.qty
                this.$router.push(url)
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