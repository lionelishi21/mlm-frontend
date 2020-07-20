<template>
    <div class="layout-px-spacing">
        <div class="row">
            <pre>{{getUserAffiliateDetails}}</pre>
        </div>
        <div class="row layout-spacing">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "UserDetails.vue",
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters([
                'getUserAffiliateDetails'
            ])
        },
        created() {
            var id = this.$route.params.id
            this.$store.dispatch('GET_USER_DETAIL_SPANS', id);
        }
    }
</script>

<style scoped>

</style>