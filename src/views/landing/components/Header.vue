<template>
<header id="header" class="header-transparent header-transparent-dark-bottom-border header-transparent-dark-bottom-border-1 header-effect-shrink" >
		<div class="border-top-0 box-shadow-none">
			<div class="header-container container">
				<div class="header-row">
					<div class="header-column">
						<div class="header-row">
							<div class="header-logo">
								<a href="index.html">
									<img alt="Porto" width="200" data-sticky-width="82" data-sticky-height="40" src="@/assets/logo.png">
								</a>
							</div>
						</div>
					</div>
					<div class="header-column justify-content-end">
						<div class="header-row">
							<div class="header-nav header-nav-links header-nav-dropdowns-dark header-nav-light-text order-2 order-lg-1">
								<div class="header-nav-main header-nav-main-mobile-dark header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
									<nav class="collapse">
										<ul class="nav nav-pills" id="mainNav">
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle" href="index.html">
													Home
												</a>
											</li>
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle" href="index.html">
													About Us
												</a>
											</li>
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle" href="index.html">
													How it Works
												</a>
											</li>
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle" href="index.html">
													Buy Now
												</a>
											</li>
											<li class="dropdown">
												<a class="dropdown-item dropdown-toggle" href="index.html">
													Affiliate Login
												</a>
											</li>
										</ul>
									</nav>
								</div>
								<button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
									<i class="fas fa-bars"></i>
								</button>
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