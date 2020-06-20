$(document).ready(function () {


  $(function () {
    console.log("geldi");
    $("#datepicker").datepicker();
    console.log("geldi");
  });



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
        console.log(e.id);

        let box = $("<div/>", {
          class: 'box',
          html: `
         <div class="imgbox">
             <img src="http://kamranaeff1994-002-site3.ctempurl.com/images/${e.image}" alt="">
             <div class="hover-social">
                                <div class="d-table">
                                    <div class="d-tablecell">
                                        <ul>
                                            <li> 
                                                <a href="#">
                                                <i class="fab fa-linkedin"></i>
                                                </a>
                                            </li>
                                            <li> 
                                                <a href="#">
                                                <i class="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li> 
                                                <a href="#">
                                                <i class="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
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






  setTimeout(function () {
    console.log("corusel");

    $("#owl-carousel2").owlCarousel({
      nav: true,
      navText: [`<i class="far fa-long-arrow-left"></i>`, `<i class="fas fa-long-arrow-right"></i>`],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3
        }
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
    );
  }
    , 3000)


 

  // $("#datepicker").click(function (e) {
  //   e.preventDefault();
  //   $("#datepicker").datepicker();
  //   console.log("geldi");

  // });



  $("#owl-carousel3").owlCarousel(
    {
      nav: true,
      center: true,
      navText: [`<i class="far fa-long-arrow-left"></i>`, `<i class="fas fa-long-arrow-right"></i>`],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3
        }
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
  );





  $("#owl-carousel4").owlCarousel(
    {
      nav: true,
      center: true,
      navText: [`<i class="far fa-long-arrow-left"></i>`, `<i class="fas fa-long-arrow-right"></i>`],
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3
        }
      },
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
    }
  );







  $('body').append('<div id="toTop"><i class="fas fa-caret-up"></i></div>');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });
  $('#toTop').on('click', function () {
    $("#iframevideo").addClass("d-none");
    $("iframe").addClass("d-none");
    $('iframe').attr('src', 'a');
    $('body').removeClass('stop-scrolling')
    $("html, body").animate({ scrollTop: 0 }, 50);
    return false;
  });




  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('#menu').addClass("sticky");
    }
    else {
      $('#menu').removeClass("sticky");
    }
  });

  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 150) {
      $('#menu2').addClass("sticky2");
    }
    else {
      $('#menu2').removeClass("sticky2");
    }
  });



  $("#iconVideo").click(function(){
    $('iframe').attr('src', 'https://www.youtube.com/embed/LFBxRxwY4Qw');
   $("#iframevideo").removeClass("d-none");
   $("iframe").removeClass("d-none");
   $('body').addClass('stop-scrolling')
  });

  $("#iframevideo").click(function(){
    $("#iframevideo").addClass("d-none");
    $("iframe").addClass("d-none");
    $('iframe').attr('src', 'a');
    $('body').removeClass('stop-scrolling')
   });




  $(".burgerMenu").click(function (e) { 
    e.preventDefault();
    if($( ".header-sticky" ).hasClass( "off" )){
      $(".header-sticky").removeClass("off");
    }
    else{
      $(".header-sticky").addClass("off");
    }
  });


  $("#dItem").click(function (e) { 
    e.preventDefault();
    if($( "#dMenu" ).hasClass( "off" )){
      $("#dMenu").removeClass("off");
    }
    else{
      $("#dMenu").addClass("off");
    }
  });

  
  $("#pItem").click(function (e) { 
    e.preventDefault();
    if($( "#pMenu" ).hasClass( "off" )){
      $("#pMenu").removeClass("off");
    }
    else{
      $("#pMenu").addClass("off");
    }
  });




 



  $(function () { $("#footer").load("footer.html") });


});


$(window).on('load', function(){

  setTimeout(function(){$(".preloader").addClass("d-none");}, 1000);
 
});

