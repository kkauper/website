"use strict";function KAUPERCO(){this.init=function(){this.initDOM(),this.initArchiveClass(),this.initArchiveClassDelete(),this.initNavHoverCursor(),this.initDarkHoverCursor(),this.initLightHoverImage(),this.initNavOpacity(),this.initShowOverlayNavigation(),this.initHideOverlayNavigation(),this.initWow(),this.initArchiveScrolling()},this.initDOM=function(){$(document).ready(function(){setTimeout(function(){$("body").addClass("loaded"),$(".wrapper").attr("data-loaded","true"),$("section.hero").addClass("loaded")},500)})},this.initArchiveClass=function(){$(document).on("mouseenter","section.archive-list div.projects div.stage a.project",function(){$(this).parent().parent().parent().addClass("active").css("color",$(this).attr("data-color"))})},this.initArchiveClassDelete=function(){$(document).on("mouseleave","section.archive-list",function(){$(this).removeClass("active").css("color","#546D63")})},this.initNavHoverCursor=function(){$(document).on("mouseenter",".main-nav",function(){$("body").addClass("nav-hover")}),$(document).on("mouseleave",".main-nav",function(){$("body").removeClass("nav-hover")})},this.initDarkHoverCursor=function(){$(document).on("mouseenter",".link.--dark",function(){$("body").addClass("cursor-dark")}),$(document).on("mouseleave",".link.--dark",function(){$("body").removeClass("cursor-dark")})},this.initLightHoverImage=function(){$(document).on("mouseenter",".link.--dark .image",function(){$("body").addClass("cursor-dark-reverse")}),$(document).on("mouseleave",".link.--dark .image",function(){$("body").removeClass("cursor-dark-reverse")})},this.initNavOpacity=function(){$("nav.main-nav ul li a").on({mouseenter:function(){$(this).parent().parent().addClass("is-hovered")},mouseleave:function(){$(this).parent().parent().removeClass("is-hovered")}})},this.initShowOverlayNavigation=function(){$(document).on("click","button.mobile-nav-button",function(){$("body").addClass("nav-open"),$(this).addClass("open"),$("div.site-nav").attr("aria-hidden","false")})},this.initHideOverlayNavigation=function(){$(document).on("click","button.mobile-nav-button.open",function(){$("body").removeClass("nav-open"),$(this).removeClass("open"),setTimeout(function(){$("div.site-nav").attr("aria-hidden","true")},2e3)})},this.initWow=function(){new WOW({boxClass:"kauper-animated"}).init()},this.initArchiveScrolling=function(){$(document).on("click",'a[href^="#"]',function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top-160},500)})},this.init()}$(function(){new KAUPERCO}),function(){var t=$(".cursor"),i=$(".cursor-follower"),n=0,e=0,o=0,a=0;TweenMax.to({},.016,{repeat:-1,onRepeat:function(){n+=(o-n)/9,e+=(a-e)/9,TweenMax.set(i,{css:{left:n-12,top:e-12}}),TweenMax.set(t,{css:{left:o,top:a}})}}),$(document).on("mousemove",function(t){o=t.clientX,a=t.clientY}),$(".link").on("mouseenter",function(){t.addClass("active"),i.addClass("active")}),$(".link").on("mouseleave",function(){t.removeClass("active"),i.removeClass("active")})}();