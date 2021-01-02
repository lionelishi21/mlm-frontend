<template>
    <div class="form-container outer">
        <loading :active.sync="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage">
        </loading>


        <div class="form-form">
            <div class="form-form-wrap">
                <div class="form-container">
                    <div class="form-content">

                        <h1 class="">Password Recovery</h1>
                        <p class="signup-link recovery">Enter your email and instructions be will emailed to you!</p>
                        <div class="row" v-show="complete">
                            <span class="alert alert-success" ><h6> Success Message! Password reset link has been sent to your email. Please check your email for further instructions</h6></span>
                        </div>
                        <ValidationObserver ref="observer" v-slot="{ invalid }">
                            <form @submit.prevent="sendLink(user)">
                            <div class="form">
                                <validation-provider rules="required|email" v-slot="{ errors }">
                                <div id="email-field" class="field-wrapper input">
                                    <div class="d-flex justify-content-between">
                                        <label for="email">EMAIL</label>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-at-sign"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                    <input v-model="user.email" type="text" class="form-control" value="" placeholder="Email">
                                    <span class="help-block text-danger">{{errors[0]}}</span>
                                </div>
                                </validation-provider>
                                <div class="d-sm-flex justify-content-between">

                                    <div class="field-wrapper">
                                        <button type="submit" class="btn btn-primary" value="">Send</button>
                                        <hr>
                                        <a href="/">Go to login</a>
                                    </div>

                                </div>

                            </div>
                        </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </div>
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

                this.complete = false

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