$(function () {

  var mixer = mixitup('.directions__list');

  $('.directions__filter-btn').on('click', function () {
    $('.directions__filter-btn').removeClass('directions__filter-btn--active');
    $(this).addClass('directions__filter-btn--active');
  });

  $('.team__slider').slick({
    slidesToShow: 4,
    arrows: false,
    draggable: false,
    appendArrows: $('.team__slider-arrows'),
    waitForAnimate: false
  })

  $('.team__slider-prev').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
  })

  $('.team__slider-next').on('click', function(e){
    e.preventDefault()
    $('.team__slider').slick('slickNext')
  });

  /*=======================================SLIDER TESTIMONIALS============================================================*/


  $('.testimonials__slider').slick({
    arrows: false,
    draggable: false,
    dots: true,
    appendDots: $('.testimonials__dots'),
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          draggable: true
        }
      }
    
    ]
  })

  $('.testimonials__prev').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickPrev')
  })

  $('.testimonials__next').on('click', function(e){
    e.preventDefault()
    $('.testimonials__slider').slick('slickNext')
  });

/*=======================================ACCORDEON============================================================*/


document.querySelectorAll('.acc__link').forEach((item) =>
item.addEventListener('click', () => {
  const parent = item.parentNode;

  parent.classList.toggle('acc__link--active');
})
);

  });