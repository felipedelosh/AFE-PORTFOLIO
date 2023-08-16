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
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","#e3f2fd");
});


$( ".btn-send-email" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","white");
});

$( ".btn-go-linkedin" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","white");
});

$( ".btn-go-stackoverflow" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","white");
});

$( ".btn-go-youtube" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","white");
});

$( ".btn-go-instagram" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","white");
});

$( ".btn-go-github" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","white");
});

$( ".btn-send-whatsapp" ).hover(function() {
    $(this).fadeOut(5);
    $(this).fadeIn(25);
    $(this).css("background-color","#afdaf0");
}).mouseleave(function() {  
    $(this).css("background-color","white");
});

$( ".btn-download-cv" ).hover(function() {
    $(this).fadeOut(50);
    $(this).fadeIn(250);
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
