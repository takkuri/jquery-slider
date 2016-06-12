"use strict"
const SCROLL_SPEED = 500;
const SCROLL_LEFT = "+=640";
const SCROLL_RIGHT = "-=640";

$('document').ready(function () {
    //Slide the pictures left and write upon appropriate button click
    $('#frame_slide_left').click(function () {
        $('.frame_picture').animate({
            left: SCROLL_LEFT},SCROLL_SPEED);
        });
      $('#frame_slide_right').click(function () {
        $('.frame_picture').animate({
            left: SCROLL_RIGHT},SCROLL_SPEED);
        });

});
    
    
    
