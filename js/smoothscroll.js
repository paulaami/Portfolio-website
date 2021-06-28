$(document).ready(function () {

 var offset = 100;
 var speed = 250;
 var duration = 500;
 $(window).scroll(function () {
  if ($(this).scrollTop() < offset) {
   $('.btn-top').fadeOut(duration);
  } else {
   $('.btn-top').fadeIn(duration);
  }
 });
 $('.btn-top').on('click', function () {
  $('html, body').animate({
   scrollTop: 0
  }, speed);
  return false;
 });

});