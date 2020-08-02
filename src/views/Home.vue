<template>
<div>
      <div class="header-container fixed-top">
          <header-component :user="getLoginUser"></header-component>
      </div>
      <div class="main-container"  ref="main-container" id="container">

          <div class="overlay"></div>
          <div class="search-overlay"></div>

          <sidebar-component :user="getLoginUser"></sidebar-component>
          <router-view/>
     </div>
</div>
</template>
<style lang="scss">
    @import '../cork/bootstrap/css/bootstrap.min.css';
    @import '../cork/css/plugins.css';
    @import '../cork/css/dashboard/dash_1.css';
    @import '../cork/css/tables/table-basic.css';
    @import '../cork/css/forms/custom-clipboard.css';
    @import '../cork/css/widgets/modules-widgets.css';
    @import '../cork/css/components/cards/card.css';
    @import '../cork/css/components/custom-modal.css';
    @import '../cork/css/elements/miscellaneous.css';
    @import '../cork/plugins/animate/animate.css';
    @import '../cork/plugins/loaders/custom-loader.css';
    @import '../cork/css/users/user-profile.css';
    @import '../cork/css/components/custom-list-group.css';
    @import '../cork/css/apps/notes.css';
    @import '../cork/css/forms/theme-checkbox-radio.css';
    @import '../cork/css/components/custom-counter.css';
    @import '../cork/css/elements/miscellaneous.css';
    @import '../cork/css/users/account-setting.css';
    @import '../cork/css/elements/infobox.css';
    @import '../cork/css/dashboard/dash_2.css';
    @import '../cork/css/elements/avatar.css';
    @import '../cork/css/elements/alert.css';
    @import '../cork/css/elements/custom-pagination.css';
    @import '../cork/plugins/bootstrap-select/bootstrap-select.min.css';
    @import '../cork/plugins/font-icons/fontawesome/css/regular.css';
    @import '../cork/plugins/font-icons/fontawesome/css/fontawesome.css';
    @import '../cork/css/elements/miscellaneous.css';
    @import '../cork/css/elements/breadcrumb.css';
    @import '../cork/css/apps/contacts.css';
    @import '../cork/plugins/jquery-ui/jquery-ui.min.css';
    @import '../cork/plugins/table/datatable/datatables.css';
    @import '../cork/plugins/table/datatable/dt-global_style.css';
    @import '../cork/plugins/table/datatable/custom_dt_custom.css';

    @import '../cork/plugins/sweetalerts/sweetalert2.min.css';
    @import '../cork/plugins/sweetalerts/sweetalert.css';
    @import '../cork/css/components/custom-sweetalert.css';

    @import '../cork/plugins/notification/snackbar/snackbar.min.css';
    @import '../cork/css/main.css';

    .content-body {
        background: #eeeeee !important;
    }
</style>
<script>

// @ is an alias to /src
import '@/views/allscripts.js';
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
    },

    methods: {
      logOut() {

      }
    }
}
</script>


