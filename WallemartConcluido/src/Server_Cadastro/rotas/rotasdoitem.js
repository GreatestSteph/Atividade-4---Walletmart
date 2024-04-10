import { Router } from 'express';
import ControleItem from '../controledeusuario/controleitem.js';

const rotasdoitem = new Router();
const itemcontrole = new ControleItem();


rotasdoitem.get('/', itemcontrole.GET).post('/', itemcontrole.POST).put('/', itemcontrole.PUTPATCH).patch('/', itemcontrole.PUTPATCH).delete('/', itemcontrole.DELETE);
export default rotasdoitem

//tudo ok por enquanto