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

  });