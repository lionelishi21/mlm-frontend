<template>
    <div>

        <div class="vld-parent">
            <loading
                    :active.sync="isLoading"
                    :is-full-page="fullPage">
            </loading>
        </div>

        <b-modal v-model="bankmodal" modal-footer centered hide-footer="true" >
            <div class="row">
                <div class="col-md-12">
                    <h4> Bank Account Information</h4>
                    <hr>

                    <div v-if="alerts.debit.isAlert" class="alert alert-danger mb-4" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <i class="fa fa-times"></i>
                        </button>
                        <strong>Card Error!</strong> {{alerts.debit.message}}.</button>
                    </div>

                    <form>

                        <div class="form-group">
                            <ValidationProvider name="account_number" rules="required" v-slot="{ errors }">
                                <label for="">Routing Number</label>
                                <input type="text" v-model="bank.routing_number"  placeholder="" class="form-control">
                                <span class="text-danger">{{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>

                        <ValidationProvider name="currency" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label for="">Currency</label>
                                <select v-model="bank.currency" class="form-control">
                                    <option value="usd">US</option>
                                    <option value="gbp">GB</option>
                                    <option value="can">CA</option>
                                    <option value="sek">SE</option>
                                    <option value="chf">CH</option>
                                </select>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider name="account_number" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label class="text-dark"  v-if="country == 'CH'" >IBAN</label>
                                <label class="text-dark"  v-else>Account Number</label>

                                <input type="text" class="form-control" v-model="bank.account_number" >
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label class="text-dark" >Account Holder Name</label>
                                <input type="text" v-model="bank.account_holder_name" class="form-control">
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label class="text-dark" >Account Holder Type</label>
                                <select class="form-control" v-model="bank.account_holder_type">
                                    <option value="individual">Individual</option>
                                    <option value="company">Company</option>
                                </select>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <div class="form-group">
                            <button class="btn btn-block btn-lg btn-primary" @click.prevent="saveBankInformation()">Submit</button>
                            <button class="btn btn-block btn-lg btn-default" @click.prevent="bankmodal = false">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </b-modal>

        <b-modal v-model="cardmodal" modal-footer centered hide-footer="true" >
            <div class="row">
                <div class="col-md-12">
                    <h4>Debit Card Information</h4>

                    <div v-if="alerts.debit.isAlert" class="alert alert-danger mb-4" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <i class="fa fa-times"></i>
                        </button>
                        <strong>Card Error!</strong> {{alerts.debit.message}}.</button>
                    </div>
                    <hr>

                    <form>
                        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label class="text-dark">Card Holder Name</label>
                                <input type="text" v-model="debit.name" class="form-control">
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label class="text-dark">Currency</label>
                                <select v-model="debit.currency" class="form-control">
                                    <option value="usd">US</option>
                                    <option value="can">CA</option>
                                    <option value="gbp">GB</option>
                                    <option value="sek">SE</option>
                                    <option value="chf">CH</option>
                                </select>
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>
                        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                            <div class="form-group">
                                <label class="text-dark">Card Number</label>
                                <input type="text"  v-mask="'####-####-####-####'" v-model="debit.number" class="form-control">
                                <span class="text-danger">{{ errors[0] }}</span>
                            </div>
                        </ValidationProvider>

                        <div class="row">
                            <div class="col-md-4">
                                <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                                    <div class="form-group ">
                                        <label class="text-dark">Expiry Date</label>
                                        <input type="number" v-mask="'##'" v-model="debit.exp_month" class="form-control">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4">
                                <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label class="text-dark">Expiry Year</label>
                                        <input type="number" v-mask="'####'" v-model="debit.exp_year" class="form-control">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                            <div class="col-md-4">
                                <ValidationProvider name="name" rules="required" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label class="text-dark">CVC</label>
                                        <input type="text" v-model="debit.cvc" class="form-control">
                                        <span class="text-danger">{{ errors[0] }}</span>
                                    </div>
                                </ValidationProvider>
                            </div>
                        </div>

                        <div class="form-group">
                            <button class="btn btn-block btn-primary" @click.prevent="saveDebitCard()">Submit</button>
                            <button class="btn btn-block btn-lg btn-default" @click.prevent="cardmodal = false">Cancel</button>
                        </div>

                    </form>
                </div>
            </div>
        </b-modal>

        <!--  Debit Card Modal Popup -->

        <!--  Debit Card Popup End -->
    </div>
</template>

<script>

    import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
    import { required } from "vee-validate/dist/rules";
    import Loading from 'vue-loading-overlay';

    extend('required', {
        ...required,
        message: 'This field is required'
    });

    export default {
        components: {
            Loading,
            ValidationProvider,
            ValidationObserver
        },

        name: "UserAccount.vue",
        props: ['country', 'bankmodal', 'cardmodal'],
        data() {
            return {
                isLoading: false,
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

                alerts: {
                    debit: {
                        isAlert: false,
                        message: null
                    }
                },
                fullPage: true,
            }
        },

        methods: {

            saveBankInformation() {

                this.success_alert = false
                this.error_alert = false

                this.bank.country = this.country
                this.$store.dispatch('ADD_USER_BANK', this.bank)
                    .then( response => {
                        this.init()
                        this.bankmodal = false
                        console.log( response )
                        this.success_alert = true

                    })
                    .catch( error => {
                        console.log(error)
                        this.error_alert = true
                    })
            },

            saveDebitCard() {

                this.isLoading = true

                this.success_alert = false
                this.error_alert = false

                //TODO add loaifng
                this.$store.dispatch('ADD_CUSTOMER_DEBIT', this.debit)
                    .then( response => {
                        console.log(response)
                        this.isLoading = false
                        this.init()
                        // //Todo: show notification

                        var msg = 'Card Added successfully';
                        this.showSweetAlert(msg)
                        this.cardmodal = false

                    })
                    .catch( error => {
                        console.log(error.data)
                        this.isLoading = false

                        this.alerts.debit.isAlert = true
                        this.alerts.debit.message = error.data.message
                        this.cardmodal = false
                    })
            },
            init() {
                this.$store.dispatch('FETCH_DETAIL')
                this.$store.dispatch('FETCH_CUSTOMER_DETAILS')
                this.$store.dispatch('STRIPE_ACCOUNT')
                this.$store.dispatch('FETCH_USER_PAYPAL_ACCOUNT')
                this.$store.dispatch('FETCH_STRIPE_ACCOUNT')
            },
            cancel() {
                $('#payoneerBankAccountModal').modal('hide');
                $('#payoneerDebitCardModal').modal('hide');
                $('#debitCardModal').modal('hide');
                $('#bankAccountModal').modal('hide');
            }
        }
    }
</script>

<style scoped>

</style>