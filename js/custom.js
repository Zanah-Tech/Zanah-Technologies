$(document).ready(function () {
 // Scroll effect on Nav
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main-menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main-menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  // Porfolio isotope and filter

  $('.wrap').isotope();

  $('a.filter').click(function (e) {
    e.preventDefault();
    var to_filter = $(this).attr('rel');
    if (to_filter == 'all') {
      $('.wrap').isotope({ filter: '.box' });
    } else {
      $('.wrap').isotope({ filter: '.' + to_filter });
    }

  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });


  // Initiate the wowjs animation library
  new WOW().init();



});






