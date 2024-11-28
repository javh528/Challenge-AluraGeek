// Seleccionar el formulario y el contenedor de productos
const form = document.getElementById('formulario_Producto');

// Agregar el evento para manejar el envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const imagen = document.getElementById('imagen').value;

    // Crear un objeto con los datos del nuevo producto
    const producto = {
        id: Date.now(),  // Usamos la fecha y hora actual como un ID único
        nombre: nombre,
        precio: parseFloat(precio), // Aseguramos que el precio sea un número
        imagen: imagen
    };

    // Enviar el producto al servidor (suponiendo que estamos usando json-server)
    fetch('http://localhost:3001/productos', {  // Cambia la URL según tu configuración de servidor
        method: 'POST',  // Método POST para agregar el nuevo producto
        headers: {
            'Content-Type': 'application/json'  // Especificamos que estamos enviando JSON
        },
        body: JSON.stringify(producto)  // Convertir el objeto producto a JSON
    })
    .then(response => response.json())  // Convertir la respuesta en JSON
    .then(data => {
        alert('Producto agregado con éxito!');
        form.reset();  // Limpiar el formulario después de agregar el producto
    })
    .catch(error => {
        console.error('Error al agregar el producto:', error);
        alert('Hubo un error al agregar el producto.');
    });
});
