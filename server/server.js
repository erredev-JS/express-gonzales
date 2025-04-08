const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Ruta absoluta a la carpeta dist 
const distPath = path.resolve(__dirname, '../client/dist');

// Servir archivos estáticos (JS, CSS, imágenes, etc.)
app.use(express.static(distPath));

// Cualquier otra ruta (por ejemplo: /about, /dashboard, etc.), mostrar index.html
app.use((req, res, next) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
  });
  

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
