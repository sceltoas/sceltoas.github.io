(function ($) {
  $(function () {

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
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

function mail(name, number, success, error) {
  $.ajax({
    url: 'https://formspree.io/erik@scelto.no',
    method: 'POST',
    data: {
      name: name,
      number: number,
      _subject: 'Kontakt meg (fra scelto.no)'
    },
    dataType: "json",
    success: success,
    error: error
  });
  return true;
}

function contactformValidates() {
  var name = $('#input-name').text();
  var number = $('#input-number').text();

  return name && name !== 'oppgi navn' && number && number !== 'oppgi mobilnummer';
}

function submitContactForm() {
  $('#contact-form-validation-error').hide();
  $('#contact-form-submit-error').hide();

  if (contactformValidates()) {
    $('#contact-form-submit-loading').fadeIn();
    mail($('#input-name').text(), $('#input-number').text(), function () {
      $('#modal1').openModal();
      $('#contact-form-submit-loading').fadeOut();
      $('#input-name').text('oppgi navn');
      $('#input-number').text('oppgi mobilnummer');

    }, function () {
      $('#contact-form-submit-loading').fadeOut();
      $('#contact-form-submit-error').fadeIn();
    });

  } else {
    $('#contact-form-validation-error').fadeIn();
  }
}