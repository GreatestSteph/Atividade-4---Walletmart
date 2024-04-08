import Item from "../modelo/item";

export default class ItemCtrl {

    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nomeProd = dados.Nome_prod;
            const dataFab = dados.Data_fab;
            const dataVen = dados.Data_ven;
            const tipoProd = dados.Tipo_prod;
            const precoProd = dados.Preco_prod;
            const qtdeProd = dados.Qtde_prod;

            if (nomeProd && dataFab && dataVen && tipoProd && precoProd && qtdeProd >= 0) {
                const item = new Item(0, nomeProd, dataFab, dataVen, tipoProd, precoProd, qtdeProd);
                item.gravar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "codigoGerado": item.codigo,
                        "mensagem": "Item incluído com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao registrar o item: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, forneça os dados do item conforme a documentação da API!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método POST para cadastrar um item!"
            });
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');
        if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const codigo = dados.codigo;
            const nomeProd = dados.Nome_prod;
            const dataFab = dados.Data_fab;
            const dataVen = dados.Data_ven;
            const tipoProd = dados.Tipo_prod;
            const precoProd = dados.Preco_prod;
            const qtdeProd = dados.Qtde_prod;
            if (codigo && nomeProd && dataFab && dataVen && tipoProd && precoProd && qtdeProd >= 0) {
                const item = new Item(codigo, nomeProd, dataFab, dataVen, tipoProd, precoProd, qtdeProd);
                item.atualizar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Item atualizado com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao atualizar o item: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do item conforme a documentação da API!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize os métodos PUT ou PATCH para atualizar um item!"
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'DELETE' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const codigo = dados.codigo;
            if (codigo) {
                const item = new Item(codigo);
                item.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Item excluído com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao excluir o item: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe o código do item!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método DELETE para excluir um item!"
            });
        }
    }

    consultar(requisicao, resposta) {
        resposta.type('application/json');
        let termo = requisicao.params.termo;
        if (!termo) {
            termo = "";
        }
        if (requisicao.method === "GET") {
            const item = new Item();
            item.consultar(termo).then((listaItens) => {
                resposta.json(
                    {
                        status: true,
                        listaItens
                    });
            })
                .catch((erro) => {
                    resposta.json(
                        {
                            status: false,
                            mensagem: "Não foi possível obter os itens: " + erro.message
                        }
                    );
                });
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método GET para consultar itens!"
            });
        }
    }
}
