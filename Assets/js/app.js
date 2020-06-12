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


  $(".num").counterUp({ delay: 30, time: 2000 });






  $("#owl-carousel2").owlCarousel({
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



  setTimeout(
    function () {
      console.log("ajax");

      $.ajax({
        type: "GET",
        url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
        success: function (response) {
          $.each(response, function (i, e) {
            let box = $("<div/>", {
              class: 'owl-item',
              html: `
             <div class="imgbox">
                 <img src="" alt="">
             </div>
             <div class="txtbox">
                 <h1></h1>
                 <h4></h4>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut
                     labore</p>
             </div>`
            });

            $("#owl-stage").append(box);
            $("#owl-carousel2").append(box);

          });
        },
        error: function (response) {
          console.log(response);

        }
      });

    }
    , 5000)
});
