<template>
    <div id="content" class="main-content">
        <div class="layout-px-spacing">
            <div class="row">
                <h1>Details</h1>
            </div>

            <div class="row layout-spacing">
                <!-- Content -->
                <div class="col-xl-3 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">

                    <div class="user-profile">
                        <div class="widget-content widget-content-area">
                            <div class="text-center user-info">
                                <img src="@/assets/avatar/img12.jpg" alt="avatar">
                                <p class="">{{boosterDetails.name}}</p>
                                <p class=""><small>{{boosterDetails.email}}</small></p>
                            </div>

                        </div>
                    </div>

                    <div class="widget widget-card-four" >
                        <div class="w-content text-center">
                            <h3> {{boosterDetails.percentage.status}}</h3>
                        </div>
                        <radial-component :sales="boosterDetails.percentage.position"></radial-component>
                    </div>

                    <div class="widget widget-card-four" >
                        <div class="w-content text-center">

                            <h3> {{boosterDetails.payitfor}}.00 USD</h3>
                            <small>Pay it Forwad Amount</small>
                        </div>
                    </div>

                </div>

                <div class="col-xl-9 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">

                    <div class="bio layout-spacing ">
                        <div class="widget-content widget-content-area">
                            <h3 class="">Affiliates</h3>

                            <div class="bio-skill-box">


                                <div class="row">

                                    <div class="col-md-4">

                                    </div>

                                    <div class="col-md-4 ">
                                        <div class="d-flex b-skills text-center">
                                            <div class="text-center">
                                                <h5>{{boosterDetails.name}}</h5>
                                                <h5>You</h5>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="col-md-4">

                                    </div>

                                </div>
                                <div class="row">
                                    <!--                                    <pre>{{boosterDetails}}</pre>-->
                                    <div class="col-md-4" v-for="af in boosterDetails.members">
                                        <div class="card mt-5" style="cursor: pointer">
                                            <div class="card-body text-center">
                                                <h5>{{af.name}}</h5>
                                            </div>
                                        </div>
                                        <div class="row mt-3" v-if="af.children">
                                            <div class="col-md-4" v-for="child in af.children">
                                                <div class="card">
                                                    <div class="card-body text-center p-3">
                                                        <b class="text-dark"><small>{{child.name}}</small></b>
                                                        <p><small> {{child.email}} </small></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
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
    import { mapGetters } from 'vuex';
    import GroupSales from "../components/GroupSales";
    import PersonalSales from "../components/PersonalSales";
    import Loading from 'vue-loading-overlay';
    import RadialComponent from '../components/charts/radial';
    export default {

        components: {
            GroupSales,
            PersonalSales,
            Loading,
            RadialComponent
        },

        data() {
            return{
                title:' Affiliates Details',
                name: this.$route.params.name,
                fullpage: true,
                isLoading: false
            }
        },
        created() {
            this.init()
        },

        computed: {

            ...mapGetters([
                'boosterDetails'
            ]),

            groupMore() {
                // return this.getAffiliateDetails.group_sales_counts - 10
            },

        },

        beforeRouteUpdate(to, from, next) {
            this.name = to.params.name
            next()
            this.init()
        },

        methods: {

            percentage(num, per) {
                return (num/100)*per;
            },

            init() {
                var affiliateId = this.$route.params.id
                this.$store.dispatch('BOOSTER_DETAILS', affiliateId)
            },

            replaceRoute(value) {

                this.isLoading = true
                this.$nextTick(() => {

                    this.$store.dispatch('AFFILIATE_DETAILS', value)
                        .then( response => {
                            this.isLoading = false
                        })
                    this.$store.dispatch('GET_USER_DETAILS')
                });

            },

            goToDetails(value) {
                var url = '/dashboard/affiliates/'+value
                this.$router.push(url);
            },

            percentage(partialValue, totalValue) {
                return (100 * partialValue) / totalValue;
            },

            async copy() {
                var Url = this.$refs.mylink;
                Url.innerHTML = window.location.href;
                console.log(Url.innerHTML)
                Url.select();
                document.execCommand("copy");

                this.notify()
            },

            notify() {
                this.$snack.success({
                    text: 'Link copy succssefully',
                    button: 'close',
                    action: this.clickAction
                })
            }

        }
    }
</script>

