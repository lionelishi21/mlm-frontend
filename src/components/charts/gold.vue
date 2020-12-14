<template>
    <apexchart type="radialBar" height="212" :options="chartOptions" :series="[ sales]"></apexchart>
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
                series: [100],
                chartOptions: {
                    chart: {
                        height: 350,
                        type: 'radialBar',
                        toolbar: {
                            show: true
                        }
                    },
                    plotOptions: {

                        radialBar: {
                            hollow: {
                                margin: 15,
                                size: "70%"
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
                        colors: ['#FFD700', '#FFD700']
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
