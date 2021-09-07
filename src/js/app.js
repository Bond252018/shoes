/*
 Third party
 */

//= ../vendor/jquery/dist/jquery.min.js
//= ../vendor/owl.carousel/dist/owl.carousel.min.js
//= ../vendor/fancybox/dist/jquery.fancybox.min.js

$(function(){

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
		responsive:{
			0:{
			    items:1
			},
			600:{
			    items:3
			},
			1000:{
			    items:4
			}
		}
	})

	$("#fancybox").fancybox();
});