document.getElementById('btn-menu').addEventListener('click', () => {
    var menu = document.querySelector('.container-object-lateral');

    if (menu) {
        menu.classList.toggle('active'); // Alterna la clase
    }
});


