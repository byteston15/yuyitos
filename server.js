const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const routerCategoria = require("./Routes/Categoria");
const routerCliente = require("./Routes/Cliente");
const routerRubro = require('./Routes/Rubro');

dotenv.config({path : './Config/config.env'});

//Instances
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());


 //Routes
app.use('/api/v1/yuyitos/', routerCategoria);
app.use('/api/v1/yuyitos/', routerCliente);
app.use('/api/v1/yuyitos/', routerRubro);

//Listening
app.listen(PORT,
     ()=> console.log(`We're running on http://localhost:${PORT}`.magenta));
