let boton = document.getElementById("btnModo");

boton.addEventListener("click", function() {
    document.body.classList.toggle("modo-claro");

    if (document.body.classList.contains("modo-claro")) {
        boton.textContent = "modo oscuro🌙";
    } else {
        boton.textContent = "modo claro☀️";
    }
});

const hamburger =  document.getElementById('hamburger');
const navItem =  document.getElementById('nav-item');

hamburger.addEventListener('click', () => {
  navItem.classList.toggle('show');
});