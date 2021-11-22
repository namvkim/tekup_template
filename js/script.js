// "use strict";

$(window).resize(function () {
  window.location.reload();
});

if (document.getElementById('menu__container')) {

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

  window.addEventListener('scroll', menuScroll);

  if (document.getElementById('homepage')) {
    document.getElementById('menu_homepage').style.backgroundColor = "#f8d000";
  } else if (document.getElementById('about')) {
    document.getElementById('menu_about').style.backgroundColor = "#f8d000";
  } else if (document.getElementById('project')) {
    document.getElementById('menu_project').style.backgroundColor = "#f8d000";
  } else if (document.getElementById('service')) {
    document.getElementById('menu_service').style.backgroundColor = "#f8d000";
  } else if (document.getElementById('contact')) {
    document.getElementById('menu_contact').style.backgroundColor = "#f8d000";
  };

}

if (document.getElementById('homepage')) {

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

  //carosel for perfect service
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
      dots[i].className = dots[i].className.replace("homepage__reviews__dot__active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " homepage__reviews__dot__active";
    setTimeout(showSlides, 2000);
  }

  // tabpane in homepage service
  function openCity(evt, cityName) {
    if (screen.width > 576) {
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
  }
  document.getElementById('defaultOpen').click();

  if (screen.width < 576) {
    document
      .getElementById("swiper-container")
      .classList.add("swiper-container");
    document.getElementById("gallery-top").classList.add("gallery-top");
    document
      .querySelector(".tab-content")
      .classList.replace("tab-content", "swiper-wrapper");
    var tabPane = document.querySelectorAll(".tab-pane");
    for (i = 0; i < tabPane.length; i++) {
      tabPane[i].classList.remove("fade");
      tabPane[i].classList.replace("tab-pane", "swiper-slide");
    }

    document.querySelector(".homepage___project__tablist__container").classList.replace("homepage___project__tablist__container", "gallery-thumbs");
    document.querySelector(".homepage___project__tablist").classList.remove("nav");
    document.querySelector(".homepage___project__tablist").classList.replace("homepage___project__tablist", "swiper-wrapper");
    var proTab = document.querySelectorAll(".homepage___project__tab");
    for (i = 0; i < proTab.length; i++) {
      proTab[i].classList.add("swiper-slide");
    }

    var galleryTop = new Swiper(".gallery-top", {
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      spaceBetween: 10,
      keyboardControl: true,
    });
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      centeredSlides: true,
      slidesPerView: "auto",
      touchRatio: 0.2,
      slideToClickedSlide: true,
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
  }
}

if (document.getElementById('homepage') || document.getElementById('about')) {

  $(document).ready(function () {
    $('.homepage__statistics__counter').each(function () {
      $(this)
        .prop('homepage__statistics__counter', 0)
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

}

if (document.getElementById('pro__details')) {
  $(function () {

    if ($('.pro__details__carousel__main').length > 0) {
      $(".pro__details__carousel__main").owlCarousel(
        {
          autoplay: true,
          autoplayhoverpause: true,
          autoplaytimeout: 100,
          items: 1,
          responsiveClass: true,
          nav: true,
          loop: true,
          animateOut: 'fadeOut',
          lazyLoad: true,
          margin: 30,
          responsive: {
            0: {
              items: 1,
              dots: false
            },
            576: {
              items: 3,
              dots: false
            }
          }
        }
      );
    }
  });
}