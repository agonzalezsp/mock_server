const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.get('/', function (req, res) {
  // aqui te pinto tu solicitud.
  console.log("Cabeceras",req.headers);
  console.log("Params",req.params);

  res.json({response: "aqui va la respuesta"})
})

app.listen(3000)