/**
 * FelipedelosH
 * 2023
*/
//Click Portfolio items
//init isotope
$('.portfolio-items').isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});
//Click Isotope 
$('.li_portfolio').on("click", function(){
    $('.li_portfolio').removeClass("active");
    $(this).addClass("active");
    
    //Capture a name if li<data-filter>
    var selector = $(this).attr('data-filter');
    $('.portfolio-items').isotope({
        filter:selector
    });
    return false;
});
$( "#eyeOpen" ).on( "click", function() {
    hideOrShowPortFolioItems();
});
$( "#eyeClose" ).on( "click", function() {
    hideOrShowPortFolioItems();
});
//END Click Portfolio items
$( ".contanct_me_send_email" ).on( "click", function() {
    sendEmail();
});
//Change language of page
$(".switch-left").on("click", function() {
    _swicthLanguagePage();
});
$(".switch-right").on("click", function() {
    _swicthLanguagePage();
});

//Keyboard
$(document).ready(function(){
	$("body").keydown(function(event){
        let key = String.fromCharCode(event.which)
        if(localStorage.getItem("keyboard-history") === null){
            localStorage.setItem('keyboard-history', key);
        }else{
            localStorage.setItem('keyboard-history', localStorage.getItem("keyboard-history")+key);
            _changeVisualMode(); //password

            //Controller len of text
            if(localStorage.getItem("keyboard-history").length >= 500){
                localStorage.setItem('keyboard-history', '');
            }
        
        
        }

        
	}); 
});



//INTERNAL LINKS
$( ".btn_downloadCV" ).on( "click", function() {
    openLocalTab("DOWNLOAD/cv.pdf");
});

$( ".btn_download_my_cv_from_about" ).on( "click", function() {
    openLocalTab("DOWNLOAD/cv.pdf");
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
    openNewTab("https://www.linkedin.com/in/felipedelosh/");
});

$( ".btn-go-instagram" ).on( "click", function() {
    openNewTab("https://www.instagram.com/ccc_co_ccc/");
});

$( ".link-go-hospitalHDSRR" ).on( "click", function() {
    openNewTab("http://www.esehospitalsanrafael.gov.co/");
});

$( ".link-go-netactica" ).on( "click", function() {
    openNewTab("https://www.netactica.com/");
});

$( ".link-go-rebold" ).on( "click", function() {
    openNewTab("https://letsrebold.com/es/");
});

$( ".btn-go-github-laurens-project" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh/laurensmusic");
});

$( ".btn-go-github-cdaanserma-project" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh/CDA-ANSERMA");
});

$( ".btn-go-github-portfolio-project" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh/AFE-PORTFOLIO");
});

$( ".btn-go-github-api-project" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh/PruebaTecnicaSIER");
});

$( ".btn-go-github-fakerdata-project" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh/DataOfRandomPersons");
});

$( ".btn-go-github-excelsql-project" ).on( "click", function() {
    openNewTab("https://github.com/felipedelosh/ExcelToSQL");
});

/**
 * hover
*/
$( ".nav_link_go_home" ).hover(function() {
    $('.nav_link_go_home').css("color", "#f85c70");
}).mouseleave(function() {  
    $('.nav_link_go_home').css("color", "black");
    if(localStorage.getItem("display-mode") !== null){
        if(localStorage.getItem("display-mode") !== ''){
            $('.nav_link_go_home').css("color", "green");
        }
    }
});

$( ".nav_link_go_about" ).hover(function() {
    $('.nav_link_go_about').css("color", "#f85c70");
}).mouseleave(function() {  
    $('.nav_link_go_about').css("color", "black");
    if(localStorage.getItem("display-mode") !== null){
        if(localStorage.getItem("display-mode") !== ''){
            $('.nav_link_go_about').css("color", "green");
        }
    }
});

$( ".nav_link_go_resume" ).hover(function() {
    $('.nav_link_go_resume').css("color", "#f85c70");
}).mouseleave(function() {  
    $('.nav_link_go_resume').css("color", "black");
    if(localStorage.getItem("display-mode") !== null){
        if(localStorage.getItem("display-mode") !== ''){
            $('.nav_link_go_resume').css("color", "green");
        }
    }
});

