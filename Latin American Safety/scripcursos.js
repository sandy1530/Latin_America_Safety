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
