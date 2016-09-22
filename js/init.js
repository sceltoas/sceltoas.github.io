(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(document).ready(function () {
  $("#mobile-menu-open").click(function () {
    console.log("open");
    $(".mobile-menu-wrapper").slideDown(200);
  });
  $("#mobile-menu-close").click(function () {
    console.log("close");
    $(".mobile-menu-wrapper").slideUp(200);
  });
  $(".mobile-menu-wrapper").hide();
});