$( ".nav_link_go_portfolio" ).hover(function() {
    $('.nav_link_go_portfolio').css("color", "#f85c70");
}).mouseleave(function() {  
    $('.nav_link_go_portfolio').css("color", "black");
    if(localStorage.getItem("display-mode") !== null){
        if(localStorage.getItem("display-mode") !== ''){
            $('.nav_link_go_portfolio').css("color", "green");
        }
    }
});

$( ".nav_link_go_blog" ).hover(function() {
    $('.nav_link_go_blog').css("color", "#f85c70");
}).mouseleave(function() {  
    $('.nav_link_go_blog').css("color", "black");
    if(localStorage.getItem("display-mode") !== null){
        if(localStorage.getItem("display-mode") !== ''){
            $('.nav_link_go_blog').css("color", "green");
        }
    }
});

$( ".nav_link_go_contact" ).hover(function() {
    $('.nav_link_go_contact').css("color", "#f85c70");
}).mouseleave(function() {  
    $('.nav_link_go_contact').css("color", "black");
    if(localStorage.getItem("display-mode") !== null){
        if(localStorage.getItem("display-mode") !== ''){
            $('.nav_link_go_contact').css("color", "green");
        }
    }
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

$(window).scroll(function(){
    _hideShowAvatarPicController();
    _hideShowBtnLanguageController();

});

$(window).resize(function(){
    _responsiveRefresh();
});


function _hideShowAvatarPicController(){
    let _imgPos = $('.navbar_menu').offset().top;
    if(_imgPos<=$(window).scrollTop()){
        $('.img_avatar').css("display", "none");
        $('.text_back_img_avatar').css("display", "block");
    }else{
        $('.img_avatar').css("display", "block");
        $('.text_back_img_avatar').css("display", "none");
    }
}

function _hideShowBtnLanguageController(){
    let _h = $(window).scrollTop();
    let _y0 = $('.navbar_menu').offset().top;
    
    if (_y0 <= _h){
        $('.btn-bottom-floating').css("display", "block");
    }else{
        $('.btn-bottom-floating').css("display", "none");
    }

}


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
        _responsiveConfigMobileDefaultH();
    }else if(iphoneProH){
        _responsiveConfigMobileDefaultH();
    }else if(iphone5SEH){
        _responsiveConfigMobileDefaultH();
    }else if(iphone678PlUSH){
        _responsiveConfigMobileDefaultH();
    }else if(iphoneXH){
        _responsiveConfigMobileDefaultH();
    }else if(iphoneXRH){
        _responsiveConfigMobileDefaultH();
    }else if(iphoneSEH){
        _responsiveConfigMobileDefaultH();
    }else if(kindleH){
        _responsiveConfigTablet();
    }else if(androidBasicH){
        _responsiveConfigMobileDefaultH();
    }else if(androidPixelH){
        _responsiveConfigMobileDefaultH();
    }else if(notDisplayH){
        alert("NOT Availabe IN YOU MOBILE");
        _responsiveConfigMobileDefaultH();
    }else{
        //alert("DEFAULT WINDOW SIZE:\n"+"H:"+_h+";"+"W;"+_w);
        if (_w < 700) {
            _responsiveConfigMobileH();
        }else if(_w >= 700 && _w <= 982){
            _responsiveConfigTablet();
        }else if(_w > 982){
            _responsiveConfigDesktop();
        }
    }
}

