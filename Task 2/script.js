$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
     });

     $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
     });

     //smooth scrolling
     $('a[href*="#').click(function(e){
        e.preventDefault();
        $('html, body').animated({
            scrollTop : $($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
     });
});