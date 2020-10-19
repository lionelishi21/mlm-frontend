<template>
    <div class="widget widget-card-four" >
        <div class="widget-content">
            <div class="w-content">

                <div class="w-info">
                    <p class="text-6 text-danger" v-if="sales.length < 3">Personal Sales Status</b></p>
                    <p class="text-6 text-success" v-else>Personal Sales Status</p>
                    <hr>
                </div>

            </div>
            <div class="progress-order-body">
                <div class="row mt-1">
                    <div class="col-md-12">
                        <ul class="list-inline badge-collapsed-img mb-3 text-center">
                            <p class="text-6 mt-4">
                                <strong>Personal Sales <br>{{sales.length}}</strong>
                            </p>
                            <a href="#"><small>Whats is this <i class="fa fa-question-circle" @click="goToBoosterPackage()"></i></small></a>
                            <hr>
                            <p class="text-6 mt-3 text-success"><strong>Booster Package(s) <br>
                                {{boosters}}
                            </strong></p>
                            <a href="#"><small>Whats is this <i class="fa fa-question-circle" @click="goToBoosterPackage()"></i></small></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PersonalSales.vue",
        props: ['sales', 'boosters'],
        computed: {
            qSalesPercentage() {
                let num = this.sales.length
                let per = 3
                return num / (per / 100);
            },
        },

        methods: {
            goToBoosterPackage() {
                this.$router.push('/booster-package-infromation')
            }
        }
    }
</script>

<style scoped>

</style>