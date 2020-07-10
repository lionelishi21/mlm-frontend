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
					<div class="header-column justify-content-end">
						<div class="header-row">
							<div class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">
								<div class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
									<nav class="collapse">
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
<!--											<li class="dropdown">-->
<!--												<router-link to="/checkout" active-class="checkout" tag="a" class="dropdown-item dropdown-toggle" href="index.html">-->
<!--													Buy Now-->
<!--												</router-link>-->
<!--											</li>-->
											<li class="dropdown">
												<router-link to="/login" tag="a" class="dropdown-item dropdown-toggle" href="index.html">
													Affiliate Login
												</router-link>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div class="header-nav-features header-nav-features-light header-nav-features-no-border header-nav-features-lg-show-border order-1 order-lg-2">
								<div class="header-nav-feature header-nav-features-search d-inline-flex">
									<a href="#" class="header-nav-features-toggle" data-focus="headerSearch"><i class="fas fa-search header-nav-top-icon"></i></a>
									<div class="header-nav-features-dropdown header-nav-features-dropdown-mobile-fixed" id="headerTopSearchDropdown">
										<form role="search" action="page-search-results.html" method="get">
											<div class="simple-search input-group">
												<input class="form-control text-1" id="headerSearch" name="q" type="search" value="" placeholder="Search...">
												<span class="input-group-append">
													<button class="btn" type="submit">
														<i class="fa fa-search header-nav-top-icon text-color-dark"></i>
													</button>
												</span>
											</div>
										</form>
									</div>
								</div>
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
		computed: function() {

			if (this.$route.path !== '/'){
				this.headerClass = 'bg-dark'
			} else {
				this.headerClass = ''
			}
		}
	}
</script>