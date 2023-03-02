

export default function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log('body: ', body)

  

  // Guard clause checks for first and last name,
  // and returns early if they are not found
  if (!body.email || !body.password) {
    // Sends a HTTP bad request error code
    return res.status(400).json({ data: 'First or last name not found' })
  }

  // Found the name.
  // Sends a HTTP success code
  //res.status(200).json({ data: `${body.email} ${body.password}` })
  

  require('dotenv').config()
  const mysql = require('mysql2')
  const connection = mysql.createConnection(process.env.DATABASE_URL_N)
  console.log('Connected to PlanetScale!')

  connection.query('SELECT * FROM LegacyUsers WHERE email = ? AND password = ?',[`${body.email}`, `${body.password}`], function(err, results, fields) {
  if (err) {
  console.error(err);
  } else {

    if(results.length > 0){
      
      //Comprueba si el usuario existe en la base de datos
      console.log(results);
      console.log("Logeada mija")
      
      res.redirect(301, '/Home')
      res.status(200).json({ data: `${body.email} ${body.password}` })

    }else{

      //si no encontro nada no loguea
      console.log(results);
      console.log("Algo anda mal con tus credenciales")
      
  return;
  }
});

}

