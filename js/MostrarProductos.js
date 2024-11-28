
// Seleccionar el contenedor de productos
const listaProductos = document.querySelector('.Productos__Container');

// Ruta al archivo JSON (ajusta la ruta según sea necesario)
const urlJSON = './db.json';

// Cargar productos desde el archivo JSON
fetch(urlJSON)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then((data) => {
        // Iterar sobre los productos y agregarlos al DOM
        data.productos.forEach((producto) => {
            const item = document.createElement('li');
            item.classList.add('producto');
            item.innerHTML = `<div class ="img_container">
                            <img src ="${producto.imagen}" alt="${producto.nombre}"
                        </div>
                        <div clas = "Producto__Container__Info">
                            <p>${producto.nombre}</p>
                            <div class ="Producto__Container__value">
                                <p>${producto.precio}</p>
                                <button class="botton_eliminar" data-id="${producto.id}">
                                    <img class ="Imagen__ELiminar" src="./Icono/Eliminar.png" alt="Eliminar">
                                </button>
                            </div>
                        </div>
    `;
            listaProductos.appendChild(item);
        });
    })

