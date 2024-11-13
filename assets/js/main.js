/* Tool tip  */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// 
$(document).ready(function() {

// evento "Quienes Somos"
$("#TituloQuienesSomos").on("click", function() {
  alert("Hola ! Bienvenid@ a Viajes Chile !");
});

  });
