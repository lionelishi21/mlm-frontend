<template>
    <div id="content" class="main-content">
        <h1>User Stripe Account</h1>
        <div class="layout-px-spacing">
            <div class="col-md-12">
                <div class="widget-content searchable-container list">
                    <div class="row layout-top-spacing layout-spacing">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Accounts.vue",
        data() {
            return {
                title: 'Account'
            }
        },

        computed: {
            ...mapGetters([
                'getAllAccounts'
            ])
        },

        created() {
            this.$store.dispatch('FETCH_STRIPE_ACCOUNTS')
        },

        methods: {

        }
    }
</script>

<style scoped>

</style>