'use strict';

/**
 * Document ready functions
 */


$(function () {
  //Parallax header
  // var scene = $('#scene').get(0);
  //
  // var parallax = new Parallax(scene);



  //increment and decrement number on field
  $('.single-product__quantity').on('click', function(event){
    var $target = $(event.target);
    var start=Number($(this).find('.single-product__field').val());
    if($target.hasClass('single-product__switch--down') && start >= 1) {
      start--;
      $(this).find('.single-product__field').val(start);
    } else if ($target.hasClass('single-product__switch--up')) {
      start++;
      $(this).find('.single-product__field').val(start);
    }
  });

  //popups
  $('.form__remove-order').on('click', function () {
    $(this).parents('.form__type').remove();
  });

  var btnOrder = $('.js-btn-ordering'),
      btnOrderFast = $('.js-btn-order-fast'),
      btnCart = $('.js-btn-cart'),
      btnSkip = $('.js-skip'),
      btnLoc = $('.js-loc'),
      overlay = $('.overlay'),
      overlayOrder = $('.js-ordering'),
      overlayShow = 'overlay--show',
      overlayFast = $('.js-fast-order'),
      overlayCart = $('.js-popup-cart'),
      overlayLocation = $('.js-location'),
      closeOverlay = $('.form__close'),
      form = $('.form');

  btnOrder.on('click', function () {
    $(this).parents('.overlay').removeClass('overlay--show');
    overlayOrder.addClass(overlayShow);
  });
  btnOrderFast.on('click', function () {
    overlayFast.addClass(overlayShow);
  });
  btnCart.on('click', function () {
    event.preventDefault();
    overlayCart.addClass(overlayShow);
  });
  btnLoc.on('mousedown', function(e) {
    e.preventDefault();
    this.blur();
    window.focus();
  });
  btnLoc.on('click', function () {
    overlayLocation.addClass(overlayShow);
  });
  closeOverlay.on('click', function () {
    $(this).parents(overlay).removeClass(overlayShow);
  });
  $('.js-skip').on('click', function () {
    $(this).parents(overlay).removeClass(overlayShow);
  });
  overlay.mouseup(function (e) {
    if (form.has(e.target).length === 0){
      $(this).removeClass('overlay--show');
    }
  });

//end


  //accordeon filter mobile version
  if ($('.filter').length) {
    $('.js-acordeon-item').on('click', function () {
      $(this).parents('.filter__group').toggleClass('filter__group--active');
    });
  }
  //end


  //tabs
  $(".js-tab-item").not(":first").hide();
  $(".js-tab").click(function () {
    $(".js-tab").removeClass("single-product__tab-title--active")
        .eq($(this).index()).addClass("single-product__tab-title--active");
    $(".js-tab-item").hide().eq($(this).index()).show()
  }).eq(0).addClass("single-product__tab-title--active");
  //end

  //custom select
  if ($('.testselect1').length) {
    $('.testselect1').SumoSelect();
  }
  //end


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
  //end

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

    if ($(this).prop('checked')) {
      $('.tag').append('<li class="tag__item"><span></span><button class="tag__remove" type="button">remove tag</button></li>').index(this);
      $('.tag__item span').text(thisElementText);
    } else {
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
  //end

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
//end


//slider reviews
  if ($('.js-review-slider').length) {
    $('.js-review-slider').slick({
      prevArrow: $('.js-reviews-arrow-prev'),
      nextArrow: $('.js-reviews-arrow-next')
    });
  }
//end

//to top btn
  $('.to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
//end

  //opacity header on scroll
  $(window).on('scroll', function () {
    var scrollCoef = 0.0010;
    var st = $(this).scrollTop();
    if ($(window).width() > 1024) {
      $('.ad-diapers__slide').css({
        opacity: 1 - st * scrollCoef
      });

      $('.ad-diapers__info').css({
        'transform' : 'translate(0%, -' + st /12 + '%'
      });

      $('.ad-diapers__child-img').css({
        'transform' : 'translate(0%, -' + st /12 + '%'
      });

      $('.header__nipple').css({
        'transform' : 'translate(0%, -' + st /9 + '%'
      });

      $('.header__heart').css({
        'transform' : 'translate(0%, -' + st /9 + '%'

      });

      $('.ad-diapers__cloud').css({
        'transform' : 'translate(0%, -' + st /4.5 + '%'
      });

      $('.ad-diapers__aircraft').css({
        'transform' : 'translate(-' + st / 5  + '%, -' + st  + '%'
      });
    }
  });
  //end


});


