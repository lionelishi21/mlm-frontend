<template>
<div id="content" class="main-content">
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-md-12">
                <nav class="breadcrumb-two" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
                        <li class="breadcrumb-item active"><a href="javascript:void(0);">System Purchases</a></li>
                    </ol>
                </nav>
            </div>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <h4>User System Purchases</h4>
                        <hr>
                        <div class="table-responsive mb-4">
                            <b-table class="table style-3 table-hover"
                                     :fields="fields"
                                     :items="systemPackage">
                            >

                                <template #cell(actions)="row">
                                    <button class="btn btn-primary" @click="goToSystemPurchaseDetails(row.item.id)"> View </button>
                                </template>
                            </b-table>
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
    import { mapGetters } from 'vuex'
    export default {

        name: "SystemPurchase.vue",

        data:() => ({
            fields: [
                { key: 'id',  label: 'User Id', sortable: true, sortDirection: 'asc' },
                { key: 'name',  label: 'Name' },
                { key: 'booster',  label: 'Booster Count' },
                { key: 'systems', label: 'Ebook System Purchases'},
                { key: 'bsystems', label: 'Booster System Puchases'},
                { key: 'actions', label: 'Actions' }
            ]
        }),

        computed: {
            ...mapGetters([
                'systemPackage'
            ])
        },

        created() {
            this.$store.dispatch('SYSTEM_ALL_PACKAGES')
        },

        methods: {
            goToSystemPurchaseDetails( userId ) {
                this.$router.push('system-packages/details/'+userId)
            }
        }
    }
</script>

<style scoped>

</style>