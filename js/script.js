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
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("activeperfect", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activeperfect";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//end Hoa write