function _responsiveConfigMobileDefaultH(){
    //Header
    $('.menu_navbar_desktop').css("display", "none");
    $('.menu_navbar_mobile').css("display", "block");
    $('.header').css("height", "50vh");
    $('.navbar_text_content').css("margin-top", "20%");
    _hideShowAvatarPicController();
    //Header
    //About section
    $('.about_section_row').removeClass("row");
    $('.about_section_col').removeClass("col");
    $('.about_section_col').addClass("col-12");
    $('.about_section_col').css("margin-top", "2%");
    $('.about_section_col').css("margin-bottom", "8%");
    $('.about_skill_ico').css("width", "80%");
    $('.about_skill_ico').css("height", "80%");
    //End About Section
    //resume
    $('.my_resume_expertice').removeClass("col");
    $('.my_resume_expertice').css("margin-bottom", "2%");
    $('.my_resume_expertice').addClass("col-12");
    $('.my_resume_education').removeClass("col");
    $('.my_resume_education').css("margin-bottom", "2%");
    $('.my_resume_education').addClass("col-12");
    $('.my_resume_skills').removeClass("col");
    $('.my_resume_skills').css("margin-bottom", "2%");
    $('.my_resume_skills').addClass("col-12");
    //resume
    //Personal KPI
    $('.personal_indicators_col').removeClass("col");
    $('.personal_indicators_col').removeClass("col-6");
    $('.personal_indicators_col').addClass("col-12");
    $('.container_ico_kpi_personal').removeClass("col-5");
    $('.container_text_kpi_personal').removeClass("col-7");
    $('.container_ico_kpi_personal').addClass("col-6");
    $('.container_text_kpi_personal').addClass("col-6");
    $('.ico_kpi_personal').css("width", "100%");
    $('.ico_kpi_personal').css("height", "50%");
    $('.personal_indicators').css("padding", "20px 0");
    //Personal KPI
    //Services
    $('.my_services_col').removeClass("col-4");
    $('.my_services_col').addClass("col-12");
    $('.my_services_col').css("margin-top", "2%");
    $('.my_services_col').css("margin-bottom", "2%");
    //Services
    //PORTFOLIO
    $('.item').removeClass("col-4");
    $('.item').removeClass("col-6");
    $('.item').addClass("col-12");
    //PORTFOLIO
    //BLOG
    $('.card_blog_container_img').removeClass("col-4");
    $('.card_blog_container_text').removeClass("col-8");
    $('.card_blog_container_img').addClass("col-12");
    $('.card_blog_container_text').addClass("col-12");
    //BLOG
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
}

function _responsiveConfigMobileH(){
    //Header
    $('.menu_navbar_desktop').css("display", "none");
    $('.menu_navbar_mobile').css("display", "block");
    $('.header').css("height", "80vh");
    $('.navbar_text_content').css("margin-top", "20%");
    _hideShowAvatarPicController();
    //Header            
    //About section
    $('.about_section_row').removeClass("row");
    $('.about_section_col').removeClass("col");
    $('.about_section_col').addClass("col-12");
    $('.about_section_col').css("margin-top", "2%");
    $('.about_section_col').css("margin-bottom", "8%");
    $('.about_skill_ico').css("width", "80%");
    $('.about_skill_ico').css("height", "80%");
    //End About Section
    //resume
    $('.my_resume_expertice').removeClass("col");
    $('.my_resume_expertice').css("margin-bottom", "2%");
    $('.my_resume_expertice').addClass("col-12");
    $('.my_resume_education').removeClass("col");
    $('.my_resume_education').css("margin-bottom", "2%");
    $('.my_resume_education').addClass("col-12");
    $('.my_resume_skills').removeClass("col");
    $('.my_resume_skills').css("margin-bottom", "2%");
    $('.my_resume_skills').addClass("col-12");
    //resume
    //Personal KPI
    $('.personal_indicators_col').removeClass("col");
    $('.personal_indicators_col').removeClass("col-6");
    $('.personal_indicators_col').addClass("col-12");
    $('.container_ico_kpi_personal').removeClass("col-5");
    $('.container_text_kpi_personal').removeClass("col-7");
    $('.container_ico_kpi_personal').addClass("col-6");
    $('.container_text_kpi_personal').addClass("col-6");
    $('.ico_kpi_personal').css("width", "100%");
    $('.ico_kpi_personal').css("height", "50%");
    $('.personal_indicators').css("padding", "20px 0");
    //Personal KPI
    //Services
    $('.my_services_col').removeClass("col-4");
    $('.my_services_col').addClass("col-12");
    $('.my_services_col').css("margin-top", "2%");
    $('.my_services_col').css("margin-bottom", "2%");
    //Services
    //PORTFOLIO
    $('.item').removeClass("col-4");
    $('.item').removeClass("col-6");
    $('.item').addClass("col-12");
    //PORTFOLIO
    //BLOG
    $('.card_blog_container_img').removeClass("col-4");
    $('.card_blog_container_text').removeClass("col-8");
    $('.card_blog_container_img').addClass("col-12");
    $('.card_blog_container_text').addClass("col-12");
    //BLOG
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
}

