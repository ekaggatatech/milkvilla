 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
 });

 jQuery(document).ready(function ($) {

 	"use strict";

 	var siteSticky = function () {
 		$(".js-sticky-header").sticky({
 			topSpacing: 0
 		});
 	};
 	siteSticky();

 	var siteScroll = function () {

 		$(window).scroll(function () {

 			var st = $(this).scrollTop();

 			if (st > 100) {
 				$('.js-sticky-header').addClass('shrink');
 			} else {
 				$('.js-sticky-header').removeClass('shrink');
 			}

 		})

 	};
 	siteScroll();

 });