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
                        <ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">
                            <li class="list-inline-item chat-online-usr" v-for="(index, sale) in sales.length">
                                <img alt="avatar" src="@/assets/avatar/img12.jpg">
                            </li>
                            <p class="text-4 mt-1"><strong>{{sales.length}} Personal Sales</strong></p>
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
        props: ['sales'],
        computed: {
            qSalesPercentage() {
                let num = this.sales.length
                let per = 3
                return num / (per / 100);
            },
        }
    }
</script>

<style scoped>

</style>