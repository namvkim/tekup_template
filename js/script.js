if (document.getElementById('homepage')) {
  // auto type letter in banner 
  let typeEffect = (arr) => {
    // let i = 0;
    // let count = 0;
    // let arrSize = arr.length;
    // setInterval(function () {
    //   // for (i = 0; i < arr[count].length; i++) {

    //   // }
    //   if (i < arr[count].length) {
    //     document.getElementById("homepage__banner__title").append(arr[count].charAt(i));
    //     i++;
    //   } else {
    //     count++;
    //     if (count === arrSize) count = 0;
    //     i = 0;
    //     // setTimeout(function () { alert("After 5 seconds!"); }, 5000);
    //     document.getElementById("homepage__banner__title").innerHTML = "";
    //   }
    // }, 150);


  };

  const arr = [
    "Dẫn đầu xu hướng, nắm bắt tương lai",
    "Khởi dậy đam mê",
    "Kết nối mọi người",
    "Đà Nẵng – Thành phố không bao giờ ngủ",
    "Hãy là tất cả những gì bạn muốn",
  ];

  typeEffect(arr);

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
      dots[i].className = dots[i].className.replace("activeperfect", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeperfect";
    setTimeout(showSlides, 2000);
  }

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

}

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
