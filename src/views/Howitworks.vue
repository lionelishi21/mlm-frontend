<template>
<!-- 	<section class="page-header page-header-classic page-header-md">
		<div class="container">
			<div class="row">
				<div class="col-md-8 order-2 order-md-1 align-self-center p-static">
					<h1 data-title-border>Services</h1>
				</div>
				<div class="col-md-4 order-1 order-md-2 align-self-center">
					<ul class="breadcrumb d-block text-md-right">
						<li><a href="#">Home</a></li>
						<li class="active">Pages</li>
					</ul>
				</div>
			</div>
		</div>
	</section> -->

	<div class="container pb-1" style="padding-top: 8.5%">

		<div class="row pt-4">
			<div class="col">
				<div class="overflow-hidden mb-3">
					<h2 class="font-weight-bold text-8 mb-0 appear-animation" data-appear-animation="maskUp">
						How it Works
					</h2>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">
				<div class="overflow-hidden">
					<p class="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">
						Inspired by Ordinary People Nationwide, And Soon to Be Worldwide, The Majestic Cares Community, or “MCC”, was created so that ALL of its Affiliate/Members can receive a residual income for any worthwhile purpose, such as: Humanitarian projects to benefit those in need around the world, business start-ups, paying off debts, buying a new car or home, or travel abroad, to visit with family and friends!
					</p>
					<p class="lead mb-0 appear-animation mt-3" data-appear-animation="maskUp" data-appear-animation-delay="200">
						
						No Matter what your current financial needs are, The Majestic Cares Community (MCC), is the answer to helping you and your loved ones, to fulfill your financial hopes and dreams! 

					</p>

					<p class="lead mb-0 appear-animation mt-3" data-appear-animation="maskUp" data-appear-animation-delay="200">
						Please First Note, that this is NOT a Network-Marketing, or a Get-Rich-Quick Community. The MCC Online Community gives each Sales Affiliate/Member, the unique opportunity of receiving Company Shared Cash Bonuses based on their total Group Sales Volume.

					</p>
					<p class="lead mb-0 appear-animation mt-3" data-appear-animation="maskUp" data-appear-animation-delay="200">
						There are no Enrollment, or Administration Fees and no Recruiting or Sponsoring Required to Become an MCC Sales Affiliate. However, to start receiving Cash Bonuses, an Affiliate must make no less than 3 eBook Sales of MCC’S Self-Help Publication entitled, “Learn How to Stop Working for Money, and Let Your Money Work for you”, which sells for $34.95, and comes with a 30-day Money Back Guarantee. 
					</p>

					<h4 class="lead mb-0 appear-animation mt-3"><strong>Here Is an Example of How This Works:</strong></h4>

					<p class="lead mb-0 appear-animation mt-0" data-appear-animation="maskUp" data-appear-animation-delay="200">
                        When you, as an MCC Sales Affiliate, make a minimum of 3 Personal eBook Sales, and there is a TOTAL of (12) eBook Sales in your group, you will qualify as a Bronze Sales Affiliate, and be paid a Cash Bonus as per MCC’S Compensation Plan.

					</p>

					<p class="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">
					Note: Since this is a community effort, your 3 Personal eBook Sales (and any additional sales) may not necessarily fall under your personal group sales, but will automatically contribute to MCC’S very exclusive Community Cash Bonus System, as follows:
				     </p>

				</div>
			</div>
		</div>

		<div class="row">
			<div class="col py-
">
				<hr class="solid mb-2">
			</div>
		</div>

		<div class="row">
			<div class="col-md-12">
				<h4><strong>MCC's Unique Pay-it-Forward Formula</strong></h4>
				<hr>
			</div>
		</div>
			<div class="row">
				<div class="col-md-12">
					<p class="text-dark text-5">BRONZE Affiliate: 3 personal plus 9 eBook sales (12 group sales) = $100 </p>
					<p class="text-dark text-5">SILVER Affiliate:  36 eBook group sales = $600 	            </p>
					<p class="text-dark text-5">GOLD Affiliate:  108 eBook group sales = $3,800 	         </p>
					<p class="text-dark text-5">RUBY Affiliate:  324 eBook group sales = $22,000 	      </p>
					<p class="text-dark text-5">DIAMOND Affiliate: 972 eBook group sales = $412,855.60  </p>
					<p class="text-dark text-5">DIAMOND REPEAT: 12 eBook diamond group sales = $412,855.60  </p>
				</div>
			</div>
			<div class="row mt-3">
			  <p class="lead mb-0 appear-animation" data-appear-animation="maskUp" data-appear-animation-delay="200">
						CONGRATULATIONS ON BECOMING OUR NEXT MCC-er! YOU NOW QUALIFY TO RECEIVE UP-TO 90% PLUS OF YOUR TOTAL GROUP SALES VOLUME FOR LIFE!!
			  </p>
			</div>
			<div class="row">
				<p class="lead mb-0 appear-animation mt-3" data-appear-animation="maskUp" data-appear-animation-delay="200">
					<small>
						<i>
							Disclaimer: The MAJESTIC CARES COMMUNITY, OR MCC AND ITS AFFILIATES, is an online
Sales Affiliate Community. This information, as well as the information contained in our publications, is for illustration purposes only, with no promises or guarantees of income. Neither the administrators, subsidiaries, nor the Affiliate/Members of the Majestic Cares Community, make no income guarantees.
				        </i>
				   </small>
				</p>
			</div>
	</div>


</template>
<script>
export default {
	data() {
		return {
			title: 'How it Works'
		}
	},
	mounted() {
		// Animate
		(function($) {

			'use strict';

			if ($.isFunction($.fn['themePluginAnimate'])) {

				$(function() {
					$('[data-appear-animation]').each(function() {
						var $this = $(this),
							opts;

						var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
						if (pluginOptions)
							opts = pluginOptions;

						$this.themePluginAnimate(opts);
					});
				});

			}

		}).apply(this, [jQuery]);
	},
}
</script>