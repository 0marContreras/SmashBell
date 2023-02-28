export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for email and password.
    // Returns early if they are not found.
    if (!body.email || !body.password) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Email or password not found' })
    }
  
    // Hash the password entered by the user for comparison.
    const bcrypt = require('bcrypt');
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(body.password, saltRounds);
  
    // Connect to the database and perform a query.
    require('dotenv').config()
    const mysql = require('mysql2')
    const connection = mysql.createConnection(process.env.DATABASE_URL_N)
    console.log('Connected to PlanetScale!')
  
    connection.query('SELECT * FROM LegacyUsers WHERE email = ?',[`${body.email}`], function(err, results, fields) {
      if (err) {
        console.error(err);
        return res.status(500).json({ data: 'Internal server error' })
      } else {
        // Check if the user exists and the password matches.
        if (results.length > 0 && bcrypt.compareSync(body.password, results[0].password)) {
          console.log('Logeada mija')
          res.redirect(301, '/Home')
          
        } else {
          console.log('Algo anda mal con tus credenciales')
          res.redirect(301, '/login')
          
          return res.status(401).json({ data: 'Incorrect email or password' })
        }
      }
    })
  }
  