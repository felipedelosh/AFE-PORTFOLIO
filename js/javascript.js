/**
 * FelipedelosH
 * 2023
 * index bnts codes
 */

/**
 * Click
 */
$( ".btn-send-email" ).on( "click", function() {
    openNewTab("mailto:doctorfhernandez@hotmail.com?subject=He visto tu CV&body=Me gustaria contactarte.");
});

$( ".btn-hide-send-whatsapp" ).on( "click", function() {
    openNewTab("mailto:doctorfhernandez@hotmail.com?subject=He visto tu CV&body=Me gustaria contactarte.");
});

$( ".btn-go-linkedin" ).on( "click", function() {
    openNewTab("https://www.linkedin.com/in/andr%C3%A9s-felipe-hern%C3%A1ndez-4b12ab83/");
});

$( ".btn-go-stackoverflow" ).on( "click", function() {
    openNewTab("https://es.stackoverflow.com/users/182484/andres-felipe-hernandez");
});

$( ".btn-go-youtube" ).on( "click", function() {
    openNewTab("https://www.youtube.com/@doctorfhernandez1/videos");
});

$( ".btn-go-instagram" ).on( "click", function() {
    openNewTab("https://www.instagram.com/ccc_co_ccc");
});

$( ".btn-go-github" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh");
});

$( ".btn-send-whatsapp" ).on( "click", function() {
    openNewTab("https://api.whatsapp.com/send/?phone=%2B573005437123&text=hola%2C+He+visto+tu+CV+y+estoy+interasado.&type=phone_number&app_absent=0");
});

$( ".btn-hide-send-email" ).on( "click", function() {
    openNewTab("https://api.whatsapp.com/send/?phone=%2B573005437123&text=hola%2C+He+visto+tu+CV+y+estoy+interasado.&type=phone_number&app_absent=0");
});

$( ".btn-download-cv" ).on( "click", function() {
    openLocalTab("DOWNLOAD/cv.pdf");
});

$( ".logo" ).on( "click", function() {
    openLocalTab("https://felipedelosh.github.io/AFE-PORTFOLIO");
});

$( ".url-post" ).on( "click", function() {
    openHTML("posts.html");
});

$( ".url-code" ).on( "click", function() {
    openHTML("code.html");
});

$( ".url-projects" ).on( "click", function() {
    openHTML("projects.html");
});

$( ".url-cv" ).on( "click", function() {
    openHTML("cv.html");
});


/**
 * Effects
*/
$( ".logo" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","#afdaf0");
    }
});


$( ".btn-send-email" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","red");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","white");
    }
});

$( ".btn-go-linkedin" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","red");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","white");
    }
});

$( ".btn-go-stackoverflow" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","red");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","white");
    }
});

$( ".btn-go-youtube" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","red");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","white");
    }
});

$( ".btn-go-instagram" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","red");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","white");
    }
});

$( ".btn-go-github" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","red");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","white");
    }
});

$( ".btn-send-whatsapp" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","red");
    }else{
        $(this).css("background-color","#afdaf0");
    }
}).mouseleave(function() {  
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $(this).css("background-color","black");
    }else{
        $(this).css("background-color","white");
    }
});

$( ".btn-download-cv" ).hover(function() {
    $(this).fadeOut(50);
    $(this).fadeIn(250);
});

/**
 * LIGTH - DARK MODE
*/

$( ".btn-floating" ).on( "click", function() {
    turnLights();
    iluminationRefresh();
});


/***
 * Media querys
 * 
 */
/**
 * If the user resize a window the bottom text is update
 */
$(window).resize(function(){
    resize();
});



/**
 * Enter a URL and open in new tab
 * @param {*} url 
 */

function openNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function openLocalTab(url){
    var win = window.open(url, '_self');
    win.focus();
}

function openHTML(url){
    window.open(url, "_self");
}

/**
 * 
 */
function turnLights(){
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "light"){
        $(".btn-floating").attr("src","assets/img/ico/on.png");
        localStorage.setItem('view_mode', 'dark');
    }else{
        $(".btn-floating").attr("src","assets/img/ico/off.png");
        localStorage.setItem('view_mode', 'light');
    }

}

/**
 * The page hav 2 modes: light and dark
 */

function iluminationRefresh(){
    var mode = localStorage.getItem('view_mode');
    if (mode === null || mode == "dark"){
        $('body').css('background-color', 'black');
        $('div').css('background-color', 'black');
        $('row').css('background-color', 'black');
        $('svg').css('color', 'green');
        $('hr').css('color', 'white');
        $('.navbar').css('background-color', 'black');
        $('.logo').css('background-color', 'black');
        $('.navbar').removeClass("navbar-light");
        $('.navbar').removeClass("bg-light");


        for (var i = 1; i <= 12; i++) {
            $('col-'+i.toString()).css('background-color', 'black');
        }
          
        $('p').css('color', 'white');
        $('span').css('color', 'white');

        for (var i = 1; i <= 8; i++) {
            $('h'+i.toString()).css('color', 'white');
        }
        
        $(".btn-floating").attr("src","assets/img/ico/off.png");
    }else{
        $('body').css('background-color', 'white');
        $('div').css('background-color', 'white');
        $('row').css('background-color', 'white');
        $('svg').css('color', 'black');
        $('hr').css('color', 'black');
        $('.logo').css('background-color', '#afdaf0');
        $('.navbar').css('background-color', 'white');
        $('.navbar').addClass("navbar-light");
        $('.navbar').addClass("bg-light");
        
        for (var i = 1; i <= 12; i++) {
            $('col-'+i.toString()).css('background-color', 'white');
        }
        
        $('p').css('color', 'black');
        $('span').css('color', 'black');
        
        for (var i = 1; i <= 8; i++) {
            $('h'+i.toString()).css('color', 'black');
        }
    
        $(".btn-floating").attr("src","assets/img/ico/on.png");
    }
}

/**
 * When you open the page or resize de page or refresh 
 * execute 
 */
function resize(){
    const date = new Date();
    let year = date.getFullYear();

    if ($(window).width() <= 580) {  
        $('.projects-info').removeClass("col-8");
        $('.bio-posts').removeClass("col-8");
        $('.bio-code').removeClass("col-8");
        $('.bio-info').removeClass("col-8");
        $('.contact-info').css("display", "none");
        $('.navbar-links').css("display", "none");
        $('.hide-nav-menu').css("display", "block");
        $('.txt-footer-text').text("© "+year.toString()+"-FelipedelosH-VR-MOBILE.");
    }else if($(window).width() >= 580 && $(window).width() <= 982){
        $('.projects-info').addClass("col-8");
        $('.bio-posts').addClass("col-8");
        $('.bio-code').addClass("col-8");
        $('.bio-info').addClass("col-8");
        $('.contact-info').css("display", "block");
        $('.navbar-links').css("display", "none");
        $('.hide-nav-menu').css("display", "block");
        $('.txt-footer-text').text("© "+year.toString()+"-FelipedelosH-VR-TABLET.");
    }else if($(window).width() > 982){
        $('.projects-info').addClass("col-8");
        $('.bio-posts').addClass("col-8");
        $('.bio-code').addClass("col-8");
        $('.bio-info').addClass("col-8");
        $('.contact-info').css("display", "block");
        $('.navbar-links').css("display", "block");
        $('.hide-nav-menu').css("display", "none");
        $('.txt-footer-text').text("© "+year.toString()+"-FelipedelosH-VR-DESKTOP.");
    }
}


resize();
iluminationRefresh();
