
function abrirFormulario(id) {
    let formulario = document.getElementById(id);
    if (formulario) {
        formulario.style.display = "block";
    }
}
function cerrarFormulario() {
    document.getElementById("formCurso1").style.display = "none";  // Oculta el formulario
}
