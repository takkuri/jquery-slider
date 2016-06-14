"use strict"
const SCROLL_SPEED = 500;
const SCROLL_LEFT = "+=640";
const SCROLL_RIGHT = "-=640";
const REEL_WIDTH = "+=3200px";

//Functions for sliding
function nextSlide(slideNumber) {
    //Wrapping
    if (slideNumber >= 6) {
        $('.frame_picture').css('left','+=3200');
        slideNumber = 1; 
        activeSlide(1);
    };
    
    if (slideNumber < 6){
        $('.frame_picture').animate({
        left: SCROLL_RIGHT},SCROLL_SPEED);
        slideNumber += 1;
        activeSlide(slideNumber);
    };
    console.log(slideNumber);
    return slideNumber;
};

function prevSlide(slideNumber) {
    //Wrapping
    if (slideNumber === 0) {
        $('.frame_picture').css('left','-=3200')
        slideNumber = 5; 
        activeSlide(5);    
    };
    
    if (slideNumber > -1){
        
        $('.frame_picture').animate({
            left: SCROLL_LEFT},SCROLL_SPEED);
            slideNumber -=1;
        };
    activeSlide(slideNumber);
    return slideNumber;
}

function goToSlide($buttonNumber, slideNumber) {
    slideNumber = $buttonNumber;
    var position = (640*slideNumber*-1);
    $('.frame_picture').animate({
        left: position},SCROLL_SPEED);
    activeSlide(slideNumber);
    return slideNumber;    
};
//Thumbnail functionality
function showThumb(e,$buttonNumber){
    var mouseX = e.pageX + "px";
    var mouseY = e.pageY + "px";
    $('#thumbnail').css("left",mouseX);
    $('#thumbnail').css("top",mouseY);
    $('#thumbnail').html("<img src='images/thumbs/zelda"+$buttonNumber+"t.jpg'>");
    $('#thumbnail').css("visibility","visible");
};

function activeSlide(slideNumber) {
    if (slideNumber === 6){
        slideNumber = 1;
    };
    $('.frame_nav_button').css("border","none");
    $('.frame_nav_button:eq('+(slideNumber-1)+')').css("border","1px solid orange");
};

function createEndFrames (slideNumber) {
    
    var $finalFrame = "<div class='frame_picture'>"+$('.frame_picture:eq(0)').html()+"</div>";
    var $firstFrame =  "<div class='frame_picture'>"+$('.frame_picture:eq(4)').html()+"</div>";
    
    $('#frame_photo_reel').append($finalFrame);
    $('#frame_photo_reel').prepend($firstFrame);
    $('.frame_picture').css('left','-=640');
    return slideNumber -=1;    
};



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
    });
    $('.frame_nav_button').mouseleave(function() {
        $('#thumbnail').css("visibility","hidden");
    });
    //Initialize
    createEndFrames(slideNumber);
    activeSlide(slideNumber);
    
    //Automatically scroll through
  k var timer = setInterval(function() {
        slideNumber = nextSlide(slideNumber);
    },5000);
});
    
    
    
