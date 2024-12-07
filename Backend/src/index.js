const app = require('./app');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Configuración del middleware CORS
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/api', (req, res) => {
    res.json({ message: 'CORS configurado correctamente' });
});

app.listen(5000, () => console.log('Servidor en el puerto 5000'));