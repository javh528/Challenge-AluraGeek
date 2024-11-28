document.addEventListener('DOMContentLoaded', () => {
    const imagenes = document.querySelectorAll('.Imagen_productos, .Imagen_IngresarProductos, .Imagen__Header__Home, .Imagen__Header__ingresar, .Imagen__Header__productos');

    imagenes.forEach((imagen) => {
        imagen.addEventListener('click', () => {
            if (imagen.classList.contains('Imagen_productos')) {
                window.location.href = 'productos.html'; // redirige a la página de productos
            } else if (imagen.classList.contains('Imagen_IngresarProductos')) {
                window.location.href = 'formulario.html'; // Redirige a la página de ingreso de productos
            } else if (imagen.classList.contains('Imagen__Header__Home')) {
                window.location.href = 'index.html'; // redirige a la página de productos
            } else if (imagen.classList.contains('Imagen__Header__ingresar')) {
                window.location.href = 'Formulario.html'; // Redirige a la página de ingreso de productos
            } else if (imagen.classList.contains('Imagen__Header__ingresar')) {
                window.location.href = 'Formulario.html'; // Redirige a la página de ingreso de productos
            } else if (imagen.classList.contains('Imagen__Header__productos')) {
                window.location.href = 'productos.html'; // Redirige a la página de ingreso de productos
            }
        });
    });
});

 // Seleccionamos todos los inputs de texto y numéricos
document.querySelectorAll('input[type="text"], input[type="number"]').forEach(input => {
    input.addEventListener('click', () => {
        // Al hacer clic, se borra el valor del input
        input.value = '';
    });
 });

 // Obtener el elemento de audio
 const audio = document.getElementById('backgroundMusic');
    /* audio.volume = 0.2; */
 // Reproducir la canción automáticamente
 window.addEventListener('load', () => {
     audio.play().catch(error => {
         console.log('Autoplay falló debido a restricciones del navegador:', error);
     });
 });

