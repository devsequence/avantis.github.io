'use strict';
if(!window.console) window.console = {};
if(!window.console.memory) window.console.memory = function() {};
if(!window.console.debug) window.console.debug = function() {};
if(!window.console.error) window.console.error = function() {};
if(!window.console.info) window.console.info = function() {};
if(!window.console.log) window.console.log = function() {};

// sticky footer
//-----------------------------------------------------------------------------
if(!Modernizr.flexbox) {
  (function() {
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      noFlexboxStickyFooter = function() {
        $pageBody.height('auto');
        if($pageBody.height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageBody.height($(window).height() - $('#header').outerHeight() - $('#footer').outerHeight());
        } else {
          $pageWrapper.height('auto');
        }
      };
    $(window).on('load resize', noFlexboxStickyFooter);
  })();
}
if(ieDetector.ieVersion == 10 || ieDetector.ieVersion == 11) {
  (function(){
    var
      $pageWrapper = $('#page-wrapper'),
      $pageBody = $('#page-body'),
      ieFlexboxFix = function() {
        if($pageBody.addClass('flex-none').height() + $('#header').outerHeight() + $('#footer').outerHeight() < $(window).height()) {
          $pageWrapper.height($(window).height());
          $pageBody.removeClass('flex-none');
        } else {
          $pageWrapper.height('auto');
        }
      };
    ieFlexboxFix();
    $(window).on('load resize', ieFlexboxFix);
  })();
}

$(function() {

// placeholder
//-----------------------------------------------------------------------------
  $('input[placeholder], textarea[placeholder]').placeholder();
    $('#particles').particleground({
        minSpeedX: 0.1,
        maxSpeedX: 0.7,
        minSpeedY: 0.1,
        maxSpeedY: 0.7,
        directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
        directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
        density: 18000, // How many particles will be generated: one particle every n pixels
        dotColor: 'rgba(255,255,255,0.3)',
        lineColor: 'rgba(255,255,255,0.3)',
        particleRadius: 4, // Dot size
        lineWidth: 0.5,
        curvedLines: false,
        proximity: 160, // How close two dots need to be before they join
        parallax: false,
        parallaxMultiplier: 4, // The lower the number, the more extreme the parallax effect
        onInit: function() {},
        onDestroy: function() {}
    });
    $('.btn-nav').on('click', function(){
        var  $this = $(this);
        if($this.hasClass('btn-open-nav')){
            $this.removeClass('btn-open-nav').addClass('btn-close-nav');
            $('.header').addClass('header-open-nav');
            $('body').addClass('body-open-nav');

        }else{
            $this.removeClass('btn-close-nav').addClass('btn-open-nav');
            $('.header').removeClass('header-open-nav');
            $('body').removeClass('body-open-nav');
        }
    });
    $(".top-info-link").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -50;
        $('body,html').animate({scrollTop: top}, 800)
    });
    $('.news-tab').imagesLoaded( function () {
        $('.news-tab').masonry({
            columnWidth: '.news-item',
            percentPosition: true,
            itemSelector: '.news-item'
        });
    });
    $('.tab-nav a').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            thisIdItem = $this.attr('href');
        $('.tab-nav a').removeClass('active-nav');
        $this.addClass('active-nav');
        $('.tab').removeClass('active');
        $(thisIdItem).addClass('active');
        $('.tab-container .item-block-container').imagesLoaded( function () {
            $('.tab-container .item-block-container').masonry({
                columnWidth: '.item-block',
                percentPosition: true,
                itemSelector: '.item-block'
            });
        });
        $('.gallery-slider').slick("setPosition", 0);
    });
    $('.btn-answer a').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            $thisItem = $this.closest('.answer-block'),
            $thisContent = $thisItem.find('.text-answer-container');
        if($thisItem.hasClass('open')) {
            $thisItem.removeClass('open');
            $thisContent.stop(true, true).slideUp();
            $this.text('Развернуть ответ');
        } else {
            $thisItem.addClass('open').siblings().removeClass('open').find('.text-answer-container').stop(true, true).slideUp();
            $thisContent.stop(true, true).slideDown();
            $this.text('Свернуть ответ');
        }
    });
    if($('.gallery-wrap .fancybox').length) {
        $('.gallery-wrap .fancybox').fancybox();
    }
    if($('.gallery-info-item .fancybox').length) {
        $('.gallery-info-item .fancybox').fancybox();
    }
    $('.gallery-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('.slider-offers').slick({
        dots:true
    });
    $('.service-slider').slick({
        dots:true,
        arrows:false,
        infinite: true,
        speed: 500,
        fade: true
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: true
                }
            }
        ]
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });
    $('.bot-work-block a').on('click', function(){
        var $this = $(this),
            tabContent= $this.attr('href'),
            topTab = $('.tab-container').offset().top -100;
            $('.tab').removeClass('active');
            $(tabContent).addClass('active');
            $('.tab-nav a').removeClass('active-nav');
            $('body,html').animate({scrollTop: topTab}, 500);
    });
    $('.link-block a').on('click', function(e){
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -50;
        $('body,html').animate({scrollTop: top}, 600)
    });
    $('.about-info-link a').on('click', function(e){
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top -50;
        $('body,html').animate({scrollTop: top}, 600)
    });
    //$('.log-block').hover('click', function(){
    //    $('.top-popup').addClass('top-popup-open');
    //},function(){
    //    $('.top-popup').addClass('top-popup-open');
    //});
    $('.log-block').hover(function() {$('.top-popup').show(300)}, function() {$('.top-popup').hide(300)});

    $('.popup-area').on('focus',function(){
        $(this).addClass('popup-area-open')
    });
    $('.item-tell').on('click',function(){
        $('.call-popup').addClass('popup-item-open')
    });
    $('.info-header-call a').on('click',function(e){
        e.preventDefault();
        $('.call-popup').addClass('popup-item-open')
    });
    $('.item-qwe').on('click',function(){
        $('.question-popup').addClass('popup-item-open')
    });
    $('.close-popup').on('click',function(){
        $('.popup-item').removeClass('popup-item-open')
    });
    $('.overlay-popup').on('click',function(){
        $('.popup-item').removeClass('popup-item-open')
    });



});
$(function (){
    if (($(window).width()) < '768'){
    }else {
        $('.video-block').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            width       : 1280,
            height      : 720,
            maxWidth    : '100%',
            maxHeight   : '100%',
            padding     : 0,
            margin      : 0,
            helpers : {
                media : {
                    youtube : {
                        params : {
                            theme : 'light',
                            vq    : 'hd720',
                            css   : {
                                'body' : 'color: #fff'
                            }
                        }
                    }
                }
            }
        });
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 190) {
        $('.bot-header').addClass('bot-header-scroll');
    }
    else {
        $('.bot-header').removeClass('bot-header-scroll');
    }
});
$('.to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});
jQuery(function($){
    $(document).mouseup(function (e){
        var div = $(".top-popup");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('top-popup-open');
        }else{
        }
    });
});