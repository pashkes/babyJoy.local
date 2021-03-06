'use strict';


/**
 * Document ready functions
 */
$(function () {
  svg4everybody();

  //tabs
  $(".js-tab-item").not(":first").hide();
$(".js-tab").click(function() {
    $(".js-tab").removeClass("single-product__tab-title--active")
        .eq($(this).index()).addClass("single-product__tab-title--active");
    $(".js-tab-item").hide().eq($(this).index()).show()
}).eq(0).addClass("single-product__tab-title--active");

  // Up and down number on input page catalog-item
  if ($('.single-product__quantity').length) {
    var $controlledByButtons = $('#controlledByButtons');
    $controlledByButtons.updown({
      step: 1,
      shiftStep: 100,
      min: 0
    });
    var $updown = $controlledByButtons.data('updown');
    $('#btnDecrease').click(function(event){
      $updown.increase(event);
      $updown.triggerEvents();
    });
    $('#btnIncrease').click(function(event){
      $updown.decrease(event);
      $updown.triggerEvents();
    });
  }


  //custom select
  if($('.testselect1').length) {
    $('.testselect1').SumoSelect();
  }
  //Slider Slider product page
  if ($('.single-product').length) {
    $('.js-single-product-big').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.js-product-single-nav'
    });
    $('.js-product-single-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      centerPadding: 0,
      asNavFor: '.js-single-product-big',
      centerMode: true,
      focusOnSelect: true
    });
  }

  //sorting product
  if ($('.js-sort').length) {
    $('.js-sort').on('click', function () {
      $(this).toggleClass('sort--show');
    });
  }

//add tags filter
  $('.filter__input').on('click', function () {
    var thisElement = $(this),
        thisElementText = thisElement.next().text();

    console.log(thisElementText);

    if ($(this).prop('checked')) {
      $('.tag').append('<li class="tag__item"><span></span><button class="tag__remove" type="button">remove tag</button></li>').index(this);
      $('.tag__item span').text(thisElementText);
    } else{
      $(this)
    }
  });

  if ($('.tag').length) {
    $('.tag__remove').on('click', function () {
      $(this).parents('.tag__item').remove();
    });
  }
  //show Mobile menu
  //Toggle mobile menu
  var burger = $('.js-burger'),
      header = $('.js-menu'),
      activeMenu = 'menu--show';

  burger.on('click', function () {
    $(this).toggleClass('active');
    header.toggleClass(activeMenu);
  });


  //sticky header other pages,not home
  var winPos, navHeight;

  function refreshVar() {
    navHeight = $('.header__top-panel').outerHeight(true);
  }

  refreshVar();
  $(window).on('resize load ', function () {
    refreshVar();
    $('.clone-nav').css('height', navHeight)
  });


  $('<div class="clone-nav"></div>').insertBefore('.header__top-panel').css('height', navHeight);

  $(window).on('resize load', function () {
    refreshVar();
  });

  //sticky header other pages,not home
  var scrollPos, topParalaxHeight;

  function refreshHeight() {
    topParalaxHeight = $('.ad-diapers').outerHeight(true);
  }

  if ($(window).width() > 1024) {
    refreshHeight();
  }
  $(window).on('scroll resize', function () {
    refreshHeight();
    $('.clone-ad-diapers').css('height', topParalaxHeight)
  });


  $('<div class="clone-ad-diapers"></div>').insertBefore('.ad-diapers').css('height', topParalaxHeight).hide();

  $(window).on('scroll resize load', function () {
    if ($(window).width() > 1024) {
      refreshHeight();
      scrollPos = $(window).scrollTop();
      if (scrollPos >= 1) {
        $('.ad-diapers').addClass('fixed');
        $('.ad-diapers.fixed').css('top', navHeight);
        $('.clone-ad-diapers').show();
      }
      else {
        $('.ad-diapers').removeClass('fixed').css('top', 'auto');
        $('.clone-ad-diapers').hide();
      }
    }
  });

//slider header
  if ($('.js-ad-diapers').length) {
    $('.js-ad-diapers').slick({
      prevArrow: $('.js-header-arrow-prev'),
      nextArrow: $('.js-header-arrow-next')
    });
  }

//slider reviews
  if ($('.js-review-slider').length) {
    $('.js-review-slider').slick({
      prevArrow: $('.js-reviews-arrow-prev'),
      nextArrow: $('.js-reviews-arrow-next')
    });
  }

//to top
  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });


  var headerContent = $('.ad-diapers__slide');

  $(window).on('scroll', function () {
    var scrollCoef = 0.0010;
    if ($(window).width() > 1024) {
      headerContent.css({
        opacity: 1 - $(window).scrollTop() * scrollCoef
      });
      $('.ad-diapers__slide').css({
        top: 2 - $(window).scrollTop() * .3
      });
    }
  });
});