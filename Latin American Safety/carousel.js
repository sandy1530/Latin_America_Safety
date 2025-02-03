document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
  
    // Función para mover el carrusel al siguiente slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length; // Avanza al siguiente slide
      const offset = -currentIndex * 100; // Calcula el desplazamiento
      carousel.style.transform = `translateX(${offset}%)`; // Aplica el desplazamiento
    }
  
    // Iniciar el carrusel automático
    let interval = setInterval(nextSlide, 2000); // Cambia de slide cada 5 segundos
  
    // Opcional: Detener el carrusel cuando el usuario interactúa con él
    carousel.addEventListener("mouseenter", () => {
      clearInterval(interval); // Detiene el carrusel
    });
  
    carousel.addEventListener("mouseleave", () => {
      interval = setInterval(nextSlide, 2000); // Reanuda el carrusel
    });
  });
 
