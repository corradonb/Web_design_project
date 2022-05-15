let slideIndex=0;
const myInterval=setInterval(autoSlides, 5000);

function autoSlides () {
    plusSlides(1);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function stopSlideShow() {
    clearInterval(myInterval);
    let slides = document.getElementsByClassName("slides");
    currentSlide(getRandomInt(4));
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    n=n%slides.length;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[n].style.display = "block";
    dots[n].className += " active";
}

function init() {
    showSlides(slideIndex);
    setTimeout(stopSlideShow, 600000);
}

window.onload = init;
