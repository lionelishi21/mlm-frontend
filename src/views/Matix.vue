<template>
<div id="content" class="main-content">
    <div class="vld-parent">

        <loading
             :active.sync="isLoading"
             :can-cancel="true"
             :on-cancel="onCancel"
             :is-full-page="fullPage">
        </loading>

    </div>

    <div class="layout-px-spacing">

        <div class="row" v-for="a in getAffiliates.response">
            <div class="col-md-5"></div>
            <div class="col-lg-2" v-if="a.parent == null">
                <div class="card text-center">
                    <div class="card-body">
                        <small>{{a.name}}</small>
                    </div>
                </div>
            </div>
            <div class="col-md-5"></div>
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div  v-for="a in getAffiliates.response" class="col-md-2" v-if="a.parent == 1">
                <div class="card text-center">
                    <div class="card-body">
                        <small>{{a.name}}</small>
                    </div>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
    </div>
</div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "Matix.vue",
        data() {
            return {
                break: 3,
                isLoading: false,
                fullPage: true,
            }
        },
        computed: {
            ...mapGetters([
                'getAffiliates'
            ])
        },
        mounted() {

            this.isLoading = true
            this.$store.dispatch('FETCH_AFFILIATES')
                .then( response => {
                    console.log(response)
                    this.datatable()
                    this.isLoading = false
                }).catch(error => {
                this.isLoading = false
                console.log(error.response)
            })
        }

    }
</script>

<style scoped>

</style>