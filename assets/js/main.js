$(document).ready(function() { //This ensures that the code inside the function is executed when the DOM is fully loaded.
  $('#sidebar-btn').click(function() { //When the element with the ID `sidebar-btn` is clicked, the function inside is executed. In this case, it toggles the `visible` class on the `body` element, which controls the visibility of a sidebar.
    $('body').toggleClass('visible');
  });

  // Close mobile menu when a menu item is clicked
  $('.mobilelist ul li a').click(function() { //// When a link (`<a>`) element within a list item (`<li>`) inside an element with the class `mobilelist` is clicked, the function inside is executed. It removes the `visible` class from the `body` 
    //element, which closes a mobile menu when a menu item is clicked.
    $('body').removeClass('visible');
  });

  AOS.init(); //Initializes the AOS (Animate On Scroll) library. AOS is a library used to animate elements as they scroll into view on a web page.

  let btn = $('#backtop'); //Selects the element with the ID `backtop` and assigns it to the variable `btn`.

  $(window).scroll(function() { //Attaches a scroll event listener to the window object. When the user scrolls, the function inside is executed. It checks if the vertical scroll position of the window is greater than 300 pixels. 
    //If so, it adds the `show` class to the element stored in the `btn` variable. Otherwise, it removes the `show` class. This code controls the visibility of a "back to top" button that appears when the user scrolls down the page.
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
});
