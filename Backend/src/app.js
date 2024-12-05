const express = require('express');
const sequelize = require('./config/database');
const productoRoutes = require('./routes/producto.routes');
const app = express();
require('dotenv').config();


app.use(express.json());

app.use('/api/productos', productoRoutes);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(error => console.error('Error al sincronizar la base de datos:', error));

module.exports = app;
