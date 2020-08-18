const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);



/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros nomeados enviados na rota apóis o "?" (Filtros, paginação).
 * Route Params: Parâmetros utilziados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */