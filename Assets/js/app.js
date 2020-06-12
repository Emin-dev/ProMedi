$(document).ready(function () {
  $("#owl-carousel").owlCarousel(
    {
      nav: true,
      navText: [`<i class="fas fa-chevron-double-left"></i>`, `<i class="fas fa-chevron-double-right"></i>`],
      dots: false,
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
  );

  $("#owl-carousel2").owlCarousel(
    {
      nav: true,
      navText: [`<i class="fas fa-chevron-double-left"></i>`, `<i class="fas fa-chevron-double-right"></i>`],
      dots: false,
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
  );
  $(".num").counterUp({delay:30,time:2000});
});
