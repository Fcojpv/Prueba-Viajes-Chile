
$(document).ready(function() {

$("#TituloQuienesSomos").on("click", function() {
  alert("Bienvenidos a Viajes Chile"); 
});
});

/* Tool tip  */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
