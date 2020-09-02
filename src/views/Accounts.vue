<template>
<!--  BEGIN CONTENT AREA  -->
<div id="content" class="main-content">
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing mb-3">
            <div class="col-md-12">
                <h6><i>Users Stripe Accounts</i></h6>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <pre>{{getAllAccounts}}</pre>
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