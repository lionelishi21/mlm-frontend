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


<div class=" rev_slider_wrapper" style="height: 100vh;">
					<div id="revolutionSlider" class="slider rev_slider" data-version="5.4.8" data-plugin-revolution-slider 
					data-plugin-options="{'sliderLayout': 'fullscreen', 'delay': 9000, 'gridwidth': 1140, 'gridheight': 800, 'responsiveLevels': [4096,1200,992,500]}">
						<ul>
							<li class="tp-opacity-overlay" data-transition="fade">
								
								<img src="img/landing/slider_01.png"  
									alt=""
									data-bgposition="center center" 
									data-bgfit="cover" 
									data-bgrepeat="no-repeat"
									class="rev-slidebg">
							
							<!-- 
								<div class="tp-caption"
									data-x="center" data-hoffset="['-170','-170','-170','-365']"
									data-y="center" data-voffset="['-80','-80','-80','-105']"
									data-start="1000"
									data-transform_in="x:[-300%];opacity:0;s:500;"
									data-transform_idle="opacity:0.2;s:500;"><img src="img/slides/slide-title-border.png" alt=""></div> -->
				
				
						<!-- 		<div class="tp-caption"
									data-x="center" data-hoffset="['170','170','170','365']"
									data-y="center" data-voffset="['-80','-80','-80','-105']"
									data-start="1000"
									data-transform_in="x:[300%];opacity:0;s:500;"
									data-transform_idle="opacity:0.2;s:500;"><img src="img/slides/slide-title-border.png" alt=""></div> -->
				
								<h1 class="tp-caption font-weight-extra-bold text-color-light negative-ls-1"
									data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
									data-fontsize="['50','50','50','90']"
									data-lineheight="['55','55','55','95']">
									   MAJESTIC CARES COMMUNITY - MCC <br>
									   A SIMPLE ACT OF CARING
								   </h1>
				
							<!-- 	<div class="tp-caption"
									data-frames='[{"delay":2000,"speed":500,"frame":"0","from":"opacity:0;x:10%;","to":"opacity:1;x:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
									data-x="center" data-hoffset="['-40','-40','-40','-40']"
									data-y="center" data-voffset="['2','2','2','15']"><img src="img/slides/slide-blue-line-big.png" alt=""></div> -->
				
								<div class="tp-caption font-weight-light ws-normal text-success  font-weight-extra-bold mt-5"
									data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":2000,"split":"chars","splitdelay":0.03,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
									data-width="['530','530','530','1100']"
									data-fontsize="['18','18','18','40']"
									data-lineheight="['26','26','26','45']"
									></div>
				
								<a class="tp-caption btn btn-primary btn-rounded font-weight-semibold mt-10"
									data-frames='[{"delay":2500,"speed":2000,"frame":"0","from":"opacity:0;y:50%;","to":"o:1;y:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
									data-hash
									data-hash-offset="85"
									href="#projects"
									data-x="left" data-hoffset="0"
									data-y="bottom" data-voffset="['133','133','133','255']"
									data-whitespace="nowrap"	
									data-fontsize="['14','14','14','33']"	
									data-paddingtop="['15','15','15','40']"
									data-paddingright="['45','45','45','110']"
									data-paddingbottom="['15','15','15','40']"				 
									data-paddingleft="['45','45','45','110']">Buy Now</a>
								
							</li>
							
						</ul>
					</div>
	</div>