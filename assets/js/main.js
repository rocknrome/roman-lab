  $(document).ready(function(){
    $('#sidebar-btn').click(function(){
      $('body').toggleClass('visible');
    });
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