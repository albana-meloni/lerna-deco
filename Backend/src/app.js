const express = require('express');
const sequelize = require('./config/database');
const productoRoutes = require('./routes/producto.routes');
const corsMiddleware = require('./middlewares/cors.middleware');
const cors = require('cors');
const app = express();
require('dotenv').config();


app.use(express.json());

app.use('/api/productos', productoRoutes);
app.use(corsMiddleware);
app.use(cors());


sequelize.sync({ force: false })
    .then(() => {
        console.log('Base de datos sincronizada');
    })
    .catch(error => console.error('Error al sincronizar la base de datos:', error));



module.exports = app;
