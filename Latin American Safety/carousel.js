document.addEventListener("DOMContentLoaded", function () {
    // ========================= CARRUSEL PERSONALIZADO =========================
    const carousel = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".slide");

    if (carousel && slides.length) {
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
        carousel.addEventListener("mouseleave", () => {
            autoSlide = setInterval(nextSlide, intervalTime);
        });

        // === ARRASTRAR CON EL MOUSE Y TOCAR ===
        let isDragging = false;
        let startX = 0;
        let diffX = 0;

        function handleDragStart(e) {
            isDragging = true;
            startX = e.clientX || e.touches[0].clientX;
            carousel.style.transition = "none";
        }

        function handleDragMove(e) {
            if (!isDragging) return;
            let moveX = e.clientX || e.touches[0].clientX;
            diffX = startX - moveX;
            requestAnimationFrame(() => {
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

        // Eventos para mouse y touch
        carousel.addEventListener("mousedown", handleDragStart);
        document.addEventListener("mousemove", handleDragMove);
        document.addEventListener("mouseup", handleDragEnd);

        carousel.addEventListener("touchstart", handleDragStart);
        carousel.addEventListener("touchmove", handleDragMove);
        carousel.addEventListener("touchend", handleDragEnd);
    }

    // ========================= CARRUSEL SWIPER =========================
    if (typeof Swiper !== "undefined") {
        new Swiper(".mySwiper", {
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
    } else {
        console.error("Swiper no está definido. Asegúrate de incluir la librería.");
    }

    // ========================= SCROLL EN CARRUSEL =========================
    const carrusel = document.getElementById("carrusel");

    if (carrusel) {
        carrusel.addEventListener("wheel", (event) => {
            if (!event.target.closest("#carrusel")) return;
            event.preventDefault();
            const scrollAmount = 300;
            carrusel.scrollLeft += event.deltaY > 0 ? scrollAmount : -scrollAmount;
        });
    }

    // ========================= ENVÍO DE MENSAJE A WHATSAPP =========================
    window.enviarWhatsApp = function () {
        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefono = document.getElementById("telefono").value.trim() || "No proporcionado";
        let consulta = document.getElementById("consulta").value.trim();

        if (nombre === "" || email === "" || consulta === "") {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        let numeroWhatsApp = "51922201430";

        let mensaje = `Hola, quiero hacer una consulta: %0A%0A` +
                      `*Nombre:* ${nombre} %0A` +
                      `*Email:* ${email} %0A` +
                      `*Teléfono:* ${telefono} %0A` +
                      `*Consulta:* ${consulta} %0A%0A` +
                      `¡Gracias!`;

        let url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
        window.open(url, "_blank");
    };
});
