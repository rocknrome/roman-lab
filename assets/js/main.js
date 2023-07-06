$(document).ready(function() {
  $('#sidebar-btn').click(function() {
    $('body').toggleClass('visible');
  });

  // Close mobile menu when a menu item is clicked
  $('.mobilelist ul li a').click(function() {
    $('body').removeClass('visible');
  });

  AOS.init();

  var btn = $('#backtop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
});
