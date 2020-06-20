<template>
<section class="body">
  <header-component></header-component>
  <div class="inner-wrapper">
   	<sidebar-component></sidebar-component>
   	<router-view/>
  </div>
</section>
</template>
<script>
// @ is an alias to /src
import HeaderComponent from '@/components/partials/HeaderComponent.vue'
import SidebarComponent from '@/components/partials/SiderbarComponent.vue'

export default {
  name: 'Home',
  components: {
  	HeaderComponent,
  	SidebarComponent
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/vendor/bootstrap/css/bootstrap.css';

@import '../assets/vendor/animate/animate.css';
@import '../assets/vendor/font-awesome/css/all.min.css';
@import '../assets/vendor/magnific-popup/magnific-popup.css';
@import '../assets/vendor/bootstrap-datepicker/css/bootstrap-datepicker3.css';

@import '../assets/vendor/jquery-ui/jquery-ui.css';
@import '../assets/vendor/jquery-ui/jquery-ui.theme.css';
@import '../assets/vendor/bootstrap-multiselect/css/bootstrap-multiselect.css';
@import '../assets/vendor/morris/morris.css';

@import '../assets/css/theme.css';
@import '../assets/css/skins/default.css';
@import '../assets/css/custom.css';
// @import '../assets/vendor/modernizr/modernizr.js';

.content-body {
	background: #eeeeee !important;
}
</style>
