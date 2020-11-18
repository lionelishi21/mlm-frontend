<template>
	<header id="header" class="header-effect-shrink header-transparent"
			data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true,
	 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
		<div class="header-body header-body-bottom-border border-top-0 appear-animation" data-appear-animation="fadeIn" data-appear-animation-delay="900">
			<div class="header-container container">
				<div class="header-row">
					<div class="header-column">
						<div class="header-row">
							<div class="header-logo">
								<a href="/">
									<img alt="Porto" width="140" data-sticky-width="82" data-sticky-height="40" src="@/assets/logo.png">
								</a>
							</div>
						</div>
					</div>
					<div class="header-column justify-content-end">
						<div class="header-row">
							<div class="header-nav header-nav-line header-nav-bottom-line header-nav-bottom-line-effect-1">
								<div class="header-nav-main header-nav-main-text-capitalize header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
									<nav class="collapse">
										<ul class="nav nav-pills" id="mainNav">
											<li>
												<a href="/" class="nav-link active" data-hash data-hash-offset="70">Home</a>
											</li>
											<li>
												<router-link to="/aboutus" class="dropdown-item dropdown-toggle">
													About Us
												</router-link>
											</li>
											<li>
												<router-link tag="a" to="/howitworks" class="dropdown-item dropdown-toggle">
													How it Works
												</router-link>
									        </li>
											<li>
												<router-link to="/auth/login" tag="a" class="dropdown-item dropdown-toggle" href="index.html">
													Affiliate Login
												</router-link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
<!--							<ul class="header-social-icons social-icons social-icons-clean social-icons-medium ml-0 ml-xl-3 d-none d-md-inline-flex">-->
<!--								<li class="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>-->
<!--								<li class="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>-->
<!--								<li class="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>-->
<!--							</ul>-->
							<button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
								<i class="fas fa-bars"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>

	<!--<header id="header" :class="[headerClass]" class="header-transparent header-transparent-dark-bottom-border header-transparent-dark-bottom-border-1 header-effect-shrink" >-->
<!--		<div class="border-top-0 box-shadow-none">-->
<!--			<div class="header-container container">-->
<!--				<div class="header-row">-->
<!--					<div class="header-column">-->
<!--						<div class="header-row">-->
<!--							<div class="header-logo">-->
<!--								<a href="index.html">-->
<!--									<img alt="Porto" width="140" data-sticky-width="82" data-sticky-height="40" src="@/assets/logo.png">-->
<!--								</a>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="header-column justify-content-end mb-4">-->
<!--						<div class="header-row">-->
<!--							<div class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">-->

<!--								<div class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">-->
<!--									<nav class="mb-4 collapse">-->
<!--										<ul class="nav nav-pills mt-4" id="mainNav">-->

<!--											<li class="dropdown">-->
<!--												<a class="dropdown-item dropdown-toggle" href="/">-->
<!--													Home-->
<!--												</a>-->
<!--											</li>-->

<!--											<li class="dropdown">-->
<!--												<router-link to="/aboutus" class="dropdown-item dropdown-toggle">-->
<!--													About Us-->
<!--												</router-link>-->
<!--											</li>-->

<!--											<li class="dropdown">-->
<!--												<router-link tag="a" to="/howitworks" class="dropdown-item dropdown-toggle">-->
<!--													How it Works-->
<!--												</router-link>-->
<!--											</li>-->

<!--											<li class="dropdown">-->
<!--												<router-link to="/auth/login" tag="a" class="dropdown-item dropdown-toggle" href="index.html">-->
<!--													Affiliate Login-->
<!--												</router-link>-->
<!--											</li>-->
<!--										</ul>-->
<!--									</nav>-->
<!--								</div>-->


<!--								<button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">-->
<!--									<i class="fas fa-bars"></i>-->
<!--								</button>-->

<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
<!--	</header>-->
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