document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-container");
  const slides = document.querySelectorAll(".slide");

  if (!carousel || !slides.length) {
      console.error("No se encontró el carrusel o las diapositivas.");
      return;
  }

  let currentIndex = 0;
  const totalSlides = slides.length;
  const intervalTime = 3000; // 3 segundos
  let autoSlide = setInterval(nextSlide, intervalTime);

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlidePosition();
  }

  function updateSlidePosition() {
      carousel.style.transition = "transform 0.5s ease-in-out";
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Detener auto-slide cuando el usuario interactúa
  carousel.addEventListener("mouseenter", () => clearInterval(autoSlide));
  carousel.addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, intervalTime));

  // === FUNCIÓN PARA ARRASTRAR CON EL MOUSE Y TOCAR ===
  let isDragging = false;
  let startX, moveX, diffX;

  function handleDragStart(e) {
      isDragging = true;
      startX = e.clientX || e.touches[0].clientX;
      carousel.style.transition = "none";
  }

  function handleDragMove(e) {
      if (!isDragging) return;
      requestAnimationFrame(() => {
          moveX = e.clientX || e.touches[0].clientX;
          diffX = startX - moveX;
          carousel.style.transform = `translateX(-${(currentIndex * 100) + (diffX / window.innerWidth) * 100}%)`;
      });
  }

  function handleDragEnd() {
      if (!isDragging) return;
      isDragging = false;
      carousel.style.transition = "transform 0.5s ease-in-out";

      if (Math.abs(diffX) > 50) {
          if (diffX > 0) {
              currentIndex = (currentIndex + 1) % totalSlides;
          } else {
              currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
          }
      }

      updateSlidePosition();
  }

  // Eventos para mouse
  carousel.addEventListener("mousedown", handleDragStart);
  document.addEventListener("mousemove", handleDragMove);
  document.addEventListener("mouseup", handleDragEnd);

  // Eventos para touch
  carousel.addEventListener("touchstart", handleDragStart);
  carousel.addEventListener("touchmove", handleDragMove);
  carousel.addEventListener("touchend", handleDragEnd);
});
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 5,
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
  });
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
    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim() || "No proporcionado";
    let consulta = document.getElementById("consulta").value.trim();

    // Validar campos obligatorios
    if (nombre === "" || email === "" || consulta === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Número de WhatsApp de la empresa
    let numeroWhatsApp = "933611593";  

    // Crear el mensaje
    let mensaje = `Hola, quiero hacer una consulta: %0A%0A` +
                  `*Nombre:* ${nombre} %0A` +
                  `*Email:* ${email} %0A` +
                  `*Teléfono:* ${telefono} %0A` +
                  `*Consulta:* ${consulta} %0A%0A` +
                  `¡Gracias!`;

    // Generar el enlace de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
}



