const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'tecsup2022',
  database: 'ejercicios',
});

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const telefono = req.body.telefono;
  const direccion = req.body.direccion;

  db.query(
    "INSERT INTO subscritos (nombre, email, telefono, direccion) VALUES (?,?,?,?)",
    [nombre, email, telefono, direccion],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores enviados");
      }
    }
  );
});

app.get("/subscripcion", (req, res) => {
  db.query("SELECT * FROM subscritos", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server escuchando en el puerto: 3001");
});
