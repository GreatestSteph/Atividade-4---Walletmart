import funcionarioclasse from '../modelo/funcionario.js'; //ok //usa a classe de objetos
import conecta from "./conectar.js"; //ok

export default class funcionario_dao {
    async gravar(funcionario) {
        if (funcionario instanceof funcionarioclasse) {
            const conexao = await conecta();
            const sql = "INSERT INTO funcionario (Nome_func, Data_nas_func, Genero_func, EstadoCivil_func, RG_func, CEP_func, Telefone_func, Email_func, Cargo_func, Salario_func, Beneficios_func, Escolaridade_func) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const parametros = [funcionario.Nome_func, funcionario.Data_nas_func, funcionario.Genero_func, funcionario.EstadoCivil_func, funcionario.RG_func, funcionario.CEP_func, funcionario.Telefone_func, funcionario.Email_func, funcionario.Cargo_func, funcionario.Salario_func, funcionario.Beneficios_func, funcionario.Escolaridade_func];
            const resultado = await conexao.query(sql, parametros);
            funcionario.id = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async atualizar(funcionario) {
        if (funcionario instanceof funcionarioclasse) {
            const conexao = await conecta();
            const sql = "UPDATE funcionario SET Nome_func = ?, Data_nas_func = ?, Genero_func = ?, EstadoCivil_func = ?, RG_func = ?, CEP_func = ?, Telefone_func = ?, Email_func = ?, Cargo_func = ?, Salario_func = ?, Beneficios_func = ?, Escolaridade_func = ? WHERE id = ?";
            const parametros = [funcionario.Nome_func, funcionario.Data_nas_func, funcionario.Genero_func, funcionario.EstadoCivil_func, funcionario.RG_func, funcionario.CEP_func, funcionario.Telefone_func, funcionario.Email_func, funcionario.Cargo_func, funcionario.Salario_func, funcionario.Beneficios_func, funcionario.Escolaridade_func, funcionario.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }    

    async excluir(funcionario) {
        if (funcionario instanceof funcionarioclasse) {
            const conexao = await conecta();
            const sql = "DELETE FROM funcionario WHERE id = ?";
            const parametros = [funcionario.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar() {
        let listaFuncionarios = [];
        const conexao = await conecta();
        const sql = 'SELECT * FROM funcionario ORDER BY Nome_func';
        const [rows, fields] = await conexao.query(sql);
    
        for (const registro of rows) {
            const funcionario = new funcionarioclasse(registro.id, registro.Nome_func, registro.Data_nas_func, registro.Genero_func, registro.EstadoCivil_func, registro.RG_func, registro.CEP_func, registro.Telefone_func, registro.Email_func, registro.Cargo_func, registro.Salario_func, registro.Beneficios_func, registro.Escolaridade_func);
            listaFuncionarios.push(funcionario);
        }
        return listaFuncionarios;
    }    
}
