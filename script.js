// INICIALIZAR POPOVERS

const elementosPopover = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
);

elementosPopover.forEach(function (elemento) {
    new bootstrap.Popover(elemento);
});


// INICIALIZAR TOOLTIPS

const elementosTooltip = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);

elementosTooltip.forEach(function (elemento) {
    new bootstrap.Tooltip(elemento);
});


// BOTÓN INTERACTIVO

const botonMensaje = document.getElementById("btnMensaje");

const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", function () {

    mensaje.textContent = "¡Mi plan favorito siempre será dormir! 😴";

});


// MENSAJE EN CONSOLA

console.log("La página de Belem se ha cargado correctamente.");