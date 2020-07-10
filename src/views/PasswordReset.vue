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
                            <form @submit.prevent="login(user)">

                                <div class="form-group mb-3 text-center">
                                    <legend><small>MCC Back Office Login Information</small></legend>
                                </div>

                                <validation-provider rules="required|email" v-slot="{ errors }">
                                    <div class="form-group mb-3">
                                        <label class="text-dark">Email Address</label>
                                        <div class="input-group">
                                            <input v-model="user.email" name="username" type="text" class="form-control form-control-lg" />
                                        </div>
                                        <<span class="help-block text-danger">{{errors[0]}}</span>
                                    </div>
                                </validation-provider>

                                <validation-provider rules="required" v-slot="{ errors }">
                                    <div class="form-group mb-3">
                                        <div class="clearfix">
                                            <label class="float-left text-dark">Password</label>
                                            <a href="#" @click="goToForgotPassword()" class="float-right">Lost Password?</a>
                                        </div>
                                        <div class="input-group">
                                            <input v-model="user.password" name="pwd" type="password" class="form-control text-dark form-control-lg" />
                                        </div>
                                        <span class="help-block text-danger">{{errors[0]}}</span>
                                    </div>
                                </validation-provider>
                                <validation-provider rules="required" v-slot="{ errors }">
                                    <div class="form-group mb-3">
                                        <div class="input-group">
                                            <input v-model="user.password_confrimed" name="pwd" type="password" class="form-control text-dark form-control-lg" />
                                        </div>
                                        <span class="help-block text-danger">{{errors[0]}}</span>
                                    </div>
                                </validation-provider>

                                <div class="row">
                                    <div class="col-sm-4 text-right">
                                        <button :disabled="invalid" type="submit" class="btn btn-primary mt-2">Sign In</button>
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

    extend('required', {
        ...required,
        message: 'This field is required'
    });

    extend('email', {
        ...email,
        message: 'The E-mail field must be a valid email'
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
                    password_confim: ''
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
            if ( this.$route.query.user != undefined ) {
                this.successMsg = true
            }
        },
        mounted() {

        },
        methods: {
            goToForgotPassword(){
                this.$router.push('passwordreset')
            },
            login(user) {
                this.isLoading = true

                this.is_valid = '',
                    this.error.message = ''


                this.$store.dispatch('login', user)
                    .then( response => {
                        console.log( response )
                        console.log('logging user in...')

                        this.$store.dispatch('FETCH_USER')
                            .then ( resp => {
                                this.isLoading = false
                                this.$router.push('/dashboard')
                            })
                            .catch(err => {
                                this.isLoading = false
                                console.log( err.response )
                            })

                    }).catch ( ( error ) => {
                    this.isLoading = false
                    console.log(error.response)
                    this.is_valid = 'is-invalid'
                    this.error.message = error.response.data
                    this.loading = false
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