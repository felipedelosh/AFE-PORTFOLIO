/**
 * FelipedelosH
 * 2023
 */

//INTERNAL LINKS
$( ".btn-to-click" ).on( "click", function() {
    //action
});

//EXTERNAL LINKS
$( ".btn-go-github" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh");
});

$( ".btn-go-stackoverflow" ).on( "click", function() {
    openNewTab("https://es.stackoverflow.com/users/182484/andres-felipe-hernandez");
});

$( ".btn-go-youtube" ).on( "click", function() {
    openNewTab("https://www.youtube.com/@doctorfhernandez1/videos");
});

$( ".btn-go-linkedin" ).on( "click", function() {
    openNewTab("https://www.linkedin.com/in/andr%C3%A9s-felipe-hern%C3%A1ndez-4b12ab83/");
});

$( ".btn-go-instagram" ).on( "click", function() {
    openNewTab("https://www.instagram.com/ccc_co_ccc/");
});


/**
 * hover
 */
$( ".class_element" ).hover(function() {
    //If element hover
}).mouseleave(function() {  
    //If element not hover
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
 * MediaQuery
 */
$(window).resize(function(){
    _responsiveRefresh();
});


function _responsiveRefresh(){
    var _w = $(window).width();
    var _h = $(window).height();
    var iphoneMiniH = _w >= 360 && _w <= 399 && _h >= 800 && _h <= 850;
    var iphoneProH = _w >= 400 && _w <= 450 && _h >= 900 && _h <= 999;
    var iphone5SEH = _w >= 300 && _w <= 340 && _h >= 550 && _h <= 600;
    var iphone678PlUSH = _w >= 380 && _w <= 440 && _h >= 710 && _h <= 750;
    var iphoneXH = _w >= 365 && _w <= 398 && _h >= 800 && _h <= 899;
    var iphoneXRH = _w >= 400 && _w <= 420 && _h >= 880 && _h <= 910;
    var iphoneSEH = _w >= 350 && _w <= 385 && _h >= 650 && _h <= 700;
    var kindleH = _w >= 780 && _w <= 820 && _h >= 1260 && _h <= 1300;
    var androidBasicH = _w >= 580 && _w <= 620 && _h >= 940 && _h <= 980;  
    var androidPixelH = _w >= 400 && _w <= 420 && _h >= 800 && _h <= 840;    
    var notDisplayH = _w < 280 && _h <= 340;


    if(iphoneMiniH){   
        alert("MobileOP1 horizontal");
    }else if(iphoneProH){
        alert("MobileOP2 horizontal");
    }else if(iphone5SEH){
        alert("MobileOP3 horizontal");
    }else if(iphone678PlUSH){
        alert("MobileOP4 horizontal");
    }else if(iphoneXH){
        alert("MobileOP5 horizontal");
    }else if(iphoneXRH){
        alert("MobileOP6 horizontal");
    }else if(iphoneSEH){
        alert("MobileOP7 horizontal");
    }else if(kindleH){
        alert("MobileOP8 horizontal");
    }else if(androidBasicH){;
        alert("MobileOP9 horizontal");
    }else if(androidPixelH){
        alert("MobileOP10 horizontal");
    }else if(notDisplayH){
        alert("MobileOP11 horizontal");
    }else{
        //alert("DEFAULT WINDOW SIZE:\n"+"H:"+_h+";"+"W;"+_w);
        if (_w < 700) {
            //Header

            //Header            
            //About section
            $('.about_section_row').removeClass("row");
            $('.about_section_col').removeClass("col");
            $('.about_section_col').addClass("col-12");
            $('.about_section_col').css("margin-top", "2%");
            $('.about_section_col').css("margin-bottom", "8%");
            //End About Section
            //Personal KPI
            $('.personal_indicators_col').removeClass("col");
            $('.personal_indicators_col').removeClass("col-6");
            $('.personal_indicators_col').addClass("col-12");
            $('.container_ico_kpi_personal').removeClass("col-5");
            $('.container_text_kpi_personal').removeClass("col-7");
            $('.container_ico_kpi_personal').addClass("col-6");
            $('.container_text_kpi_personal').addClass("col-6");
            //Personal KPI
            //Services
            $('.my_services_col').removeClass("col-4");
            $('.my_services_col').addClass("col-12");
            $('.my_services_col').css("margin-top", "2%");
            $('.my_services_col').css("margin-bottom", "2%");
            //Services
            //Contact me
            $('.contact_me_row').removeClass("row");
            $('.send_me_email_container').removeClass("col");
            $('.touch_me_part_container').removeClass("col");
            $('.send_me_email_container').addClass("col-12");
            $('.send_me_email_container').css("margin-top", "4%");
            $('.touch_me_part_container').addClass("col-12");
            $('.touch_me_part_container').css("margin-top", "4%");
            $('.contact_me_one_touch_social_icons').css("display", "none");
            //Contact me
            //Footer
            $('.text_footer').removeClass("col-6");
            $('.social_links_footer').removeClass("col-6");
            $('.text_footer').addClass("col-12");
            $('.social_links_footer').addClass("col-12");
            $('.ul_footer_links').removeClass("justify-content-end");
            $('.text_footer').addClass("text-center");
            $('.ul_footer_links').addClass("justify-content-center");
            //End Footer
        }else if(_w >= 700 && _w <= 982){
            //About section
            $('.my_services_col').removeClass("col-6");
            $('.about_section_col').removeClass("col-12");
            $('.about_section_row').addClass("row");
            $('.about_section_col').addClass("col");
            $('.about_section_col').css("margin-top", "none");
            $('.about_section_col').css("margin-bottom", "none");
            //End About Section
            //Personal KPI
            $('.personal_indicators_col').removeClass("col");
            $('.personal_indicators_col').removeClass("col-12");
            $('.personal_indicators_col').addClass("col-6");
            $('.container_ico_kpi_personal').removeClass("col-5");
            $('.container_text_kpi_personal').removeClass("col-7");
            $('.container_ico_kpi_personal').addClass("col-6");
            $('.container_text_kpi_personal').addClass("col-6");
            //Personal KPI
            //Services
            $('.my_services_col').removeClass("col-12");
            $('.my_services_col').removeClass("col-4");
            $('.my_services_col').addClass("col-6");
            $('.my_services_col').css("margin-top", "2%");
            $('.my_services_col').css("margin-bottom", "2%");
            //Services
            //Contact me
            $('.contact_me_one_touch_social_icons').css("display", "block");
            $('.send_me_email_container').removeClass("col-12");
            $('.touch_me_part_container').removeClass("col-12");
            $('.contact_me_row').addClass("row");
            $('.send_me_email_container').addClass("col");
            $('.touch_me_part_container').addClass("col");
            $('.send_me_email_container').css("margin-top", "none");
            $('.touch_me_part_container').css("margin-top", "none");   
            //Contact me
            //Footer
            $('.text_footer').removeClass("col-12");
            $('.social_links_footer').removeClass("col-12");
            $('.text_footer').removeClass("text-center");
            $('.ul_footer_links').removeClass("justify-content-center");
            $('.ul_footer_links').addClass("justify-content-end");
            $('.text_footer').addClass("col-6");
            $('.social_links_footer').addClass("col-6");
            //End Footer
        }else if(_w > 982){
            //About section
            $('.about_section_col').removeClass("col-12");
            $('.about_section_row').addClass("row");
            $('.about_section_col').addClass("col");
            $('.about_section_col').css("margin-top", "none");
            $('.about_section_col').css("margin-bottom", "none");
            //End About Section
            //Personal KPI
            $('.personal_indicators_col').removeClass("col-6");
            $('.personal_indicators_col').removeClass("col-12");
            $('.personal_indicators_col').addClass("col");
            $('.container_ico_kpi_personal').addClass("col-5");
            $('.container_text_kpi_personal').addClass("col-7");
            $('.container_ico_kpi_personal').removeClass("col-6");
            $('.container_text_kpi_personal').removeClass("col-6");
            //Personal KPI
            //Services
            $('.my_services_col').removeClass("col-12");
            $('.my_services_col').removeClass("col-6");
            $('.my_services_col').addClass("col-4");
            $('.my_services_col').css("margin-top", "none");
            $('.my_services_col').css("margin-bottom", "2%");
            //Services
            //Contact me
            $('.contact_me_one_touch_social_icons').css("display", "block");
            $('.send_me_email_container').removeClass("col-12");
            $('.touch_me_part_container').removeClass("col-12");
            $('.contact_me_row').addClass("row");
            $('.send_me_email_container').addClass("col");
            $('.touch_me_part_container').addClass("col");
            $('.send_me_email_container').css("margin-top", "none");
            $('.touch_me_part_container').css("margin-top", "none");   
            //Contact me
            //Footer
            $('.text_footer').removeClass("col-12");
            $('.social_links_footer').removeClass("col-12");
            $('.text_footer').removeClass("text-center");
            $('.ul_footer_links').removeClass("justify-content-center");
            $('.ul_footer_links').addClass("justify-content-end");
            $('.text_footer').addClass("col-6");
            $('.social_links_footer').addClass("col-6");
            //End Footer
        }
    }
}

_responsiveRefresh();
