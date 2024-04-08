import Item from "../modelo/item.js"; 
import conectar from "./conexao.js";

export default class ItemDAO {
    async gravar(item) {
        if (item instanceof Item) {
            const sql = "INSERT INTO item(Nome_prod, Data_fab, Data_ven, Tipo_prod, Preco_prod, Qtde_prod) VALUES (?, ?, ?, ?, ?, ?)";
            const parametros = [item.Nome_prod, item.Data_fab, item.Data_ven, item.Tipo_prod, item.Preco_prod, item.Qtde_prod];
            const conexao = await conectar();
            const retorno = await conexao.execute(sql, parametros);
            item.id = retorno[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(item) {
        if (item instanceof Item) {
            const sql = "UPDATE item SET Nome_prod = ?, Data_fab = ?, Data_ven = ?, Tipo_prod = ?, Preco_prod = ?, Qtde_prod = ? WHERE id = ?";
            const parametros = [item.Nome_prod, item.Data_fab, item.Data_ven, item.Tipo_prod, item.Preco_prod, item.Qtde_prod, item.id];
            const conexao = await conectar();
            await conexao.execute(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(item) {
        if (item instanceof Item) {
            const sql = "DELETE FROM item WHERE id = ?";
            const parametros = [item.id];
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
            // consultar pelo ID do item
            sql = 'SELECT * FROM item WHERE id = ? ORDER BY Nome_prod';
            parametros = [parametroConsulta];
        } else {
            // consultar pelo nome do produto
            if (!parametroConsulta) {
                parametroConsulta = '';
            }
            sql = "SELECT * FROM item WHERE Nome_prod LIKE ?";
            parametros = ['%' + parametroConsulta + '%'];
        }
        const conexao = await conectar();
        const [registros, campos] = await conexao.execute(sql, parametros);
        let listaItens = [];
        for (const registro of registros) {
            const item = new Item(registro.id, registro.Nome_prod, registro.Data_fab, registro.Data_ven, registro.Tipo_prod, registro.Preco_prod, registro.Qtde_prod);
            listaItens.push(item);
        }
        return listaItens;
    }
}
