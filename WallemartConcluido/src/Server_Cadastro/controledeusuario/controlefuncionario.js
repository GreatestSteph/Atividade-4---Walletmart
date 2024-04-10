import funcionarioclasse from "../modelo/funcionario.js";

export default class ControleFunc {
    
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
        const { Nome_func, Data_nas_func, Genero_func, EstadoCivil_func, RG_func, CEP_func, Telefone_func, Email_func, Cargo_func, Salario_func, Beneficios_func, Escolaridade_func} = extraidados;
        if (Nome_func && Data_nas_func && Genero_func && EstadoCivil_func && RG_func && CEP_func && Telefone_func && Email_func && Cargo_func && Salario_func && Beneficios_func && Escolaridade_func) {
            const funcionario = new funcionarioclasse(0, ...Object.values(extraidados));
            try {
                await funcionario.gravar();
                resposta.json({
                    status: true,
                    mensagem: 'Funcionário gravado com sucesso!',
                    id_funcionario: funcionario.id
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível registrar o funcionário! ' + erro.message
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
        const { id, Nome_func, Data_nas_func, Genero_func, EstadoCivil_func, RG_func, CEP_func, Telefone_func, Email_func, Cargo_func, Salario_func, Beneficios_func, Escolaridade_func} = extraidados;
        if (id && Nome_func && Data_nas_func && Genero_func && EstadoCivil_func && RG_func && CEP_func && Telefone_func && Email_func && Cargo_func && Salario_func && Beneficios_func && Escolaridade_func) {
            const funcionario = new funcionarioclasse(id, ...Object.values(extraidados));
            try {
                await funcionario.atualizar();
                resposta.json({
                    status: true,
                    mensagem: 'Funcionário atualizado com sucesso!'
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível atualizar o funcionário! ' + erro.message
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
            const funcionario = new funcionarioclasse(id);
            try {
                await funcionario.excluir();
                resposta.json({
                    status: true,
                    mensagem: 'Funcionário excluído com sucesso!'
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível excluir o funcionário! ' + erro.message
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
        const funcionario = new funcionarioclasse(0);
        try {
            const listaFuncionarios = await funcionario.consultar();
            resposta.json(listaFuncionarios);
        } catch (erro) {
            resposta.json({
                status: false,
                mensagem: 'Não foi possível mostrar os funcionários! ' + erro.message
            });
        }
    }
}
