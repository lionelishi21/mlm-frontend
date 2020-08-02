<template>
    <div>
        <div v-if="bronze()" class="widget widget-card-four" >
            <div class="widget-content">
                <div class="w-content">
                    <div class="w-info">
                        <p class="text-6 text-danger">Bronze Group Sales</p>
                        <hr>
                    </div>

                </div>
                <div class="progress-order-body">
                    <div class="row mt-1">
                        <div class="col-md-12">
                            <ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

                                <li class="list-inline-item chat-online-usr" v-for="sale in sales">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>

                                <p class="text-4 mt-1 text-danger"><strong>{{sales}} Group Sales of {{bronze_status}}</strong></p>
                            </ul>
                        </div>
                        <div class="col-md-12 text-right">
                            <div class="progress p-o-progress mt-2">

                                <div class="progress-bar bg-danger"
                                     role="progressbar" :style="'width:'+bronzePercentage+'%'"
                                     :aria-valuenow="bronzePercentage" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="silver()" class=" silver widget widget-card-four" >
            <div class="widget-content">
                <div class="w-content">
                    <div class="w-info">
                        <p class="text-6 text-white">Silver Group Sales</p>
                        <hr>
                    </div>

                </div>
                <div class="progress-order-body">
                    <div class="row mt-1">
                        <div class="col-md-12">
                            <ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

                                <li v-show="sales > 10" class="list-inline-item chat-online-usr" v-for="sale in 10">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>
                                <li v-show="sales <= 10" class="list-inline-item chat-online-usr" v-for="sale in sales">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>

                                <p class="text-4 mt-1 text-white"><strong>{{sales}} Group Sales of {{silver_status}}</strong></p>
                            </ul>
                        </div>
                        <div class="col-md-12 text-right">
                            <div class="progress p-o-progress mt-2">
                                <div class="progress-bar bg-danger"
                                     role="progressbar" :style="'width:'+goldPercentage+'%'"
                                     :aria-valuenow="goldPercentage" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="gold()" class=" gold widget widget-card-four" >
            <div class="widget-content">
                <div class="w-content">
                    <div class="w-info">
                        <p class="text-6 text-dark">Gold Group Sales</p>
                        <hr>
                    </div>
                </div>
                <div class="progress-order-body">
                    <div class="row mt-1">
                        <div class="col-md-12">
                            <ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">
                                <li v-show="sales > 20" class="list-inline-item chat-online-usr" v-for="sale in 10">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>
                                <p class="text-4 mt-1 text-dark"><strong>{{sales}} Group Sales of {{gold_status}}</strong></p>
                            </ul>
                        </div>
                        <div class="col-md-12 text-right">
                            <div class="progress p-o-progress mt-2">
                                <div class="progress-bar bg-danger"
                                     role="progressbar" :style="'width:'+silverPercentage+'%'"
                                     :aria-valuenow="silverPercentage" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="ruby()" class="ruby widget widget-card-four" >
            <div class="widget-content">
                <div class="w-content">
                    <div class="w-info">
                        <p class="text-6 text-white">Ruby Group Sales</p>
                        <hr>
                    </div>
                </div>
                <div class="progress-order-body">
                    <div class="row mt-1">
                        <div class="col-md-12">
                            <ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

                                <li v-show="sales > 20" class="list-inline-item chat-online-usr" v-for="sale in 10">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>
                                <li v-show="sales <= 20" class="list-inline-item chat-online-usr" v-for="sale in sales">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>
                                <p class="text-4 mt-1 text-white"><strong>{{sales}} Group Sales of {{ruby_status}}</strong></p>
                            </ul>
                        </div>
                        <div class="col-md-12 text-right">
                            <div class="progress p-o-progress mt-2">
                                <div class="progress-bar bg-danger"
                                     role="progressbar" :style="'width:'+rubyPercentage+'%'"
                                     :aria-valuenow="rubyPercentage" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="diamond()" class=" diamond widget widget-card-four" >
            <div class="widget-content">
                <div class="w-content">
                    <div class="w-info">
                        <p class="text-6 text-dark">Diamond Group Sales</p>
                        <hr>
                    </div>
                </div>
                <div class="progress-order-body">
                    <div class="row mt-1">
                        <div class="col-md-12">
                            <ul class="list-inline badge-collapsed-img mb-0 mb-3 text-center">

                                <li v-show="sales > 20" class="list-inline-item chat-online-usr" v-for="sale in 10">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>
                                <li v-show="sales <= 15" class="list-inline-item chat-online-usr" v-for="sale in sales">
                                    <img alt="avatar" src="@/assets/img/90x90.jpg">
                                </li>
                                <p class="text-4 mt-1 text-dark"><strong>{{sales}} Group Sales {{diamond_status}}</strong></p>
                            </ul>
                        </div>
                        <div class="col-md-12 text-right">
                            <div class="progress p-o-progress mt-2">
                                <div class="progress-bar bg-danger"
                                     role="progressbar" :style="'width:'+diamondPercentage+'%'"
                                     :aria-valuenow="diamondPercentage" aria-valuemin="0" aria-valuemax="100">
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
    export default {
        name: "GroupSales.vue",
        props: ['sales'],
        data() {
            return {
                bronze_status: 12,
                silver_status: 36,
                gold_status: 108,
                ruby_status: 326,
                diamond_status: 972
            }
        },

        computed: {

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


    .silver {
        background:  $silver;
    }
    .bronze {
        background: $bronze;
    }
    .gold {
        background: $gold;
    }
    .ruby {
        background: $ruby;
    }
    .diamond {
        background: $diamond;
    }

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