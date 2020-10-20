<template>
    <div class="container" style="height: 80vh">
        <div class="vld-parent">
            <loading :active.sync="isLoading"
                     :can-cancel="true"
                     :on-cancel="onCancel"
                     :is-full-page="fullPage"></loading>
            <label><input type="checkbox" v-model="fullPage">Full page?</label>
            <button @click.prevent="doAjax">fetch Data</button>
        </div>
        <section v-if="complete" style="padding-top: 20%;">
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">

                    <div class="card-body text-center" style="margin-top: 10%; background: white">
                        <p class="text-primary text-6">Email Successfully Send!!</p>
                        <p>Password reset link has been sent to your email. Please check your email for further instructions</p>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        </section>
        <section  v-else style="padding-top: 20%;">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <div class="card-body" style="margin-top: 10%; background: white">

                        <div class="alert alert-danger" role="alert" v-if="error.message">
                            <h4 class="alert-heading">Error!</h4>
                            <p class="text-white">{{error.message}}</p>
                        </div>
                        <!-- Form Group -->
                        <ValidationObserver ref="observer" v-slot="{ invalid }">
                            <form @submit.prevent="sendLink(user)">

                                <div class="form-group mb-3 text-center">
                                    <legend><small>MCC Back Office Login Information</small></legend>
                                </div>

                                <validation-provider rules="required|email" v-slot="{ errors }">
                                    <div class="form-group mb-3">
                                        <label class="text-dark">Email Address</label>
                                        <div class="input-group">
                                            <input v-model="user.email" name="username" type="text" class="form-control form-control-lg" />
                                        </div>
                                        <span class="help-block text-danger">{{errors[0]}}</span>
                                    </div>
                                </validation-provider>

                                <div class="row">
                                    <div class="col-sm-12 text-right">
                                        <button :disabled="invalid" type="submit" class="btn btn-primary mt-2">Send Email Link</button>
                                    </div>
                                </div>
                            </form>
                        </ValidationObserver>
                    </div>
                </div>
                <div class="col-md-3"></div>
            </div>
        </section>

    </div>
</template>

<script>

    import Loading from "vue-loading-overlay";
    import {extend, ValidationObserver, ValidationProvider} from "vee-validate";
    import {email, required} from "vee-validate/dist/rules";

    extend('required', {
        ...required,
        message: 'This field is required'
    });

    extend('email', {
        ...email,
        message: 'The E-mail field must be a valid email'
    });

    export default {

        name: "ForgotPassword.vue",
        components: {
            Loading,
            ValidationObserver,
            ValidationProvider
        },
        data() {
            return {

                complete: false,
                name: 'Forgot Password',
                title: 'Login Page',
                isLoading: false,
                fullPage: true,

                user: {
                    email: '',
                },

                successMsg: false,
                validationErr: '',
                is_valid: '',

                error: {
                    message: ''
                }
            }
        },
        methods: {

            sendLink(user) {

                this.error.message = ''
                this.isLoading = true

                this.$store.dispatch('SENT_PASSWORD_RESET_LINK', user)
                    .then( response => {
                        this.isLoading = false
                        this.complete = true
                        console.log(response)
                    })
                    .catch( error => {
                        this.isLoading = false
                        this.error.message = 'Email address is incorrect'
                        console.log(error.response)
                    })
            }
        }


    }
</script>

<style lang="scss" scoped>
    .logos {
        padding: 9%;
        margin: 100px;
    }
    body {
        color: white !important;
    }
</style>