function showScroll(){

    let scroller = $(window).scrollTop();
    let height = $(window).height();
    // console.log("curr:" + scroller + ", height: "+ height);

    // Menu mod
    let menu = $("header");
    if(scroller > 1) {
        menu.css("bottom", scroller + "px");
        heightFix = height - 46;
        if(scroller >= heightFix){
            menu.addClass("header-scroll");
        }
        if(scroller < height){
            menu.removeClass("header-scroll");
        }
        if(scroller < 23){
            menu.css("bottom", 0);
        }
    }
}

// Slider on full height
function setHeight() {
    $('#main-slider').css({
        height: $(window).height() + 'px'
    });
}

$(window).load(function() {
    $('#carousel').flexslider({
        animation: "slide",
        itemWidth: 102,
        controlNav: false,
        animationLoop: false,
        itemMargin: 15,
        maxItems: 3,
        slideshow: false,
        asNavFor: '#slider'
    });

    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel"
    });
});

$(document).ready(function() {
    // Slider
    $("#main-slider").owlCarousel({
        items: 1,
        animateOut: 'slideOutUp',
        animateIn: 'slideInDown',
        loop: true,
        nav: true,
        dots: false,
        autoplay: false,
        itemsDesktop: [1300,1],
        itemsDesktopSmall: [992,1],
        itemsTablet: [850,1],
        itemsTabletSmall: [600,1]
    });

    // Remove animation class
    if ( $(window).width() < 1200) {
        $('.collections').removeClass('scrollme');
    }
    else {}

    //$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();

    setHeight();
    $(window).resize( setHeight );

    // Drop
    $(".li-drop").hover(function(){
        $(this).find(".drop").stop(0, 1).fadeIn(300);
    }, function(){
        $(this).find(".drop").stop(0, 1).fadeOut(50);
    });

    // Anchors
    $('.scroller a').click(function(){
        var el = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(el).offset().top}, 1000);
        return false;
    });

    // Scroll top
    $("#back-top,#back-top-zp").hide();

    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top,#back-top-zp').fadeIn();
            } else {
                $('#back-top,#back-top-zp').fadeOut();
            }
        });

        $('#back-top a,#back-top-zp a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    // Fancy
    $(".fancybox").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic",
        padding: 7
    });

    // Modal
    $("#modal").on("click touchend", function (e) {
        e.preventDefault();
        $("#overlay").fadeIn(400, function () {
            $("#modal-window")
                .css("display", "block")
                .animate({opacity: 1}, 600);
        });
    });
    $("#close-button, #overlay").on("click touchend", function () {
        $("#modal-window")
            .animate({opacity: 0}, 600,
            function () {
                $(this).css("display", "none");
                $("#overlay").fadeOut(400);
            }
        );
    });
});

$(document).on('scroll', function(){
    showScroll();
});