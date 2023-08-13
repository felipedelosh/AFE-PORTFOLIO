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
    openNewTab("https://felipedelosh.github.io/AFE-PORTFOLIO/");
});


/**
 * Effects
 */
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



/**
 * Enter a URL and open in new tab
 * @param {*} url 
 */

function openNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
}

function openLocalTab(url){
    var win = window.open(url, '#');
    win.focus();
}
