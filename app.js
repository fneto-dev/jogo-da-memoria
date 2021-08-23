document.querySelectorAll('.carta').forEach(carta => {
    carta.addEventListener("click", function (e) {
        carta.classList.toggle('carta-invertida');
    });    
})