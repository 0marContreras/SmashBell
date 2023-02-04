const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');

const app = express();
app.use(bodyParser.json());

require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL_N)
console.log('Connected to PlanetScale!')
connection.end()



app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  connection.query(
    'INSERT INTO LegacyUsers (username, email, password) VALUES (?, ?, ?)',
    [username, email, password],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: 'An error occurred while registering the user.' });
      } else {
        res.status(200).json({ message: 'User registered successfully.' });
      }
    }
  );
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  connection.query(
    'SELECT * FROM LegacyUsers WHERE username = ? AND password = ?',
    [username, password],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: 'An error occurred while logging in the user.' });
      } else if (results.length === 0) {
        res.status(401).json({ message: 'Invalid credentials.' });
      } else {
        const user = results[0];
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'User logged in successfully.', token });
      }
    }
  );
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
