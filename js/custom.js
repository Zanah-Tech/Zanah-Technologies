$(document).ready(function () {

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








