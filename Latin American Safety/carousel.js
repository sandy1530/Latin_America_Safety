  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 3000; // 4 segundos
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides; // Avanza cíclicamente
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    let autoSlide = setInterval(nextSlide, intervalTime);
  
    // Detener auto-slide cuando el usuario interactúa
    carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
    carousel.addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, intervalTime));
  });
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Número de cursos visibles
    spaceBetween: 5, // Espacio entre cursos
    loop: true, // Hacer que sea infinito
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
