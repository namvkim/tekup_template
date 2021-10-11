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