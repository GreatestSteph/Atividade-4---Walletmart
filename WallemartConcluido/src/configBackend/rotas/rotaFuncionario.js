const { Router } = require('express');
const ControleFuncionario = require("../controle/funcCtrl")


const rotaFuncionario = new Router();
const funcionarioControle = new ControleFuncionario();


rotaFuncionario.get('/', funcionarioControle.GET).post('/', funcionarioControle.POST).put('/', funcionarioControle.PUTPATCH).patch('/', funcionarioControle.PUTPATCH).delete('/', funcionarioControle.DELETE);

module.exports = rotaFuncionario;
