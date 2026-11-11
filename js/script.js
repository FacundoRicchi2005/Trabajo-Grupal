let boton = document.getElementById("btnModo");

boton.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {
        boton.textContent = "modo oscuro🌙";
    } else {
        boton.textContent = "modo claro☀️";
    }
});
