$(function() {

	if ( $('.other_project_carousel').length > 0 ) {
$(".other_project_carousel").owlCarousel(
    {
      autoplay: true,
      autoplayhoverpause: true,
      autoplaytimeout: 100,
      items: 3,
      nav: true,
      loop: true,
      animateOut: 'fadeOut',
      lazyLoad: true,
      margin: 5,
      padding: 5,
      stagePadding: 5,
      responsive:{
        0:{
          items: 1,
          dots: false
        },
        485: {
          items: 1,
          dots: false
        },
        728:{
          items: 3,
          dots: false
        },
        960:{
          items: 3,
          dots: false
        },
        1200: {
          items: 3,
          dots: false
        }
      }
    }
  );
    }
});
  
