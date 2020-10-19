<template>
<header id="header" :class="[headerClass]" class="header-transparent header-transparent-dark-bottom-border header-transparent-dark-bottom-border-1 header-effect-shrink" >
		<div class="border-top-0 box-shadow-none">
			<div class="header-container container">
				<div class="header-row">
					<div class="header-column">
						<div class="header-row">
							<div class="header-logo">
								<a href="index.html">
									<img alt="Porto" width="140" data-sticky-width="82" data-sticky-height="40" src="@/assets/logo.png">
								</a>
							</div>
						</div>
					</div>
					<div class="header-column justify-content-end mb-4">
						<div class="header-row">
							<div class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">

								<div class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
									<nav class="mb-4 collapse">
										<ul class="nav nav-pills mt-4" id="mainNav">

											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle" href="/">
													Home
												</a>
											</li>

											<li class="dropdown">
												<router-link to="/aboutus" class="dropdown-item dropdown-toggle">
													About Us
												</router-link>
											</li>

											<li class="dropdown">
												<router-link tag="a" to="/howitworks" class="dropdown-item dropdown-toggle">
													How it Works
												</router-link>
											</li>

											<li class="dropdown">
												<router-link to="/login" tag="a" class="dropdown-item dropdown-toggle" href="index.html">
													Affiliate Login
												</router-link>
											</li>
										</ul>
									</nav>
								</div>


								<button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
									<i class="fas fa-bars"></i>
								</button>

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>
<script>
	export default {
		data() {
			return {
				headerClass: 'bg-dark'
			}
		},
		watch: {
			'$route' () {
				if (this.$route.path === '/') {
					this.headerClass = ''
				} else {
					this.headerClass = 'bg-dark'
				}
			}
		},
		mounted() {
			$('.header-nav-main').collapse();
		},
		computed: function() {

			if (this.$route.path !== '/'){
				this.headerClass = 'bg-dark'
			} else {
				this.headerClass = ''
			}
		}
	}
</script>