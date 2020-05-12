$(function () {
  var num = $('.num span').text();
  var w = num/100;
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('.activity').offset().top ) {
      $('.progress-bar').css('width', w+'%');
    } 
  })  
})