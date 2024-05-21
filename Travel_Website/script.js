let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-btn-container');
let formBtn=document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-container');
let formClose=document.querySelector('#form-close');
let videoBtn=document.querySelectorAll('.vid-btn');
// window.onscroll =()=>{
//     searchBtn.classList.remove('fa-times');
//     searchBar.classList.remove('active');
// }



// searchBtn.addEventListener('click', ()=>{
//     searchBtn.classList.toggle('fa-times');
//     searchBar.classList.add('active');
// });

document.addEventListener('DOMContentLoaded', function() {
    // Show the preloader for 4 seconds
    setTimeout(function() {
        // Hide the preloader
        document.getElementById('preloader').style.display = 'none';
        // Show the home section
        document.getElementById('home-section').style.display = 'block';
    }, 4000); // 4000 milliseconds = 4 seconds
});



formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});


formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});


videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');

        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src=src;        
    });

});





let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        slide.classList.toggle('active', index === currentSlide);
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

updateCarousel();
