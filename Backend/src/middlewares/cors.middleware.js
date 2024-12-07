const cors = require('cors');

// Configuración de CORS
const corsOptions = {
  origin: 'http://127.0.0.1', // Reemplaza con el dominio de tu frontend si es diferente
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

module.exports = cors(corsOptions);
