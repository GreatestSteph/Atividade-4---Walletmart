import { Router } from "express";
import FuncCtrl from "../controle/funcCtrl";

const funcionarioControle = new FuncCtrl();
const rotaFuncionario = new Router();

rotaFuncionario.get('/',funcionarioControle.consultar)
.get('/:termo', funcionarioControle.consultar)
.post('/',funcionarioControle.gravar)
.patch('/',funcionarioControle.atualizar)
.put('/',funcionarioControle.atualizar)
.delete('/',funcionarioControle.excluir);

export default rotaFuncionario;