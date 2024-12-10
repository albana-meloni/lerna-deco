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





function crearHTMLProducto(id, img, descripcion, nombre, precio) {
	let card = `
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
	return card;
}

function mostrarProducto(producto, div) {
	let productoCard = crearHTMLProducto(
		producto.id,
		producto.imagen,
		producto.descripcion,
		producto.nombre,
		producto.precio
	);
	div.innerHTML += productoCard;
}

const containerProductos = document.getElementById("container-productos");
const productosDestacados = document.getElementById("productos-populares");

if (productosDestacados === null) {
	productos.forEach((producto) => {
		mostrarProducto(producto, containerProductos);
	});
} else if (containerProductos === null) {
	productos.splice(3, productos.length - 4).forEach((producto) => {
		mostrarProducto(producto, productosDestacados);
	});
}

/* let containers = document.getElementById("container-productos").children;

for (div of containers) {
	console.log(div.children[0]);
} */

function generarTarjetasDeProductos(productos) {
	const contenedor = document.getElementById('container-productos');
	if (!contenedor) return;
	contenedor.innerHTML = '';

	productos.forEach((producto) => {
		const card = `
				<div class="card m-3 h-100" style="width: 25rem;" data-id="${producto.id}">
					<a href="producto.html?id=${producto.id}">
						<img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
						<div class="card-body">
							<h1 class="card-title text-start text-dark-emphasis p-1 fw-bolder">${producto.nombre}</h1>
							<p class="card-text text-start p-1">${producto.descripcion}</p>
							<div class="row row-cols-2 h-100">
								<p class="card-text text-center mb-0 fs-2 fw-bold">$${producto.precio}</p>
								<button type="button" class="btn btn-dark d-block m-auto rounded-4 px-4 py-2">Añadir al carrito</button>
							</div>
						</div>
					</a>
				</div>
			`;
		contenedor.innerHTML += card;
	});
}


function obtenerProductoID() {
	const params = new URLSearchParams(window.location.search);
	return parseInt(params.get("id"), 10);
}

function mostrarProducto(producto) {
	const contenedor = document.getElementById('product-detail');
	if (!contenedor) return;
	contenedor.innerHTML = `
			<h1>${producto.nombre}</h1>
			<img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
			<p>${producto.descripcion}</p>
			<p>Precio: $${producto.precio}</p>
			<button type="button" class="btn btn-dark">Añadir al carrito</button>
		`;
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.getElementById('container-productos')) {
		generarTarjetasDeProductos(productos);
	}

	if (document.getElementById('product-detail')) {
		const productoID = obtenerProductoID();
		const producto = productos.find(p => p.id === productoID);
		if (producto) {
			mostrarProducto(producto);
		} else {
			document.getElementById('product-detail').innerHTML = '<p>Producto no encontrado.</p>';
		}
	}
});