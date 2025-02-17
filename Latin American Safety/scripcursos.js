
// Función para enviar datos del formulario a WhatsApp
function enviarWhatsApp(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener el formulario desde el botón presionado
    let formulario = event.target.closest("form");

    // Obtener valores de los campos
    let nombre = formulario.querySelector("input[id='nombre']").value.trim();
    let apellido = formulario.querySelector("input[id='apellido']").value.trim();
    let email = formulario.querySelector("input[id='gmail']").value.trim();
    let telefono = formulario.querySelector("input[id='telefono']").value.trim() || "No proporcionado";
    let terminos = formulario.querySelector("input[id='terminos']").checked;
    let curso = formulario.closest(".ForCursos").querySelector("h2").innerText; 

    // Validar que los campos obligatorios estén llenos
    if (nombre === "" || apellido === "" || email === "" || !terminos) {
        alert("Por favor, completa todos los campos obligatorios y acepta los términos.");
        return;
    }

    // Número de WhatsApp de la empresa
    let numeroWhatsApp = "+51997750342";  

    // Crear el mensaje
    let mensaje = `Hola, quiero inscribirme en el curso: *${curso}* %0A%0A` +
                  `👤 *Nombre:* ${nombre} ${apellido} %0A` +
                  `📧 *Email:* ${email} %0A` +
                  `📞 *Teléfono:* ${telefono} %0A%0A` +
                  `✅ He aceptado los términos y condiciones. %0A%0A` +
                  `¡Gracias!`;

    // Generar el enlace de WhatsApp
    let url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
}

// Asignar el evento de envío a todos los formularios
document.addEventListener("DOMContentLoaded", function() {
    let botones = document.querySelectorAll("form button[type='submit']");
    botones.forEach(boton => {
        boton.addEventListener("click", enviarWhatsApp);
    });
});


function abrirFormulario(id) {
    let formulario = document.getElementById(id);
    if (formulario) {
        formulario.style.display = "block";
    }
}

function cerrarFormulario(id) {
    let formulario = document.getElementById(id);
    if (formulario) {
        formulario.style.display = "none";
    }
}
