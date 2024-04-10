import { Router } from 'express';
import ControleFunc from '../controledeusuario/controlefuncionario.js';

const rotasdofuncionario = new Router();
const funcionariocontrole = new ControleFunc();


rotasdofuncionario.get('/', funcionariocontrole.GET).post('/', funcionariocontrole.POST).put('/', funcionariocontrole.PUTPATCH).patch('/', funcionariocontrole.PUTPATCH).delete('/', funcionariocontrole.DELETE);
export default rotasdofuncionario

//tudo ok por enquanto