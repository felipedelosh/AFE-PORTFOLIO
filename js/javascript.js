/**
 * FelipedelosH
 * 2023
 * index bnts codes
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


function openNewTab(url){
    var win = window.open(url, '_blank');
    win.focus();
}
