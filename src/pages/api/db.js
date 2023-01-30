const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Conexión con la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'app_project'
});

// Ruta que se activa después de iniciar sesión con Google
router.post('/login', (req, res) => {
  const { user } = req.body;
  // Guarda la información del usuario en la base de datos
  connection.query(
    'INSERT INTO users (username, Email, active) VALUES (?, ?, 1)',
    {
      name: user.name,
      email: user.email
    },
    (error, results) => {
      if (error) throw error;
      res.send('Usuario guardado con éxito.');
    }
  );
});

module.exports = router;
