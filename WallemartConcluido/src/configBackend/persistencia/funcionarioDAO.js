import Funcionario from "../modelo/funcionario.js"; 
import conectar from "./conexao.js";

export default class FuncionarioDAO {
    async gravar(funcionario) {
        if (funcionario instanceof Funcionario) {
            const sql = "INSERT INTO funcionario(Nome_func, Data_nas_func, Genero_func, EstadoCivil_func, RG_func, CEP_func, Telefone_func, Email_func, Cargo_func, Salario_func, Beneficios_func, Escolaridade_func) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const parametros = [funcionario.Nome_func, funcionario.Data_nas_func, funcionario.Genero_func, funcionario.EstadoCivil_func, funcionario.RG_func, funcionario.CEP_func, funcionario.Telefone_func, funcionario.Email_func, funcionario.Cargo_func, funcionario.Salario_func, funcionario.Beneficios_func, funcionario.Escolaridade_func];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            funcionario.id = retorno[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(funcionario) {
        if (funcionario instanceof Funcionario) {
            const sql = "UPDATE funcionario SET Nome_func = ?, Data_nas_func = ?, Genero_func = ?, EstadoCivil_func = ?, RG_func = ?, CEP_func = ?, Telefone_func = ?, Email_func = ?, Cargo_func = ?, Salario_func = ?, Beneficios_func = ?, Escolaridade_func = ? WHERE id = ?";
            const parametros = [funcionario.Nome_func, funcionario.Data_nas_func, funcionario.Genero_func, funcionario.EstadoCivil_func, funcionario.RG_func, funcionario.CEP_func, funcionario.Telefone_func, funcionario.Email_func, funcionario.Cargo_func, funcionario.Salario_func, funcionario.Beneficios_func, funcionario.Escolaridade_func, funcionario.id];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(funcionario) {
        if (funcionario instanceof Funcionario) {
            const sql = "DELETE FROM funcionario WHERE id = ?";
            const parametros = [funcionario.id];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar(parametroConsulta) {
        let sql = '';
        let parametros = [];
        // é um número inteiro?
        if (!isNaN(parseInt(parametroConsulta))) {
            // consultar pelo ID do funcionário
            sql = 'SELECT * FROM funcionario WHERE id = ? ORDER BY Nome_func';
            parametros = [parametroConsulta];
        } else {
            // consultar pelo nome do funcionário
            if (!parametroConsulta) {
                parametroConsulta = '';
            }
            sql = "SELECT * FROM funcionario WHERE Nome_func LIKE ?";
            parametros = ['%' + parametroConsulta + '%'];
        }
        const conexao = await conectar();
        const [registros, campos] = await conexao.execute(sql, parametros);
        let listaFuncionarios = [];
        for (const registro of registros) {
            const funcionario = new Funcionario(registro.id, registro.Nome_func, registro.Data_nas_func, registro.Genero_func, registro.EstadoCivil_func, registro.RG_func, registro.CEP_func, registro.Telefone_func, registro.Email_func, registro.Cargo_func, registro.Salario_func, registro.Beneficios_func, registro.Escolaridade_func);
            listaFuncionarios.push(funcionario);
        }
        return listaFuncionarios;
    }
}
