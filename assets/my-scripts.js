$('.read-more').on("click", function () {
  $('.about p').toggleClass("read-more-text", 1000, "easeOutSine");
});


$(document).ready(function () {
  $('.gallery').slick({
    infinite: true,
    slidesToShow: 2,
    centerMode: true,
    arrows: false,
    responsive: [{
        breakpoint: 990,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          arrows: false,
          centerMode: true,
          slidesToShow: 2
        }
      }
    ]
  });
});