<template>
    <div id="content" class="main-content">
        <div class="vld-parent">
            <loading :active.sync="isLoading"
                     :can-cancel="true"
                     :on-cancel="onCancel"
                     :is-full-page="fullPage"></loading>
        </div>
        <div class="layout-px-spacing">
            <div class="col-lg-12">
                <div class="widget-content searchable-container list">
                    <div class="row layout-top-spacing layout-spacing">
                        <div class="col-lg-12">
                            <div class="statbox widget box box-shadow">
                                <div class="widget-header">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>All Affliates</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget-content widget-content-area">
                                    <div class="table-responsive mb-4">
                                        <table id="style-3" class="table style-3 table-hover">
                                            <thead>
                                            <tr>
                                                <th>Record Id</th>
                                                <th>Name</th>
                                                <th>Affiliate Id</th>
                                                <th>Email</th>
                                                <th class="text-center">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr v-for="user in getAllUser.users" class="items">
                                                <th>{{user.id}}</th>
                                                <td>{{user.first_name}}</td>
                                                <td>
                                                    <i v-if="user.affiliate">{{user.affiliate.affiliate_id}}</i>
                                                    <i v-else>No Affiliate Id</i>
                                                </td>
                                                <td>{{user.email}}</td>

                                                <td class="text-center">
<!--                                                    <button  @click="goToDetails(affiliate.user_id)" class="btn btn-outline-primary">view</button>-->
                                                </td>
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
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Users.vue",
        created() {
            this.$store.dispatch("GET_ALL_USER")
        },
        computed: {
            ...mapGetters([
                'getAllUser'
            ])
        }
    }
</script>

<style scoped>

</style>