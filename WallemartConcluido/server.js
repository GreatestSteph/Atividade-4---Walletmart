const express = require('express');
const rotaItem = require('./src/configBackend/rotas/rotaItem.js');
const rotaFuncionario = require('./src/configBackend/rotas/rotaFuncionario.js');

const app = express();

app.use('/itembackend', rotaItem);
app.use('/funcionariobackend', rotaFuncionario);

app.listen(3001, () => {
  console.log('Servidor Express está rodando na porta 3001');
});
