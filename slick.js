$('.portfolio-block').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: true,
  prevArrow: $(".portfolio-arrows-left"),
  nextArrow: $(".portfolio-arrows-right"),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    //{
    //  breakpoint: 600,
    //  settings: {
    //    slidesToShow: 2,
    //    slidesToScroll: 1
    //  }
    //},
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

