const Producto = require('../models/producto.model');

// Obtener todos los productos
exports.getAllProductos = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }
};

// Obtener un producto por ID
exports.getProductoById = async (req, res) => {
    try {
        const producto = await Producto.findByPk(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el producto', error });
    }
};

// Crear un nuevo producto
exports.createProducto = async (req, res) => {
    try {
        const newProducto = await Producto.create(req.body);
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el producto', error });
    }
};

// Actualizar un producto
exports.updateProducto = async (req, res) => {
    try {
        const updated = await Producto.update(req.body, { where: { id: req.params.id } });
        if (!updated[0]) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
};

// Eliminar un producto
exports.deleteProducto = async (req, res) => {
    try {
        const deleted = await Producto.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
};
