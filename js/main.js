/* callback function */
/*
$(function() {

  setTimeout(function() {
    $("#arrowDown").hide();
  }, 3000);

});




/*Scroll down when arrow up clicked BEGIN


/*
THIS SUPPOSE TO  FADE OUT AT SCROLLING
STILL WORKING AT IT --->>>*/



$(window).scroll(function() {
  $("#arrowDown").css("opacity", 1 - $(window).scrollTop() / 550);
});
/*Scroll to top when arrow up clicked END*/

$(document).ready(function() {
  $("body").on('click', '.top', function() {
    $("nav").toggleClass("mainMenu_show");
  });
});