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

                        <img class="logos mb-3" src="@/assets/logo.png" height="100" alt="MCC" />

                        <h1 class="">Reset your password</h1>
                        <ValidationObserver ref="observer" v-slot="{ invalid }">
                            <form @submit.prevent="password(user)">
                                <div class="form">

                                    <div class="form-group mb-3">
                                        <legend><small>Enter your new password</small></legend>
                                    </div>

                                    <validation-provider rules="required|email" v-slot="{ errors }">
                                        <div class="form-group mb-3">
                                            <div class="input-group">
                                                <input v-model="user.email" name="username" placeholder="Email address" type="text" class="form-control form-control-lg" />
                                            </div>
                                            <span class="help-block text-danger">{{errors[0]}}</span>
                                        </div>
                                    </validation-provider>

                                    <validation-provider name="confirm" rules="required" v-slot="{ errors }">
                                        <div class="form-group mb-3">
                                            <div class="input-group">
                                                <input v-model="user.password" name="pwd" type="password"  placeholder="Enter password" class="form-control text-dark form-control-lg" />
                                            </div>
                                            <span class="help-block text-danger">{{errors[0]}}</span>
                                        </div>
                                    </validation-provider>

                                    <validation-provider  rules="required|passwordconfirm:@confirm" v-slot="{ errors }">
                                        <div class="form-group">
                                            <input type="password" v-model="user.password_confirmation" class="form-control form-control-lg" id="location" placeholder="Confrim password">
                                            <span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
                                        </div>
                                    </validation-provider>

                                    <div class="form-group mb-3">
                                            <button :disabled="invalid" type="submit" class="btn btn-block btn-primary mt-2">Update</button>
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
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';
    import { required, email } from 'vee-validate/dist/rules';

    extend('email', {
        ...email,
        message: 'The E-mail field must be a valid email'
    });

    extend('passwordconfirm', {
        params: ['target'],
        validate(value, { target }) {
            return value === target;
        },
        message: 'Password does not match'
    });

    extend('required', {
        ...required,
        message: 'This field is required'
    });




    export default {
        components: {
            Loading,
            ValidationObserver,
            ValidationProvider
        },
        data() {
            return {
                title: 'Login Page',
                isLoading: false,
                fullPage: true,
                user: {
                    email: '',
                    password: '',
                    token: '',
                    password_confirmation: ''
                },
                successMsg: false,
                validationErr: '',
                is_valid: '',
                error: {
                    message: ''
                }
            }
        },

        created() {
            this.successMsg = false
            if (this.$route.query.token != undefined ) {
                this.user.token = this.$route.query.token
            } else {
                this.$router.push('/')
            }

        },
        mounted() {

        },
        methods: {
            password(user) {
                this.error.message = ''
                this.isLoading = true
                this.$store.dispatch('PASSWORD_POST', user)
                    .then( response => {
                        this.isLoading = false
                        this.complete = true
                        console.log(response)
                        this.$router.push('/')
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
