<template>
    <div class="container">
        <div class="vld-parent">
            <loading :active.sync="isLoading"
                     :can-cancel="true"
                     :on-cancel="onCancel"
                     :is-full-page="fullPage"></loading>
            <label><input type="checkbox" v-model="fullPage">Full page?</label>
            <button @click.prevent="doAjax">fetch Data</button>
        </div>
        <section  style="padding-top: 20%;">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <a href="/" class="logos">
                        <img src="@/assets/logo.png" height="150" alt="MCC" />
                    </a>
                    <div class="card-body" style="margin-top: 10%; background: white">

                        <div class="alert alert-danger" role="alert" v-if="error.message">
                            <h4 class="alert-heading">Error!</h4>
                            <p class="text-white">{{error.message}}</p>
                        </div>
                        <!-- Form Group -->
                        <ValidationObserver ref="observer" v-slot="{ invalid }">
                            <form @submit.prevent="password(user)">

<!--                                <div class="form-group mb-3 text-center">x`-->
<!--                                    <legend><small>MCC Back Office Login Information</small></legend>-->
<!--                                </div>-->

                                <validation-provider rules="required|email" v-slot="{ errors }">
                                    <div class="form-group mb-3">
                                        <label class="text-dark">Email Address</label>
                                        <div class="input-group">
                                            <input v-model="user.email" name="username" placeholder="Email address" type="text" class="form-control form-control-lg" />
                                        </div>
                                        <span class="help-block text-danger">{{errors[0]}}</span>
                                    </div>
                                </validation-provider>

                                <validation-provider name="confirm" rules="required" v-slot="{ errors }">
                                    <div class="form-group mb-3">
                                        <label class="text-dark">Password</label>
                                        <div class="input-group">
                                            <input v-model="user.password" name="pwd" type="password"  placeholder="Enter password" class="form-control text-dark form-control-lg" />
                                        </div>
                                        <span class="help-block text-danger">{{errors[0]}}</span>
                                    </div>
                                </validation-provider>

                                <validation-provider  rules="required|passwordconfirm:@confirm" v-slot="{ errors }">
                                    <div class="form-group">
                                        <label class="text-dark" for="location">Confrim Password</label>
                                        <input type="password" v-model="user.password_confirmation" class="form-control form-control-lg" id="location" placeholder="Confrim password">
                                        <span class="help-block text-danger" v-if="errors[0]">{{errors[0]}}</span>
                                    </div>
                                </validation-provider>

                                <div class="row">
                                    <div class="col-sm-12  text-right">
                                        <button :disabled="invalid" type="submit" class="btn pull-right btn-primary mt-2">Sign In</button>
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
                this.$router.push('/login')
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
                        this.$router.push('/login')
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