"use strict";$(function(){function e(){v=$(".header__top-panel").outerHeight(!0)}function s(){f=$(".ad-diapers").outerHeight(!0)}svg4everybody(),$(".single-product__quantity").on("click",function(e){var s=$(e.target),o=Number($(this).find(".single-product__field").val());s.hasClass("single-product__switch--down")&&o>=1?(o--,$(this).find(".single-product__field").val(o)):s.hasClass("single-product__switch--up")&&(o++,$(this).find(".single-product__field").val(o))}),$(".form__remove-order").on("click",function(){$(this).parents(".form__type").remove()});var o=$(".js-btn-ordering"),t=$(".js-btn-order-fast"),i=$(".js-btn-cart"),n=($(".js-skip"),$(".js-loc")),r=$(".overlay"),a=$(".js-ordering"),l="overlay--show",c=$(".js-fast-order"),d=$(".js-popup-cart"),p=$(".js-location"),h=$(".form__close"),u=$(".form");o.on("click",function(){$(this).parents(".overlay").removeClass("overlay--show"),a.addClass(l)}),t.on("click",function(){c.addClass(l)}),i.on("click",function(){event.preventDefault(),d.addClass(l)}),n.on("mousedown",function(e){e.preventDefault(),this.blur(),window.focus()}),n.on("click",function(){p.addClass(l)}),h.on("click",function(){$(this).parents(r).removeClass(l)}),r.mouseup(function(e){0===u.has(e.target).length&&$(this).removeClass("overlay--show")}),$(".filter").length&&$(".js-acordeon-item").on("click",function(){$(this).parents(".filter__group").toggleClass("filter__group--active")}),$(".js-tab-item").not(":first").hide(),$(".js-tab").click(function(){$(".js-tab").removeClass("single-product__tab-title--active").eq($(this).index()).addClass("single-product__tab-title--active"),$(".js-tab-item").hide().eq($(this).index()).show()}).eq(0).addClass("single-product__tab-title--active"),$(".testselect1").length&&$(".testselect1").SumoSelect(),$(".single-product").length&&($(".js-single-product-big").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,asNavFor:".js-product-single-nav"}),$(".js-product-single-nav").slick({slidesToShow:3,slidesToScroll:1,centerPadding:0,asNavFor:".js-single-product-big",centerMode:!0,focusOnSelect:!0})),$(".js-sort").length&&$(".js-sort").on("click",function(){$(this).toggleClass("sort--show")}),$(".filter__input").on("click",function(){var e=$(this),s=e.next().text();$(this).prop("checked")?($(".tag").append('<li class="tag__item"><span></span><button class="tag__remove" type="button">remove tag</button></li>').index(this),$(".tag__item span").text(s)):$(this)}),$(".tag").length&&$(".tag__remove").on("click",function(){$(this).parents(".tag__item").remove()});var w=$(".js-burger"),g=$(".js-menu");w.on("click",function(){$(this).toggleClass("active"),g.toggleClass("menu--show")});var v;e(),$(window).on("resize load ",function(){e(),$(".clone-nav").css("height",v)}),$('<div class="clone-nav"></div>').insertBefore(".header__top-panel").css("height",v),$(window).on("resize load",function(){e()});var _,f;$(window).width()>1024&&s(),$(window).on("scroll resize",function(){s(),$(".clone-ad-diapers").css("height",f)}),$('<div class="clone-ad-diapers"></div>').insertBefore(".ad-diapers").css("height",f).hide(),$(window).on("scroll resize load",function(){$(window).width()>1024&&(s(),_=$(window).scrollTop(),_>=1?($(".ad-diapers").addClass("fixed"),$(".ad-diapers.fixed").css("top",v),$(".clone-ad-diapers").show()):($(".ad-diapers").removeClass("fixed").css("top","auto"),$(".clone-ad-diapers").hide()))}),$(".js-ad-diapers").length&&$(".js-ad-diapers").slick({prevArrow:$(".js-header-arrow-prev"),nextArrow:$(".js-header-arrow-next")}),$(".js-review-slider").length&&$(".js-review-slider").slick({prevArrow:$(".js-reviews-arrow-prev"),nextArrow:$(".js-reviews-arrow-next")}),$(".to-top").click(function(){return $("body,html").animate({scrollTop:0},800),!1});var j=$(".ad-diapers__slide");$(window).on("scroll",function(){$(window).width()>1024&&(j.css({opacity:1-.001*$(window).scrollTop()}),$(".ad-diapers__slide").css({top:2-.35*$(window).scrollTop()}),$(".header__nipple").css({top:2-.4*$(window).scrollTop()}),$(".header__heart").css({top:2-.4*$(window).scrollTop()}),$(".ad-diapers__img").css({top:2-.6*$(window).scrollTop()}))})});