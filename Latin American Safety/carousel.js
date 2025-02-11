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

document.addEventListener("DOMContentLoaded", function () {
  const carrusel = document.getElementById("carrusel");

  carrusel.addEventListener("wheel", (event) => {
      event.preventDefault();
      const scrollAmount = 300; // Controla cuánto se mueve con el scroll
      carrusel.scrollLeft += event.deltaY > 0 ? scrollAmount : -scrollAmount;
  });
});
//Enviar mensaje de WhatsApp
function enviarWhatsApp() {
  // Obtener valores del formulario
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value || "No proporcionado";
  let consulta = document.getElementById("consulta").value;

  // Número de WhatsApp de la empresa 
  let numeroWhatsApp = "933611593";  

  // Crear el mensaje
  let mensaje = `Hola, quiero hacer una consulta: %0A%0A` +
                `👤 *Nombre:* ${nombre} %0A` +
                `📧 *Email:* ${email} %0A` +
                `📞 *Teléfono:* ${telefono} %0A` +
                `💬 *Consulta:* ${consulta} %0A%0A` +
                `¡Gracias!`;

  // Generar el enlace de WhatsApp
  let url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

  // Abrir WhatsApp
  window.open(url, "_blank");
}


