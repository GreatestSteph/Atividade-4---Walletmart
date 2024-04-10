import itemclasse from "../modelo/item.js";

export default class ControleItem {
    
    async POST(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method !== 'POST') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize POST!'
            });
            return;
        }

        const extraidados = requisicao.body;
        const { Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod} = extraidados;
        if (Nome_prod && Data_fab && Data_ven && Tipo_prod && Preco_prod && Qtde_prod) {
            const item = new itemclasse(0, ...Object.values(extraidados));
            try {
                await item.gravar();
                resposta.json({
                    status: true,
                    mensagem: 'Item gravado com sucesso!',
                    id_item: item.id
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
        const extraidados = requisicao.body;
        const { id, Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod } = extraidados;
        if (id && Nome_prod && Data_fab && Data_ven && Tipo_prod && Preco_prod && Qtde_prod ) {
            const item = new itemclasse(id, ...Object.values(extraidados));
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
        const extraidados = requisicao.body;
        const { id } = extraidados;
        if (id) {
            const item = new itemclasse(id);
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
                mensagem: "O id deve ser informado!"
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
        const item = new itemclasse(0);
        try {
            const listaItens = await item.consultar();
            resposta.json(listaItens);
        } catch (erro) {
            resposta.json({
                status: false,
                mensagem: 'Não foi possível mostrar os itens! ' + erro.message
            });
        }
    }
}
