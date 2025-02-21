document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 


    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value || "Sin asunto";
    let telefono = document.getElementById("telefono").value || "No proporcionado";
    let direccion = document.getElementById("direccion").value || "No proporcionado";
    let mensaje = document.getElementById("mensaje").value;

    let textoMensaje = `Hola, me llamo ${nombre} ${apellido}.%0A
    📧 Email: ${email}%0A
    📞 Teléfono: ${telefono}%0A
    📍 Dirección: ${direccion}%0A
    📝 Asunto: ${asunto}%0A
    ✉️ Mensaje: ${mensaje}`;

    let urlWhatsApp = `https://wa.me/51922201430?text=${textoMensaje}`;
    window.open(urlWhatsApp, "_blank");
});