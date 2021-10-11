// carosel for logo in banner
let items = document.querySelectorAll(
  '.hompage_banner_logo .carousel .carousel-item'
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
//
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(
    'homepage__services__tabcontent'
  );
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('homepage__services__tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(cityName).style.display = 'block';
  evt.currentTarget.className += ' active';
}
document.getElementById('defaultOpen').click();
