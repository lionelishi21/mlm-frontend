<template>
    <div class="widget widget-account-invoice-one">
        <div class="widget-content">

            <div class="header">
                <div class="header-body">
                    <h6><b>Weekly Sales</b></h6>
                </div>
            </div>

            <div class="invoice-box">
                <div class="acc-total-info">
                    <h5>Sales</h5>
                    <p class="acc-amount">{{sales}}</p>
                </div>
                <div class="inv-action">
                    <a href="#" class="btn btn-success"@click="goToPersonalSales()">View Sales</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "SalesComponents.vue",
        props: ['sales', 'link'],
        methods: {
            goToPersonalSales() {
                var url = '/dashboard/affiliates/'+this.link
                this.$router.push(url);
            }
        }
    }
</script>

<style scoped>

</style>