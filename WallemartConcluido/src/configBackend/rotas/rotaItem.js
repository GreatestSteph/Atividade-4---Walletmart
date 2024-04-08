import { Router } from "express";
import ItemCtrl from "../controle/itemCtrl";

const itemControle = new ItemCtrl();
const rotaItem = new Router();

rotaItem.get('/',itemControle.consultar)
.get('/:termo', itemControle.consultar)
.post('/',itemControle.gravar)
.patch('/',itemControle.atualizar)
.put('/',itemControle.atualizar)
.delete('/',itemControle.excluir);

export default rotaItem;