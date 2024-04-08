const { Router } = require('express');
const ControleItem = require("../controle/itemCtrl.js");

const rotaItem = new Router();
const itemControle = new ControleItem();

rotaItem.get('/', itemControle.GET).post('/', itemControle.POST).put('/', itemControle.PUTPATCH).patch('/', itemControle.PUTPATCH).delete('/', itemControle.DELETE);

module.exports = rotaItem;
