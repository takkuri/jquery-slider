"use strict"
const SCROLL_SPEED = 500;
const SCROLL_LEFT = "+=640";
const SCROLL_RIGHT = "-=640";

//Functions for sliding
function nextSlide(slideNumber) {
    if (slideNumber < 5){
        $('.frame_picture').animate({
            left: SCROLL_RIGHT},SCROLL_SPEED);
            slideNumber += 1;
        }
    activeSlide(slideNumber);
    return slideNumber;
};

function prevSlide(slideNumber) {
    if (slideNumber > 1){
        $('.frame_picture').animate({
            left: SCROLL_LEFT},SCROLL_SPEED);
            slideNumber -=1;
        }
    activeSlide(slideNumber);
    return slideNumber;
}

function goToSlide($buttonNumber, slideNumber) {
    slideNumber = $buttonNumber;
    var position = (640*slideNumber*-1)+640;
    $('.frame_picture').animate({
        left: position},SCROLL_SPEED);
    activeSlide(slideNumber);
    return slideNumber;    
};

function showThumb(e,$buttonNumber){
    var mouseX = e.pageX + "px";
    var mouseY = e.pageY + "px";
    $('#thumbnail').css("left",mouseX);
    $('#thumbnail').css("top",mouseY);
    $('#thumbnail').html("<img src='images/thumbs/zelda"+$buttonNumber+"t.jpg'>");
    $('#thumbnail').css("visibility","visible");

};

function activeSlide(slideNumber) {
    $('.frame_nav_button').css("border","none");
    $('.frame_nav_button:eq('+(slideNumber-1)+')').css("border","1px solid orange");
}

$('document').ready(function () {
    
    var slideNumber = 1;
    var $buttonNumber;
    //Slide the pictures left and write upon appropriate button click
    $('#frame_slide_left').click(function () {
        slideNumber = prevSlide(slideNumber);
    });
    $('#frame_slide_right').click(function () {
        slideNumber = nextSlide(slideNumber);
    });
    $('.frame_nav_button').click(function () {
        $buttonNumber = $('.frame_nav_button').index(this)+1;
        slideNumber = goToSlide($buttonNumber,slideNumber);
    });
    $('.frame_nav_button').hover(function (e) {
        $buttonNumber = $('.frame_nav_button').index(this)+1;
        showThumb(e,$buttonNumber);
    })
    $('.frame_nav_button').mouseleave(function() {
        $('#thumbnail').css("visibility","hidden");
    })


    
    //Automatically scroll through
    var timer = setInterval(function() {
        slideNumber = nextSlide(slideNumber);
        },5000)
});
    
    
    
