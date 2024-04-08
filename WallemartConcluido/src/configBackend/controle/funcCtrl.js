import Funcionario from "../modelo/funcionario";

export default class FuncCtrl {

    gravar(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'POST' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const nomeFunc = dados.Nome_func;
            const dataNasFunc = dados.Data_nas_func;
            const generoFunc = dados.Genero_func;
            const estadoCivilFunc = dados.EstadoCivil_func;
            const rgFunc = dados.RG_func;
            const cepFunc = dados.CEP_func;
            const telefoneFunc = dados.Telefone_func;
            const emailFunc = dados.Email_func;
            const cargoFunc = dados.Cargo_func;
            const salarioFunc = dados.Salario_func;
            const beneficiosFunc = dados.Beneficios_func;
            const escolaridadeFunc = dados.Escolaridade_func;

            if (nomeFunc && dataNasFunc && generoFunc && estadoCivilFunc && rgFunc && cepFunc && telefoneFunc && emailFunc && cargoFunc && salarioFunc && beneficiosFunc && escolaridadeFunc) {
                const funcionario = new Funcionario(0, nomeFunc, dataNasFunc, generoFunc, estadoCivilFunc, rgFunc, cepFunc, telefoneFunc, emailFunc, cargoFunc, salarioFunc, beneficiosFunc, escolaridadeFunc);
                funcionario.gravar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "codigoGerado": funcionario.codigo,
                        "mensagem": "Funcionário incluído com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao registrar o funcionário: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, forneça os dados do funcionário conforme a documentação da API!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método POST para cadastrar um funcionário!"
            });
        }
    }

    atualizar(requisicao, resposta) {
        resposta.type('application/json');
        if ((requisicao.method === 'PUT' || requisicao.method === 'PATCH') && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const codigo = dados.codigo;
            const nomeFunc = dados.Nome_func;
            const dataNasFunc = dados.Data_nas_func;
            const generoFunc = dados.Genero_func;
            const estadoCivilFunc = dados.EstadoCivil_func;
            const rgFunc = dados.RG_func;
            const cepFunc = dados.CEP_func;
            const telefoneFunc = dados.Telefone_func;
            const emailFunc = dados.Email_func;
            const cargoFunc = dados.Cargo_func;
            const salarioFunc = dados.Salario_func;
            const beneficiosFunc = dados.Beneficios_func;
            const escolaridadeFunc = dados.Escolaridade_func;
            
            if (codigo && nomeFunc && dataNasFunc && generoFunc && estadoCivilFunc && rgFunc && cepFunc && telefoneFunc && emailFunc && cargoFunc && salarioFunc && beneficiosFunc && escolaridadeFunc) {
                const funcionario = new Funcionario(codigo, nomeFunc, dataNasFunc, generoFunc, estadoCivilFunc, rgFunc, cepFunc, telefoneFunc, emailFunc, cargoFunc, salarioFunc, beneficiosFunc, escolaridadeFunc);
                funcionario.atualizar().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Funcionário atualizado com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao atualizar o funcionário: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe todos os dados do funcionário conforme a documentação da API!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize os métodos PUT ou PATCH para atualizar um funcionário!"
            });
        }
    }

    excluir(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method === 'DELETE' && requisicao.is('application/json')) {
            const dados = requisicao.body;
            const codigo = dados.codigo;
            if (codigo) {
                const funcionario = new Funcionario(codigo);
                funcionario.excluir().then(() => {
                    resposta.status(200).json({
                        "status": true,
                        "mensagem": "Funcionário excluído com sucesso!"
                    });
                })
                    .catch((erro) => {
                        resposta.status(500).json({
                            "status": false,
                            "mensagem": "Erro ao excluir o funcionário: " + erro.message
                        });
                    });
            }
            else {
                resposta.status(400).json({
                    "status": false,
                    "mensagem": "Por favor, informe o código do funcionário!"
                });
            }
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método DELETE para excluir um funcionário!"
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
            const funcionario = new Funcionario();
            funcionario.consultar(termo).then((listaFuncionarios) => {
                resposta.json(
                    {
                        status: true,
                        listaFuncionarios
                    });
            })
                .catch((erro) => {
                    resposta.json(
                        {
                            status: false,
                            mensagem: "Não foi possível obter os funcionários: " + erro.message
                        }
                    );
                });
        }
        else {
            resposta.status(400).json({
                "status": false,
                "mensagem": "Por favor, utilize o método GET para consultar funcionários!"
            });
        }
    }
}
