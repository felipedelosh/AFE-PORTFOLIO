//init isotope
$('.portfolio-items').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
//Activate a menu btn
$('.portfolio-menu ul li').click(function(){
    $('.portfolio-menu ul li').removeClass("active");
    $(this).addClass("active");
    
    //Capture a name if li<data-filter>
    var selector = $(this).attr('data-filter');
    $('.portfolio-items').isotope({
        filter:selector
    });
    return false;
});