function _responsiveConfigMobileV(){

}

function _responsiveConfigTablet(){
    //Header
    $('.menu_navbar_desktop').css("display", "flex");
    $('.menu_navbar_mobile').css("display", "none");
    $('.header').css("height", "80vh");
    $('.navbar_text_content').css("margin-top", "10%");
    _hideShowAvatarPicController();
    //Header  
    //About section
    $('.my_services_col').removeClass("col-6");
    $('.about_section_col').removeClass("col-12");
    $('.about_section_row').addClass("row");
    $('.about_section_col').addClass("col");
    $('.about_section_col').css("margin-top", "none");
    $('.about_section_col').css("margin-bottom", "none");
    $('.about_skill_ico').css("width", "100%");
    $('.about_skill_ico').css("height", "100%");
    //End About Section
    //resume
    $('.my_resume_expertice').removeClass("col");
    $('.my_resume_expertice').css("margin-bottom", "2%");
    $('.my_resume_expertice').addClass("col-12");
    $('.my_resume_education').removeClass("col");
    $('.my_resume_education').css("margin-bottom", "2%");
    $('.my_resume_education').addClass("col-12");
    $('.my_resume_skills').removeClass("col");
    $('.my_resume_skills').css("margin-bottom", "2%");
    $('.my_resume_skills').addClass("col-12");
    //resume
    //Personal KPI
    $('.personal_indicators_col').removeClass("col");
    $('.personal_indicators_col').removeClass("col-12");
    $('.personal_indicators_col').addClass("col-6");
    $('.container_ico_kpi_personal').removeClass("col-5");
    $('.container_text_kpi_personal').removeClass("col-7");
    $('.container_ico_kpi_personal').addClass("col-6");
    $('.container_text_kpi_personal').addClass("col-6");
    $('.ico_kpi_personal').css("width", "70%");
    $('.ico_kpi_personal').css("height", "70%");
    $('.personal_indicators').css("padding", "40px 0");
    //Personal KPI
    //Services
    $('.my_services_col').removeClass("col-12");
    $('.my_services_col').removeClass("col-4");
    $('.my_services_col').addClass("col-6");
    $('.my_services_col').css("margin-top", "2%");
    $('.my_services_col').css("margin-bottom", "2%");
    //Services
    //PORTFOLIO
    $('.item').removeClass("col-12");
    $('.item').removeClass("col-4");
    $('.item').addClass("col-6");
    //PORTFOLIO
    //BLOG
    $('.card_blog_container_img').removeClass("col-4");
    $('.card_blog_container_text').removeClass("col-8");
    $('.card_blog_container_img').addClass("col-12");
    $('.card_blog_container_text').addClass("col-12");
    //BLOG
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

function _responsiveConfigDesktop(){
    //Header
    $('.menu_navbar_desktop').css("display", "flex");
    $('.menu_navbar_mobile').css("display", "none");
    $('.header').css("height", "80vh");
    $('.navbar_text_content').css("margin-top", "2%");
    _hideShowAvatarPicController();
    //Header
    //About section
    $('.about_section_col').removeClass("col-12");
    $('.about_section_row').addClass("row");
    $('.about_section_col').addClass("col");
    $('.about_section_col').css("margin-top", "none");
    $('.about_section_col').css("margin-bottom", "none");
    $('.about_skill_ico').css("width", "none");
    $('.about_skill_ico').css("height", "none");
    //End About Section
    //resume
    $('.my_resume_expertice').removeClass("col-12");
    $('.my_resume_expertice').addClass("col");
    $('.my_resume_expertice').css("margin-bottom", "none");
    $('.my_resume_education').removeClass("col-12");
    $('.my_resume_education').addClass("col");
    $('.my_resume_education').css("margin-bottom", "none");
    $('.my_resume_skills').removeClass("col-12");
    $('.my_resume_skills').addClass("col");
    $('.my_resume_skills').css("margin-bottom", "none");
    //resume
    //Personal KPI
    $('.personal_indicators_col').removeClass("col-6");
    $('.personal_indicators_col').removeClass("col-12");
    $('.personal_indicators_col').addClass("col");
    $('.container_ico_kpi_personal').addClass("col-5");
    $('.container_text_kpi_personal').addClass("col-7");
    $('.container_ico_kpi_personal').removeClass("col-6");
    $('.container_text_kpi_personal').removeClass("col-6");
    $('.ico_kpi_personal').css("width", "100%");
    $('.ico_kpi_personal').css("height", "100%");
    $('.personal_indicators').css("padding", "40px 0");
    //Personal KPI
    //Services
    $('.my_services_col').removeClass("col-12");
    $('.my_services_col').removeClass("col-6");
    $('.my_services_col').addClass("col-4");
    $('.my_services_col').css("margin-top", "none");
    $('.my_services_col').css("margin-bottom", "2%");
    //Services
    //PORTFOLIO
    $('.item').removeClass("col-12");
    $('.item').removeClass("col-6");
    $('.item').addClass("col-4");
    //PORTFOLIO
    //BLOG
    $('.card_blog_container_img').removeClass("col-12");
    $('.card_blog_container_text').removeClass("col-12");
    $('.card_blog_container_img').addClass("col-4");
    $('.card_blog_container_text').addClass("col-8");
    //BLOG
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

function hideOrShowPortFolioItems(){
    if(!$('#show_hide_portfolio-items').is(':checked')){
        _hidePortFolioItems();
    }else{
        _showPortFolioItems();
    }
}
function _hidePortFolioItems(){
    $('.portfolio-items').css("display", "none");
    $('.container_text_to_blink').css("display", "block");
}
function _showPortFolioItems(){
    $('.portfolio-items').css("display", "block");
    $('.container_text_to_blink').css("display", "none");
    $('.li_portfolio_show_all').click();
}


/**
 * When the page is open close all projects_portfolio
 * (The first time it´s so much information to page)
 * same if reload
*/
function _closeEYE(){
    if($('#show_hide_portfolio-items').is(':checked')){
        _hidePortFolioItems();
    }else{
        $('.container_eye').click();
        _hidePortFolioItems();
    }
}

/**
 * Reminds when the user enter a name in email from contact
 * @param {*} username 
 */
function _saveUserInCookie(username){
    localStorage.setItem('username', username);
}

/**
 * Enter a text and validates if not empty
 * @param {*} txt 
 */
function _valitatesString(txt){
    return txt.trim().length > 0;
}


/**
 * Send EMAIL
*/
function sendEmail(){
    var username = $('#usr_name_contact_me').val();
    if (_valitatesString(username)){
        _saveUserInCookie(username)
    }else{
        //
    }
    $('#usr_name_contact_me').val("");
    var useremail = $('#usr_email_contact_me').val();
    $('#usr_email_contact_me').val("");
    var usersms = $('#usr_text_contact_me').val();
    $('#usr_text_contact_me').val("");

    var subject = "Job Inquiry - FelipedelosH";
    var textEmail = "Dear Felipe Hernández,\n I'm: " + username + "\nI read you portfolio:\n\n" + usersms + "\n\n" + "My Contact Email:\n" + useremail;
    alert("The 1st email system it's in develop.\nSend Email to 2nd protocol.");
    openNewTab("mailto:doctorfhernandez@hotmail.com?subject="+subject+"&body="+textEmail);
}

/**
 * Enter a string to change a page
*/
function _swicthLanguagePage(){
    if((localStorage.getItem('language') === null) || (localStorage.getItem('language') === 'en')){
        localStorage.setItem('language', 'es');
    }else{
        localStorage.setItem('language', 'en');
    }
    _setLanguagePage();
}

function _setLanguagePage(){
    if((localStorage.getItem('language') === null) || (localStorage.getItem('language') === 'en')){
        $('.text_eng').css("display", "block");
        $('.text_esp').css("display", "none");
        localStorage.setItem('language', 'en');
    }else{
        $('.text_eng').css("display", "none");
        $('.text_esp').css("display", "block");
        localStorage.setItem('language', 'es');
    }
}

function _setThemePage(){
    //Erase temp if page refresh
    localStorage.setItem('display-mode', '');

}

function _changeVisualMode(){
    if(localStorage.getItem("keyboard-history") !== null){
        //Deafult mode
        if(localStorage.getItem("keyboard-history").includes('')){
            setDefaultSkin();
        }
        //Code HTML
        if(localStorage.getItem("keyboard-history").includes("HTML")){
            openLocalTab("HTML/index.html");
            //Destroy secret
            localStorage.setItem("keyboard-history", '');
        }

        //See Projects details
        if(localStorage.getItem("keyboard-history").includes("PROJECTS")){
            openLocalTab("HTML/projects.html");
            //Destroy secret
            localStorage.setItem("keyboard-history", '');
        }

        //Code of matrix
        if(localStorage.getItem("keyboard-history").includes("MATRIX")){
            localStorage.setItem('display-mode', 'matrix');
            activeMatrixSkin();
    
            //Destroy secret
            localStorage.setItem("keyboard-history", '');
        }
    }else{
        setDefaultSkin();
    }
}

function setDefaultSkin(){
    $(".btn_download_my_cv_from_about_matrix").css("display", "none");
}

function activeMatrixSkin(){
    if(localStorage.getItem("display-mode") === null){
        localStorage.setItem('display-mode', 'matrix');
    }
    $(".canvas_matrix_watterfall").css("display", "block");
    $('body').css("background-color", "black");
    $(".navbar_menu").css("background-color", "black");
    $(".card_visible").css("background-color", "black");
    $(".li_visible").css("background-color", "black");
    $(".text_eng").css("color", "green");
    $(".text_esp").css("color", "green");
    $(".text_visible").css("color", "green");
    $(".text_description_afe_02").css("color", "green");
    $(".about_skill_ico").css("color", "green");
    $(".ico-social-link").css("color", "green");
    $(".ico_kpi_personal").css("color", "green");
    $(".ico_my_services").css("color", "green");
    $(".btn_download_my_cv_from_about").css("display", "none");
    $(".btn_download_my_cv_from_about_matrix").css("display", "block");

    var canvas = document.getElementById( 'canvas' ),
	ctx = canvas.getContext( '2d' ),
    canvas2 = document.getElementById( 'canvas2' ),
    ctx2 = canvas2.getContext( '2d' ),
	// full screen dimensions
	cw = window.innerWidth,
	ch = window.innerHeight,
    charArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','ぁ','ぃ','お','く','っ','し','の','よ','ゟ','キ','ミ'],
    maxCharCount = 100,
    fallingCharArr = [],
    fontSize = 8,
    maxColums = cw/(fontSize);
    canvas.width = canvas2.width = cw;
    canvas.height = canvas2.height = ch;


    function randomInt( min, max ) {
    	return Math.floor(Math.random() * ( max - min ) + min);
    }

    function randomFloat( min, max ) {
    	return Math.random() * ( max - min ) + min;
    }

    function Point(x,y)
    {
      this.x = x;
      this.y = y;
    }

    Point.prototype.draw = function(ctx){

      this.value = charArr[randomInt(0,charArr.length-1)].toUpperCase();
      this.speed = randomFloat(1,5);


      ctx2.fillStyle = "rgba(255,255,255,0.8)";
      ctx2.font = fontSize+"px san-serif";
      ctx2.fillText(this.value,this.x,this.y);

        ctx.fillStyle = "#0F0";
        ctx.font = fontSize+"px san-serif";
        ctx.fillText(this.value,this.x,this.y);



        this.y += this.speed;
        if(this.y > ch)
        {
          this.y = randomFloat(-100,0);
          this.speed = randomFloat(2,5);
        }
    }

    for(var i = 0; i < maxColums ; i++) {
      fallingCharArr.push(new Point(i*fontSize,randomFloat(-500,0)));
    }


    var update = function()
    {

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,cw,ch);

    ctx2.clearRect(0,0,cw,ch);

      var i = fallingCharArr.length;

      while (i--) {
        fallingCharArr[i].draw(ctx);
        var v = fallingCharArr[i];
      }

      requestAnimationFrame(update);
    }

  update();
}

function _goToTop(){
    $("html, body").animate({ scrollTop: 0 }, 1);
}

_setLanguagePage();
_setThemePage();
_responsiveRefresh();
_hideShowBtnLanguageController();
_changeVisualMode()
_closeEYE();
_goToTop();
