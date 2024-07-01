$(function () {
    $('.content button').click(function(){
        $('.modal_box').fadeIn(1000);
        $('.modal_bg').fadeIn(1000);
    });

    $('.modal_box button').click(function(){
        $('.modal_box').fadeOut();
        $('.modal_bg').fadeOut();
    });
});