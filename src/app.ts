import express, { Request, Response } from 'express';
const app = express();
// database connections
import mysql from "mysql2";
// Create a connection pool
// const pool = mysql.createPool({
//   host: "",
//   user: "admin",
//   password: '',
//   database: "lersha_dev",
//   port:3306
// });

// Check the database connection
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }

//   console.log('Connected to the database!');
  
//   // Release the connection
//   connection.release();
// });
let query=""
// Close the connection pool after 5 seconds

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('<div style=""> <h1> HELLO FIRAOL WELL </br> CHANGES  MADE PLEASE CHECK</br> COME TO THE TEST NODE </h1></div>');
});

// some more stuff

const APP_PORT = 2007;
app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
