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
            <div class="card">
                    <div class="card-body">
                     <div class="table-responsive">
                        <table class="table table-bordered table-hover table-striped table-checkable table-highlight-head mb-4">
                            <thead>
                            <tr>
                                <th class="checkbox-column">
                                    <div class="custom-control custom-checkbox checkbox-primary">
                                        <input type="checkbox" class="custom-control-input todochkbox" id="todoAll">
                                        <label class="custom-control-label" for="todoAll"></label>
                                    </div>
                                </th>
                                <th class="">Account Name</th>
                                <th class="">Account Email</th>
                                <th class="">Status</th>
                                <th class="text-center">Icons</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="acc in getAllAccounts">
                                    <td>{{acc.email}}</td>
                                    <td v-if="acc.individual">{{acc.individual.first_name}} {{acc.individual.last_name}}</td>
                                    <td v-else> No Name</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
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