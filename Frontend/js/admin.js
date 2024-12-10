let productos = [
	{
		id: 1,
		nombre: "Sofá Modular",
		descripcion:
			"Sofá modular de 3 piezas, tapizado en tela gris y con cojines removibles.",
		precio: 10500,
		categoria: "sofás",
		imagen: "../img/productos/sofa-modular.jpg",
	},
	{
		id: 2,
		nombre: "Sillón Reclinable",
		descripcion:
			"Sillón reclinable con tapizado de cuero sintético y mecanismo de inclinación manual.",
		precio: 7500,
		categoria: "sillones",
		imagen: "../img/productos/sillon-reclinable.jpg",
	},
	{
		id: 3,
		nombre: "Mesa de Comedor Rústica",
		descripcion:
			"Mesa de madera de roble, con capacidad para 6 personas, estilo rústico y acabados naturales.",
		precio: 12500,
		categoria: "mesas",
		imagen: "../img/productos/mesa-comedor-rustica.jpg",
	},
	{
		id: 4,
		nombre: "Mesa de Centro",
		descripcion:
			"Mesa de centro con estructura metálica y superficie de cristal templado.",
		precio: 2900,
		categoria: "mesas",
		imagen: "../img/productos/mesa-centro.jpg",
	},
	{
		id: 5,
		nombre: "Silla de Oficina Ergonómica",
		descripcion:
			"Silla de oficina con soporte lumbar ajustable, asiento acolchado y ruedas de alta resistencia.",
		precio: 3200,
		categoria: "sillas",
		imagen: "../img/productos/silla-oficina-ergonomica.jpg",
	},
	{
		id: 6,
		nombre: "Silla de Comedor Tapizada",
		descripcion:
			"Silla tapizada en tela suave con respaldo curvado para mayor comodidad.",
		precio: 1800,
		categoria: "sillas",
		imagen: "../img/productos/silla-comedor-tapizada.jpg",
	},
	{
		id: 7,
		nombre: "Sofá Seccional",
		descripcion:
			"Sofá seccional en forma de L, con espacio para hasta 5 personas y tapizado en color azul oscuro.",
		precio: 14800,
		categoria: "sofás",
		imagen: "../img/productos/sofa-seccional.jpg",
	},
	{
		id: 8,
		nombre: "Sillón Clásico",
		descripcion:
			"Sillón de diseño clásico con estructura de madera y tapizado en terciopelo verde.",
		precio: 6700,
		categoria: "sillones",
		imagen: "../img/productos/sillon-clasico.jpg",
	},
];


const tabla = document.getElementById("tabla-productos");

productos.forEach((producto) => {
    const fila = `
        <tr>
            <th scope="row">${producto.id}</th>
            <th>${producto.nombre}</th>
            <th>${producto.precio}</th>
            <th>${producto.descripcion}</th>
            <th>${producto.imagen}</th>
            <th>
                <button class="btn btn-secondary">Modificar</button>
                <button class="btn btn-danger">Eliminar</button>
            </th>
        </tr>
    `;
    tabla.innerHTML += fila;
});

// Función para renderizar la tabla
function renderizarTabla() {
	tabla.innerHTML = ""; // Limpiar tabla antes de renderizar

	productos.forEach((producto) => {
		const fila = `
            <tr data-id="${producto.id}">
                <th scope="row">${producto.id}</th>
                <th>${producto.nombre}</th>
                <th>${producto.precio}</th>
                <th>${producto.descripcion}</th>
                <th>${producto.imagen}</th>
                <th>
                    <button class="btn btn-secondary">Modificar</button>
                    <button class="btn btn-danger btn-eliminar">Eliminar</button>
                </th>
            </tr>
        `;
		tabla.innerHTML += fila;
	});

	// Agregar eventos a los botones de eliminar
	document.querySelectorAll(".btn-eliminar").forEach((boton) => {
		boton.addEventListener("click", eliminarProducto);
	});
}

// Función para eliminar un producto
function eliminarProducto(event) {
	// Obtener el ID del producto a eliminar
	const fila = event.target.closest("tr");
	const idProducto = parseInt(fila.dataset.id, 10);

	// Eliminar el producto del array
	productos = productos.filter((producto) => producto.id !== idProducto);

	// Renderizar la tabla nuevamente
	renderizarTabla();
}

// Renderizar la tabla inicialmente
renderizarTabla();


// Función para renderizar la tabla
function renderizarTabla() {
	tabla.innerHTML = ""; // Limpiar tabla antes de renderizar

	productos.forEach((producto) => {
		const fila = `
            <tr data-id="${producto.id}">
                <th scope="row">${producto.id}</th>
                <th>${producto.nombre}</th>
                <th>${producto.precio}</th>
                <th>${producto.descripcion}</th>
                <th>${producto.imagen}</th>
                <th>
                    <button class="btn btn-secondary btn-modificar">Modificar</button>
                    <button class="btn btn-danger btn-eliminar">Eliminar</button>
                </th>
            </tr>
        `;
		tabla.innerHTML += fila;
	});

	// Agregar eventos a los botones de eliminar y modificar
	document.querySelectorAll(".btn-eliminar").forEach((boton) => {
		boton.addEventListener("click", eliminarProducto);
	});

	document.querySelectorAll(".btn-modificar").forEach((boton) => {
		boton.addEventListener("click", modificarProducto);
	});
}

// Función para modificar un producto
function modificarProducto(event) {
	// Obtener el ID del producto a modificar
	const fila = event.target.closest("tr");
	const idProducto = parseInt(fila.dataset.id, 10);
	const producto = productos.find((p) => p.id === idProducto);

	if (!producto) return;

	// Mostrar un prompt para modificar los datos (puedes usar un modal si prefieres)
	const nuevoNombre = prompt("Ingresa el nuevo nombre:", producto.nombre) || producto.nombre;
	const nuevoPrecio = parseFloat(prompt("Ingresa el nuevo precio:", producto.precio)) || producto.precio;
	const nuevaDescripcion = prompt("Ingresa la nueva descripción:", producto.descripcion) || producto.descripcion;
	const nuevaImagen = prompt("Ingresa la nueva URL de la imagen:", producto.imagen) || producto.imagen;

	// Actualizar el producto en el array
	producto.nombre = nuevoNombre;
	producto.precio = nuevoPrecio;
	producto.descripcion = nuevaDescripcion;
	producto.imagen = nuevaImagen;

	// Renderizar la tabla nuevamente
	renderizarTabla();
}

// Renderizar la tabla inicialmente
renderizarTabla();






