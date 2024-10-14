document.getElementById('toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    menu.classList.toggle('active');
    overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';

    // Bloquear o permitir el scroll
    document.body.classList.toggle('no-scroll', menu.classList.contains('active'));
});

// Cerrar el menú al hacer clic en la capa semitransparente
overlay.addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
    overlay.style.display = 'none';
    document.body.classList.remove('no-scroll');
});

window.addEventListener('scroll', function() {
    const toggle = document.getElementById('toggle');
    if (window.scrollY === 0) {
        toggle.style.visibility = 'visible'; // Mostrar si está en la parte superior
    } else {
        toggle.style.visibility = 'hidden'; // Ocultar si se desplaza
    }
});