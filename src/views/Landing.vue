<template>
<div role="main" class="main" id="home">
	<header-component></header-component>
	 <router-view></router-view>
    <footer-component></footer-component>
 </div>
</template>
<script>
import HeaderComponent from './landing/components/Header.vue';
import FooterComponent from './landing/components/Footer.vue';
export default {
	components: {
		HeaderComponent,
		FooterComponent
	}
}
</script>

