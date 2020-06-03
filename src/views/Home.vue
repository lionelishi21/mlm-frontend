<template>
<div>
  <header-component></header-component>
  <div class="inner-wrapper">
   	<sidebar-component></sidebar-component>
   	<router-view/>
  </div>
</div>
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
