async function listarProductos() {
    try {
        const conexion = await fetch("http://localhost:3001/productos"); // URL del servidor
        if (!conexion.ok) throw new Error("Error al listar productos"); // Manejo de errores
        const conexionConvertida = await conexion.json(); // Espera la conversión
        return conexionConvertida;
    } catch (error) {
        console.error("Error en listarProductos:", error);
        return [];
    }
}

async function cargarProducto(nombre, precio, imagen) { // muestra los productos cargados en la pagina
    try {
        const conexion = await fetch("http://localhost:3001/productos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({nombre, precio, imagen }),
        });

        if (!conexion.ok) throw new Error("Error al enviar producto"); // Manejo de errores
        console.log("Producto agragado con exito");
        const conexionConvertida = await conexion.json(); // Espera la conversión
        return conexionConvertida;
    } catch (error) {
        console.error("Error en enviarProducto:", error);
        return null;
    }
}

async function eliminarProducto () {
    const response = await fetch(`http://localhost:3001/productos/${id}`, {
        method: 'DELETE'
    });

    if (!response.ok) {
        throw new Error('Error al eliminar el producto');
    }
};

export const conexionAPI = {
    listarProductos,
    cargarProducto,
    eliminarProducto
};