(function (window, document, $) {
    'use strict';

    var $siteNav = $('#site-navigation');
    var $menuToggleBtn = $('button.menu-toggle');
    var $searchBtn = $('button.search-toggle');

    // Mobile nav
    $menuToggleBtn.on('click', function () {
        if ($siteNav.hasClass('main-small-navigation')) {
            $siteNav.removeClass('main-small-navigation').addClass('main-navigation');
            $menuToggleBtn.find('i').removeClass('fa-remove').addClass('fa fa-navicon');

        } else {
            $siteNav.removeClass('main-navigation').addClass('main-small-navigation');
            $menuToggleBtn.find('i').removeClass('fa-navicon').addClass('fa-remove');
        }
    });

    $searchBtn.on('click', function () {
        $('.nav-search-box:not(:visible)', '#masthead').toggle().find('.s').focus();
    });

    // hide search box when click on body
    $('body').on("mouseup", function (b) {
        var c = $(".nav-search-box:visible");
        if (!c.is(b.target) && c.has(b.target).length === 0 && c.length) {
            c.fadeOut();
            b.stopPropagation()
        }
    });

    var slider = $('.slider-rotate');
    var slides = slider.children().length;
    if (slides <= 1) {
        $('.slider-nav').hide(0)
    } else {
        $('.slider-nav').show(0)
    }
    $(window).on('load', function () {
        if (slider.length && $(window).width() > 361) {
            slider.cycle({
                fx: 'fade',
                prev: '.slide-prev',
                next: '.slide-next',
                activePagerClass: 'active',
                timeout: 5,
                speed: 2000,
                pause: 1,
                pauseOnPagerHover: 1,
                width: '100%',
                containerResize: 0,
                slideResize: 1,
                fit: 1,
                cleartypeNoBg: true,
                after: function () {
                    $(this).parent().css("height", $(this).height());
                }
            });
        }
    });


    // smooth scroll
    $("a[href*='#']:not([href='#'])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var a = $(this.hash);
            a = a.length ? a : $("[name=" + this.hash.slice(1) + "]");
            if (a.length) {
                $("html,body").animate({scrollTop: a.offset().top}, 600);
                return false
            }
        }
    });

    // move to top
    var scrollTop = $(".scroll-top");
    $(window).on('scroll', function (a) {
        if ($(window).scrollTop() > 800) {
            scrollTop.css({bottom: "30px"});
        } else {
            scrollTop.css({bottom: "-100px"});
        }
        a.stopPropagation();
    });

    // hide/show comment form help
    $('textarea#comment', "#commentform").on('click', function () {
        $('p.form-allowed-tags', "#commentform").slideDown(0);
    });

    // esc to cancel floating form
    $(window).on('keydown', function (e) {
        if (e.keyCode == 27) {
            $('.floating-form:visible').fadeOut(0);
            $('.float-btn:not(:visible)').show(0);
            e.stopPropagation();
        }
    });

    // fix header on scroll
    if ($('body').hasClass('home')) {
        controlFixedHeader();
    }
    // wrap into a function to avoid conflicts
    function controlFixedHeader() {
        var mh = $("#masthead");
        var mhh = mh.height();
        var sl = $("#featured-slider");
        var pg = $("#page");
        var hi = sl.offset().top + sl.height();
        $(window).on('scroll', function (a) {
            if ($(window).width() > 768) {
                if ($(window).scrollTop() > hi) {
                    mh.addClass("h-fixed");
                    pg.css('padding-top', mhh);
                } else {
                    pg.css('padding-top', 85);
                    mh.removeClass("h-fixed");
                }
                a.stopPropagation();
            }
        });
    }

})(window, document, jQuery);
