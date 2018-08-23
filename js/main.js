function showScroll(){
    scroller=$(window).scrollTop();
    height=$(window).height();
    if(height>='900'){
        if(scroller > 2500) {
            $(".vant-slogan-down").addClass("fadeInDown").removeClass("hidden");
        }
    } else { // Height less than 900
        if(scroller > 2500) {
            $(".vant-slogan-down").addClass("fadeInDown").removeClass("hidden");
        }
    }

    // Scroll fixed menu
    scroller=$(window).scrollTop();
    if(scroller>80){
        $(".fixed").addClass("head-scrolled");
    } else {
        $(".fixed").removeClass("head-scrolled");
    }
}

$(document).ready(function() {
    // Slider
    $("#main-slider").owlCarousel({
        items: 1,
        animateOut: 'slideOutUp',
        animateIn: 'slideInDown',
        loop: true,
        nav: true,
        dots: false,
        autoplay: false
    });

    // Remove animation class
    if ( $(window).width() < 1200) {
        $('.collections').removeClass('scrollme');
    }
    else {}

    // Slider on full height
    function setHeight() {
        $('#main-slider').css({
            height: $(window).height() + 'px'
        });
    }
    setHeight();
    $(window).resize( setHeight );

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
    $("#modal,#modal-business").on("click touchend", function (e) {
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