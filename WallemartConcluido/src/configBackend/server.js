const express = require('express');
const app = express();

const rotaItem = require("./rotas/rotaItem.js");
const rotaFuncionario = require("./rotas/rotaFuncionario.js");

app.use('/itembackend', rotaItem);
app.use('/funcionariobackend', rotaFuncionario); 

const PORT = process.env.PORT || 3001; 

app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
});
