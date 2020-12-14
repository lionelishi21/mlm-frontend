<template>
    <div class="widget widget-five">
        <div class="widget-content">
            <div class="header">
                <div class="header-body">
                    <h6>Wallet  Balance</h6>
                </div>
            </div>
            <div class="w-content">
                <h5>Balance</h5>
                <h2 class="acc-amount">{{totalCashbonus | currency}}</h2>
                <a href="#" class="btn btn-success btn-flat"@click="goToSummary()">Withdraw </a>
                <a href="#" class="btn btn-success btn-flat ml-1"@click="goToPersonalSales()">Personal Sales</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "Summary.vue",
        props: ['affiliateid'],
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
            goToPersonalSales() {
                var url = '/dashboard/affiliates/'+this.affiliateid
                this.$router.push(url);
            },

            payoutModal() {
                $('#payoutModal').modal('show')
            },
        }
    }
</script>