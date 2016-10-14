$(document).ready(function(){
     $('.slider').slick({
        dots: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<img class="prevArrow" src="images/prev.png" alt="" />',
        nextArrow: '<img class="nextArrow" src="images/next.png" alt="" />',
          responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: false,
        autoplay: true,
        infinity: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        autoplay: false,
        infinity: false,
        arrows: false,
      }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
     });
   });
