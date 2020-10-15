<template>
    <div class="widget widget-account-invoice-one">

        <div class="header">
            <div class="header-body">
                <h6><b>Wallet</b></h6>
            </div>
        </div>

        <div class="widget-content">
            <div class="invoice-box">

                <div class="acc-total-info">
                    <h5>Balance</h5>
                    <p class="acc-amount">{{totalCashbonus | currency}}</p>
                </div>
                <div class="inv-action">
                    <a href="#" class="btn btn-success"@click="goToSummary()">Withdraw</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Summary.vue",

        created() {
            this.$store.dispatch('GET_ESCROW')
        },
        computed: {
            ...mapGetters([
                'escrow'
            ]),
            totalCashbonus: function(){
                let sum = 0;

                let cashbonus = this.escrow
                for(let i = 0; i < cashbonus.length; i++){
                    sum += parseFloat(cashbonus[i].cash_bonus);
                }

                return sum;
            },
        },
        methods: {
            goToSummary() {
                this.$router.push('/dashboard/wallet')
            },
            payoutModal() {
                $('#payoutModal').modal('show')
            },
        }
    }
</script>

<style scoped>

</style>