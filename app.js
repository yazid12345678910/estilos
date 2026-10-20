const boton = document.querySelector("#boton");
const saludo = document.querySelector("#saludo");

function saludar() {
    saludo.textContent = "¡Hola, mundo!";
}

boton.addEventListener("click", saludar);