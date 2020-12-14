<template>
    <div>
        <!--Header Container -->
        <div class="header-container fixed-top">
            <header-component :user="getLoginUser"></header-component>
        </div>
        <!--  End Header Container -->

        <div class="main-container" id="container">

            <div class="overlay"></div>
            <div class="search-overlay"></div>
            <sidebar-component :user="getLoginUser"></sidebar-component>

            <!--  BEGIN CONTENT AREA  -->
            <router-view/>
            <!-- End Content Aread-->
        </div>
    </div>
</template>
<script>
    import HeaderComponent from '@/components/partials/HeaderComponent.vue'
    import SidebarComponent from '@/components/partials/SiderbarComponent.vue'
    import { mapGetters } from 'vuex'

    export default {
        name: 'Home',
        components: {
            HeaderComponent,
            SidebarComponent
        },
        computed: {
            ...mapGetters([
                'getLoginUser'
            ])
        },
        created() {
            this.$store.dispatch('GET_LOGIN_USER')
        }
    }
</script>
