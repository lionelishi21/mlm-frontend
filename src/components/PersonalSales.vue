<template>
    <div class="widget widget-card-four" >
        <div class="widget-content">
            <div class="w-content">

                <div class="w-info">
                    <p class="text-6 text-danger" v-if="sales.length < 3">
                        Personal Sales Status
                    </p>
                    <p class="text-6 text-success" v-else>Personal Sale</p>
                </div>

            </div>
            <div class="progress-order-body">
                <div class="row">
                    <div class="col-md-12">
                        <ul class="list-inline badge-collapsed-img mb-4 mt-4 text-center">
                            <h4>
                                <strong>Personal Sales <br>{{sales.length}}</strong>
                            </h4>
                            <hr>
                            <h4 class="text-6 mt-4 text-success"><strong>Booster Package(s) <br>
                                {{boosters}}
                            </strong>
                            </h4>

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