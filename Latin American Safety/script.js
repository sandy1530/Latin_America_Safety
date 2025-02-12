/*Hola mi Nombre es Diego*/


document.addEventListener("DOMContentLoaded", function() {
    let boton = document.querySelector(".btn-evaluacion");
    let formulario = document.getElementById("form-container");
    let mensaje = document.querySelector(".Mas-informacion");

    if (boton && formulario && mensaje) {
        boton.addEventListener("click", function(event) {
            event.preventDefault(); // Evita recargar la página

            // Desvanecer el mensaje
            mensaje.classList.add("hidden"); // Aplica el cambio de opacidad

            // Esperar a que termine la transición del mensaje antes de mostrar el formulario
            setTimeout(() => {
                mensaje.style.display = "none";  // Oculta el mensaje completamente
                formulario.style.display = "block"; // Hace visible el formulario
                // Agregar clase para la transición de opacidad del formulario
                setTimeout(() => {
                    formulario.classList.add("visible"); // Aplica la opacidad al formulario
                }, 50); // Un pequeño retraso para asegurarse de que se ha mostrado el formulario
            }, 500); // Tiempo igual al de la transición de opacidad
        });
    } else {
        console.error("No se encontró el botón, el formulario o el mensaje.");
    }
});


function cerrarFormulario() {
    let formulario = document.getElementById("form-container");
    let mensaje = document.querySelector(".Mas-informacion");

    // Desvanecer el formulario
    formulario.classList.remove("visible"); // Esto quitará la visibilidad del formulario con transición

    // Esperar a que termine la transición antes de cambiar la visibilidad del formulario
    setTimeout(() => {
        formulario.style.display = "none"; // Ocultar el formulario completamente
        // Mostrar nuevamente el mensaje de "Mas-informacion"
        mensaje.style.display = "block";
        mensaje.classList.remove("hidden"); // Volver a mostrar el mensaje con suavidad
    }, 500); // Tiempo igual al de la transición
}


function desplazarASeccion(id) {
    let seccion = document.getElementById(id);
    if (seccion) {
        window.scrollTo({
            top: seccion.offsetTop - 140,
            behavior: "smooth"
        });
    }
}
