let slideIndex=0;

function autoSlides () {
    setInterval(()=>{
        plusSlides(1);
    },2000);
}




// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    /*if (n >= slides.length) {slideIndex = 0}
    if (n < 1) {slideIndex = slides.length-1}*/
    n=n%slides.length;
    console.log(slides);
    console.log(n);
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
    autoSlides();
    showSlides(slideIndex);
}


window.onload = init;
