<template>
    <div>
        <div class="widget widget-card-four" >
            <div class="">
                <div class="w-content">
                    <div class="w-info" v-if="getGroupSales.status == 'bronze'" >
                        <p class="text-6 text-danger">Bronze Group Sales</p>
                        <hr>
                    </div>
                    <div class="w-info" v-if="getGroupSales.status == 'silver'" >
                        <p class="text-6 text-danger">Silver Group Sales</p>
                        <hr>
                    </div>
                    <div class="w-info" v-if="getGroupSales.status == 'gold'" >
                        <p class="text-6 text-danger">Gold Group Sales</p>
                        <hr>
                    </div>
                    <div class="w-info" v-if="getGroupSales.status == 'ruby'" >
                        <p class="text-6 text-danger">Ruby Group Sales</p>
                        <hr>
                    </div>
                    <div class="w-info" v-if="getGroupSales.status == 'diamond'" >
                        <p class="text-6 text-danger">Diamond Group Sales</p>
                        <hr>
                    </div>
                </div>
                <div class="">
                    <div class="row">
                        <div class="col-md-12">
                            <sales-chart :sales="getGroupSales.position"></sales-chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SalesChart from './charts/radial.vue';
    import { mapGetters } from 'vuex';
    export default {
        props: ['user_id'],
        name: "GroupSales.vue",
        components: {
            SalesChart
        },

        data() {
            return {
                bronze_status: 12,
                silver_status: 36,
                gold_status: 108,
                ruby_status: 324,
                diamond_status: 972
            }
        },

        created() {

            if (this.user_id) {
                this.$store.dispatch('USER_GROUP_SALE', this.user_id)
            } else {
                this.$store.dispatch('USER_GROUP_SALES')
            }

        },

        computed: {
            ...mapGetters([
                'getGroupSales'
            ]),

            calculateDept() {},

            bronzePercentage() {
                let num = this.sales
                let per = 12
                return num / (per / 100);
            },

            silverPercentage() {
                let num = this.sales
                let per = 36
                return num / (per / 100);
            },

            goldPercentage() {
                let num = this.sales
                let per = 108
                return num / (per / 100);
            },

            rubyPercentage() {
                let num = this.sales
                let per = 324
                return num / (per / 100);
            },

            diamondPercentage() {
                let num = this.sales
                let per = 972
                return num / (per / 100);
            }
        },

        methods: {

            bronze() {
                if (this.sales < 12) {
                    return true
                }
                return false
            },

            silver() {

                if (this.sales < 36 && this.sales >= 12) {
                    return true
                }
                return false
            },

            gold() {
                if (this.sales < 108 && this.sales >= 36) {
                    return true
                }
                return false
            },

            ruby() {
                if (this.sales < 324 && this.sales >= 108) {
                    return true
                }
                return false
            },

            diamond() {

                if (this.sales >= 324) {
                    return true
                }

                return false
            },

            diamondRepeat() {

                if (this.getAffiliateDetails.group_sales_counts >= 972) {
                    return true
                }
                return false
            },

            percentage(partialValue, totalValue) {
                return (100 * partialValue) / totalValue;
            }
        }
    }
</script>

<style lang="scss" scoped>

    $silver: #bfbfbf !important;
    $bronze: #cd7f32 !important;
    $gold: #FFD700 !important;
    $ruby: #e0115f !important;
    $diamond:  #b9f2ff !important;

    .silver { background:  $silver;}
    .bronze { background: $bronze;}
    .gold { background: $gold; }
    .ruby { background: $ruby; }
    .diamond { background: $diamond; }

    ul.simple-bullet-list li.diamond-dot:before {
        border-color: $diamond;
    }

    ul.simple-bullet-list li.ruby-dot:before {
        border-color: $ruby;
    }

    ul.simple-bullet-list li.gold-dot:before {
        border-color: $gold;
    }

    ul.simple-bullet-list li.silver-dot:before {
        border-color: $silver;
    }

    ul.simple-bullet-list li.bronze-dot:before {
        border-color: $bronze;
    }

    .card-status {
        border: 3px solid #f03434;
    }

    .h2 {
        font-size: 20px !important;
        font-weight: bold;
        color: #3498db;
    }

    .h1 {
        font-size: 20px !important;
        font-weight: bold;
        color: #ffffff !important;
    }

    .hdescriprion {
        font-size: 19px !important;
        color: #000000;
    }


</style>