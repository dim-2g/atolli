$(function() {
    $('select.selectric').selectric({
        maxHeight: 210
    });


    $('.toogle-menu').click(function(){
        var header = $('.header__body');
        menu_top = header.position().top + header.outerHeight();
        $('.fly-menu').css({'top':menu_top}).toggleClass('active');
    });

    $('.toogle-search').click(function(){
        $('.fly-search').toggleClass('active');
    });


    $('.open-popup-link').magnificPopup({
        type:'inline'
    });

    $('.img-link').magnificPopup({
        type  : 'image'
    });


    $('input[name="phone"]').inputmask({"mask": "+7 (999) 999-99-99"});


    $(".quontity .bminus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).parents(".quontity").find(".js_zcount");
        var input_val = parseInt( input.val() );

        if(input_val > 1){
            input_val--;
            input.attr("data-current", input_val);
            input.val(input_val);
        }
/*        if (input.hasClass('count_live')) {
            input.parents('form').submit();
        }
       */
    });

    $(".quontity .bplus").on("click", function (e) {
        e.preventDefault();
        var input = $(this).parents(".quontity").find(".js_zcount");
        var input_val = parseInt( input.val() );

        if(input_val < 999){
            input_val++;
            input.attr("data-current", input_val);
            input.val(input_val);
        }


        /*if (input.hasClass('count_live')) {
            input.parents('form').submit();
        }*/
    });

    $('.header__burger').click(function(){
       $('.topline-menu').toggleClass('open');
       return false;
    });
    $('.top-menu__burger').click(function(){
        $('.top-menu').toggleClass('open');
        return false;
    });
    $('.footer-menu__caption a').click(function(){
       $(this).parents('.footer-menu__box').toggleClass('open');
       return false;
    });


    //заадем высоту хедеру, чтобы при установки позиции фиксед не дергался сайт
    setHeightHeader = function(){
        var header_height = $('.header').outerHeight();
        $('.header').css({'min-height':header_height});
    }
    setHeightHeader();


});
$(window).resize(function(){
    var width = $(window).width();
    //collapseReview(1);
   // stepsSlider();

});

setFixedHeader = function(){
    var header_fly = $('.header-fly');
    var header = $('.header');

    if (header_fly.length>0){
        relative_bottom = header.offset().top + header.outerHeight();
        fly_height = header_fly.outerHeight();
        //relative_top = header.offset().top;
    }else{
        fly_height = 0;
        if (!relative_bottom){
            relative_bottom = 0;
        }
        if (!relative_top){
            relative_top = 0;
        }
    }
    //relative_bottom = 150;
//    relative_top = 220;
//alert(relative_bottom);
    var scroll = $(window).scrollTop();
    //чтобы плавно выезжал
    if (relative_bottom<scroll) {
        //header.addClass('slideTop');
        setTimeout(function(){
            $('body').addClass('fixed-header');
        });
    }

    if (relative_bottom>scroll){
        $('body').removeClass('fixed-header');
    }
};


$(document).scroll(function(){
    setFixedHeader();
});