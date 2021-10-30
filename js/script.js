// carosel for logo in banner (nam)
let items = document.querySelectorAll(
  ".hompage__banner__logo .carousel .carousel-item"
);

items.forEach((el) => {
  const minPerSlide = 5;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

//start Hoa write carosel for perfect service
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("homepage__reviews__mySlides");
  var dots = document.getElementsByClassName("homepage__reviews__dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("activeperfect", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeperfect";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//end Hoa write

// services
$(document).ready(function () {
  $('.counter').each(function () {
    $(this)
      .prop('Counter', 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(
    'homepage__services__tabcontent'
  );
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();

//menu scroll

function menuScroll() {
  if (window.scrollY > 0) {
    document.getElementById('menu__container').style.backgroundColor = "white";
    document.getElementById('menu__container').style.boxShadow = "0 0 9px rgb(0 0 0 / 15%)";
  } else {
    document.getElementById('menu__container').style.backgroundColor = "";
    document.getElementById('menu__container').style.boxShadow = "";

  }
}

window.addEventListener('scroll', menuScroll)

//Detail project
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
      margin: 15,
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
  

