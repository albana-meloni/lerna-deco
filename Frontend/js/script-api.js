const urlProductos = 'http://localhost:3000/api/productos'; // Endpoint del backend
const contenedorProductos = document.getElementById('container-productos'); // Div del HTML donde se insertan los productos

// Función para crear el HTML de un producto
function crearHTMLProducto(id, img, descripcion, nombre, precio) {
    return `
    <div class="col-sm-3">
        <div class="card text-center h-100">
            <button type="submit" name="id" value="${id}">
                <img src="${img}" class="card-img-top" alt="${descripcion}">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">$${precio}</p>
                </div>
            </button>
        </div>
    </div>
    `;
}

// Función para mostrar un producto en el contenedor
function mostrarProducto(producto) {
    const productoCard = crearHTMLProducto(
        producto.id,
        producto.imagen,
        producto.descripcion,
        producto.nombre,
        producto.precio
    );
    div.innerHTML += productoCard; // Agrega el producto al contenedor
}

// Función para obtener los productos del backend y mostrarlos
async function cargarProductos() {
    try {
        const response = await fetch(urlProductos); // Llamada al backend
        console.log('Estado de la respuesta:', response.status);
        if (!response.ok) {
            throw new Error(`Error al obtener los productos: ${response.statusText}`);
        }

        const productos = await response.json(); // Convierte la respuesta a JSON
        console.log('Productos obtenidos:', productos);
        productos.forEach(mostrarProducto); // Muestra cada producto en el HTML
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada. Ejecutando cargarProductos...');
    cargarProductos();
});

