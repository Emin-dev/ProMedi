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




  $.ajax({
    type: "GET",
    url: "http://kamranaeff1994-002-site3.ctempurl.com/api/Doctors",
    success: function (response) {
      $.each(response, function (i, e) {
        console.log(e);

        let box = $("<div/>", {
          class: 'box',
          html: `
         <div class="imgbox">
             <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/d${e.id}.jpg" alt="">
         </div>
         <div class="txtbox">
             <h1>${e.name}</h1>
             <h4>${e.profession}</h4>
             <p>${e.description}</p>
         </div>`
        });


        $("#owl-carousel2").append(box);

      });
    },
    error: function (response) {
      console.log(response);

    }
  });






  setTimeout(
    function () {
      console.log("corusel");

      $("#owl-carousel2").owlCarousel({
        nav: true,
        navText: [`<i class="far fa-long-arrow-left"></i>`, `<i class="fas fa-long-arrow-right"></i>`],
        dots: false,
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
      }
      );
    }
    , 500)
});
