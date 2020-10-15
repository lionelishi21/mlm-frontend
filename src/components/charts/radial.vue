<template>
   <div>
       <apexchart class="p-0" type="radialBar" height="250" :options="chartOptions" :series="[ sales ]"></apexchart>
   </div>
</template>
<script>
    export default {
        props:['sales'],
        computed: {

            readings: function(value) {
                if (value < 44 ) {
                    return 'All Clear';
                }
                if ( value >= 44 ) {
                    return 'Warning'
                }
            }
        },
        data() {
            return {
                chartOptions: {
                    chart: {
                        margin: 0,
                        height: 350,
                        type: 'radialBar',
                        toolbar: {
                            show: false
                        }
                    },
                    plotOptions: {

                        radialBar: {
                            hollow: {
                                margin: 0,
                                size: "70%",
                                // background: "#293450"
                            },

                            dataLabels: {
                                showOn: "always",

                                name: {
                                    offsetY: -10,
                                    show: true,
                                    color: "#888",
                                    fontSize: "13px"
                                },

                                value: {
                                    color: "#111",
                                    fontSize: "20px",
                                    show: true,
                                    formatter: function (val) {
                                        return val + ' %'
                                    }
                                }
                            }
                        }
                    },
                    fill: {
                        colors: ['#00b894', '#55efc4']
                    },
                    stroke: {
                        lineCap: 'round'
                    },
                    labels: ['Sales'],
                },
            }
        }
    }
</script>
