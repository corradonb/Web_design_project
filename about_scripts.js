function autoSlides () {
    let slides = document.getElementsByClassName("slides");
    for(i=0;i<slides.length;i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display = "block";
    setTimeout(autoSlides,5000);
}

let slideIndex=0;
function init() {
    autoSlides();
}

window.onload = init;
