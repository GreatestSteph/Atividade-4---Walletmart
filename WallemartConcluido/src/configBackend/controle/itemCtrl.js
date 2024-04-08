const Item = require("../modelo/item.js");

class ControleItem {
    
    async POST(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method !== 'POST') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize POST!'
            });
            return;
        }

        const dados = requisicao.body;
        const Nome_prod = dados.Nome_prod;
        const Data_fab = dados.Data_fab;
        const Data_ven = dados.Data_ven;
        const Tipo_prod = dados.Tipo_prod;
        const Preco_prod = dados.Preco_prod;
        const Qtde_prod = dados.Qtde_prod;

        if (Nome_prod && Data_fab && Data_ven && Tipo_prod && Preco_prod && Qtde_prod >= 0) {
            const item = new Item(0, Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod);
            try {
                await item.gravar();
                resposta.json({
                    status: true,
                    mensagem: 'Item gravado com sucesso!',
                    idGerado: item.id
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível registrar o item! ' + erro.message
                });
            }
        } else {
            resposta.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }
    

    async PUTPATCH(requisicao, resposta) {
        resposta.type('application/json');

        if (requisicao.method !== 'PUT' && requisicao.method !== 'PATCH') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método PUT ou PATCH!'
            });
            return;
        }
        const dados = requisicao.body;
        const { id, Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod } = dados;
        if (id && Nome_prod && Data_fab && Data_ven && Tipo_prod && Preco_prod && Qtde_prod >= 0) {
            const item = new Item(id, Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod);
            try {
                await item.atualizar();
                resposta.json({
                    status: true,
                    mensagem: 'Item atualizado com sucesso!'
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível atualizar o item! ' + erro.message
                });
            }
        } else {
            resposta.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }


    async DELETE(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method !== 'DELETE') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método DELETE!'
            });
            return;
        }
        const dados = requisicao.body;
        const { id } = dados;
        if (id) {
            const item = new Item(id);
            try {
                await item.excluir();
                resposta.json({
                    status: true,
                    mensagem: 'Item excluído com sucesso!'
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível excluir o item! ' + erro.message
                });
            }
        } else {
            resposta.json({
                status: false,
                mensagem: "O código deve ser informado!"
            });
        }
    }


    async GET(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method !== 'GET') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método GET!'
            });
            return;
        }
        let termo = requisicao.params.termo;
        if (!termo) {
            termo = "";
        }
        const item = new Item();
        try {
            const listaItens = await item.consultar(termo);
            resposta.json(listaItens);
        } catch (erro) {
            resposta.json({
                status: false,
                mensagem: 'Não foi possível mostrar os itens! ' + erro.message
            });
        }
    }
}

module.exports = ControleItem;
