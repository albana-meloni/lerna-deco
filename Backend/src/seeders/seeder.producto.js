const Producto = require('../models/producto.model');
const sequelize = require('../config/database');

const productos = [
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

const seedProductos = async () => {
    try {
        await sequelize.authenticate();

        await Producto.bulkCreate(productos);

        console.log('Datos insertados correctamente');
    } catch (error) {
        console.error('Error al insertar los datos:', error.message);
    } finally {
        await sequelize.close();
    }
};

seedProductos();