let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}

function nextSlide() {
    let slides = document.getElementsByClassName("carousel-slide");
    slides[slideIndex-1].style.display = "none";
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex-1].style.display = "block";
}

function prevSlide() {
    let slides = document.getElementsByClassName("carousel-slide");
    slides[slideIndex-1].style.display = "none";
    slideIndex--;
    if (slideIndex < 1) { slideIndex = slides.length }
    slides[slideIndex-1].style.display = "block";
}
