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
    return slideNumber;
};

function prevSlide(slideNumber) {
    if (slideNumber > 1){
        $('.frame_picture').animate({
            left: SCROLL_LEFT},SCROLL_SPEED);
            slideNumber -=1;
        }
    return slideNumber;
}

function goToSlide($buttonNumber, slideNumber) {
    slideNumber = $buttonNumber;
    var position = (640*slideNumber*-1)+640;
    $('.frame_picture').animate({
        left: position},SCROLL_SPEED);
    return slideNumber;    
}

$('document').ready(function () {
    
    var slideNumber = 1;
    
    //Slide the pictures left and write upon appropriate button click
    $('#frame_slide_left').click(function () {
        slideNumber = prevSlide(slideNumber);
    });
    $('#frame_slide_right').click(function () {
        slideNumber = nextSlide(slideNumber);
        console.log($('.frame_picture').css("left"));
    });
    $('.frame_nav_button').click(function () {
        var $buttonNumber = $('.frame_nav_button').index(this)+1;
        slideNumber = goToSlide($buttonNumber,slideNumber);
    })


    
    //Automatically scroll through
    var timer = setInterval(function() {
        slideNumber = nextSlide(slideNumber)},50000)
});
    
    
    
