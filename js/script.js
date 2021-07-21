$(document).ready(function() {

    $('#image-background, #play-icon').on('click', function(ev) {
        $("#video")[0].src += "?autoplay=1";
        $('#image-background, #play-icon').remove();
    });

    // Sticky nav
    $(window).scroll(function(){
        var sticky = $('nav.navbar#top-nav'),
            scroll = $(window).scrollTop();

        if (scroll >= 300)
            sticky.addClass('sticky');
        else
            sticky.removeClass('sticky');
    });

    $('.owl-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })

    function recalcCarouselWidth(carousel) {
        var $stage = carousel.find('.owl-stage'),
             stageW = $stage.width(),
         $el = $('.owl-item'),
         elW = 0;
        $el.each(function() {
            elW += $(this)[0].getBoundingClientRect().width;
        });
        if ( elW > stageW ) {
         console.log('elW maggiore di stageW: ' +  elW + ' > ' + stageW);
         $stage.width( Math.ceil( elW ) );
        }
    }

    $(window).on('resize', function(e){
        recalcCarouselWidth( $('.owl-carousel.common-search') );
    }).resize();
    $('.owl-carousel.common-search').on('refreshed.owl.carousel', function(event) {
         recalcCarouselWidth( $('.owl-carousel') );
    });
    $('.owl-carousel.common-search').on('onResize.owl.carousel', function(event) {
        recalcCarouselWidth( $('.owl-carousel') );
    });

    //toggleClass dropdown-modal

    $('#dropdown-modal #slideClick').click(function(e){
        $('#dropdown-modal #slide-content').toggleClass('slideJs');
        $('#other-click #Polygon_9_js').toggleClass('Polygon_9_rotate');
    });

    // Animation Search Input
    $('#input-hero-search').click(function(event) {
        if($('#input-hero-search-text').css('display') == 'none'){
            event.preventDefault();
        }

        $('#input-hero-search-text').show();
        $('#input-hero-search-text').focus();
    });

    $('#input-hero-search-text').on('focusout', function () {
        if($('#input-hero-search-text').css('display') == 'inline-block'){
            $('#input-hero-search-text').hide();
            return true;
        }

      });

    //   Hover on Slide images (Universities/Majors)
    // $('#hover-background figure').hover(function () {
    //     $('.common-search .owl-item .university-item img').css('visibility', 'hidden');
    // });

  //

    $('#slide-content-down .nav-item .nav-link').click(function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });


});
