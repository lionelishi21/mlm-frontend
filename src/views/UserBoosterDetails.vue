<template>
    <div id="content" class="main-content">
        <div class="layout-px-spacing">

<!--            <div class="row layout-spacing">-->
<!--                <pre>{{boosterUser}}</pre>-->
<!--            </div>-->

            <div class="row layout-spacing">
                <div class="col-md-3">
                    <div class="user-profile">
                        <div class="widget-content widget-content-area">
                            <div class="text-center user-info">
                                <img src="@/assets/avatar/img12.jpg" alt="avatar">
                                <p class="">{{boosterUser.user.first_name}} {{boosterUser.user.last_name}} <br><small>{{boosterUser.user.email}}</small></p>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="user-profile">
                        <div class="widget-content widget-content-area">
                            <div class="text-center user-info">
                                <h1>{{boosterUser.boosters.length}}</h1>
                                <p class="">Booster Packages</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">
                            <h5>Boosters Packages</h5>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table mb-4">
                                    <caption>List of all Users Booster Packages</caption>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Date Added</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="booster in boosterUser.boosters">
                                        <td>{{booster.name}}</td>
                                        <td class=""><span class=" shadow-none badge outline-badge-primary">Tier </span></td>
                                        <td>{{ booster.date }}</td>
                                        <th><button class="btn btn-primary" @click="goToDetails(booster.id)"> View </button></th>
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
        name: "UserBoosterDetails.vue",
        computed: {
            ...mapGetters([
                'boosterUser'
            ])
        },

        created() {
            var user_id = this.$route.params.id
            this.$store.dispatch('BOOSTER_USER', user_id)
        },

        methods: {
            goToDetails( id ) {
                this.$router.push('/dashboard/booster-details/'+id)
            }
        }


    }
</script>

<style scoped>

</style>